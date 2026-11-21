"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  behavior: string;
  site: string;
  clinical: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: [string, string][];
  pitfalls: string[];
};
const items: Item[] = [
  {
    name: "Biliary intraepithelial neoplasia (BilIN)",
    group: "Precursor",
    behavior: "Non-invasive; microscopic precursor",
    site: "Gallbladder and large intrahepatic / extrahepatic bile ducts",
    clinical: [
      "Usually microscopic and incidentally identified in resection specimens.",
      "Associated settings include cholelithiasis, primary sclerosing cholangitis, choledochal cyst, and pancreaticobiliary maljunction.",
    ],
    criteria: [
      "Microscopic, flat or micropapillary epithelial neoplasm confined to the biliary lining.",
      "Grade as low-grade or high-grade based on the highest degree of cytoarchitectural atypia.",
      "High-grade BilIN is carcinoma in situ (pTis).",
    ],
    morphology: [
      "Low-grade: predominantly flat epithelium with mild atypia, nuclear pseudostratification, hyperchromasia, and increased N:C ratio.",
      "Low-grade lesions generally retain basal polarity; mitoses are rare.",
      "High-grade: complex micropapillary or papillary architecture, loss of polarity, marked nuclear atypia, and frequent mitoses.",
      "High-grade lesions may extend into Rokitansky–Aschoff sinuses and mimic invasion.",
      "Biliary, intestinal, and gastric phenotypes may occur; phenotype does not reliably predict the associated invasive carcinoma.",
    ],
    ihc: [
      "Aberrant p53 overexpression may support BilIN over reactive atypia but is not sufficiently reliable as a stand-alone discriminator.",
      "MUC5AC expression may increase with dysplasia but has substantial case-to-case variability.",
      "S100 may be increased in high-grade BilIN and can be used as an adjunct.",
    ],
    molecular: [
      "No clinically relevant molecular test is established for routine diagnosis.",
    ],
    differential: [
      [
        "Reactive epithelial atypia",
        "Usually shows gradual transition from normal to reactive epithelium; BilIN is more basophilic, with intercellular clefts and more conspicuous cytoarchitectural atypia.",
      ],
      [
        "Invasive adenocarcinoma",
        "BilIN remains confined to the epithelium; look for destructive stromal infiltration, irregular glands, desmoplasia, or isolated infiltrating cells.",
      ],
    ],
    pitfalls: [
      "High-grade BilIN warrants extensive sampling to exclude an occult invasive component.",
      "Rokitansky–Aschoff sinus involvement can mimic invasion; assess the preserved sinus architecture.",
    ],
  },
  {
    name: "Intraductal papillary neoplasm of the bile ducts (IPNB)",
    group: "Precursor",
    behavior: "Non-invasive precursor; invasion is common at presentation",
    site: "Extrahepatic and large intrahepatic bile ducts; intraluminal growth",
    clinical: [
      "Typically adults aged 42–80 years; slight male predominance.",
      "May present with intermittent abdominal pain, jaundice, or cholangitis.",
      "Risk settings include primary sclerosing cholangitis, hepatolithiasis, liver-fluke infection, and pancreaticobiliary maljunction.",
    ],
    criteria: [
      "Grossly visible intraluminal papillary, villous, or polypoid neoplasm with fibrovascular cores.",
      "Neoplastic columnar epithelium; mucin production is variable.",
      "Classify as low-grade or high-grade according to the highest degree of cytoarchitectural atypia.",
      "Exclude intraductal oncocytic papillary neoplasm and intraductal tubulopapillary neoplasm, now separate entities.",
    ],
    morphology: [
      "Fine fibrovascular cores are lined by neoplastic cuboidal or columnar epithelium; tubular/glandular components may coexist.",
      "Three epithelial differentiation patterns are recognized: gastric, intestinal, and pancreatobiliary.",
      "Intestinal type often has villous architecture and abundant mucin; pancreatobiliary type commonly shows complex papillae and high-grade atypia.",
      "Type 1 resembles pancreatic intraductal papillary mucinous neoplasm; type 2 is more complex, irregular, and commonly high-grade.",
      "Approximately 40–80% have associated invasive carcinoma at presentation; search carefully for tubular or colloid carcinoma.",
    ],
    ihc: [
      "MUC5AC and MUC6 support gastric differentiation.",
      "MUC2 and CDX2 support intestinal differentiation.",
      "MUC1 is commonly expressed in pancreatobiliary-type epithelium.",
    ],
    molecular: [
      "KRAS, TP53, and CDKN2A/p16 alterations occur during progression but are not required for diagnosis.",
      "GNAS mutations occur in a subset, particularly intestinal-type lesions with villous architecture and mucin hypersecretion.",
      "RNF43 alterations are more prevalent in intestinal-type IPNB; molecular testing is not routinely required for diagnosis.",
    ],
    differential: [
      [
        "Intraductal tubulopapillary neoplasm",
        "ITPN is mucin-poor, predominantly tubular/cribriform, and uniformly high-grade; MUC5AC is typically negative.",
      ],
      [
        "Intraductal oncocytic papillary neoplasm",
        "IOPN has complex arborizing papillae lined by cells with abundant granular eosinophilic cytoplasm and characteristic oncocytic phenotype.",
      ],
      [
        "Invasive cholangiocarcinoma",
        "IPNB is predominantly intraluminal and non-invasive; identify and separately document any destructive stromal invasion.",
      ],
    ],
    pitfalls: [
      "Do not use the older term 'oncocytic subtype of IPNB' for IOPN.",
      "Do not assume that high-grade dysplasia alone proves invasion; assess the stromal interface.",
    ],
  },
  {
    name: "Intraductal tubulopapillary neoplasm of the bile ducts (ITPN)",
    group: "Precursor",
    behavior:
      "Non-invasive intraductal neoplasm; invasive carcinoma frequently associated",
    site: "Approximately 70% intrahepatic, 20% perihilar, and 10% extrahepatic",
    clinical: [
      "Usually affects adults around 60 years; female predominance (approximately 2:1).",
      "May be incidental or present with abdominal pain, anorexia, weight loss, or jaundice.",
    ],
    criteria: [
      "Intraductal, mass-forming epithelial neoplasm composed predominantly of back-to-back tubules and cribriform glands.",
      "High-grade dysplasia is characteristic.",
      "Significant intracellular mucin production is absent; MUC5AC is typically negative.",
    ],
    morphology: [
      "Solid, whitish/tan intraductal nodules partially or completely fill a dilated bile duct.",
      "Back-to-back tubular glands fuse into cribriform structures; papillary components are usually minor.",
      "Cells are cuboidal to columnar with amphophilic cytoplasm, enlarged nuclei, and prominent nucleoli.",
      "Comedo-like or spotty necrosis is common; extensive necrosis is uncommon.",
      "Intracytoplasmic mucin is typically absent.",
      "Approximately 80% show progression to invasive carcinoma, most often conventional large-duct-type tubular adenocarcinoma.",
    ],
    ihc: [
      "CK7 and CK19 are commonly positive.",
      "MUC1 is positive in approximately 80% of cases; MUC6 is variable.",
      "MUC2 and MUC5AC are consistently negative in the reported series.",
    ],
    molecular: [
      "Usually lacks common KRAS, GNAS, and IDH1/IDH2 hotspot mutations; CDKN2A alterations may occur.",
      "Reported alterations involve cell-cycle regulation, chromatin remodeling (including SWI/SNF genes and BAP1), and receptor tyrosine kinase pathways; no routine diagnostic molecular assay is established.",
    ],
    differential: [
      [
        "IPNB",
        "IPNB more often shows papillary/villous architecture, mucin production, and MUC5AC expression.",
      ],
      [
        "IOPN",
        "IOPN shows conspicuous oncocytic cytoplasm and arborizing papillae rather than predominantly back-to-back tubular/cribriform growth.",
      ],
      [
        "Conventional cholangiocarcinoma",
        "ITPN retains a predominant intraductal growth pattern; evaluate for an associated invasive component.",
      ],
    ],
    pitfalls: [
      "Do not equate high-grade dysplasia with invasion.",
      "Absence of mucin and lack of MUC5AC are useful discriminators from IPNB.",
    ],
  },
  {
    name: "Intraductal oncocytic papillary neoplasm of the bile ducts (IOPN)",
    group: "Precursor",
    behavior:
      "High-grade non-invasive precursor; invasive carcinoma in a subset",
    site: "Approximately 70% intrahepatic; 15% extrahepatic; 15% diffuse intrahepatic and extrahepatic",
    clinical: [
      "Rare; age range approximately 36–84 years, without sex predilection.",
      "Often incidental; may present with abdominal mass or jaundice.",
    ],
    criteria: [
      "Non-invasive intraductal papillary neoplasm with complex arborizing papillae.",
      "Papillae are lined by oncocytic cells with abundant granular eosinophilic cytoplasm.",
      "HepPar1 expression is a desirable supportive finding.",
    ],
    morphology: [
      "Usually a large tan-brown intraductal lesion with friable papillary projections or solid nodules and little intraductal mucin.",
      "Thick, complex, arborizing papillae contain delicate myxoid fibrovascular cores.",
      "Epithelium consists of cuboidal/columnar cells with abundant granular eosinophilic cytoplasm, large nuclei, and prominent nucleoli.",
      "Cribriform structures and intraepithelial lumina may occur; goblet cells may be interspersed.",
      "All IOPNs are high-grade by architectural and cytologic criteria; approximately 30–40% show invasive carcinoma.",
    ],
    ihc: [
      "Diffuse MUC5AC and MUC6 expression is characteristic.",
      "MUC1 is focal; MUC2 is largely restricted to goblet cells.",
      "HepPar1 and KIT (CD117) are consistently reported as positive.",
    ],
    molecular: [
      "Recurrent kinase fusions support the diagnosis in selected cases: ATP1B1::PRKACB, ATP1B1::PRKACA, or DNAJB1::PRKACA.",
      "KRAS, BRAF, GNAS, RNF43, PIK3CA, and SMAD4 mutations reported in IPNB/cholangiocarcinoma are generally not observed in IOPN.",
    ],
    differential: [
      [
        "IPNB, especially pancreatobiliary type",
        "IOPN has intensely oncocytic cells, complex cribriform architecture, diffuse MUC6, and HepPar1/KIT expression.",
      ],
      [
        "ITPN",
        "ITPN is predominantly tubular/cribriform, lacks conspicuous oncocytic cytoplasm, and is typically MUC5AC-negative.",
      ],
      [
        "Invasive cholangiocarcinoma",
        "High-grade cytology does not establish invasion; identify destructive stromal infiltration.",
      ],
    ],
    pitfalls: [
      "Do not classify IOPN as an IPNB subtype; it is a distinct entity.",
      "Use molecular fusion testing selectively when a small biopsy limits morphologic assessment.",
    ],
  },
  {
    name: "Mass-forming intracholecystic neoplasm (ICN)",
    group: "Precursor",
    behavior:
      "Non-invasive precursor; invasive carcinoma often associated with ICPN",
    site: "Any gallbladder mucosal site; may be unifocal, multifocal, diffuse, or mural within an adenomyoma",
    clinical: [
      "Typically adults; mean age approximately 61 years, with female predominance.",
      "Approximately half present with right upper quadrant pain; the remainder are detected incidentally.",
      "Associated settings include gallstones, primary sclerosing cholangitis, and pancreaticobiliary maljunction.",
    ],
    criteria: [
      "Grossly visible, polypoid/papillary, non-invasive epithelial neoplasm arising in the gallbladder mucosa.",
      "Subtypes include intracholecystic papillary neoplasm (ICPN) and intracholecystic tubular neoplasm (ICTN).",
      "Grade as low-grade or high-grade based on the highest degree of cytoarchitectural atypia.",
      "Extensively sample to exclude associated invasive carcinoma.",
    ],
    morphology: [
      "ICPN: broad-based exophytic masses with predominantly papillary and sometimes tubular architecture; biliary, gastric, or intestinal differentiation may be present.",
      "ICPN may extend into Rokitansky–Aschoff sinuses and mimic invasion; adjacent flat BilIN may be present.",
      "Gastric-type polypoid pyloric gland metaplasia is not ICPN unless it forms a distinct nodule greater than 10 mm or has high-grade dysplasia.",
      "More than half of ICPNs have associated invasive carcinoma at diagnosis; invasion may be eccentric or grossly inapparent.",
      "ICTN: usually a solitary pedunculated polyp with complex back-to-back small acinar/tubular units, mucin-poor cells, and occasional morules.",
      "ICTN may meet cytologic criteria for high-grade dysplasia, but invasive transformation has not been documented in the supplied source.",
    ],
    ihc: [
      "ICPN immunophenotype follows its epithelial differentiation; interpret mucin markers in the morphologic context.",
      "ICTN is usually diffusely MUC6-positive and often MUC1-positive.",
      "ICTN is typically negative for MUC2, MUC5AC, and CDX2.",
      "ICTN morules may show nuclear β-catenin.",
    ],
    molecular: [
      "Molecular data for ICN are inconsistent; no routine diagnostic molecular test is established.",
      "ICTN appears associated with WNT pathway alterations.",
      "KRAS and GNAS mutations are relatively uncommon overall but KRAS is more frequent in lesions associated with pancreaticobiliary maljunction.",
      "TP53 alterations have been reported in ICPN.",
    ],
    differential: [
      [
        "BilIN",
        "BilIN is microscopic and flat/micropapillary; ICN is a grossly visible mass-forming lesion.",
      ],
      [
        "Pyloric gland metaplasia",
        "Commonly occurs in injured gallbladders; does not qualify as ICPN unless it forms a distinct nodule >10 mm or shows high-grade dysplasia.",
      ],
      [
        "Invasive adenocarcinoma",
        "Rokitansky–Aschoff sinus involvement can mimic invasion; preserve the sinus architecture and seek destructive stromal infiltration.",
      ],
      [
        "IOPN",
        "Rare oncocytic ICNs lack the defining arborizing papillae and intraepithelial lumina of IOPN.",
      ],
    ],
    pitfalls: [
      "Do not diagnose invasion solely because dysplastic epithelium extends into Rokitansky–Aschoff sinuses.",
      "Do not classify an ICPN-associated carcinoma as T1/early T2 without extensive, preferably complete, sampling.",
    ],
  },
  {
    name: "Extrahepatic cholangiocarcinoma (eCCA)",
    group: "Malignant",
    behavior: "Invasive carcinoma",
    site: "Perihilar ducts (right/left hepatic ducts and confluence) or distal extrahepatic bile duct (common hepatic duct / distal common bile duct)",
    clinical: [
      "Usually presents in the seventh or eighth decade (median age approximately 72 years); slight male predominance.",
      "Obstructive jaundice and pruritus are common; cholangitis, abdominal pain, malaise, anorexia, and weight loss may occur.",
      "Risk factors include primary sclerosing cholangitis, bile duct cysts, Caroli disease, cholelithiasis, and liver-fluke infection in endemic regions.",
    ],
    criteria: [
      "Invasive epithelial malignancy with biliary differentiation arising in the extrahepatic bile ducts.",
      "Identify the anatomic location as perihilar or distal because staging is location-specific.",
      "Document histologic grade, lymphovascular invasion, perineural invasion, and margins.",
    ],
    morphology: [
      "Most tumors are poorly defined; gross patterns include sclerosing (most common), nodular, and papillary.",
      "Infiltrative glands, irregular fused tubules, solid nests, or single cells are embedded in desmoplastic, often inflamed stroma.",
      "Lymphovascular and perineural invasion are common.",
      "Most tumors show pancreatobiliary differentiation; intestinal differentiation may occur, particularly in distal tumors.",
      "Subtypes include adenosquamous, mucinous, micropapillary, enteroblastic, hepatoid, and undifferentiated carcinoma.",
    ],
    ihc: [
      "Cytokeratins highlight minute infiltrating tumor nests in small biopsies.",
      "p53, S100, and SMAD4 immunostains may assist in selected cases but are not independently diagnostic.",
    ],
    molecular: [
      "ERBB2 (HER2) amplification occurs in approximately 15–20% and may be therapeutically actionable.",
      "Mismatch repair deficiency / MSI-high occurs in approximately 2%.",
      "IDH1 mutations and FGFR2 fusions are typically absent, unlike small-duct intrahepatic cholangiocarcinoma.",
      "TP53, SMAD4, and CDKN2A alterations support carcinoma in the appropriate context; isolated KRAS or GNAS alterations may also occur in precursor lesions and are not independently diagnostic.",
      "FISH for chromosomal polysomy or 9q loss can increase sensitivity for malignancy in biliary cytology.",
    ],
    differential: [
      [
        "Reactive cholangiocytes",
        "Carcinoma shows pleomorphism, irregular nuclear membranes, coarse chromatin, 3D clusters, loss of polarity, and/or necrotic background.",
      ],
      [
        "IPNB-associated invasive carcinoma",
        "Look for a residual intraductal papillary precursor component; separately assess the invasive component.",
      ],
      [
        "Metastatic adenocarcinoma",
        "Integrate clinical history, imaging, morphology, and site-directed immunohistochemistry to exclude a secondary primary.",
      ],
    ],
    pitfalls: [
      "Small forceps biopsies may be difficult because of scant tissue, mild atypia, and inflammation.",
      "An isolated KRAS or GNAS mutation does not establish invasive carcinoma.",
    ],
  },
  {
    name: "Carcinoma of the gallbladder",
    group: "Malignant",
    behavior: "Invasive carcinoma",
    site: "Most often fundus (~60–70%), followed by body (~30%) and neck/cystic duct (~10%)",
    clinical: [
      "Usually older adults; female predominance is prominent in some high-incidence regions, while sex distribution is more balanced in parts of East Asia.",
      "Right upper quadrant pain is common and may be indistinguishable from gallstones or cholecystitis.",
      "Approximately half are incidental findings after cholecystectomy for presumed gallstones or cholecystitis.",
      "Major risk factors include gallstones and chronic inflammation; pancreaticobiliary maljunction is another established risk factor.",
    ],
    criteria: [
      "Invasive epithelial neoplasm arising within the gallbladder.",
      "Most are biliary-type adenocarcinomas; classify specific histologic subtypes when criteria are met.",
      "Extensively sample incidental carcinomas to determine depth/extent of invasion and separately identify the cystic duct margin.",
    ],
    morphology: [
      "Most are tubular adenocarcinomas resembling cholangiocarcinoma, with glands, fused tubules, micropapillae, nests, or single cells.",
      "Mucinous adenocarcinoma requires extracellular mucin comprising >50% of the tumor.",
      "Poorly cohesive carcinoma shows diffusely infiltrating single cells, nests, cords, or sheets comprising >50% of the tumor; signet-ring cells are not required.",
      "Adenosquamous carcinoma requires >25% squamous differentiation; less extensive squamous differentiation is reported as adenocarcinoma with focal squamous differentiation.",
      "Undifferentiated/sarcomatoid carcinoma may show spindle-cell, pleomorphic, giant-cell, or heterologous components.",
      "Rare patterns include lymphoepithelioma-like and hepatoid carcinoma; exclude direct extension by hepatocellular carcinoma in hepatoid cases.",
    ],
    ihc: [
      "The glandular and squamous components of adenosquamous carcinoma show corresponding epithelial immunophenotypes.",
      "For hepatoid morphology, hepatocellular markers may be expressed; correlate with imaging to exclude hepatocellular carcinoma involving the gallbladder.",
      "SMARCB1 (INI1) loss identifies rare SWI/SNF-deficient rhabdoid undifferentiated carcinomas.",
    ],
    molecular: [
      "TP53 alterations occur in more than 50% of cases.",
      "Other recurrent alterations include CDKN2A/CDKN2B, ARID1A, PIK3CA, and CTNNB1; ERBB2 amplification occurs in a subset (~16%).",
      "MSI is uncommon but may have therapeutic implications; HER2 IHC/testing may guide targeted therapy in selected cases.",
      "No molecular test is required to establish the diagnosis.",
    ],
    differential: [
      [
        "Chronic cholecystitis / reactive atypia",
        "Reactive changes lack destructive stromal invasion; correlate with the overall architecture and inflammatory background.",
      ],
      [
        "Rokitansky–Aschoff sinuses",
        "Preserved organoid sinus architecture may mimic infiltrative glands, particularly when involved by high-grade dysplasia.",
      ],
      [
        "Adenomyoma / metaplastic glands",
        "Preserved architecture and relationship to the wall favor a benign malformative or metaplastic process; no reliable IHC or molecular marker separates these from carcinoma.",
      ],
      [
        "Metastatic colorectal adenocarcinoma",
        "Intestinal-type morphology requires exclusion of gallbladder involvement by a colorectal primary.",
      ],
      [
        "Hepatocellular carcinoma involving gallbladder",
        "Use clinical/radiologic correlation and hepatocellular markers to distinguish primary hepatoid carcinoma.",
      ],
    ],
    pitfalls: [
      "Gross examination alone may miss flat, firm, diffuse carcinoma in a background of chronic cholecystitis.",
      "Do not call sinus involvement invasive without destructive growth beyond the preserved sinus architecture.",
      "Extensively sample ICN-associated tumors before assigning an early T category.",
    ],
  },
];
function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      <div className="h-1 bg-teal-600" />
      <div className="p-5">
        <h3 className="mb-3 font-bold text-slate-900">{title}</h3>
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
          {v}
        </li>
      ))}
    </ul>
  );
}
const cats = ["All", "Precursor", "Malignant"];
export default function GallbladderBileDuctTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Intraductal papillary neoplasm of the bile ducts (IPNB)",
    "Mass-forming intracholecystic neoplasm (ICN)",
    "Extrahepatic cholangiocarcinoma (eCCA)",
    "Carcinoma of the gallbladder",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.site,
            x.behavior,
            ...x.clinical,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (n: string) =>
    setOpened((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Gastrointestinal & Hepatobiliary / Gallbladder &
            Extrahepatic Bile Ducts
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Gallbladder & Extrahepatic Bile Duct Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference for biliary epithelial
                precursors, intraductal neoplasms, and invasive carcinomas.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Separate intraductal growth from destructive stromal invasion.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Rokitansky–Aschoff sinus involvement and high-grade cytology
                alone do not establish invasion.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: from site and architecture to classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Establish the site",
                "Gallbladder versus extrahepatic duct; perihilar versus distal bile duct.",
              ],
              [
                "Determine the growth pattern",
                "Microscopic flat BilIN; gross intraductal papillary/tubular lesion; gallbladder mass; infiltrative ductal stricture.",
              ],
              [
                "Assess invasion",
                "Look for destructive infiltration, desmoplasia, irregular glands, isolated tumor cells, lymphovascular and perineural invasion.",
              ],
              [
                "Use targeted IHC",
                "Mucin phenotype for IPNB; MUC5AC/MUC6 and HepPar1/KIT for IOPN; MUC6 and β-catenin for ICTN; selective p53/SMAD4.",
              ],
              [
                "Select molecular tests for purpose",
                "HER2 and MMR for therapeutic assessment; selected fusion testing for IOPN; interpret KRAS/GNAS in context.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="Precursor lesion classification">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Entity</th>
                    <th className="py-2 pr-3">Grossly visible?</th>
                    <th className="py-2">Defining pattern</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "BilIN",
                      "No",
                      "Flat / micropapillary microscopic dysplasia",
                    ],
                    [
                      "IPNB",
                      "Yes",
                      "Papillary / villous, often mucin-producing",
                    ],
                    [
                      "ITPN",
                      "Yes",
                      "Tubular / cribriform, mucin-poor, high-grade",
                    ],
                    [
                      "IOPN",
                      "Yes",
                      "Arborizing papillae with oncocytic epithelium",
                    ],
                    [
                      "ICN (ICPN / ICTN)",
                      "Yes",
                      "Gallbladder papillary or tubular mass",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 pr-3">{r[1]}</td>
                      <td className="py-2 text-slate-600">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
          <Panel title="High-yield immunophenotype and molecular clues">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b text-xs uppercase text-slate-500">
                    <th className="py-2 pr-3">Entity</th>
                    <th className="py-2">Useful profile / alteration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "IPNB",
                      "MUC5AC/MUC6 (gastric); MUC2/CDX2 (intestinal); MUC1 (pancreatobiliary); GNAS/RNF43 in subsets",
                    ],
                    [
                      "ITPN",
                      "MUC1/MUC6; MUC2 and MUC5AC negative; KRAS/GNAS/IDH1/2 usually absent",
                    ],
                    [
                      "IOPN",
                      "MUC5AC/MUC6 diffuse; HepPar1 and KIT positive; PRKACA/PRKACB fusions",
                    ],
                    [
                      "ICTN",
                      "MUC6 diffuse, MUC1 often positive; MUC2/MUC5AC/CDX2 negative; nuclear β-catenin in morules",
                    ],
                    [
                      "eCCA",
                      "HER2 amplification ~15–20%; MSI-high ~2%; IDH1/FGFR2 typically absent",
                    ],
                    [
                      "Gallbladder carcinoma",
                      "TP53 >50%; ERBB2 amplification ~16%; MMR deficiency in a small subset",
                    ],
                  ].map((r, i) => (
                    <tr key={i}>
                      <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                      <td className="py-2 text-slate-600">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile, diagnostic criteria, and differential
                diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, morphology, site, immunostain, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. MUC6, HER2, Rokitansky–Aschoff, GNAS..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${cat === c ? "bg-teal-700 text-white" : "border border-slate-300 bg-white text-slate-600"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full flex-col gap-3 p-5 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-md bg-teal-50 px-2 py-1 text-[10px] font-bold uppercase text-teal-800">
                          {p.group}
                        </span>
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600">
                          {p.behavior}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold text-slate-950">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{p.site}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}{" "}
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={p.clinical} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential diagnostic criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Immunophenotype
                        </h4>
                        <Bullets items={p.ihc} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Molecular pathology
                        </h4>
                        <Bullets items={p.molecular} />
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential diagnosis
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[600px] text-left text-sm">
                            <tbody className="divide-y divide-slate-100">
                              {p.differential.map((d, j) => (
                                <tr key={j}>
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
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 lg:col-span-2">
                        <h4 className="mb-2 text-sm font-bold text-amber-950">
                          Diagnostic pitfalls
                        </h4>
                        <Bullets items={p.pitfalls} />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
            {filtered.length === 0 && (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
                No matching entity.
              </div>
            )}
          </div>
        </section>
        <Panel title="Critical distinction: intraductal precursor versus invasive carcinoma">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Finding</th>
                  <th className="py-2 pr-3">Supports non-invasive precursor</th>
                  <th className="py-2">Supports invasion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Growth",
                    "Confined to mucosa / duct lumen; preserved architecture",
                    "Destructive infiltration into stroma or wall",
                  ],
                  [
                    "Stroma",
                    "No desmoplastic response around lesional epithelium",
                    "Desmoplastic, inflamed stroma with irregular glands or single cells",
                  ],
                  [
                    "Rokitansky–Aschoff sinuses",
                    "Dysplasia extending into a pre-existing, architecturally preserved sinus",
                    "Destructive growth beyond the sinus wall",
                  ],
                  [
                    "Cytology",
                    "High-grade atypia may occur without invasion",
                    "Cytologic atypia plus unequivocal infiltrative growth",
                  ],
                  [
                    "Sampling",
                    "Extensive mapping needed for ICN-associated lesions",
                    "Invasive component may be small, eccentric, or grossly occult",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    <td className="py-2 pr-3 font-semibold">{r[0]}</td>
                    <td className="py-2 pr-3 text-slate-600">{r[1]}</td>
                    <td className="py-2 text-slate-600">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title="Resection, sampling, and reporting checklist">
          <Bullets
            items={[
              "For gallbladder carcinoma, thoroughly sample the tumor and surrounding mucosa; identify and submit the cystic duct margin separately.",
              "For incidental gallbladder carcinoma, document exact site, depth of invasion, hepatic versus serosal-side involvement, Rokitansky–Aschoff sinus involvement, and margins.",
              "For ICN/ICPN, extensively sample the entire lesion and its interface to exclude small or eccentric invasive carcinoma before assigning an early T category.",
              "For bile duct resections, document proximal, distal, and radial margins; assess perineural and lymphovascular invasion.",
              "For eCCA, specify perihilar versus distal location because the applicable staging system differs.",
              "Report precursor grade, invasive component and histologic subtype, tumor grade, lymphovascular invasion, perineural invasion, nodal status, and margin status.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> Based on the supplied
          WHO chapter excerpt. Molecular alterations are included only where the
          source describes diagnostic, classification, or clinically actionable
          relevance. Supportive IHC findings are not stand-alone criteria;
          correlate with anatomy, morphology, and adequate sampling.
        </footer>
      </div>
    </main>
  );
}
