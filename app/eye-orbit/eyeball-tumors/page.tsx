"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  category: string;
  clinical: string;
  criteria: string;
  histo: string;
  diff: string;
  molecular: string;
};

const entities: Entity[] = [
  {
    name: "Ectopic tissue",
    category: "Benign developmental lesion",
    clinical:
      "Usually congenital; infancy or childhood; iris/ciliary body, often nasal, temporal, or inferior; well-circumscribed nonpigmented mass, sometimes cystic.",
    criteria:
      "Normal lacrimal or thyroid tissue in an abnormal intraocular location; no cytologic atypia or mitotic activity; low Ki-67.",
    histo:
      "Lacrimal tissue forms acini with eosinophilic granules and may contain ducts; thyroid tissue forms follicles with or without colloid; architecture resembles the native gland; bland epithelial cells.",
    diff: "Medulloepithelioma: primitive neuroepithelial cords and rosettes; metastatic carcinoma: atypia, destructive growth, and clinical history.",
    molecular: "No established diagnostic molecular test.",
  },
  {
    name: "Implantation cyst",
    category: "Benign cystic lesion",
    clinical:
      "Congenital cases are incidental; acquired cysts occur months to years after penetrating trauma or intraocular surgery; typically inferior or superonasal midperipheral iris.",
    criteria:
      "Cyst lined by non-atypical surface-type squamous epithelium, with or without keratinization or goblet cells; correlate acquired lesions with prior trauma or surgery.",
    histo:
      "Concentric layers of stratified squamous epithelium; variable epithelial thickness; keratinization may be present; goblet cells may be present.",
    diff: "Pigmented epithelial cyst: single layer of pigmented posterior iris epithelium; uveal melanoma: solid atypical melanocytic proliferation; inflammatory cyst: fluid accumulation without a squamous epithelial lining.",
    molecular: "No diagnostic molecular alteration established.",
  },
  {
    name: "Pigmented epithelial cyst",
    category: "Benign cystic lesion",
    clinical:
      "Usually young adults; peripheral iris, occasionally free-floating in anterior chamber or vitreous; dark-brown cysts may be incidental or detected after dilation.",
    criteria:
      "Cyst lined by bland posterior iris pigment epithelium; distinguish from a solid melanocytic lesion by imaging and histology.",
    histo:
      "Single layer of cuboidal or columnar pigmented epithelial cells; no stromal melanocytic proliferation.",
    diff: "Implantation cyst: multilayered squamous lining; cystic nevus or melanoma: stromal melanocytic component; drug-associated cysts may be small and pupillary-margin based.",
    molecular: "No diagnostic molecular alteration established.",
  },
  {
    name: "Lisch nodule",
    category: "Benign hamartoma",
    clinical:
      "Usually children with NF1; multiple, bilateral, small, minimally elevated tan-to-cream nodules, often on the inferior iris.",
    criteria:
      "Bland spindle and/or ovoid melanocytes on the anterior iris surface; no mitoses or prominent nucleoli; at least two nodules are a diagnostic feature of NF1.",
    histo:
      "Dome-shaped plaques of haphazardly arranged spindle melanocytes; occasional rounded cells and melanophages; S100-positive; low proliferative activity.",
    diff: "Iris mammillations: more regular, diffuse surface elevations; iris nevus: usually a more discrete cellular melanocytic proliferation.",
    molecular:
      "Germline NF1 inactivation with RAS pathway dysregulation underlies the syndrome; lesion testing is not routinely indicated.",
  },
  {
    name: "Ocular melanocytosis",
    category: "Benign developmental melanocytic proliferation",
    clinical:
      "Congenital, usually unilateral; sclera, uvea, and sometimes periocular skin/orbit; iris heterochromia and slate-blue/gray scleral pigmentation; may be associated with glaucoma.",
    criteria:
      "Increased numbers of heavily pigmented, cytologically bland melanocytes in sclera and uvea; no mitotic activity; assess thickened areas for melanoma.",
    histo:
      "Spindle, bipolar, or dendritic melanocytes between scleral lamellae and within uveal stroma; melanocytes may be heavily pigmented; no destructive growth.",
    diff: "Diffuse uveal melanoma: atypia, increased cellularity, mitoses, and destructive growth; conjunctival melanosis: limited to conjunctival tissues.",
    molecular:
      "GNAQ or GNA11 mutations have been identified in some cases; these are not by themselves evidence of melanoma.",
  },
  {
    name: "Iris nevus",
    category: "Benign melanocytic neoplasm",
    clinical:
      "Usually detected in young or middle adulthood; mean age about 51 years; often inferior iris; small, circumscribed pigmented or nonpigmented spot/nodule; no strong sex predilection.",
    criteria:
      "Bland iris stromal melanocytic proliferation, usually spindle-cell predominant; low mitotic activity; retained nuclear BAP1 supports nevus but does not exclude melanoma on its own.",
    histo:
      "Spindle to rounded polygonal melanocytes with small nuclei and inconspicuous nucleoli; Melan-A, S100, and SOX10 positive; HMB45 usually focal; Ki-67 low; nuclear BAP1 retained in most.",
    diff: "Iris melanoma: greater cellularity, spindle B or epithelioid cells, prominent nucleoli, mitoses, angle invasion; metastasis and nonmelanocytic iris tumors are clinical alternatives.",
    molecular:
      "GNAQ/GNA11 and less commonly NRAS, PTEN, KIT, or TP53 alterations; BAP1 or EIF1AX alterations may occur in borderline/uncertain-potential lesions.",
  },
  {
    name: "Iris melanoma",
    category: "Malignant melanocytic neoplasm",
    clinical:
      "Usually adults; most often inferior iris; enlarging pigmented or amelanotic nodule, diffuse color change, corectopia, ectropion uveae, hyphema, or secondary glaucoma; 3–5% of uveal melanomas.",
    criteria:
      "Atypical, highly cellular melanocytic tumor arising in iris; spindle B and/or epithelioid cells, mitotic activity, stromal invasion, angle seeding, or circumferential growth support malignancy.",
    histo:
      "Spindle B cells show clumped peripheral chromatin and prominent nucleoli; epithelioid cells are discohesive with abundant eosinophilic cytoplasm and prominent nucleoli; may be spindle, mixed, or epithelioid; Melan-A, S100, HMB45, and SOX10 positive; BAP1 nuclear loss may occur.",
    diff: "Iris nevus: bland cells, low cellularity, no destructive invasion; metastatic melanoma: clinical history and often different immunophenotypic/molecular context; melanocytoma: heavily pigmented bland polygonal cells.",
    molecular:
      "GNAQ, GNA11, EIF1AX, SF3B1, and BAP1 alterations; monosomy 3 and 8q gain may occur. Prognostic meaning of some copy-number changes in iris melanoma is less established.",
  },
  {
    name: "Choroidal and ciliary body nevus",
    category: "Benign melanocytic neoplasm",
    clinical:
      "Usually asymptomatic; choroid, commonly postequatorial; typically under 5 mm diameter and under 1 mm thick; ciliary body lesions are often clinically occult.",
    criteria:
      "Small, flat or shallow dome-shaped melanocytic lesion; drusen/halo and minimal subretinal fluid or orange pigment favor nevus; no cytologic malignancy if sampled.",
    histo:
      "Bland spindle and polygonal melanocytes with inconspicuous nucleoli; variable pigmentation; may show drusen-related RPE changes, choriocapillaris attenuation, and photoreceptor/RPE alterations.",
    diff: "Uveal melanoma: thickness over 2 mm, subretinal fluid, orange lipofuscin, symptoms, optic-disc proximity, hollowness, or growth; metastasis and melanocytoma are additional considerations.",
    molecular:
      "GNAQ or GNA11 mutations are common but do not distinguish nevus from melanoma; BAP1 nuclear expression is generally retained.",
  },
  {
    name: "Uveal melanocytoma",
    category: "Benign melanocytic neoplasm",
    clinical:
      "Any age; iris, ciliary body, choroid, or optic nerve head; deeply pigmented dark-brown to black lesion, sometimes with secondary glaucoma or cataract.",
    criteria:
      "Deeply pigmented melanocytic tumor composed of large polygonal cells with abundant melanin; bland nuclei after bleaching; absent or very low mitotic activity and Ki-67.",
    histo:
      "Large polygonal cells with dense intracytoplasmic melanin obscuring nuclei; bleaching reveals small bland central nuclei and inconspicuous nucleoli; melanocytic markers positive; BAP1 retained; Ki-67 very low.",
    diff: "Uveal melanoma: nuclear atypia, mitoses, higher Ki-67, possible BAP1 loss; pigmented epithelial neoplasm: cytokeratin-positive and melanocytic-marker negative.",
    molecular:
      "GNAQ mutations have been reported; BAP1 alterations may accompany rare malignant transformation but are not typical.",
  },
  {
    name: "Bilateral diffuse uveal melanocytic proliferation",
    category: "Paraneoplastic syndrome",
    clinical:
      "Usually older adults, median age approximately 58–65 years; bilateral diffuse choroidal involvement, often pan-uveal; rapidly progressive bilateral visual loss, exudative retinal detachment, cataracts; associated with extraocular carcinoma.",
    criteria:
      "Bilateral diffuse proliferation of bland melanocytes in a patient with an extraocular malignancy; choriocapillaris is spared; low mitotic activity and low Ki-67; correlate with characteristic RPE changes.",
    histo:
      "Predominantly spindle melanocytes with elongated nuclei, inconspicuous nucleoli, and scant pigment; melan-A, HMB45, and SOX10 positive; PRAME negative and nuclear BAP1 retained in reported cases.",
    diff: "Diffuse uveal melanoma: cytologic atypia, choriocapillaris effacement, mitoses, and melanoma-type molecular changes; metastatic carcinoma: epithelial tumor cells.",
    molecular:
      "No consistent defining genomic alteration; GNAQ, GNA11, and BRAF V600E mutations have not been reported in this syndrome.",
  },
  {
    name: "Choroidal and ciliary body melanoma",
    category: "Malignant melanocytic neoplasm",
    clinical:
      "Usually adults, predominantly fair-skinned populations; choroid most common, ciliary body often occult; may be asymptomatic or cause photopsia, floaters, visual loss, retinal detachment, or secondary glaucoma.",
    criteria:
      "Primary malignant uveal melanocytic tumor; spindle B and/or epithelioid cytology, mitoses, destructive growth, and characteristic clinical/imaging findings; assess extrascleral and optic nerve extension.",
    histo:
      "Spindle A/B and epithelioid cell types; epithelioid cells have abundant eosinophilic cytoplasm and prominent nucleoli; variable pigmentation; Melan-A, S100, HMB45, and SOX10 positive; BAP1 loss may be seen in high-risk tumors.",
    diff: "Nevus: smaller, thinner, chronicity features, bland cytology; metastasis: often creamy, multiple/bilateral, and systemic primary; melanocytoma: heavily pigmented bland polygonal cells.",
    molecular:
      "GNAQ/GNA11 driver mutations; BAP1 loss/alteration, monosomy 3, and 8q gain are associated with metastatic risk; SF3B1 and EIF1AX define additional molecular subsets.",
  },
  {
    name: "Astrocytic tumors of the retina",
    category: "Glial neoplasm/hamartomatous spectrum",
    clinical:
      "Often children or young adults; retinal or optic-disc-based lesions; may be incidental, calcified, yellow-white, or associated with tuberous sclerosis complex (TSC).",
    criteria:
      "Astrocytic proliferation with appropriate clinical/radiologic context; distinguish circumscribed retinal astrocytic hamartoma from infiltrative or diffuse glioma.",
    histo:
      "Mature astrocytes with fibrillary processes in hamartoma; calcification may be prominent; GFAP and other glial markers support lineage; assess atypia and mitotic activity in suspected neoplasm.",
    diff: "Retinoblastoma: small round blue cells and necrosis; reactive gliosis: associated retinal injury and no discrete neoplastic mass; retinal vascular lesions: prominent vascular channels.",
    molecular:
      "TSC1/TSC2 pathway alterations are relevant to syndromic retinal astrocytic hamartomas; no single routine molecular test is required.",
  },
  {
    name: "Nodular and massive retinal gliosis",
    category: "Reactive glial proliferation",
    clinical:
      "Usually adults with longstanding retinal disease, trauma, inflammation, or retinal detachment; unilateral nodular or mass-like retinal lesion, sometimes mimicking malignancy.",
    criteria:
      "Well-circumscribed or massive reactive glial proliferation in a chronically damaged retina; no convincing malignant cytology or infiltrative neoplastic pattern.",
    histo:
      "Dense proliferation of reactive astrocytes with fibrillary processes; GFAP positive; variable Rosenthal fibers and degenerative changes; mitoses and significant atypia are generally absent.",
    diff: "Retinal astrocytic tumor: more discrete neoplastic architecture; retinoblastoma: primitive neuroblastic cells; medulloepithelioma: primitive neuroepithelial tubules/rosettes.",
    molecular: "No established diagnostic molecular alteration.",
  },
  {
    name: "Retinocytoma",
    category: "Benign/low-grade retinoblastoma-spectrum lesion",
    clinical:
      "Usually children or young adults; unilateral or bilateral retinal lesion, often discovered incidentally or in relatives of patients with retinoblastoma; may be calcified and partially regressed.",
    criteria:
      "Retinoblastoma-like lesion with benign cytology, photoreceptor differentiation, and extensive regression; absence of active proliferative malignant component is key.",
    histo:
      "Small round cells with bland nuclei, fleurettes/photoreceptor differentiation, calcification, and areas of necrosis or gliosis; low proliferative activity.",
    diff: "Retinoblastoma: viable small blue cells, brisk mitoses, apoptosis and necrosis; retinal astrocytic hamartoma: glial cells and calcification without photoreceptor rosettes.",
    molecular:
      "RB1 pathway inactivation is central; germline RB1 status has implications for the patient and family.",
  },
  {
    name: "Retinoblastoma",
    category: "Malignant embryonal retinal tumor",
    clinical:
      "Almost exclusively young children; usually presents before age 5; unilateral or bilateral; leukocoria and strabismus are classic findings.",
    criteria:
      "Malignant small round blue-cell tumor of retina; Flexner-Wintersteiner rosettes or fleurettes may be present; necrosis, calcification, and high mitotic/apoptotic activity support diagnosis.",
    histo:
      "Sheets of small cells with scant cytoplasm, hyperchromatic nuclei, brisk mitoses and apoptosis; rosettes and photoreceptor differentiation may occur; necrosis and dystrophic calcification common; synaptophysin and other neuronal markers may be positive.",
    diff: "Retinocytoma: bland cells and regression; medulloepithelioma: ciliary body origin and neuroepithelial tubules; metastatic neuroblastoma: clinical context and distinct pattern.",
    molecular:
      "Biallelic RB1 inactivation; germline RB1 variants in heritable cases. MYCN amplification can drive a subset of RB1-wildtype tumors.",
  },
  {
    name: "Hamartoma of the retinal pigment epithelium",
    category: "Benign hamartoma",
    clinical:
      "Usually congenital or detected in childhood; focal, sharply circumscribed, deeply pigmented retinal lesion, often juxtapapillary or macular; may cause visual disturbance if central.",
    criteria:
      "Localized disorganized proliferation of RPE with associated retinal and choroidal changes; sharply demarcated lesion with no malignant cytology.",
    histo:
      "Hypertrophic, heavily pigmented RPE cells with irregular multilayering; associated retinal gliosis and architectural disorganization; no destructive malignant invasion.",
    diff: "Congenital hypertrophy of RPE: flat, uniform RPE enlargement with lacunae; RPE adenoma: expansile tumor mass with feeder vessels and retinal invasion.",
    molecular: "No routinely useful diagnostic molecular alteration.",
  },
  {
    name: "Congenital hypertrophy of the retinal pigment epithelium",
    category: "Benign developmental lesion",
    clinical:
      "Congenital or recognized in childhood/adulthood; usually solitary, flat, sharply demarcated, pigmented fundus lesion, commonly peripheral; often incidental.",
    criteria:
      "Flat, well-circumscribed RPE lesion with enlarged pigmented cells and characteristic depigmented lacunae; no mass-forming growth.",
    histo:
      "Uniformly enlarged, densely pigmented RPE cells; outer retina may be attenuated; lacunae show reduced or absent pigmentation; no significant atypia or mitoses.",
    diff: "RPE hamartoma: irregular multilayered RPE with retinal disorganization; reactive RPE hyperplasia: irregular pigment clumps associated with underlying injury; RPE adenoma: elevated mass.",
    molecular: "No diagnostic molecular alteration established.",
  },
  {
    name: "Reactive hyperplasia of the retinal pigment epithelium",
    category: "Reactive lesion",
    clinical:
      "Any age; any retinal location; associated with trauma, inflammation, retinal detachment, hemorrhage, degeneration, or radiation; dark pigmented deposits, sometimes spiculated along vessels.",
    criteria:
      "Non-neoplastic RPE proliferation associated with an identifiable or occult retinal/choroidal insult; lack of a destructive expansile tumor is important.",
    histo:
      "Irregular clusters, cords, or nodules of pigmented RPE cells; variable epithelial metaplasia and fibrosis; cytologic atypia is generally limited.",
    diff: "RPE adenoma/adenocarcinoma: discrete expansile mass, atypia and invasion; choroidal melanoma: melanocytic tumor beneath retina.",
    molecular: "No established diagnostic molecular alteration.",
  },
  {
    name: "Adenoma and adenocarcinoma of the retinal pigment epithelium",
    category: "Benign or malignant epithelial neoplasm",
    clinical:
      "Usually adults; solitary unilateral dark gray/black or occasionally amelanotic retinal mass, often peripheral; blurred vision or incidental finding; may mimic choroidal melanoma.",
    criteria:
      "RPE-derived epithelial neoplasm; adenocarcinoma shows destructive invasion, significant atypia, and/or metastasis; correlate with characteristic elevated mass and retinal vascular supply.",
    histo:
      "Pigmented epithelial cells in nests, cords, tubules, or gland-like structures; adenomas are more circumscribed and bland; carcinomas show pleomorphism, mitoses, necrosis, and invasion; cytokeratin and RPE markers support lineage.",
    diff: "Choroidal melanoma: melanocytic markers and choroidal origin; reactive RPE hyperplasia: associated injury and non-expansile pattern; ciliary epithelial tumor: ciliary body origin.",
    molecular:
      "No single defining molecular alteration established for routine diagnosis.",
  },
  {
    name: "Reactive epithelial hyperplasia of the ciliary epithelium",
    category: "Reactive lesion",
    clinical:
      "Usually in severely injured, inflamed, operated, or chronically detached eyes; pars plana/pars plicata; typically incidental in enucleated eyes.",
    criteria:
      "Increased ciliary epithelial cells in response to injury or inflammation; often accompanied by fibrous metaplasia; no destructive tumor growth.",
    histo:
      "Hyperplastic ciliary epithelial layers with variable papillary or gland-like configuration; fibrous metaplasia may be prominent; cytologic atypia is absent or mild.",
    diff: "Ciliary epithelial adenoma: discrete expansile mass; nodular hyperplasia: localized, well-circumscribed proliferation without preceding injury.",
    molecular: "No diagnostic molecular alteration established.",
  },
  {
    name: "Nodular hyperplasia of the ciliary epithelium",
    category: "Benign hyperplasia",
    clinical:
      "Older adults; usually incidental, small lesion confined to one ciliary process in pars plicata; rarely causes sectoral cataract or mimics a ciliary body mass.",
    criteria:
      "Well-circumscribed proliferation of inner nonpigmented ciliary epithelium without antecedent injury; no infiltrative growth or significant atypia.",
    histo:
      "Nodular epithelial proliferation of nonpigmented ciliary epithelium; may form papillary or adenoma-like structures; bland cytology and low proliferative activity.",
    diff: "Reactive ciliary epithelial hyperplasia: history of injury/inflammation and more diffuse changes; ciliary body adenoma: larger expansile neoplasm.",
    molecular: "No diagnostic molecular alteration established.",
  },
  {
    name: "Glioneuronal hamartoma of the ciliary body",
    category: "Benign developmental hamartoma",
    clinical:
      "Congenital or detected in infancy; usually temporal ciliary body, often extends to iris/retina; may accompany chorioretinal coloboma, microphthalmia, cataract, or elevated IOP.",
    criteria:
      "Developmental glioneuronal lesion at the optic cup margin; identify both glial and neuronal differentiation and associated ocular malformation.",
    histo:
      "Mature glial and neuronal elements in a disorganized hamartomatous proliferation; glial component GFAP-positive; neuronal markers highlight neuronal elements.",
    diff: "Medulloepithelioma: primitive multilayered neuroepithelial cords/tubules; retinoblastoma: malignant small round cells; optic nerve glioma: nerve-centered infiltrative glial tumor.",
    molecular:
      "No defining molecular alteration; not associated with NF1 or NF2.",
  },
  {
    name: "Adenoma and adenocarcinoma of the ciliary body",
    category: "Benign or malignant epithelial neoplasm",
    clinical:
      "Usually adults; ciliary body, often hidden behind iris; visual disturbance, cataract, lens subluxation, inflammation, or secondary glaucoma; pigmented or nonpigmented mass.",
    criteria:
      "Neoplasm arising from pigmented or nonpigmented ciliary epithelium; adenocarcinoma supported by invasion, significant atypia, mitoses, or extraocular extension.",
    histo:
      "Epithelial nests, cords, tubules, or papillary structures; variable pigmentation; adenomas are bland and circumscribed; adenocarcinomas show infiltrative growth, atypia, mitoses, and necrosis; cytokeratin positive.",
    diff: "Medulloepithelioma: primitive neuroepithelial tubules and rosettes; melanocytoma/melanoma: melanocytic markers; reactive/nodular epithelial hyperplasia: noninvasive and usually smaller.",
    molecular: "No routinely established defining molecular alteration.",
  },
  {
    name: "Medulloepithelioma of the ciliary body",
    category: "Embryonal neuroepithelial tumor",
    clinical:
      "Usually children, commonly diagnosed before age 10; ciliary body, often unilateral; leukocoria, poor vision, cataract, glaucoma, or painful red eye.",
    criteria:
      "Primitive neuroepithelial tumor resembling the embryonic medullary epithelium of the optic cup; distinguish nonteratoid from teratoid forms and assess malignant features.",
    histo:
      "Multilayered neuroepithelial cords, tubules, and rosettes; hyaluronic-acid-rich stroma; heterologous tissues may occur in teratoid tumors; malignant cases show atypia, mitoses, necrosis, and invasion.",
    diff: "Retinoblastoma: retinal origin and small round-cell phenotype; ciliary epithelial adenoma: mature epithelial differentiation; glioneuronal hamartoma: mature, non-embryonal elements.",
    molecular:
      "DICER1 alterations are associated with some cases; consider germline DICER1 predisposition in appropriate clinical settings.",
  },
  {
    name: "Optic nerve choristoma",
    category: "Benign developmental lesion",
    clinical:
      "Rare; reported from childhood to adulthood; optic nerve intraorbital, intracanalicular, or intracranial segments; painless progressive visual loss and optic atrophy; MRI may show fat signal suppressed by fat-saturation.",
    criteria:
      "Heterotopic smooth muscle and adipose tissue within or around optic nerve; developmental/malformative lesion rather than a glial or meningeal neoplasm.",
    histo:
      "Mature adipose tissue and well-differentiated smooth muscle bundles; no atypia or mitotic activity.",
    diff: "Optic nerve glioma: glial neoplasm; meningioma: meningothelial whorls and calcification; lipoma: mature fat without smooth muscle component.",
    molecular: "No diagnostic molecular alteration established.",
  },
  {
    name: "Gliomas of the optic nerve",
    category: "Glial neoplasm",
    clinical:
      "Usually children for pilocytic astrocytoma, often associated with NF1; optic nerve/chiasm; visual loss, proptosis, strabismus, or optic atrophy; bilateral disease suggests NF1.",
    criteria:
      "Optic pathway glioma most often pilocytic astrocytoma; evaluate for diffuse high-grade glioma when atypia, mitoses, necrosis, or microvascular proliferation are present.",
    histo:
      "Pilocytic tumors show biphasic piloid and microcystic areas, Rosenthal fibers, and eosinophilic granular bodies; GFAP and OLIG2 positive; high-grade gliomas show increased cellularity, mitoses, necrosis, and vascular proliferation.",
    diff: "Optic nerve sheath meningioma: meningothelial cells and whorls; choristoma: mature fat/smooth muscle; metastatic tumor: clinical history and epithelial/other lineage markers.",
    molecular:
      "Pilocytic astrocytoma often shows MAPK pathway activation, including KIAA1549::BRAF fusion; NF1-associated tumors have NF1 pathway loss; IDH status is relevant in adult-type diffuse gliomas.",
  },
  {
    name: "Medulloepithelioma of the optic disc and optic nerve",
    category: "Embryonal neuroepithelial tumor",
    clinical:
      "Very rare; usually orbital optic nerve in children; presents as a large orbital mass, sometimes with visual loss or proptosis; may extend to orbital apex/CNS.",
    criteria:
      "Primitive embryonal neuroepithelial tumor with multilayered cords and tubules; optic nerve location is unusual and should prompt careful distinction from optic pathway glioma.",
    histo:
      "Multilayered neuroepithelial cords, tubules, and rosettes resembling optic cup medullary epithelium; teratoid lesions contain heterologous mesenchymal elements; malignant lesions show atypia, mitoses, necrosis, and invasion.",
    diff: "Optic nerve glioma: astrocytic morphology and GFAP/OLIG2 phenotype; retinoblastoma: small round-cell tumor of retina; metastatic embryonal tumor: clinical and molecular context.",
    molecular:
      "DICER1 alterations may be relevant; evaluate for DICER1 tumor predisposition when clinically indicated.",
  },
  {
    name: "Meningioma of the optic nerve",
    category: "Meningothelial neoplasm",
    clinical:
      "Usually middle-aged women; typically unilateral intraorbital optic nerve sheath; progressive visual loss, optic atrophy, optociliary shunt vessels, sometimes proptosis/strabismus; bilateral pediatric cases may be associated with NF2.",
    criteria:
      "Meningothelial tumor centered on optic nerve sheath; distinguish primary sheath tumor from secondary extension of intracranial meningioma.",
    histo:
      "Meningothelial whorls, syncytial cells, psammoma bodies in some cases; EMA, SSTR2A, and progesterone receptor may be positive; low-grade lesions generally show low mitotic activity.",
    diff: "Optic nerve glioma: GFAP/OLIG2-positive glial tumor; lymphoma/metastasis: cytologic and lineage-marker differences; optic nerve choristoma: mature adipose and smooth muscle.",
    molecular:
      "NF2 alterations are common in meningiomas; assess relevant molecular grade-defining alterations when indicated.",
  },
  {
    name: "Melanocytoma of the optic disc and optic nerve",
    category: "Benign melanocytic neoplasm",
    clinical:
      "Usually adults; typically unilateral optic disc or adjacent anterior optic nerve; deeply pigmented black-brown lesion, usually asymptomatic but may cause visual-field defect or rarely vision loss.",
    criteria:
      "Densely pigmented melanocytic tumor composed of bland polygonal cells; melanin bleaching is often needed to assess nuclei; absent or very low mitotic activity.",
    histo:
      "Large polygonal cells with abundant coarse melanin obscuring small bland nuclei; melanocytic markers positive; low Ki-67; BAP1 generally retained.",
    diff: "Uveal melanoma: atypia, mitoses, necrosis, BAP1 loss; optic nerve sheath meningioma: nonpigmented meningothelial proliferation; metastatic melanoma: clinical history and morphology.",
    molecular:
      "GNAQ/GNA11 pathway mutations may occur; BAP1 alterations are reported in rare malignant transformation.",
  },
];

