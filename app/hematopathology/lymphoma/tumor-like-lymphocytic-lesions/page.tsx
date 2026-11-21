"use client";
import { useMemo, useState } from "react";
type Entity = {
  name: string;
  group: string;
  clue: string;
  clinical: string;
  criteria: string[];
  hist: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
};
const entities: Entity[] = [
  {
    name: "Reactive B-Cell-Rich Lymphoid Proliferations Mimicking Lymphoma",
    group: "Reactive Lymphoid Proliferations",
    clue: "Consider this category when an atypical or architecturally distorted lymphoid proliferation is polymorphous, clinically reactive, and lacks convincing evidence of a clonal lymphoma.",
    clinical:
      "Variable age; nodal or extranodal disease. Patients may have lymphadenopathy, tonsillar or salivary-gland enlargement, mucosal ulceration, or symptoms related to infection, autoimmunity, drugs, or immunodeficiency.",
    criteria: [
      "Identify the dominant reactive pattern: florid follicular hyperplasia, progressive transformation of germinal centers, genital-tract lymphoma-like lesion, EBV-associated immunoblastic proliferation, or hematogone hyperplasia.",
      "Evaluate architecture, cytology, distribution of cell populations, and the clinical setting together.",
      "Use flow cytometry, immunohistochemistry, EBER, microbiology, and/or immunoglobulin or T-cell receptor gene-rearrangement studies as indicated.",
      "Do not diagnose lymphoma solely because of architectural distortion, large immunoblasts, or an occasional clonal/oligoclonal rearrangement.",
      "Establish an underlying infection, autoimmune disease, immunodeficiency, or drug-related trigger whenever possible.",
    ],
    hist: [
      "Florid follicular hyperplasia: follicles are variably sized and widely spaced, with polarized germinal centers and tingible-body macrophages.",
      "Progressive transformation of germinal centers: large, sharply circumscribed nodules show mantle-zone B cells progressively infiltrating and dismantling germinal centers.",
      "Female genital-tract lymphoma-like lesion: superficial polymorphous infiltrate, often with epithelial erosion, polytypic plasma cells, and neutrophils; a mass and sclerosis are typically absent.",
      "Infectious mononucleosis: paracortical expansion with a polymorphous mixture of small lymphocytes, plasma cells, and numerous immunoblasts; architecture is often incompletely effaced.",
      "Hematogone hyperplasia: small precursor B cells involve paracortex and/or medulla, particularly in children.",
    ],
    ihc: [
      "Florid follicular hyperplasia: germinal-center B cells are BCL2 negative with a high Ki-67 index and preserved polarization.",
      "Progressive transformation: CD20-positive mantle-zone B cells express IgD and BCL2; germinal-center cells are admixed; lymphocyte-predominant cells and PD1-positive rosettes are absent.",
      "Genital-tract lymphoma-like lesions: large cells are predominantly B cells; plasma cells are polytypic.",
      "Infectious mononucleosis: immunoblasts are usually MUM1 positive, CD10 negative, and BCL6 negative; light chains are polytypic. HRS-like cells usually retain CD45 and lack CD15.",
      "Infectious mononucleosis typically has a CD8-predominant T-cell background; classic Hodgkin lymphoma more often has an increased CD4:CD8 ratio.",
      "Hematogones show an orderly spectrum of B-cell maturation by flow cytometry rather than a uniform aberrant blast population.",
    ],
    molecular: [
      "IGH or TR gene-rearrangement studies may help in equivocal cases, but occasional clonal or oligoclonal results can occur in otherwise reactive lesions, particularly genital-tract lymphoma-like lesions and infectious/inflammatory settings.",
      "EBER or pathogen-specific molecular testing may identify an infectious trigger.",
    ],
    differential: [
      "Follicular lymphoma: monotonous crowded follicles, loss of polarization/tingible-body macrophages, and aberrant BCL2 expression in germinal centers.",
      "Nodular lymphocyte-predominant B-cell lymphoma: LP cells and PD1-positive T-cell rosettes are absent in progressive transformation of germinal centers.",
      "Classic Hodgkin lymphoma: HRS cells typically lack CD45 and express CD15 in many cases; EBV is concentrated in HRS cells rather than a broad spectrum of immunoblasts.",
      "B-lymphoblastic lymphoma: larger, more uniform blasts with a coherent immature B-cell phenotype and often aberrant antigen expression; correlate with flow cytometry and clinical course.",
    ],
  },
  {
    name: "IgG4-Related Disease",
    group: "IgG4-Related Disease",
    clue: "Think of IgG4-RD in an adult with tumefactive, often multiorgan disease and a lymphoplasmacytic infiltrate accompanied by storiform fibrosis; isolated IgG4-rich lymphadenopathy is not sufficient.",
    clinical:
      "Usually adults in the fifth or sixth decade, with male predominance. Pancreas, biliary tract, salivary glands, orbit, retroperitoneum, aorta, and lymph nodes are common sites; mass effect or organ-specific dysfunction is typical.",
    criteria: [
      "For extranodal disease, identify a lymphoplasmacytic infiltrate rich in IgG4-positive plasma cells, an IgG4:IgG plasma-cell ratio greater than 40%, and storiform fibrosis.",
      "Exclude well-defined mimics, including ANCA-associated vasculitis, rheumatoid arthritis, multicentric Castleman disease, Rosai-Dorfman disease, infection, lymphoma, and plasma-cell neoplasia.",
      "For a primary nodal diagnosis, require established extranodal IgG4-RD (prior, concurrent, or subsequent), polytypic IgG4-positive plasma cells exceeding 400/mm², and an IgG4:IgG ratio greater than 40%.",
      "Interpret IgG4 counts and ratios in the context of organ site and morphology; serum IgG4 elevation is supportive but not specific.",
      "Demonstrate polytypic plasma cells with kappa/lambda studies.",
    ],
    hist: [
      "Extranodal lesions show a lymphoplasmacytic and eosinophil-rich infiltrate with storiform fibrosis; the inflammatory component may predominate early and fibrosis later.",
      "Obliterative phlebitis is a characteristic supportive feature; an elastic stain can highlight obliterated veins.",
      "Reactive lymphoid follicles are common, particularly in head and neck lesions.",
      "Nodal patterns include Castleman-like changes, follicular hyperplasia, interfollicular expansion, progressive transformation of germinal centers, and inflammatory pseudotumor-like fibrosis.",
      "Nodal inflammatory pseudotumor-like fibrosis with IgG4-positive plasma cells and eosinophils in fibrotic/interfollicular areas is more specific than isolated intrafollicular IgG4-positive cells.",
      "Necrosis, abscesses, neutrophilic infiltrates, granulomas, and necrotizing vasculitis are atypical and should prompt another diagnosis.",
    ],
    ihc: [
      "IgG4-positive plasma cells are increased, with an IgG4:IgG ratio greater than 40% in the appropriate morphologic and clinical setting.",
      "Plasma cells should be polytypic for kappa and lambda.",
      "Nodal germinal centers may show BCL2-negative germinal-center B cells; interfollicular plasma cells are polytypic.",
      "No single immunostain establishes IgG4-RD; correlate with fibrosis, phlebitis, organ distribution, and laboratory findings.",
    ],
    molecular: ["No defining molecular test is required."],
    differential: [
      "Idiopathic multicentric Castleman disease: prominent systemic inflammation, elevated IL-6/CRP, anemia, hypoalbuminemia, and often sheet-like plasma cells; storiform fibrosis and obliterative phlebitis favor IgG4-RD.",
      "Rosai-Dorfman disease: S100/OCT2-positive histiocytes with emperipolesis rather than an IgG4-rich fibrosing lymphoplasmacytic lesion.",
      "Lymphoma or plasma-cell neoplasm: assess architecture, cytologic atypia, light-chain restriction, and clonality; IgG4 expression does not exclude malignancy.",
      "ANCA-associated vasculitis: necrotizing vasculitis and granulomatous inflammation are not typical of IgG4-RD.",
    ],
  },
  {
    name: "Unicentric Castleman Disease",
    group: "Castleman Disease",
    clue: "Consider UCD when imaging shows a solitary enlarged lymph node or one nodal station, especially a hypervascular mediastinal, cervical, abdominal, or retroperitoneal mass.",
    clinical:
      "Any age, typically the fourth decade, with slight female predominance. Usually an incidental solitary nodal mass; symptoms may reflect compression. Mixed/plasmacytic cases can produce inflammatory symptoms.",
    criteria: [
      "Confirm involvement of a single lymph node or multiple nodes confined to one lymph-node station by clinical and radiologic correlation.",
      "Hyaline-vascular subtype: regressed germinal centers, hyalinized vessels penetrating follicles, expanded mantle zones, and hypervascular fibrotic stroma.",
      "Mixed/plasmacytic subtype: dense interfollicular plasma-cell aggregates extending toward the cortex, with variable follicular hyperplasia or regression.",
      "Demonstrate polytypic plasma cells in most cases; investigate rare monotypic cases for an associated plasma-cell or lymphoid neoplasm.",
      "Exclude HHV8-associated disease and systemic multicentric Castleman disease.",
    ],
    hist: [
      "Hyaline-vascular: numerous follicles with regressed, lymphocyte-depleted germinal centers and radially penetrating hyalinized vessels (lollipop follicles).",
      "Mantle zones form concentric onion-skin rings; twinning of germinal centers within a single mantle zone may occur.",
      "Interfollicular zones contain prominent high endothelial venules, plasmacytoid dendritic-cell clusters, and fibrosis; sinuses are compressed or obliterated.",
      "Mixed/plasmacytic: architecture is often better preserved, with expanded interfollicular zones containing groups or sheets of mature plasma cells.",
      "The mixed/plasmacytic subtype may have less conspicuous hyaline-vascular follicles than the classic subtype.",
    ],
    ihc: [
      "Follicular dendritic-cell networks are expanded and highlight with CD21, CD23, and CD35; CD106/VCAM1 is often positive.",
      "Residual germinal-center B cells express CD10 and BCL6 and are BCL2 negative; mantle-zone B cells express IgD and BCL2, sometimes dim CD5.",
      "Interfollicular plasma cells are usually polytypic.",
      "Interfollicular plasmacytoid dendritic cells may express CD123, TCL1, and CD68.",
      "KSHV/HHV8 LANA is negative; EBER is negative or highlights only rare bystander lymphocytes.",
    ],
    molecular: [
      "Molecular testing is generally not required. A subset of hyaline-vascular UCDs harbor stromal-cell alterations, including PDGFRB mutations.",
    ],
    differential: [
      "Idiopathic multicentric Castleman disease: two or more nodal stations with systemic inflammation and characteristic laboratory abnormalities.",
      "KSHV/HHV8-associated MCD: LANA-positive plasmablasts in mantle zones and systemic inflammatory flares.",
      "Follicular lymphoma: neoplastic follicles with aberrant BCL2 expression and loss of normal germinal-center compartmentalization.",
      "Mantle cell lymphoma: cyclin D1/SOX11 and/or CCND1 rearrangement with mantle-zone expansion by neoplastic cells.",
      "Nodal marginal zone lymphoma: monocytoid B-cell expansion, follicular colonization, and clonal B-cell population.",
    ],
  },
  {
    name: "Idiopathic Multicentric Castleman Disease",
    group: "Castleman Disease",
    clue: "Think of iMCD in a patient with lymphadenopathy in at least two nodal stations plus systemic inflammation, cytopenias, hypoalbuminemia, edema, or organ dysfunction after exclusion of HHV8 and other mimics.",
    clinical:
      "Any age, median around 50 years, with similar frequency in men and women. Multistation cervical, mediastinal, axillary, and abdominal lymphadenopathy; fever, fatigue, edema/anasarca, effusions, hepatosplenomegaly, renal dysfunction, and laboratory inflammation are common.",
    criteria: [
      "Document enlarged lymph nodes in at least two nodal stations.",
      "Biopsy must show compatible Castleman-like morphology, particularly grade 2–3 regressed germinal centers and/or plasmacytosis.",
      "Fulfill the required clinical and laboratory criteria for iMCD and exclude HIV, KSHV/HHV8, autoimmune disease, infection, lymphoma, POEMS-associated MCD, and other causes of cytokine-driven lymphadenopathy.",
      "Recognize iMCD-TAFRO when thrombocytopenia, anasarca, fever/inflammation, renal dysfunction or marrow reticulin fibrosis, and organomegaly predominate; otherwise classify as iMCD-NOS.",
      "Correlate histology with systemic findings; morphology alone is insufficient.",
    ],
    hist: [
      "Nodal architecture is variably distorted, with regressed or hyperplastic follicles and prominent interfollicular expansion.",
      "Regressed germinal centers may be penetrated by hyalinized vessels and surrounded by expanded mantle zones.",
      "Interfollicular regions show increased vascularity, mature plasma cells, immunoblasts, and variable fibrosis.",
      "Plasmacytic areas may contain sheets or aggregates of mature plasma cells; TAFRO cases may show marrow reticulin fibrosis and megakaryocytic hyperplasia.",
    ],
    ihc: [
      "CD20-positive B cells and CD3-positive T cells retain recognizable compartmental distribution, although regressed germinal centers are B-cell depleted.",
      "Interfollicular plasma cells are usually polytypic.",
      "LANA is negative; this is essential to exclude KSHV/HHV8-associated MCD.",
      "Phospho-S6 and phospho-4EBP1 may be increased in interfollicular cells, supporting mTOR-pathway activation but are not required for diagnosis.",
      "No convincing aberrant T-cell phenotype or clonal B-/T-cell population should be identified.",
    ],
    molecular: [
      "Antigen-receptor gene rearrangements are typically polyclonal; molecular testing is not a defining diagnostic test.",
    ],
    differential: [
      "KSHV/HHV8-associated MCD: LANA-positive plasmablasts and viral association.",
      "UCD: disease restricted to one nodal station, often without systemic inflammatory syndrome.",
      "IgG4-related lymphadenopathy: polytypic IgG4-rich plasma cells and compatible extranodal IgG4-RD; clinical inflammatory profile differs.",
      "POEMS-associated MCD: neuropathy, organomegaly, endocrinopathy, monoclonal plasma-cell disorder, and skin changes.",
      "Lymphoma: evaluate for destructive clonal populations, aberrant phenotype, and disease-specific molecular findings.",
    ],
  },
  {
    name: "KSHV/HHV8-Associated Multicentric Castleman Disease",
    group: "Castleman Disease",
    clue: "Consider HHV8-MCD in a patient—often with HIV or another immunodeficiency—with episodic fever, generalized lymphadenopathy, inflammatory laboratory abnormalities, and plasmablasts in mantle zones.",
    clinical:
      "Usually adults; most patients are HIV-positive, with male predominance. HIV-negative patients tend to be older. Generalized lymphadenopathy, fever, fatigue, weight loss, hepatosplenomegaly, edema, effusions, anemia, and hypoalbuminemia are typical; Kaposi sarcoma may coexist.",
    criteria: [
      "Identify multicentric Castleman-like nodal morphology in a patient with systemic inflammatory symptoms.",
      "Demonstrate KSHV/HHV8-infected plasmablasts by nuclear LANA immunostaining.",
      "Recognize plasmablasts in mantle zones, with possible intrafollicular/perifollicular extension and occasional aggregates.",
      "Correlate with HIV/immunosuppression, viral load, systemic inflammatory flares, and associated Kaposi sarcoma.",
      "Do not equate monotypic cytoplasmic IgM-lambda expression with a clonal B-cell neoplasm; these plasmablasts may be polyclonal by molecular studies.",
    ],
    hist: [
      "Nodal and splenic morphology resembles iMCD, usually plasmacytic or mixed pattern.",
      "Plasmablasts are medium to large cells with one or two nucleoli and moderate amphophilic cytoplasm.",
      "Plasmablasts are concentrated in mantle zones but may occur within or around follicles; they may be scattered or form aggregates.",
      "Kaposi sarcoma foci may be present in the same specimen.",
    ],
    ihc: [
      "LANA shows nuclear positivity in infected plasmablasts and is the key diagnostic stain.",
      "Plasmablasts express MUM1/IRF4 and BLIMP1 and often show cytoplasmic IgM-lambda restriction.",
      "CD20 and other B-cell markers are dim or negative; CD138 is typically negative; T-cell markers are negative.",
      "vIL-6 is expressed in a subset; EBV is generally negative in HHV8-infected plasmablasts.",
      "Background interfollicular plasma cells are usually polytypic and HHV8 negative.",
    ],
    molecular: [
      "KSHV/HHV8 infection is etiologic; viral molecular testing is not usually required when LANA immunohistochemistry is diagnostic.",
    ],
    differential: [
      "iMCD: LANA negative and lacks HHV8-infected mantle-zone plasmablasts.",
      "Plasmablastic lymphoma: destructive sheets of plasmablasts, usually strong plasma-cell phenotype and often EBV-positive; assess clinical context and HHV8 status.",
      "Classic Hodgkin lymphoma: HRS cells are scattered in a characteristic inflammatory background and show a different immunophenotype; LANA identifies HHV8-MCD plasmablasts.",
      "HIV-associated reactive lymphadenopathy: lacks the characteristic LANA-positive plasmablast population.",
    ],
  },
  {
    name: "Kikuchi-Fujimoto Disease",
    group: "T-Cell-Predominant Lesions",
    clue: "Think of Kikuchi-Fujimoto disease in a young adult—often an Asian woman—with acute or subacute cervical lymphadenopathy, fever, and paracortical necrotizing foci rich in karyorrhectic debris but lacking neutrophils.",
    clinical:
      "Young adults, median age approximately 23–30 years, with female predominance; pediatric cases more often affect boys. Usually unilateral cervical lymphadenopathy with fever, fatigue, weight loss, rash, or arthralgia.",
    criteria: [
      "Identify circumscribed paracortical foci of karyorrhexis, apoptosis, and variable necrosis.",
      "Recognize a mixed population of crescentic histiocytes, plasmacytoid dendritic cells, immunoblasts, and predominantly CD8-positive T cells.",
      "Granulocytes are notably absent and plasma cells are sparse.",
      "Exclude infection, lymphoma, and autoimmune disease—particularly systemic lupus erythematosus—using clinical and ancillary findings.",
      "Do not overcall T-cell lymphoma based solely on partial loss of CD5/CD7 or an occasional oligoclonal T-cell receptor rearrangement.",
    ],
    hist: [
      "Paracortical lesions are non-expansile, circumscribed, pale, and sometimes wedge-shaped.",
      "Proliferative phase: abundant karyorrhectic debris with crescentic or twisted histiocytes, immunoblasts, and plasmacytoid dendritic cells.",
      "Necrotizing phase: discrete or confluent coagulative necrosis among the cellular infiltrate and nuclear debris.",
      "Xanthomatous phase: foamy macrophages become prominent.",
      "Neutrophils and eosinophils are absent or strikingly inconspicuous; plasma cells are scarce.",
    ],
    ihc: [
      "Histiocytes express CD68, CD163, CD4, and characteristically myeloperoxidase.",
      "Plasmacytoid dendritic cells express CD123, TCL1, TCF4, CD4, and CD68 and often cluster around necrotic foci.",
      "The lymphoid component is predominantly CD8-positive cytotoxic T cells; CD30 may be expressed.",
      "Partial or complete loss of CD2, CD5, or CD7 may occur and is not by itself evidence of T-cell lymphoma.",
    ],
    molecular: [
      "TR gene rearrangements are usually polyclonal; occasional monoclonal or oligoclonal results have been reported and must be interpreted cautiously.",
    ],
    differential: [
      "Lupus lymphadenitis: hematoxylin bodies, plasma cells, vascular changes, and clinical/serologic lupus support; correlate with ANA and other studies.",
      "Infectious lymphadenitis: neutrophils, granulomas, organisms, or pathogen-specific studies may identify infection.",
      "Peripheral T-cell lymphoma: atypical destructive T-cell population, aberrant phenotype, and convincing clonality favor lymphoma.",
      "Hodgkin lymphoma: diagnostic HRS cells and characteristic microenvironment; KFD instead shows karyorrhexis with crescentic histiocytes and no granulocytes.",
    ],
  },
  {
    name: "Autoimmune Lymphoproliferative Syndrome",
    group: "Immune Dysregulation-Associated Proliferations",
    clue: "Consider ALPS in a child or young adult with chronic noninfectious lymphadenopathy, splenomegaly, autoimmune cytopenias, and expanded peripheral-blood αβ double-negative T cells.",
    clinical:
      "Usually recognized in early childhood in germline FAS disease; somatic FAS disease can present across a broad age range. Persistent lymphadenopathy, hepatosplenomegaly, autoimmune cytopenias, and increased lymphoma risk are characteristic.",
    criteria: [
      "Document chronic, noninfectious lymphadenopathy and/or splenomegaly for more than six months.",
      "Peripheral-blood flow cytometry must show αβ double-negative T cells exceeding 1.5% of total lymphocytes or 2.5% of CD3-positive lymphocytes.",
      "Demonstrate a pathogenic defect in FAS-mediated apoptosis, commonly involving FAS; other genes include FASLG, CASP8, FADD, and CASP10.",
      "Assess autoimmune cytopenias, polyclonal hypergammaglobulinemia, family history, vitamin B12, soluble FAS ligand, and IL-10 as supportive findings.",
      "Do not substitute lymph-node DNT-cell expansion for the required peripheral-blood flow-cytometric assessment.",
    ],
    hist: [
      "Lymph nodes show reactive follicular hyperplasia with prominent pale paracortical expansion.",
      "Expanded paracortical areas contain double-negative T cells and polytypic plasma cells.",
      "Progressive transformation of germinal centers, Castleman-like changes, or marked plasmacytosis may obscure the underlying pattern.",
      "Rosai-Dorfman-like histiocytic changes may coexist; similar reactive infiltrates can involve spleen and bone marrow.",
    ],
    ihc: [
      "DNT cells are CD45RA positive and CD45RO negative.",
      "DNT cells express cytotoxic markers including perforin, TIA1, and CD57.",
      "The proliferating population should be correlated with flow cytometry demonstrating αβ TCR-positive CD4−/CD8− T cells.",
      "Immunohistochemistry alone cannot establish ALPS; peripheral blood flow cytometry and clinical/genetic criteria are central.",
    ],
    molecular: [
      "Evaluate germline and/or somatic FAS-pathway alterations, including FAS, FASLG, CASP8, FADD, and CASP10.",
      "DNT cells may show a restricted TCRVβ repertoire; restricted repertoire alone should not be mistaken for lymphoma clonality.",
    ],
    differential: [
      "RAS-associated leukoproliferative disease: overlapping immune dysregulation phenotype; distinguish by the underlying RAS-pathway defect and clinical/genetic criteria.",
      "iMCD/UCD: Castleman-like histology may overlap, but ALPS is defined by chronic immune dysregulation and expanded peripheral αβ DNT cells.",
      "Lymphoma: destructive atypical clonal population and disease-specific phenotype/genetics; ALPS carries increased lymphoma risk, so a new focal or progressive lesion requires evaluation.",
      "IgG4-related disease and Rosai-Dorfman disease may coexist with ALPS rather than simply mimic it.",
    ],
  },
  {
    name: "Indolent T-Lymphoblastic Proliferation",
    group: "Immature T-Cell Proliferations",
    clue: "Consider iT-LBP when TdT-positive T-cell clusters are found in an otherwise indolent lymph node or around another tumor, especially Castleman disease, without marrow disease or destructive atypia.",
    clinical:
      "Usually adults in the fourth or fifth decade, with possible slight male predominance; children can be affected. Often an incidental nodal or extranodal finding in an otherwise indolent clinical course, sometimes associated with Castleman disease or carcinoma.",
    criteria: [
      "Identify confluent clusters or sheets of TdT-positive T cells without cytologic atypia or tissue destruction.",
      "Demonstrate a developmentally appropriate immature thymocyte phenotype, most often CD4/CD8 double positive.",
      "Establish an indolent clinical course and absence of clinical evidence for precursor T-cell neoplasia.",
      "Show polyclonal TR gene rearrangements; bone marrow involvement is generally absent.",
      "Distinguish from T-lymphoblastic leukemia/lymphoma before considering treatment.",
    ],
    hist: [
      "Overall nodal architecture is preserved, with clusters or confluent sheets in interfollicular and paracortical regions.",
      "Cells are small to medium sized, with open immature chromatin, inconspicuous nucleoli, and no significant atypia.",
      "Mitoses may be frequent; scattered histiocytes are common.",
      "In Castleman disease, lymphoblasts are usually interfollicular; in association with carcinoma, they may be interspersed among malignant epithelial cells.",
    ],
    ihc: [
      "Cells express TdT and CD3; most are CD4/CD8 double positive, although double-negative cases occur.",
      "CD2, CD5, and CD7 are usually present but may show decreased intensity.",
      "CD1a, CD10, and CD99 are variable; CD34 is frequently negative.",
      "LMO2 is negative in iT-LBP and is often positive in T-lymphoblastic leukemia/lymphoma.",
      "B-cell markers and cytokeratin are negative; cytokeratin helps exclude ectopic thymic epithelial cells.",
      "Ki-67 may be high (approximately 40–90%) and does not by itself establish malignancy.",
    ],
    molecular: [
      "TR gene-rearrangement studies show a polyclonal population; a clonal TR rearrangement supports T-lymphoblastic neoplasia in the appropriate context.",
    ],
    differential: [
      "T-lymphoblastic leukemia/lymphoma: cytologic atypia, aberrant antigen expression (e.g., CD34, CD33, or CD79a), loss of normal T-cell markers, clonal TR rearrangement, and often marrow involvement or rapid progression.",
      "Ectopic thymic tissue: contains thymic epithelial cells highlighted by cytokeratin; iT-LBP lymphoblasts are cytokeratin negative.",
      "Reactive thymocyte-like T cells: assess whether there are organized confluent aggregates and whether the clinical setting supports a persistent proliferation.",
    ],
  },
];
const groups = ["All", ...Array.from(new Set(entities.map((e) => e.group)))];
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
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
    <section className="mt-4">
      <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-teal-800">
        {title}
      </h3>
      {children}
    </section>
  );
}
export default function TumourLikeLymphocyticLesionsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<string[]>([]);
  const filtered = useMemo(
    () =>
      entities.filter(
        (e) =>
          (group === "All" || e.group === group) &&
          (
            e.name +
            " " +
            e.group +
            " " +
            e.clue +
            " " +
            e.clinical +
            " " +
            e.criteria.join(" ") +
            " " +
            e.hist.join(" ") +
            " " +
            e.ihc.join(" ") +
            " " +
            e.molecular.join(" ") +
            " " +
            e.differential.join(" ")
          )
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, group],
  );
  const allOpen =
    filtered.length > 0 && filtered.every((e) => open.includes(e.name));
  const toggle = (n: string) =>
    setOpen((v) => (v.includes(n) ? v.filter((x) => x !== n) : [...v, n]));
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-[.2em] text-teal-700">
          PathologyGPS · Hematopathology
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Tumor-Like Lymphocytic Lesions
        </h1>
        <p className="mt-3 max-w-5xl text-base leading-7 text-slate-600">
          A practical diagnostic reference for reactive, immune-mediated, and
          virus-associated lymphoid proliferations that may mimic lymphoma.
          Diagnosis requires integration of tissue architecture, cytology,
          immunophenotype, molecular studies, and clinical distribution.
        </p>
      </header>
      <section className="mb-8 rounded-2xl border border-teal-200 bg-teal-50/60 p-5">
        <h2 className="text-lg font-bold text-teal-950">
          Diagnostic Orientation: When to Consider These Lesions
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-white">
                <th className="border border-teal-100 p-3">
                  Clinical / morphologic clue
                </th>
                <th className="border border-teal-100 p-3">Consider</th>
                <th className="border border-teal-100 p-3">
                  Key discriminator
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Polymorphous B-cell-rich infiltrate; reactive follicles or immunoblasts",
                  "Reactive B-cell-rich proliferation",
                  "Preserved maturation/polarization, polytypic cells, pathogen or immune trigger",
                ],
                [
                  "Multiorgan mass lesions with lymphoplasmacytic inflammation and fibrosis",
                  "IgG4-related disease",
                  "Storiform fibrosis, obliterative phlebitis, increased IgG4+ plasma cells and IgG4:IgG ratio",
                ],
                [
                  "Single nodal station with lollipop follicles / onion-skin mantle zones",
                  "Unicentric Castleman disease",
                  "Hyaline-vascular follicles and vascular/fibrotic stroma",
                ],
                [
                  "Multistation nodes plus systemic inflammation, edema, cytopenias",
                  "iMCD or HHV8-MCD",
                  "LANA separates HHV8-MCD from iMCD; clinical/lab criteria establish iMCD",
                ],
                [
                  "Young adult with tender cervical nodes and paracortical necrosis",
                  "Kikuchi-Fujimoto disease",
                  "Karyorrhexis, crescentic MPO+ histiocytes, pDCs; absence of neutrophils",
                ],
                [
                  "Chronic adenopathy, splenomegaly, autoimmune cytopenias",
                  "ALPS",
                  "Peripheral blood αβ double-negative T cells and FAS-pathway defect",
                ],
                [
                  "TdT+ T-cell clusters in a bland node or around another tumor",
                  "Indolent T-lymphoblastic proliferation",
                  "Maturely patterned thymocyte phenotype, polyclonal TR, indolent course",
                ],
              ].map((r) => (
                <tr
                  key={r[1]}
                  className="align-top odd:bg-white even:bg-teal-50/40"
                >
                  {r.map((v, i) => (
                    <td
                      key={i}
                      className="border border-teal-100 p-3 leading-6"
                    >
                      {i === 1 ? <strong>{v}</strong> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-6 text-teal-950">
          <strong>Core principle:</strong> Architectural distortion, high Ki-67,
          immunoblasts, or limited antigen loss do not independently establish
          lymphoma. Confirm whether the atypical cells are truly neoplastic and
          whether the clinical distribution fits the proposed entity.
        </p>
      </section>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label
            htmlFor="tll-search"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Search diagnoses, markers, morphology, or mutations
          </label>
          <input
            id="tll-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: LANA, IgG4, CD8, TdT, double-negative T cells..."
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
        </div>
        <div className="sm:w-80">
          <label
            htmlFor="tll-group"
            className="mb-1 block text-sm font-semibold text-slate-700"
          >
            Category
          </label>
          <select
            id="tll-group"
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
      <div className="mb-3 flex justify-between text-xs text-slate-500">
        <span>{filtered.length} diagnostic entities / categories</span>
        <span>Expand a diagnosis for the full workup.</span>
      </div>
      <div className="space-y-3">
        {filtered.map((e, i) => {
          const expanded = open.includes(e.name);
          return (
            <article
              key={e.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(e.name)}
                aria-expanded={expanded}
                className="flex w-full items-start gap-3 p-4 text-left hover:bg-slate-50 sm:p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-slate-950">
                    {e.name}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {e.group}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-600">
                    {e.clue}
                  </span>
                </span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-600">
                  {expanded ? "− Hide" : "＋ Details"}
                </span>
              </button>
              {expanded && (
                <div className="border-t border-slate-200 p-4 sm:p-6">
                  <Section title="Clinical Profile">
                    <p className="text-sm leading-6 text-slate-700">
                      {e.clinical}
                    </p>
                  </Section>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Section title="Essential Diagnostic Criteria">
                        <Bullets items={e.criteria} />
                      </Section>
                      <Section title="Histopathology">
                        <Bullets items={e.hist} />
                      </Section>
                    </div>
                    <div>
                      <Section title="Immunophenotype">
                        <Bullets items={e.ihc} />
                      </Section>
                      <Section title="Molecular Pathology">
                        <Bullets items={e.molecular} />
                      </Section>
                      <Section title="Differential Diagnosis">
                        <Bullets items={e.differential} />
                      </Section>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-sm text-slate-500">
            No matching entities. Try another term or category.
          </div>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic reference for tumor-like lymphocytic lesions.
        Correlate morphology, immunophenotype, molecular findings, and clinical
        distribution.
      </footer>
    </main>
  );
}