const sections = [
  { key: "clinical", label: "Clinical Profile" },
  { key: "criteria", label: "Essential Diagnostic Criteria" },
  { key: "histo", label: "Histopathology and Immunophenotype" },
  { key: "diff", label: "Differential Diagnosis" },
  { key: "molecular", label: "Molecular Pathology" },
] as const;

function bullets(value: string) {
  return value
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function EyeballTumorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(entities.map((e) => e.category)))],
    [],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const matchesCategory = category === "All" || e.category === category;
      const haystack = [
        e.name,
        e.category,
        e.clinical,
        e.criteria,
        e.histo,
        e.diff,
        e.molecular,
      ]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!q || haystack.includes(q));
    });
  }, [query, category]);

  const allVisibleExpanded =
    filtered.length > 0 && filtered.every((e) => expanded.has(e.name));
  const toggle = (name: string) =>
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  const toggleAll = () =>
    setExpanded((current) => {
      const next = new Set(current);
      if (allVisibleExpanded) filtered.forEach((e) => next.delete(e.name));
      else filtered.forEach((e) => next.add(e.name));
      return next;
    });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
          Ophthalmic Pathology
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Eyeball Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference to tumors and tumor-like lesions of
          the uveal tract, retina, retinal pigment epithelium, ciliary
          epithelium, optic disc, and optic nerve.
        </p>
      </header>

      <section className="mb-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Diagnostic Overview by Anatomic Category
          </h2>
          <p className="mt-2 max-w-5xl text-sm leading-6 text-slate-600">
            Intraocular tumors are best approached by their site of origin. The
            three anatomic groups below differ in their dominant cell lineages,
            biologic behavior, and key diagnostic considerations.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <h3 className="font-semibold text-slate-900">
              1. Tumors of the Uveal Tract
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Iris, ciliary body, and choroid; melanocytic lesions predominate.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-white text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Tumor group</th>
                  <th className="px-4 py-3">Overview</th>
                  <th className="px-4 py-3">Representative entities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Developmental lesions, cysts, and hamartomas
                  </td>
                  <td className="px-4 py-3">
                    Usually benign; include ectopic glandular tissue, epithelial
                    cysts, and NF1-associated iris hamartomas.
                  </td>
                  <td className="px-4 py-3">
                    Ectopic tissue, implantation cyst, pigmented epithelial
                    cyst, Lisch nodule
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Benign melanocytic proliferations
                  </td>
                  <td className="px-4 py-3">
                    Common in the uvea; range from flat nevi to heavily
                    pigmented melanocytoma. Ocular melanocytosis is a risk
                    factor for uveal melanoma.
                  </td>
                  <td className="px-4 py-3">
                    Ocular melanocytosis, iris nevus, choroidal/ciliary body
                    nevus, uveal melanocytoma
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Malignant melanocytic tumors
                  </td>
                  <td className="px-4 py-3">
                    Uveal melanoma arises in the iris, ciliary body, or choroid.
                    Metastatic risk is substantially greater for ciliary body
                    and choroidal tumors than for iris melanoma.
                  </td>
                  <td className="px-4 py-3">
                    Iris melanoma, choroidal and ciliary body melanoma
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Paraneoplastic proliferation
                  </td>
                  <td className="px-4 py-3">
                    Bilateral diffuse, usually bland melanocytic proliferation
                    associated with an underlying extraocular malignancy and
                    progressive visual loss.
                  </td>
                  <td className="px-4 py-3">
                    Bilateral diffuse uveal melanocytic proliferation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <h3 className="font-semibold text-slate-900">
              2. Tumors of the Retina and Neuroepithelium
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Neurosensory retina, retinal pigment epithelium, and iris/ciliary
              body neuroepithelium.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-white text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Tumor group</th>
                  <th className="px-4 py-3">Overview</th>
                  <th className="px-4 py-3">Representative entities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Retinal glial lesions
                  </td>
                  <td className="px-4 py-3">
                    Astrocytic tumors are generally indolent and may be
                    syndromic; reactive retinal gliosis can form a mass and
                    mimic a neoplasm.
                  </td>
                  <td className="px-4 py-3">
                    Astrocytic tumors of the retina, nodular and massive retinal
                    gliosis
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Retinoblastoma spectrum
                  </td>
                  <td className="px-4 py-3">
                    Retinocytoma is a regressed or low-proliferation lesion in
                    the RB1-associated spectrum; retinoblastoma is the principal
                    malignant intraocular tumor of childhood.
                  </td>
                  <td className="px-4 py-3">Retinocytoma, retinoblastoma</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Retinal pigment epithelial lesions
                  </td>
                  <td className="px-4 py-3">
                    Include congenital and hamartomatous proliferations,
                    reactive hyperplasia, and very rare true epithelial
                    neoplasms.
                  </td>
                  <td className="px-4 py-3">
                    RPE hamartoma, congenital hypertrophy of RPE, reactive RPE
                    hyperplasia, RPE adenoma/adenocarcinoma
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Ciliary epithelial lesions
                  </td>
                  <td className="px-4 py-3">
                    Span reactive or nodular hyperplasia, developmental
                    hamartoma, and true epithelial neoplasms.
                  </td>
                  <td className="px-4 py-3">
                    Reactive/nodular ciliary epithelial hyperplasia,
                    glioneuronal hamartoma, ciliary body adenoma/adenocarcinoma
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Embryonal neuroepithelial tumor
                  </td>
                  <td className="px-4 py-3">
                    A rare congenital tumor, usually arising in the ciliary
                    body, with primitive neuroepithelial differentiation.
                  </td>
                  <td className="px-4 py-3">
                    Medulloepithelioma of the ciliary body
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <h3 className="font-semibold text-slate-900">
              3. Tumors of the Optic Disc and Optic Nerve
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Includes developmental lesions and tumors of glial, meningeal,
              melanocytic, and neuroepithelial origin.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-white text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Tumor group</th>
                  <th className="px-4 py-3">Overview</th>
                  <th className="px-4 py-3">Representative entities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Developmental choristoma
                  </td>
                  <td className="px-4 py-3">
                    Rare benign malformative lesion composed of heterotopic
                    mature tissues within or around the optic nerve.
                  </td>
                  <td className="px-4 py-3">Optic nerve choristoma</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Glial tumors</td>
                  <td className="px-4 py-3">
                    Most are low-grade astrocytic tumors in children and are
                    frequently associated with NF1; high-grade gliomas are
                    uncommon.
                  </td>
                  <td className="px-4 py-3">Gliomas of the optic nerve</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">
                    Embryonal neuroepithelial tumor
                  </td>
                  <td className="px-4 py-3">
                    Exceptionally rare; may arise in the optic disc or nerve and
                    show primitive neuroepithelial differentiation.
                  </td>
                  <td className="px-4 py-3">
                    Medulloepithelioma of the optic disc and optic nerve
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Meningeal tumor</td>
                  <td className="px-4 py-3">
                    Arises from the optic nerve sheath; often presents with
                    slowly progressive visual impairment.
                  </td>
                  <td className="px-4 py-3">Optic nerve meningioma</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Melanocytic tumor</td>
                  <td className="px-4 py-3">
                    Usually a benign, deeply pigmented lesion of the optic disc;
                    rare malignant transformation has been described.
                  </td>
                  <td className="px-4 py-3">
                    Melanocytoma of the optic disc and optic nerve
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search diagnoses, morphology, markers, or differential diagnoses..."
          className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          aria-label="Search eyeball tumors"
        />
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-sky-500"
          aria-label="Filter by diagnostic category"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={toggleAll}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          {allVisibleExpanded ? "Collapse all" : "Expand all"}
        </button>
      </section>

      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          {filtered.length} of {entities.length} diagnostic entities
        </span>
        <span>Search includes all diagnostic fields</span>
      </div>

      <section className="space-y-3">
        {filtered.map((entity, index) => {
          const isOpen = expanded.has(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(entity.name)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-slate-900">
                      {entity.name}
                    </h2>
                    <p className="mt-1 text-xs text-slate-500">
                      {entity.category}
                    </p>
                  </div>
                </div>
                <span
                  className="shrink-0 text-xl text-slate-400"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <div className="grid gap-5 lg:grid-cols-2">
                    {sections.map((section) => (
                      <section
                        key={section.key}
                        className={
                          section.key === "histo" || section.key === "diff"
                            ? "lg:col-span-2"
                            : ""
                        }
                      >
                        <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-sky-800">
                          {section.label}
                        </h3>
                        <ul className="space-y-2 pl-5 text-sm leading-6 text-slate-700 list-disc marker:text-sky-600">
                          {bullets(entity[section.key]).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center text-sm text-slate-500">
            No matching diagnoses. Try a different search term or category.
          </div>
        )}
      </section>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Diagnostic interpretation should integrate histomorphology,
        immunophenotype, anatomic location, ophthalmic examination, and imaging.
        Molecular findings should be interpreted in the appropriate
        clinicopathologic context.
      </footer>
    </main>
  );
}
