"use client";

import { useMemo, useState } from "react";

type Entity = {
  name: string;
  genes: string;
  inheritance: string;
  profile: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: string[];
  molecular: string[];
  clues: string[];
};
type Pathway = {
  id: string;
  title: string;
  function: string;
  genes: string;
  mechanism: string;
  syndromes: string;
  entities: Entity[];
};

const pathways: Pathway[] = [
  {
    id: "growth-factor-receptors",
    title: "Growth Factor Receptors",
    function:
      "Cell-surface receptors bind extracellular growth factors and transmit signals through intracellular kinase domains to regulate proliferation, survival, migration, and differentiation.",
    genes: "MET · RET · ALK · PHOX2B · FGFR1",
    mechanism:
      "Constitutive receptor activation is typically caused by germline gain-of-function variants (MET, RET, ALK). PHOX2B is a developmental transcription factor rather than a receptor. FGFR1-related encephalocraniocutaneous lipomatosis is usually caused by postzygotic mosaic activating variants.",
    syndromes:
      "Hereditary papillary renal carcinoma · MEN2 · Hereditary neuroblastoma · Encephalocraniocutaneous lipomatosis",
    entities: [
      {
        name: "Hereditary Papillary Renal Carcinoma",
        genes: "MET",
        inheritance: "Autosomal dominant; incomplete penetrance",
        profile: [
          "Usually presents in the fourth to sixth decades.",
          "No consistent sex predilection is established.",
          "Bilateral, multifocal tumors arise in the renal cortex.",
          "Often detected during imaging or evaluation of a family history of renal cancer.",
        ],
        criteria: [
          "Bilateral and multifocal papillary renal neoplasms, or multiple affected relatives with papillary renal cell carcinoma.",
          "Confirm a germline activating MET variant.",
          "Assess the possibility of additional hereditary renal cancer syndromes when morphology is atypical.",
        ],
        histology: [
          "Papillary and tubulopapillary adenomas and carcinomas may coexist.",
          "Papillae are lined by a single layer of cuboidal cells with scant basophilic cytoplasm.",
          "Foamy macrophages are common; psammoma bodies may be present.",
          "Biphasic alveolar-squamoid morphology is reported in a subset.",
        ],
        ihc: [
          "Tumors generally show a renal epithelial phenotype; no immunostain substitutes for germline testing.",
        ],
        differential: [
          "FH-deficient renal cell carcinoma: prominent inclusion-like nucleoli and perinucleolar halos; evaluate FH and 2SC.",
          "Other papillary renal neoplasms: integrate morphology, immunophenotype, and molecular findings.",
        ],
        molecular: [
          "Germline activating missense variants cluster in the MET kinase domain.",
          "Chromosome 7 gain or trisomy 7 may be present in tumors but is not diagnostic of hereditary disease.",
        ],
        clues: [
          "Bilateral, multifocal papillary renal tumors, especially with a family history.",
          "Multiple papillary adenomas accompanying papillary renal cell carcinoma.",
        ],
      },
      {
        name: "Multiple Endocrine Neoplasia Type 2",
        genes: "RET",
        inheritance: "Autosomal dominant; de novo variants occur",
        profile: [
          "Medullary thyroid carcinoma may present in childhood or adulthood, depending on the RET variant.",
          "Both sexes are affected.",
          "Thyroid C-cell disease is central; pheochromocytomas arise in the adrenal medulla.",
          "MEN2A may include hyperparathyroidism; MEN2B is associated with mucosal neuromas and a marfanoid habitus.",
        ],
        criteria: [
          "Medullary thyroid carcinoma, C-cell neoplasia, or a characteristic MEN2-associated tumor pattern.",
          "Germline activating RET pathogenic variant.",
          "Evaluate for pheochromocytoma before thyroid or parathyroid surgery.",
          "MEN2B: look for mucosal neuromas, intestinal ganglioneuromatosis, and marfanoid features.",
        ],
        histology: [
          "Medullary thyroid carcinoma is often bilateral and multifocal, with background C-cell proliferations.",
          "MTC may show nested, trabecular, spindle-cell, follicular, or other patterns.",
          "Amyloid derived from calcitonin is common but not obligatory.",
          "MEN2-associated pheochromocytomas may be bilateral and accompanied by adrenal medullary hyperplasia.",
          "MEN2B may show mucosal neuromas and gastrointestinal ganglioneuromatosis.",
        ],
        ihc: [
          "MTC: calcitonin, CEA, synaptophysin, chromogranin, and INSM1 are typically positive.",
          "MTC is negative for thyroglobulin; monoclonal PAX8 is generally negative.",
          "Pheochromocytoma: chromogranin and synaptophysin positive; sustentacular cells may highlight with S100 or SOX10.",
        ],
        differential: [
          "Sporadic MTC: hereditary disease is favored by multifocality, bilateral disease, C-cell proliferations, young age, or family history.",
          "Parathyroid lesions and other neuroendocrine tumors: use site-specific markers and clinical context.",
          "MEN1 and other hereditary endocrine syndromes: distinguish by tumor spectrum and germline testing.",
        ],
        molecular: [
          "Germline RET gain-of-function variants cause MEN2.",
          "MEN2A commonly involves extracellular cysteine codons; codon 634 is a well-established high-risk site.",
          "MEN2B is most often associated with p.Met918Thr in the kinase domain.",
          "Variant-specific risk stratification guides timing of thyroidectomy and surveillance.",
        ],
        clues: [
          "Multifocal or bilateral medullary thyroid carcinoma with C-cell proliferations.",
          "Pheochromocytoma in a patient with MTC.",
          "Mucosal neuromas, thickened corneal nerves, or intestinal ganglioneuromatosis.",
        ],
      },
      {
        name: "Hereditary Neuroblastoma",
        genes: "ALK; PHOX2B",
        inheritance:
          "Usually autosomal dominant predisposition with variable penetrance; PHOX2B-related disease may have distinct inheritance patterns",
        profile: [
          "Often presents in infancy or early childhood.",
          "Both sexes are affected.",
          "Primary tumors arise along the sympathetic chain, most often in the adrenal medulla or paraspinal sites.",
          "Multifocal or familial neuroblastoma may occur.",
        ],
        criteria: [
          "Neuroblastoma in multiple relatives, multifocal primary tumors, or unusually early presentation should prompt consideration of predisposition.",
          "Confirm a germline pathogenic variant in ALK or PHOX2B.",
          "Assess for congenital central hypoventilation or Hirschsprung disease when PHOX2B is implicated.",
        ],
        histology: [
          "Neuroblastoma shows small round blue cells with neuropil and, when present, Homer Wright rosettes.",
          "Tumors range from poorly differentiated to differentiating neuroblastoma and ganglioneuroblastoma.",
          "The morphology may be indistinguishable from sporadic counterparts.",
        ],
        ihc: [
          "Neuroblastic cells commonly express PHOX2B, synaptophysin, chromogranin, and neural markers.",
          "Tyrosine hydroxylase may support sympathoadrenal differentiation.",
        ],
        differential: [
          "Other pediatric small round cell tumors: use a panel including PHOX2B, synaptophysin, desmin, myogenin, CD45, and molecular testing as appropriate.",
          "Ganglioneuroblastoma and ganglioneuroma: identify the amount and distribution of mature ganglion cells and Schwannian stroma.",
        ],
        molecular: [
          "Germline activating ALK variants are an established cause of familial neuroblastoma.",
          "PHOX2B variants include polyalanine repeat expansions and sequence variants; phenotype may include congenital central hypoventilation and Hirschsprung disease.",
          "Tumor ALK alterations do not by themselves establish a germline predisposition.",
        ],
        clues: [
          "Familial, multifocal, or unusually early-onset neuroblastoma.",
          "Neuroblastoma with congenital central hypoventilation or Hirschsprung disease.",
        ],
      },
      {
        name: "Encephalocraniocutaneous Lipomatosis",
        genes: "FGFR1",
        inheritance: "Usually sporadic; postzygotic mosaicism",
        profile: [
          "Congenital or early-childhood presentation.",
          "Both sexes are affected.",
          "Characteristic involvement includes scalp, face, eye, and central nervous system.",
          "Unilateral or segmental distribution is common.",
        ],
        criteria: [
          "Characteristic congenital craniofacial and ocular lesions with intracranial abnormalities.",
          "A postzygotic activating FGFR1 variant in affected tissue supports the diagnosis.",
          "A negative blood test does not exclude mosaic disease.",
        ],
        histology: [
          "Nevus psiloliparus shows mature adipose tissue replacing dermal collagen, often with sparse or absent pilosebaceous units.",
          "Ocular choristomas and other hamartomatous lesions may be present.",
          "Associated intracranial lesions include lipomas and other developmental abnormalities.",
        ],
        ihc: [
          "No defining immunohistochemical profile; diagnosis is clinicopathologic and molecular.",
        ],
        differential: [
          "Oculocerebrocutaneous syndrome: compare the pattern of ocular, skin, and brain abnormalities.",
          "Proteus syndrome and other mosaic overgrowth disorders: assess distribution and associated malformations.",
        ],
        molecular: [
          "Postzygotic activating FGFR1 variants are detected more readily in affected tissue than in peripheral blood.",
          "Variant allele fraction is often low and tissue dependent.",
        ],
        clues: [
          "Congenital segmental scalp lipomatous nevus with ocular and CNS abnormalities.",
          "Suspected mosaic syndrome despite negative blood-based testing.",
        ],
      },
    ],
  },
  {
    id: "gpcr",
    title: "G Protein–Coupled Receptor Pathway",
    function:
      "Ligand-activated G protein–coupled receptors regulate adenylyl cyclase, phospholipase C, and intracellular second messengers such as cAMP and calcium.",
    genes: "GCGR · GNAS · GNAQ",
    mechanism:
      "Disease mechanisms include loss of glucagon receptor function (GCGR) and postzygotic activating mosaic variants in GNAS or GNAQ.",
    syndromes:
      "Glucagon cell hyperplasia and neoplasia · McCune–Albright syndrome · Sturge–Weber syndrome",
    entities: [
      {
        name: "Glucagon Cell Hyperplasia and Neoplasia",
        genes: "GCGR",
        inheritance: "Autosomal recessive",
        profile: [
          "Usually recognized in adulthood.",
          "Both sexes may be affected.",
          "Involves pancreatic islets, particularly the glucagon-producing alpha-cell compartment.",
          "May present with hyperglucagonemia and a pancreatic neuroendocrine neoplasm.",
        ],
        criteria: [
          "Pancreatic alpha-cell hyperplasia or glucagon-producing neuroendocrine neoplasia in the appropriate clinical setting.",
          "Demonstrate biallelic pathogenic GCGR variants when establishing the inherited syndrome.",
          "Correlate serum glucagon levels with the pancreatic pathology.",
        ],
        histology: [
          "Diffuse or nodular proliferation of pancreatic alpha cells may be present.",
          "Well-differentiated pancreatic neuroendocrine tumors may develop.",
        ],
        ihc: [
          "Glucagon highlights alpha-cell proliferation and glucagon-producing tumor cells.",
          "Synaptophysin, chromogranin, and INSM1 support neuroendocrine differentiation.",
        ],
        differential: [
          "Sporadic glucagonoma: assess for alpha-cell hyperplasia and biallelic GCGR variants.",
          "Other pancreatic neuroendocrine tumors: hormone expression and clinical syndrome help define the functional type.",
        ],
        molecular: [
          "Biallelic loss-of-function GCGR variants impair glucagon signaling and drive compensatory alpha-cell hyperplasia.",
          "Germline testing is required to establish the inherited condition.",
        ],
        clues: [
          "Marked alpha-cell hyperplasia or glucagon-producing pancreatic neoplasia with hyperglucagonemia.",
        ],
      },
      {
        name: "McCune–Albright Syndrome",
        genes: "GNAS",
        inheritance: "Postzygotic mosaicism; not typically inherited",
        profile: [
          "Usually presents in childhood.",
          "Both sexes are affected.",
          "Classic sites include bone, skin, and endocrine organs.",
          "Features include polyostotic fibrous dysplasia, café-au-lait pigmentation, and endocrine hyperfunction, especially precocious puberty.",
        ],
        criteria: [
          "Characteristic combination of fibrous dysplasia, café-au-lait macules, and one or more hyperfunctioning endocrinopathies.",
          "A postzygotic activating GNAS variant supports the diagnosis.",
          "Testing affected tissue may be more sensitive than testing blood.",
        ],
        histology: [
          "Fibrous dysplasia shows irregular curvilinear woven bone trabeculae in a bland fibroblastic stroma.",
          "Osteoblastic rimming is typically absent or inconspicuous.",
          "Endocrine lesions reflect hyperfunction and may include thyroid, pituitary, adrenal, and gonadal abnormalities.",
        ],
        ihc: [
          "No syndrome-specific IHC profile; evaluate individual lesions using organ-specific panels.",
        ],
        differential: [
          "Other causes of polyostotic fibrous dysplasia: integrate skin and endocrine findings.",
          "Other mosaic overgrowth syndromes: compare distribution and associated organ involvement.",
        ],
        molecular: [
          "Activating GNAS variants, commonly affecting codon 201 and less often codon 227, increase cAMP signaling.",
          "The mosaic distribution explains variable clinical involvement and low variant allele fractions.",
        ],
        clues: [
          "Fibrous dysplasia with café-au-lait pigmentation or endocrine hyperfunction.",
          "A mosaic phenotype with segmental or asymmetric distribution.",
        ],
      },
      {
        name: "Sturge–Weber Syndrome",
        genes: "GNAQ",
        inheritance: "Postzygotic mosaicism; not typically inherited",
        profile: [
          "Congenital or early-childhood presentation.",
          "Both sexes are affected.",
          "Facial capillary malformation often follows the trigeminal distribution.",
          "Leptomeningeal vascular malformations may cause seizures, neurologic deficits, and glaucoma.",
        ],
        criteria: [
          "Facial capillary malformation with characteristic leptomeningeal and/or ocular involvement.",
          "A postzygotic activating GNAQ variant can provide molecular support.",
          "Clinical and imaging findings establish the distribution of disease.",
        ],
        histology: [
          "Leptomeningeal lesions consist of abnormal thin-walled vascular channels.",
          "Cerebral involvement may be associated with cortical atrophy and calcification.",
          "Cutaneous lesions show ectatic dermal capillaries.",
        ],
        ihc: [
          "Endothelial markers such as CD31 and ERG highlight vascular channels but are not syndrome-specific.",
        ],
        differential: [
          "Isolated port-wine stain: lacks the characteristic CNS and ocular involvement.",
          "Other capillary malformation syndromes: compare distribution and associated overgrowth or vascular anomalies.",
        ],
        molecular: [
          "Postzygotic activating GNAQ variants, commonly p.Arg183Gln, are found in affected tissues.",
          "Low-level mosaicism may require testing of affected tissue.",
        ],
        clues: [
          "Facial capillary malformation with seizures, leptomeningeal vascular lesions, or glaucoma.",
        ],
      },
    ],
  },
  {
    id: "ras-mapk",
    title: "RAS/MAPK Pathway",
    function:
      "RAS proteins transmit signals from receptor tyrosine kinases to RAF–MEK–ERK, regulating cell proliferation, differentiation, and survival. Negative regulators and scaffold proteins constrain pathway activity.",
    genes:
      "NF1 · NF2 · HRAS · KRAS · NRAS · PTPN11 · SOS1 · RAF1 · RIT1 · KIT · PDGFRA",
    mechanism:
      "RASopathies most often result from germline gain-of-function variants in pathway activators or loss-of-function variants in negative regulators. NF1 and NF2 are tumor suppressor genes and commonly require a somatic second hit in tumors.",
    syndromes:
      "NF1 · NF2-related schwannomatosis · Costello syndrome · Noonan syndrome · Schimmelpenning–Feuerstein–Mims syndrome · GIST predisposition",
    entities: [
      {
        name: "Neurofibromatosis Type 1",
        genes: "NF1",
        inheritance:
          "Autosomal dominant; frequent de novo variants; mosaicism occurs",
        profile: [
          "Usually recognized in childhood.",
          "Both sexes are affected.",
          "Skin, peripheral nerves, optic pathway, and other CNS sites are involved.",
          "Clinical findings include café-au-lait macules, intertriginous freckling, neurofibromas, and plexiform neurofibromas.",
        ],
        criteria: [
          "Clinical diagnosis requires at least two revised diagnostic criteria, including pigmentary, neural, ocular, osseous, familial, or molecular findings.",
          "A heterozygous pathogenic NF1 variant in apparently normal tissue is one diagnostic criterion.",
          "A plexiform neurofibroma strongly suggests NF1 and warrants assessment for associated disease.",
        ],
        histology: [
          "Neurofibroma contains wavy spindle cells in a loose myxoid or collagenous stroma.",
          "Plexiform neurofibroma expands multiple nerve fascicles in a multinodular pattern.",
          "Atypical neurofibromatous neoplasm of uncertain biologic potential shows at least two worrisome features, including atypia, hypercellularity, architectural loss, or increased mitotic activity.",
          "MPNST shows malignant spindle cells, mitotic activity, and often necrosis.",
        ],
        ihc: [
          "Neurofibroma: Schwannian cells express S100 and SOX10; CD34 highlights a characteristic stromal network.",
          "MPNST may show reduced or patchy S100/SOX10 expression.",
          "Loss of H3K27me3 and p16 may support MPNST in the appropriate context.",
        ],
        differential: [
          "Schwannoma: usually circumscribed, with Antoni A/B areas and Verocay bodies; lacks the typical plexiform neurofibroma architecture.",
          "Schwannomatosis: multiple schwannomas without the characteristic NF1 pigmentary phenotype.",
          "ANNUBP versus MPNST: integrate cytologic atypia, mitotic activity, necrosis, and architecture.",
        ],
        molecular: [
          "NF1 is a RAS GTPase-activating protein; loss increases RAS signaling.",
          "Germline loss-of-function variants include nonsense, frameshift, splice-site, and deletion variants.",
          "Biallelic NF1 inactivation is common in associated tumors.",
          "A 17q11.2 microdeletion involving NF1 may produce a more severe phenotype.",
        ],
        clues: [
          "Plexiform neurofibroma, multiple cutaneous neurofibromas, or café-au-lait macules with axillary freckling.",
          "MPNST arising in or near a plexiform neurofibroma.",
        ],
      },
      {
        name: "NF2-Related Schwannomatosis",
        genes: "NF2",
        inheritance:
          "Autosomal dominant; de novo variants and mosaicism are common",
        profile: [
          "Often presents in adolescence or early adulthood.",
          "Both sexes are affected.",
          "Bilateral vestibular schwannomas are the hallmark; meningiomas and spinal ependymomas also occur.",
          "Hearing loss, tinnitus, imbalance, and ocular abnormalities are common presentations.",
        ],
        criteria: [
          "Bilateral vestibular schwannomas, multiple meningiomas, or a characteristic combination of schwannomas and other NF2-associated lesions.",
          "Apply current clinical and molecular diagnostic criteria.",
          "Consider mosaic NF2 when disease is asymmetric or testing of blood is negative.",
        ],
        histology: [
          "Schwannomas may be multinodular or plexiform.",
          "Meningiomas include multiple histologic subtypes, commonly fibrous.",
          "Spinal ependymomas are often multiple and slow growing.",
        ],
        ihc: [
          "Schwannoma: diffuse S100 and SOX10 expression.",
          "Meningioma: EMA and SSTR2A are commonly positive.",
          "Ependymoma: GFAP and dot-like EMA may be present.",
        ],
        differential: [
          "SMARCB1- or LZTR1-related schwannomatosis: distinguish by tumor pattern, family history, and molecular testing.",
          "Sporadic vestibular schwannoma: usually unilateral and not accompanied by multiple meningiomas.",
        ],
        molecular: [
          "NF2 encodes merlin, a tumor suppressor linking membrane proteins to the cytoskeleton and regulating multiple growth pathways.",
          "Germline loss-of-function variants include truncating and splice-site variants; tumors commonly acquire a second hit.",
          "Mosaicism is frequent among de novo cases and may require tumor-based variant analysis.",
        ],
        clues: [
          "Bilateral vestibular schwannomas.",
          "Multiple meningiomas with schwannomas or spinal ependymomas.",
        ],
      },
      {
        name: "Costello Syndrome",
        genes: "HRAS",
        inheritance:
          "Usually de novo autosomal dominant; germline mosaicism is rare",
        profile: [
          "Congenital or early-childhood presentation.",
          "Both sexes are affected.",
          "Characteristic craniofacial, cardiac, cutaneous, and musculoskeletal findings.",
          "Predisposition includes rhabdomyosarcoma, neuroblastoma, and bladder carcinoma.",
        ],
        criteria: [
          "Characteristic multisystem phenotype with developmental delay, feeding difficulties, and distinctive facial features.",
          "Confirm a germline activating HRAS variant.",
          "Tumors should be evaluated in the context of the syndrome-specific spectrum.",
        ],
        histology: [
          "Associated tumors are generally morphologically similar to their sporadic counterparts.",
          "Rhabdomyosarcoma is an important associated malignancy in childhood.",
        ],
        ihc: [
          "Use lineage- and site-specific immunohistochemical panels for the individual neoplasm.",
        ],
        differential: [
          "Noonan and cardio-facio-cutaneous syndromes: compare facial, cardiac, skin, and developmental features and the causal gene.",
          "Other causes of childhood rhabdomyosarcoma: integrate clinical phenotype and germline testing.",
        ],
        molecular: [
          "Germline activating HRAS variants increase RAS/MAPK signaling.",
          "Variants commonly affect residues involved in GTPase regulation.",
        ],
        clues: [
          "Childhood malignancy in a patient with characteristic Costello phenotype.",
          "Rhabdomyosarcoma or neuroblastoma with congenital multisystem findings.",
        ],
      },
      {
        name: "Noonan Syndrome and Related RASopathies",
        genes:
          "PTPN11 · SOS1 · RAF1 · RIT1 · KRAS · NRAS · BRAF and other pathway genes",
        inheritance: "Usually autosomal dominant; de novo variants are common",
        profile: [
          "Often recognized prenatally, at birth, or in childhood.",
          "Both sexes are affected.",
          "Characteristic findings include short stature, facial features, congenital heart disease, and variable developmental differences.",
          "Some genotypes carry increased risk of juvenile myelomonocytic leukemia or other tumors.",
        ],
        criteria: [
          "Characteristic phenotype, especially pulmonary valve stenosis or hypertrophic cardiomyopathy with typical facial and growth features.",
          "Identify a pathogenic germline variant in a RAS/MAPK pathway gene.",
          "Interpret tumor risk according to the specific molecular subtype.",
        ],
        histology: [
          "Associated hematologic and solid tumors generally retain their usual histologic classification.",
          "Juvenile myelomonocytic leukemia may show a myeloproliferative pattern with monocytosis.",
        ],
        ihc: [
          "No syndrome-specific IHC profile; use standard diagnostic panels for the associated neoplasm.",
        ],
        differential: [
          "Costello syndrome and cardio-facio-cutaneous syndrome: overlap is substantial; genotype and phenotype refine classification.",
          "Sporadic juvenile myelomonocytic leukemia: evaluate for germline RASopathy and somatic cooperating alterations.",
        ],
        molecular: [
          "Most Noonan-associated variants activate RAS/MAPK signaling through gain-of-function in pathway components or impaired negative regulation.",
          "PTPN11 is the most frequent Noonan syndrome gene; genotype influences phenotype and tumor risk.",
        ],
        clues: [
          "Juvenile myelomonocytic leukemia or unusual myeloproliferation in a child with Noonan-like features.",
          "Congenital heart disease and characteristic phenotype accompanying a tumor.",
        ],
      },
      {
        name: "Schimmelpenning–Feuerstein–Mims Syndrome",
        genes: "HRAS · KRAS · NRAS",
        inheritance: "Postzygotic mosaicism; usually sporadic",
        profile: [
          "Congenital or early-childhood presentation.",
          "Both sexes are affected.",
          "Linear sebaceous nevi, often on the head and neck, are characteristic.",
          "Neurologic, ocular, and skeletal abnormalities may accompany the cutaneous lesions.",
        ],
        criteria: [
          "Epidermal or sebaceous nevus with extracutaneous abnormalities supports the diagnosis.",
          "A postzygotic RAS variant in affected tissue may confirm mosaic disease.",
          "Blood testing may be negative.",
        ],
        histology: [
          "Nevus sebaceus shows epidermal papillomatosis, sebaceous gland hyperplasia, and abnormal follicular development.",
          "Other epidermal nevus patterns may occur depending on the mosaic variant.",
        ],
        ihc: [
          "No syndrome-specific immunophenotype; evaluate secondary tumors with standard panels.",
        ],
        differential: [
          "Isolated nevus sebaceus: lacks the multisystem phenotype.",
          "Other epidermal nevus syndromes: compare neurologic, ocular, and skeletal findings.",
        ],
        molecular: [
          "Postzygotic activating HRAS, KRAS, or NRAS variants produce mosaic RAS/MAPK activation.",
          "Affected skin or other involved tissue is the preferred specimen for molecular testing.",
        ],
        clues: [
          "Extensive or linear nevus sebaceus with neurologic, ocular, or skeletal abnormalities.",
        ],
      },
      {
        name: "Gastrointestinal Stromal Tumor Predisposition Syndrome",
        genes: "KIT · PDGFRA",
        inheritance: "Autosomal dominant in familial forms",
        profile: [
          "May present in adolescence or adulthood; age varies by genotype.",
          "Both sexes are affected.",
          "Multiple GISTs arise in the stomach or small intestine.",
          "Familial cases may have cutaneous hyperpigmentation, mast-cell abnormalities, or other KIT-associated findings.",
        ],
        criteria: [
          "Multifocal or familial GIST, particularly at a young age.",
          "Confirm a germline activating KIT or PDGFRA variant.",
          "Distinguish inherited predisposition from sporadic tumor-only mutations.",
        ],
        histology: [
          "GIST may show spindle-cell, epithelioid, or mixed morphology.",
          "Familial KIT-associated disease may feature multifocal tumors and interstitial cells of Cajal hyperplasia.",
        ],
        ihc: [
          "KIT (CD117) and DOG1 are commonly positive.",
          "CD34 is frequently positive, particularly in spindle-cell tumors.",
        ],
        differential: [
          "SDH-deficient GIST: often gastric, epithelioid or mixed, with loss of SDHB.",
          "Other mesenchymal tumors: use DOG1, KIT, desmin, SMA, S100, and molecular findings.",
        ],
        molecular: [
          "Germline activating KIT or PDGFRA variants predispose to multifocal GIST.",
          "Tumor testing should distinguish germline variants from additional somatic driver alterations.",
        ],
        clues: [
          "Multiple GISTs, especially with family history or young age.",
          "GIST accompanied by diffuse interstitial cell of Cajal hyperplasia.",
        ],
      },
    ],
  },
  {
    id: "pka",
    title: "PKA Signaling Pathway",
    function:
      "The cAMP-dependent protein kinase (PKA) pathway is activated when cAMP binds regulatory subunits and releases catalytic subunits to phosphorylate downstream targets.",
    genes: "PRKAR1A · PDE8B · PDE11A · PIK3CA",
    mechanism:
      "Loss of PKA regulatory restraint or impaired cAMP degradation increases pathway activity. PIK3CA-related overgrowth is biologically a PI3K pathway disorder and is grouped separately in the functional description.",
    syndromes: "Carney complex · PIK3CA-related overgrowth spectrum",
    entities: [
      {
        name: "Carney Complex",
        genes: "PRKAR1A; less commonly PDE8B or PDE11A susceptibility variants",
        inheritance: "Autosomal dominant; variable expression",
        profile: [
          "Often presents in adolescence or young adulthood.",
          "Both sexes are affected.",
          "Common sites include skin, heart, adrenal cortex, pituitary, thyroid, and gonads.",
          "Features include spotty pigmentation, cardiac myxomas, and multiple endocrine tumors.",
        ],
        criteria: [
          "Characteristic combination of spotty pigmentation, cardiac or cutaneous myxomas, and endocrine overactivity or tumors.",
          "Apply established clinical diagnostic criteria.",
          "A germline pathogenic PRKAR1A variant supports the diagnosis; a negative result does not exclude it.",
        ],
        histology: [
          "Cardiac myxoma shows stellate or polygonal cells in abundant myxoid stroma.",
          "Primary pigmented nodular adrenocortical disease shows multiple small pigmented cortical nodules with intervening atrophic cortex.",
          "Pituitary and thyroid lesions vary by organ and may be multiple.",
        ],
        ihc: [
          "Myxoma cells may express calretinin.",
          "PRKAR1A immunostaining may show loss in associated tumors, but retained staining does not exclude the syndrome.",
        ],
        differential: [
          "Sporadic cardiac myxoma: multiple or recurrent myxomas and associated pigmentation/endocrinopathy favor Carney complex.",
          "MEN1: compare endocrine tumor spectrum and skin/cardiac manifestations.",
          "Other causes of adrenal Cushing syndrome: distinguish nodular cortical disease from diffuse or solitary lesions.",
        ],
        molecular: [
          "PRKAR1A encodes the PKA regulatory subunit R1α; germline loss-of-function causes increased cAMP/PKA signaling.",
          "Tumors often show somatic inactivation of the remaining PRKAR1A allele.",
          "PDE8B and PDE11A variants have been associated with a subset of cases; clinical interpretation requires caution.",
        ],
        clues: [
          "Cardiac myxoma in a young patient or multiple/recurrent cardiac myxomas.",
          "Spotty lentigines with endocrine tumors or primary pigmented nodular adrenocortical disease.",
        ],
      },
      {
        name: "PIK3CA-Related Overgrowth Spectrum",
        genes: "PIK3CA",
        inheritance: "Postzygotic mosaicism; usually sporadic",
        profile: [
          "Congenital or early-childhood onset.",
          "Both sexes are affected.",
          "Segmental overgrowth may involve adipose tissue, muscle, bone, skin, brain, and vascular/lymphatic structures.",
          "Phenotypes include CLOVES, MCAP, and related overgrowth patterns.",
        ],
        criteria: [
          "Congenital or early-onset segmental overgrowth with characteristic vascular, adipose, skeletal, or CNS abnormalities.",
          "Identify a postzygotic activating PIK3CA variant in affected tissue.",
          "A negative blood test does not exclude the diagnosis.",
        ],
        histology: [
          "Lesions show tissue-specific overgrowth, including adipose, vascular, lymphatic, and fibrous components.",
          "Histology depends on the sampled lesion and is not independently diagnostic of the syndrome.",
        ],
        ihc: [
          "No syndrome-specific immunophenotype; characterize vascular and lymphatic lesions with lineage-appropriate markers.",
        ],
        differential: [
          "PTEN hamartoma tumor syndrome: consider generalized macrocephaly and mucocutaneous findings rather than predominantly segmental mosaic overgrowth.",
          "Other vascular malformation/overgrowth syndromes: compare distribution and molecular findings.",
        ],
        molecular: [
          "Postzygotic activating PIK3CA variants drive PI3K–AKT–mTOR signaling.",
          "Affected tissue testing with high-depth sequencing improves detection of low-level mosaicism.",
        ],
        clues: [
          "Segmental congenital overgrowth with combined adipose, vascular, lymphatic, or skeletal abnormalities.",
          "CLOVES- or MCAP-like phenotype with a tissue-restricted mosaic variant.",
        ],
      },
    ],
  },
  {
    id: "wnt-tgf",
    title: "WNT/TGF-β Signaling Pathway",
    function:
      "WNT signaling regulates cell fate and proliferation through β-catenin. TGF-β/BMP signaling regulates differentiation and tissue homeostasis; several hereditary polyposis syndromes arise from disruption of these regulatory networks.",
    genes: "APC · AXIN2 · RNF43 · WT1 · MEN1 · STK11 · CDH1 · CTNNA1 · GREM1",
    mechanism:
      "Most listed syndromes involve tumor-suppressor loss, altered cell adhesion, or increased expression of pathway antagonists. The pathway grouping reflects overlapping developmental and growth-control networks rather than one linear cascade.",
    syndromes:
      "FAP · GAPPS · AXIN2-related polyposis · Serrated polyposis · WT1-related syndromes · MEN1 · Peutz–Jeghers · Hereditary diffuse gastric/lobular breast cancer · Hereditary mixed polyposis",
    entities: [
      {
        name: "Familial Adenomatous Polyposis",
        genes: "APC",
        inheritance: "Autosomal dominant",
        profile: [
          "Colorectal adenomas typically begin in adolescence.",
          "Both sexes are affected.",
          "Colon and rectum are the principal sites; upper GI tract and extraintestinal sites may also be involved.",
          "Untreated classic FAP carries a near-certain risk of colorectal carcinoma.",
        ],
        criteria: [
          "Numerous colorectal adenomas, often hundreds to thousands, or a known familial APC pathogenic variant.",
          "Consider attenuated FAP with fewer adenomas and later presentation.",
          "Assess for extracolonic manifestations, including duodenal adenomas, desmoid tumors, and osteomas.",
        ],
        histology: [
          "Conventional adenomas show dysplastic glandular epithelium with tubular, tubulovillous, or villous architecture.",
          "Fundic gland polyps are common in the stomach.",
          "Desmoid-type fibromatosis may occur, particularly intra-abdominally.",
        ],
        ihc: [
          "Nuclear β-catenin may be increased in APC-deficient neoplasms but is not specific for germline FAP.",
          "IHC for mismatch repair proteins is useful when evaluating alternative hereditary colorectal cancer syndromes.",
        ],
        differential: [
          "MUTYH-associated polyposis: usually autosomal recessive; test MUTYH.",
          "Lynch syndrome: fewer adenomas and mismatch repair deficiency in tumors.",
          "Serrated polyposis: lesions have serrated architecture rather than conventional adenomatous dysplasia.",
        ],
        molecular: [
          "Germline loss-of-function APC variants cause constitutive WNT/β-catenin signaling.",
          "A somatic second hit in APC is usually required for tumor development.",
          "Tumor testing may show loss of the wild-type allele or a second pathogenic variant.",
        ],
        clues: [
          "Hundreds of conventional colorectal adenomas.",
          "Desmoid-type fibromatosis or characteristic extracolonic lesions in a patient with adenomatous polyposis.",
        ],
      },
      {
        name: "Gastric Adenocarcinoma and Proximal Polyposis of the Stomach",
        genes: "APC promoter 1B",
        inheritance: "Autosomal dominant",
        profile: [
          "Usually presents in adulthood.",
          "Both sexes are affected.",
          "Polyposis is concentrated in the gastric body and fundus, with relative sparing of the antrum and duodenum.",
          "Family history of proximal gastric polyposis or gastric cancer is common.",
        ],
        criteria: [
          "Proximal gastric polyposis with characteristic distribution and histology.",
          "Exclude classic FAP and other gastric polyposis conditions.",
          "Identify a germline APC promoter 1B pathogenic variant or regulatory alteration.",
        ],
        histology: [
          "Numerous fundic gland polyps involve the body and fundus.",
          "Dysplasia may arise within fundic gland polyps.",
          "Gastric adenocarcinoma may develop.",
        ],
        ihc: [
          "No syndrome-specific IHC profile; evaluate dysplasia and carcinoma using standard gastric pathology panels.",
        ],
        differential: [
          "FAP: often includes colorectal adenomatous polyposis and duodenal adenomas.",
          "Sporadic fundic gland polyps: usually lack the striking familial proximal gastric polyposis pattern.",
          "Other hereditary gastric cancer syndromes: integrate histology and germline testing.",
        ],
        molecular: [
          "Germline APC promoter 1B variants reduce APC expression in gastric tissue.",
          "Regulatory variants may be missed by routine coding-region sequencing; ensure promoter-region coverage.",
        ],
        clues: [
          "Dense fundic gland polyposis restricted to the gastric body and fundus, especially in a family with gastric cancer.",
        ],
      },
      {
        name: "AXIN2-Related Polyposis",
        genes: "AXIN2",
        inheritance: "Autosomal dominant",
        profile: [
          "Often presents in adulthood, although age is variable.",
          "Both sexes are affected.",
          "Colorectal polyposis is the principal gastrointestinal manifestation.",
          "Tooth agenesis or oligodontia may be a syndromic clue.",
        ],
        criteria: [
          "Multiple colorectal adenomas with a compatible family history.",
          "Dental agenesis in a patient with colorectal polyposis is a useful clue.",
          "Confirm a germline pathogenic AXIN2 variant.",
        ],
        histology: [
          "Colorectal lesions are predominantly conventional adenomas.",
          "Carcinoma may arise in the setting of adenomatous polyposis.",
        ],
        ihc: ["No established syndrome-specific IHC profile."],
        differential: [
          "APC-associated FAP and MUTYH-associated polyposis: distinguish by inheritance, phenotype, and germline testing.",
          "Lynch syndrome: typically lacks extensive adenomatous polyposis.",
        ],
        molecular: [
          "AXIN2 is part of the β-catenin destruction complex.",
          "Germline loss-of-function variants impair negative regulation of WNT signaling.",
        ],
        clues: [
          "Adenomatous colorectal polyposis accompanied by oligodontia or familial tooth agenesis.",
        ],
      },
      {
        name: "Serrated Polyposis Syndrome",
        genes:
          "RNF43 in a subset; most cases are not explained by a single germline gene",
        inheritance: "Often familial; genetic basis is heterogeneous",
        profile: [
          "Usually diagnosed in adulthood.",
          "Both sexes are affected.",
          "Multiple serrated lesions involve the colorectum, often proximally.",
          "May present with screening colonoscopy findings or colorectal cancer.",
        ],
        criteria: [
          "Apply current WHO clinical criteria based on number, size, and distribution of serrated lesions.",
          "Count lesions across colonoscopies and include proximal lesions as specified by the criteria.",
          "Consider germline evaluation in selected patients with strong family history or very early presentation.",
        ],
        histology: [
          "Sessile serrated lesions show distorted, dilated, and horizontally branching crypt bases.",
          "Hyperplastic polyps show serration without the characteristic basal crypt distortion.",
          "Traditional serrated adenomas show ectopic crypt formation and characteristic cytologic features.",
        ],
        ihc: [
          "Mismatch repair protein IHC and MLH1 promoter methylation testing may be relevant in dysplastic lesions or carcinoma, not as a diagnostic test for the syndrome itself.",
        ],
        differential: [
          "Lynch syndrome: assess mismatch repair deficiency and family history.",
          "MUTYH-associated polyposis and other adenomatous polyposis syndromes: compare polyp histology and molecular findings.",
        ],
        molecular: [
          "RNF43 encodes a negative regulator of WNT receptor signaling; germline loss-of-function variants account for a minority of cases.",
          "A negative germline panel does not exclude the clinical diagnosis.",
        ],
        clues: [
          "Multiple proximal sessile serrated lesions meeting cumulative clinical criteria.",
          "Serrated polyposis with colorectal cancer or a strong family history.",
        ],
      },
      {
        name: "WT1-Related Tumor Predisposition Syndrome",
        genes: "WT1",
        inheritance:
          "Usually autosomal dominant or de novo; phenotype depends on variant and chromosomal context",
        profile: [
          "Often presents in infancy or childhood.",
          "Both sexes are affected; genital development may be atypical.",
          "Kidney and genitourinary tract are principal sites.",
          "Associated phenotypes include Wilms tumor predisposition, nephropathy, and disorders of sex development.",
        ],
        criteria: [
          "Wilms tumor with congenital genitourinary abnormalities, nephropathy, or syndromic features.",
          "Confirm a pathogenic WT1 variant or deletion.",
          "Distinguish isolated WT1-related disease from contiguous gene deletion syndromes.",
        ],
        histology: [
          "Wilms tumor shows variable blastemal, epithelial, and stromal components.",
          "Gonadal and renal developmental abnormalities depend on the specific syndrome.",
        ],
        ihc: [
          "WT1 nuclear staining may be present in Wilms tumor but is not a germline test.",
          "Use lineage-specific markers to characterize renal and gonadal lesions.",
        ],
        differential: [
          "Other Wilms tumor predisposition syndromes, including WAGR and Denys–Drash/Frasier spectrum.",
          "Sporadic Wilms tumor: congenital renal/genitourinary findings and family history raise suspicion for germline disease.",
        ],
        molecular: [
          "WT1 encodes a transcriptional regulator essential for renal and gonadal development.",
          "Pathogenic variants include truncating, splice-site, and DNA-binding domain variants; genotype correlates with phenotype.",
          "Chromosome 11p13 deletion involving WT1 and PAX6 causes WAGR syndrome.",
        ],
        clues: [
          "Wilms tumor with genital anomalies, early nephropathy, or atypical renal development.",
        ],
      },
      {
        name: "WAGR Syndrome",
        genes: "WT1 and PAX6 contiguous gene deletion at 11p13",
        inheritance:
          "Usually de novo chromosomal deletion; rare familial rearrangements",
        profile: [
          "Recognized at birth or in early childhood.",
          "Both sexes are affected.",
          "Features include Wilms tumor risk, aniridia, genitourinary abnormalities, and developmental delay.",
          "Renal surveillance begins in childhood.",
        ],
        criteria: [
          "Aniridia with genitourinary abnormalities or developmental delay should prompt evaluation.",
          "Confirm a deletion involving WT1 and PAX6 at 11p13.",
          "Assess for Wilms tumor and renal abnormalities.",
        ],
        histology: [
          "Wilms tumor is the major associated malignancy.",
          "Renal lesions otherwise depend on the specific developmental abnormality.",
        ],
        ihc: [
          "WT1 IHC in a tumor does not establish constitutional deletion status.",
        ],
        differential: [
          "Isolated aniridia: evaluate PAX6 without WT1 deletion.",
          "Other Wilms tumor predisposition syndromes: distinguish by associated congenital features and genomic testing.",
        ],
        molecular: [
          "A contiguous deletion at 11p13 affects WT1 and PAX6.",
          "Chromosomal microarray or equivalent copy-number analysis is useful for diagnosis.",
        ],
        clues: [
          "Congenital aniridia with genitourinary abnormalities or Wilms tumor.",
        ],
      },
      {
        name: "Multiple Endocrine Neoplasia Type 1",
        genes: "MEN1",
        inheritance: "Autosomal dominant",
        profile: [
          "Often presents in adolescence or adulthood.",
          "Both sexes are affected.",
          "Parathyroid, pancreatic/duodenal, and anterior pituitary glands are the classic sites.",
          "Multifocal or multiple endocrine tumors are characteristic.",
        ],
        criteria: [
          "Two or more MEN1-associated endocrine tumors, a known familial pathogenic variant, or a first-degree relative with MEN1 and a compatible lesion.",
          "Evaluate parathyroid, pancreatic/duodenal, and pituitary manifestations.",
          "Consider MEN1 testing in young patients with multiple pancreatic neuroendocrine tumors.",
        ],
        histology: [
          "Parathyroid disease is often multiglandular.",
          "Pancreatic and duodenal neuroendocrine tumors may be multiple and multifocal.",
          "Pituitary neuroendocrine tumors vary by hormone phenotype.",
        ],
        ihc: [
          "Use hormone-specific and neuroendocrine markers to classify individual tumors.",
          "Loss of menin expression may support MEN1-associated tumorigenesis but is not a substitute for germline testing.",
        ],
        differential: [
          "MEN2: medullary thyroid carcinoma and pheochromocytoma are key features; MEN1 is characterized by parathyroid, pituitary, and gastroenteropancreatic tumors.",
          "Sporadic multiglandular endocrine disease: assess age, multiplicity, family history, and germline status.",
        ],
        molecular: [
          "MEN1 encodes menin, a nuclear scaffold protein and tumor suppressor.",
          "Germline loss-of-function variants are followed by somatic inactivation of the second allele in tumors.",
        ],
        clues: [
          "Multiglandular parathyroid disease with pancreatic/duodenal NET or pituitary tumor.",
          "Multiple pancreatic neuroendocrine tumors, especially at a young age.",
        ],
      },
      {
        name: "Peutz–Jeghers Syndrome",
        genes: "STK11 (LKB1)",
        inheritance: "Autosomal dominant",
        profile: [
          "Often presents in childhood or adolescence.",
          "Both sexes are affected.",
          "Hamartomatous polyps predominantly involve the small bowel; mucocutaneous pigmentation affects the lips and oral mucosa.",
          "Patients have increased risk of gastrointestinal and extraintestinal cancers.",
        ],
        criteria: [
          "Characteristic arborizing hamartomatous polyps and mucocutaneous pigmentation.",
          "A germline pathogenic STK11 variant supports the diagnosis.",
          "A family history of Peutz–Jeghers syndrome or characteristic polyps is supportive.",
        ],
        histology: [
          "Polyps show branching, arborizing smooth muscle extending through the lamina propria.",
          "The epithelium is generally nondysplastic unless an associated neoplasm develops.",
        ],
        ihc: [
          "No syndrome-specific IHC profile; evaluate associated neoplasms using standard site-specific panels.",
        ],
        differential: [
          "Juvenile polyps: cystically dilated glands in inflamed stroma without arborizing smooth muscle.",
          "PTEN hamartoma tumor syndrome: compare polyp spectrum, mucocutaneous findings, and germline testing.",
        ],
        molecular: [
          "STK11 encodes LKB1, a serine/threonine kinase regulating cell polarity and AMPK-related energy signaling.",
          "Germline loss-of-function variants predispose to hamartomatous polyposis and malignancy.",
        ],
        clues: [
          "Small-bowel hamartomatous polyp with arborizing smooth muscle.",
          "Mucocutaneous melanotic macules with gastrointestinal polyposis.",
        ],
      },
      {
        name: "Hereditary Diffuse Gastric and Lobular Breast Cancer Syndrome",
        genes: "CDH1 · CTNNA1",
        inheritance: "Autosomal dominant",
        profile: [
          "Gastric cancer may present in early to middle adulthood; breast cancer risk is relevant in women.",
          "Both sexes may develop diffuse gastric cancer; lobular breast cancer occurs in women.",
          "Stomach and breast are the principal sites.",
          "Family history may include diffuse gastric cancer and lobular breast carcinoma.",
        ],
        criteria: [
          "Diffuse-type gastric carcinoma, particularly signet-ring cell carcinoma, in a patient or family meeting testing criteria.",
          "Lobular breast carcinoma with a compatible family history.",
          "Confirm a germline pathogenic CDH1 or CTNNA1 variant.",
        ],
        histology: [
          "Diffuse gastric carcinoma shows discohesive cells, often with signet-ring morphology, infiltrating the gastric wall.",
          "Early lesions may consist of multiple microscopic foci of intramucosal signet-ring cells.",
          "Lobular breast carcinoma shows discohesive cells in single-file or targetoid patterns.",
        ],
        ihc: [
          "Loss of membranous E-cadherin supports CDH1 pathway disruption in diffuse gastric and lobular breast carcinoma.",
          "p120 catenin may show cytoplasmic redistribution when E-cadherin is lost.",
        ],
        differential: [
          "Sporadic diffuse gastric carcinoma: germline testing depends on age, family history, and established testing criteria.",
          "Ductal breast carcinoma: usually retains cohesive architecture and E-cadherin expression.",
          "Other signet-ring cell metastases: correlate with clinical history and organ-specific markers.",
        ],
        molecular: [
          "CDH1 encodes E-cadherin; CTNNA1 encodes α-catenin, which interacts with the E-cadherin complex.",
          "Germline loss-of-function variants impair cell adhesion; tumors commonly show a second hit.",
          "E-cadherin loss by IHC is a clue, not proof of a germline variant.",
        ],
        clues: [
          "Diffuse gastric carcinoma with signet-ring cells, especially at a young age or with family history.",
          "Lobular breast carcinoma in a family with diffuse gastric cancer.",
        ],
      },
      {
        name: "Hereditary Mixed Polyposis Syndrome",
        genes: "GREM1",
        inheritance: "Autosomal dominant",
        profile: [
          "Usually presents in adulthood.",
          "Both sexes are affected.",
          "Colorectal polyps show mixed histologic types.",
          "Family history of colorectal polyposis or cancer is common.",
        ],
        criteria: [
          "Multiple colorectal polyps with mixed adenomatous, hyperplastic/serrated, and juvenile-like features.",
          "Confirm a pathogenic upstream regulatory duplication involving GREM1 when suspected.",
          "Exclude other hereditary polyposis syndromes.",
        ],
        histology: [
          "Polyps show a mixture of conventional adenomatous, serrated, and hamartomatous patterns.",
          "Individual lesions may resemble more common sporadic polyp types.",
        ],
        ihc: ["No syndrome-specific IHC profile."],
        differential: [
          "FAP and MUTYH-associated polyposis: predominantly adenomatous phenotype.",
          "Juvenile polyposis: predominantly juvenile-type hamartomatous polyps.",
          "Serrated polyposis: predominantly serrated lesions.",
        ],
        molecular: [
          "A duplication upstream of GREM1 increases gene expression.",
          "GREM1 encodes a BMP antagonist; increased expression alters BMP/TGF-β signaling.",
          "Testing must assess the relevant regulatory region and copy-number change.",
        ],
        clues: [
          "Familial colorectal polyposis with mixed adenomatous, serrated, and hamartomatous histology.",
        ],
      },
    ],
  },
  {
    id: "hedgehog",
    title: "Hedgehog Signaling Pathway",
    function:
      "Hedgehog ligands bind PTCH receptors and relieve inhibition of SMO, allowing GLI transcription factors to activate developmental and growth programs. SUFU negatively regulates GLI activity.",
    genes: "PTCH1 · PTCH2 · SUFU · GPR161 · SMO · ELP1 · EXT1 · EXT2",
    mechanism:
      "Gorlin syndrome is usually caused by loss of negative regulators PTCH1 or SUFU. Curry–Jones syndrome is associated with mosaic activating SMO variants. Other listed disorders affect developmental regulators or heparan sulfate biosynthesis and influence overlapping signaling systems.",
    syndromes:
      "Gorlin syndrome · Curry–Jones syndrome · ELP1-related medulloblastoma predisposition · Multiple osteochondromas",
    entities: [
      {
        name: "Nevoid Basal Cell Carcinoma Syndrome (Gorlin Syndrome)",
        genes: "PTCH1 · SUFU; rare GPR161-related Gorlin-like phenotype",
        inheritance: "Autosomal dominant; de novo variants are common",
        profile: [
          "Congenital features may be present; basal cell carcinomas usually emerge in adolescence or adulthood.",
          "Both sexes are affected.",
          "Skin, jaw, skeleton, ovaries, and CNS are involved.",
          "Features include multiple basal cell carcinomas, odontogenic keratocysts, palmar/plantar pits, and falx calcification.",
        ],
        criteria: [
          "Apply established major and minor clinical criteria.",
          "Multiple basal cell carcinomas at a young age or odontogenic keratocysts with characteristic skeletal findings should prompt evaluation.",
          "Confirm germline PTCH1 or SUFU pathogenic variant when possible.",
        ],
        histology: [
          "Basal cell carcinomas may be numerous and histologically resemble sporadic tumors.",
          "Odontogenic keratocysts show a keratinizing epithelial lining with palisaded basal cells.",
          "Associated medulloblastomas are typically desmoplastic/nodular or extensively nodular.",
        ],
        ihc: [
          "No single IHC marker establishes the syndrome.",
          "Evaluate individual tumors with standard site-specific panels.",
        ],
        differential: [
          "Multiple sporadic basal cell carcinomas: age, jaw cysts, skeletal findings, and family history are discriminating.",
          "Other inherited BCC predisposition syndromes: correlate phenotype and germline findings.",
        ],
        molecular: [
          "PTCH1 and SUFU are tumor suppressors; germline loss-of-function variants lead to Hedgehog pathway activation.",
          "Tumors commonly acquire inactivation of the remaining allele.",
          "PTCH1 and SUFU sequencing plus deletion/duplication analysis are important; GPR161 is a rare consideration.",
        ],
        clues: [
          "Multiple basal cell carcinomas at a young age.",
          "Odontogenic keratocysts with palmar pits, falx calcification, or childhood desmoplastic medulloblastoma.",
        ],
      },
      {
        name: "Curry–Jones Syndrome",
        genes: "SMO",
        inheritance: "Postzygotic mosaicism; usually sporadic",
        profile: [
          "Congenital or early-childhood presentation.",
          "Both sexes are affected.",
          "Findings include craniosynostosis, polysyndactyly, segmental skin abnormalities, and gastrointestinal anomalies.",
          "Asymmetric or mosaic distribution is characteristic.",
        ],
        criteria: [
          "Characteristic combination of craniofacial, limb, skin, and gastrointestinal abnormalities.",
          "A postzygotic activating SMO variant in affected tissue supports the diagnosis.",
          "Consider mosaicism when blood testing is negative.",
        ],
        histology: [
          "Cutaneous and skeletal lesions vary with the affected tissue.",
          "Associated hamartomatous lesions are not defined by a single histologic pattern.",
        ],
        ihc: ["No syndrome-specific IHC profile."],
        differential: [
          "Other craniosynostosis and limb-patterning syndromes: compare polydactyly pattern and associated anomalies.",
          "Other mosaic overgrowth syndromes: assess tissue distribution and molecular findings.",
        ],
        molecular: [
          "Postzygotic activating SMO variants cause aberrant Hedgehog signaling.",
          "Affected tissue is preferred for detecting low-level mosaicism.",
        ],
        clues: [
          "Craniosynostosis with polysyndactyly and segmental skin or gastrointestinal abnormalities.",
        ],
      },
      {
        name: "ELP1-Related Medulloblastoma Predisposition Syndrome",
        genes: "ELP1",
        inheritance:
          "Autosomal recessive in the established familial syndrome context",
        profile: [
          "Typically presents in childhood.",
          "Both sexes may be affected.",
          "Predisposition is centered on medulloblastoma; associated developmental or neurologic features may occur.",
          "A family history or consanguinity may be informative.",
        ],
        criteria: [
          "Medulloblastoma with a compatible family history or clinical context.",
          "Confirm biallelic pathogenic ELP1 variants when evaluating the inherited syndrome.",
          "Classify the medulloblastoma by current integrated histologic and molecular criteria.",
        ],
        histology: [
          "Medulloblastoma morphology is determined by the tumor subtype and may not be distinctive of the predisposition syndrome.",
        ],
        ihc: [
          "Use standard medulloblastoma immunohistochemistry and molecular subgrouping; no syndrome-specific IHC marker is established.",
        ],
        differential: [
          "Sporadic medulloblastoma: inherited predisposition is assessed by age, family history, and germline testing.",
          "Other hereditary medulloblastoma syndromes, including APC- and PTCH1/SUFU-related disease.",
        ],
        molecular: [
          "ELP1 encodes a component of the Elongator complex involved in transcriptional regulation and other cellular processes.",
          "Germline pathogenic variants are associated with medulloblastoma predisposition; interpret variant phase and inheritance.",
        ],
        clues: [
          "Medulloblastoma in a patient with a suggestive family history or biallelic ELP1 findings.",
        ],
      },
      {
        name: "Multiple Osteochondromas",
        genes: "EXT1 · EXT2",
        inheritance: "Autosomal dominant",
        profile: [
          "Usually presents in childhood, with lesions developing during skeletal growth.",
          "Both sexes are affected.",
          "Multiple metaphyseal osteochondromas arise from long bones and other skeletal sites.",
          "Pain, deformity, restricted motion, and limb-length discrepancy may occur.",
        ],
        criteria: [
          "Multiple osteochondromas with characteristic radiographic continuity of cortex and medullary cavity.",
          "A family history or germline EXT1/EXT2 variant supports the diagnosis.",
          "Evaluate new pain, growth after skeletal maturity, or cartilage cap enlargement for secondary chondrosarcoma.",
        ],
        histology: [
          "Osteochondroma shows a cartilage cap with endochondral ossification and continuity with underlying bone.",
          "Secondary peripheral chondrosarcoma shows malignant cartilage with permeative growth and entrapment of host bone.",
        ],
        ihc: [
          "No diagnostic IHC profile; morphology and radiology are central.",
        ],
        differential: [
          "Sporadic solitary osteochondroma: lacks multiple lesions and familial pattern.",
          "Bizarre parosteal osteochondromatous proliferation: lacks medullary continuity and has a different anatomic pattern.",
          "Secondary peripheral chondrosarcoma: assess cartilage cap, permeation, and clinical growth.",
        ],
        molecular: [
          "EXT1 and EXT2 encode glycosyltransferases required for heparan sulfate biosynthesis.",
          "Germline loss-of-function variants reduce heparan sulfate and alter developmental signaling gradients.",
          "Tumor formation may involve somatic inactivation of the remaining allele.",
        ],
        clues: [
          "Multiple osteochondromas in a child or young adult.",
          "Cartilage-capped exostosis with new pain or growth after skeletal maturity.",
        ],
      },
    ],
  },
  {
    id: "nfkb",
    title: "NF-κB Signaling Pathway",
    function:
      "NF-κB regulates inflammation, cell survival, and proliferation. CYLD is a deubiquitinase that restrains signaling through NF-κB and other pathways.",
    genes: "CYLD",
    mechanism:
      "Germline loss-of-function variants in CYLD impair negative regulation of signaling and predispose to multiple adnexal tumors.",
    syndromes: "Brooke–Spiegler syndrome",
    entities: [
      {
        name: "Brooke–Spiegler Syndrome",
        genes: "CYLD",
        inheritance: "Autosomal dominant; mosaic forms occur",
        profile: [
          "Usually begins in adolescence or early adulthood.",
          "Both sexes are affected.",
          "Multiple cutaneous adnexal tumors involve the scalp, face, and trunk.",
          "Lesions include cylindromas, spiradenomas, and trichoepitheliomas.",
        ],
        criteria: [
          "Multiple histologically confirmed cylindromas, spiradenomas, spiradenocylindromas, or trichoepitheliomas.",
          "A germline pathogenic CYLD variant supports the diagnosis.",
          "Consider mosaic disease in patients with segmental or limited clusters of lesions.",
        ],
        histology: [
          "Cylindroma shows a jigsaw-puzzle arrangement of basaloid nests with thick hyaline basement membrane material.",
          "Spiradenoma shows basaloid cells with lymphocytes and often a painful clinical presentation.",
          "Trichoepithelioma shows follicular germinative differentiation and horn cysts.",
          "Malignant transformation is rare but may show infiltrative growth, atypia, and increased mitotic activity.",
        ],
        ihc: [
          "CYLD-associated tumors may show loss of CYLD expression, although staining is not a substitute for molecular testing.",
          "Use appropriate adnexal markers to distinguish follicular and apocrine differentiation when needed.",
        ],
        differential: [
          "Sporadic spiradenoma/cylindroma: multiplicity, family history, and distribution favor inherited disease.",
          "Basal cell carcinoma: retraction artifact and stromal features differ; correlate with adnexal morphology.",
          "Other adnexal tumor syndromes: assess the combination of lesion types.",
        ],
        molecular: [
          "CYLD encodes a deubiquitinase that negatively regulates NF-κB and other signaling pathways.",
          "Germline loss-of-function variants predispose to multiple adnexal tumors; a second hit may occur in tumors.",
          "ALPK1 hotspot variants characterize some sporadic spiradenomas and are not the defining alteration in CYLD-associated tumors.",
        ],
        clues: [
          "Multiple scalp cylindromas or a 'turban tumor' pattern.",
          "A mixture of cylindromas, spiradenomas, and trichoepitheliomas in one patient or family.",
        ],
      },
    ],
  },
  {
    id: "mtor-pi3k",
    title: "mTOR/PI3K Pathway",
    function:
      "PI3K generates PIP3 to activate AKT and downstream mTOR signaling. The TSC1–TSC2 complex and PTEN restrain this growth-promoting pathway; PI3Kδ is important in immune cells.",
    genes: "TSC1 · TSC2 · PTEN · PIK3CD",
    mechanism:
      "TSC1/TSC2 and PTEN are tumor suppressors whose loss increases pathway activity. Activated PIK3CD variants cause immune dysregulation and lymphoproliferative disease.",
    syndromes:
      "Tuberous sclerosis complex · PTEN hamartoma tumor syndrome · Activated PI3Kδ syndrome",
    entities: [
      {
        name: "Tuberous Sclerosis Complex",
        genes: "TSC1 · TSC2",
        inheritance: "Autosomal dominant; de novo variants are common",
        profile: [
          "Usually recognized in infancy or childhood, but manifestations may be diagnosed at any age.",
          "Both sexes are affected.",
          "Brain, skin, kidneys, heart, lungs, and eyes may be involved.",
          "Features include cortical tubers, subependymal nodules, facial angiofibromas, renal angiomyolipomas, and cardiac rhabdomyomas.",
        ],
        criteria: [
          "Apply current clinical diagnostic criteria using major and minor features.",
          "A pathogenic TSC1 or TSC2 variant is independently diagnostic.",
          "Evaluate renal, CNS, cardiac, pulmonary, and cutaneous manifestations.",
        ],
        histology: [
          "Renal angiomyolipoma contains variable proportions of dysmorphic vessels, smooth muscle, and adipose tissue.",
          "Subependymal giant cell astrocytoma shows large ganglioid cells and may arise near the foramen of Monro.",
          "Pulmonary lymphangioleiomyomatosis shows abnormal smooth muscle-like cells around cystic lung spaces.",
          "Cardiac rhabdomyoma is composed of enlarged vacuolated myocytes with spider cells.",
        ],
        ihc: [
          "Angiomyolipoma and LAM cells express melanocytic markers such as HMB45 and Melan-A, and smooth muscle markers.",
          "SEGA may express GFAP and neuronal markers variably.",
          "Rhabdomyoma expresses muscle markers such as desmin.",
        ],
        differential: [
          "Sporadic angiomyolipoma: multiple or bilateral lesions and other TSC features favor syndromic disease.",
          "PEComa: evaluate morphology, melanocytic/smooth muscle phenotype, and clinical context.",
          "Other causes of cortical tubers or subependymal lesions: integrate imaging and clinical criteria.",
        ],
        molecular: [
          "TSC1 encodes hamartin and TSC2 encodes tuberin; the complex inhibits RHEB and mTORC1.",
          "Germline loss-of-function variants are followed by somatic second-hit inactivation in many tumors.",
          "mTOR pathway activation is a central mechanism across the organ manifestations.",
        ],
        clues: [
          "Multiple or bilateral renal angiomyolipomas with characteristic CNS or skin lesions.",
          "Subependymal giant cell astrocytoma in a patient with cortical tubers.",
          "Cardiac rhabdomyoma in an infant with other suggestive findings.",
        ],
      },
      {
        name: "PTEN Hamartoma Tumor Syndrome",
        genes: "PTEN",
        inheritance: "Autosomal dominant",
        profile: [
          "Often recognized in childhood or adulthood.",
          "Both sexes are affected.",
          "Multiple organ systems are involved, especially skin, thyroid, breast, endometrium, and gastrointestinal tract.",
          "Macrocephaly and mucocutaneous lesions are characteristic clues.",
        ],
        criteria: [
          "Apply established clinical criteria for Cowden syndrome/PTEN hamartoma tumor syndrome.",
          "A germline pathogenic PTEN variant confirms the molecular diagnosis.",
          "Assess for breast, thyroid, endometrial, renal, and colorectal manifestations.",
        ],
        histology: [
          "Hamartomatous gastrointestinal polyps may show varied histologies.",
          "Thyroid lesions include multinodular goiter, adenomas, and carcinoma.",
          "Mucocutaneous lesions include trichilemmomas and papillomatous papules.",
        ],
        ihc: [
          "No single IHC stain establishes PTEN hamartoma tumor syndrome.",
          "Loss of PTEN staining in a tumor may support pathway inactivation but requires internal controls and molecular correlation.",
        ],
        differential: [
          "Peutz–Jeghers syndrome: mucocutaneous pigmentation and arborizing smooth muscle in polyps.",
          "Bannayan–Riley–Ruvalcaba phenotype and other hamartoma syndromes: assess the full phenotype and PTEN testing.",
          "Sporadic thyroid or breast neoplasia: consider age, macrocephaly, and mucocutaneous findings.",
        ],
        molecular: [
          "PTEN is a lipid phosphatase that converts PIP3 to PIP2 and antagonizes PI3K–AKT signaling.",
          "Germline loss-of-function variants include sequence variants and deletions.",
          "Tumors may acquire a second hit with loss of the remaining functional allele.",
        ],
        clues: [
          "Macrocephaly with multiple mucocutaneous lesions or mixed gastrointestinal polyps.",
          "Breast or thyroid neoplasia accompanied by characteristic PTEN-related features.",
        ],
      },
      {
        name: "Activated PI3Kδ Syndrome",
        genes: "PIK3CD",
        inheritance: "Autosomal dominant; usually germline activating variants",
        profile: [
          "Usually presents in childhood, although diagnosis may be delayed.",
          "Both sexes are affected.",
          "Immune system and lymphoid organs are primarily involved.",
          "Recurrent respiratory infections, lymphadenopathy, hepatosplenomegaly, autoimmunity, and lymphoma risk are characteristic.",
        ],
        criteria: [
          "Recurrent infections with immune dysregulation or lymphoproliferation.",
          "Demonstrate an activating germline PIK3CD variant or an appropriate PIK3R1-related phenotype.",
          "Correlate with immunologic testing and clinical history.",
        ],
        histology: [
          "Lymph nodes may show reactive or atypical lymphoid hyperplasia.",
          "Lymphoma, particularly B-cell lymphoma, may develop.",
          "Interpret lymphoid proliferations in the context of immune dysregulation.",
        ],
        ihc: [
          "Use standard hematolymphoid panels to classify lymphoid proliferations and exclude lymphoma.",
          "No single IHC marker establishes APDS.",
        ],
        differential: [
          "Common variable immunodeficiency and other inborn errors of immunity: molecular and immunologic evaluation is required.",
          "Primary immunodeficiency-associated lymphoproliferative disorders: distinguish by the underlying gene and clinical phenotype.",
        ],
        molecular: [
          "PIK3CD encodes the p110δ catalytic subunit of class IA PI3K.",
          "Activating variants cause constitutive PI3Kδ signaling and downstream AKT/mTOR activation.",
          "PIK3R1 loss-of-function variants can cause a related APDS phenotype.",
        ],
        clues: [
          "Lymphadenopathy or lymphoma in a patient with recurrent infections and immune dysregulation.",
          "Unusual lymphoid hyperplasia with a history of childhood-onset immunodeficiency.",
        ],
      },
    ],
  },
  {
    id: "transcription-regulators",
    title: "Transcription Factors and Regulators",
    function:
      "Transcription factors and regulatory proteins control gene expression, lineage differentiation, development, and cell-cycle checkpoints. Germline variants can produce recognizable tumor-predisposition syndromes.",
    genes: "MAX · MAFA · FLCN · RUNX1 · TBXT · CDC73",
    mechanism:
      "Mechanisms include tumor-suppressor loss, altered transcriptional regulation, and activating variants affecting lineage-specific transcription factors. Variant type and inheritance differ by syndrome.",
    syndromes:
      "MEN5 · MAFA-related familial insulinomatosis · Birt–Hogg–Dubé syndrome · Familial platelet disorder with myeloid malignancy predisposition · Familial chordoma · Hyperparathyroidism–jaw tumor syndrome",
    entities: [
      {
        name: "Multiple Endocrine Neoplasia Type 5 / MAX-Related Tumors",
        genes: "MAX",
        inheritance: "Autosomal dominant",
        profile: [
          "Usually presents in adulthood, although age varies.",
          "Both sexes are affected.",
          "Adrenal medulla, paraganglia, pituitary, parathyroid, and pancreas may be involved.",
          "Pheochromocytoma/paraganglioma may be bilateral or metachronous; ganglioneuroma and neuroblastoma have also been reported.",
        ],
        criteria: [
          "Pheochromocytoma or paraganglioma with a compatible family history or multiple endocrine/neural crest tumors.",
          "Confirm a germline pathogenic MAX variant.",
          "Evaluate for additional endocrine manifestations based on the phenotype.",
        ],
        histology: [
          "Pheochromocytoma shows nested (zellballen) architecture with neuroendocrine cells.",
          "Paraganglioma morphology varies by site and may be indistinguishable from sporadic tumors.",
          "Ganglioneuroma contains mature ganglion cells in Schwannian stroma.",
        ],
        ihc: [
          "Pheochromocytoma/paraganglioma: chromogranin and synaptophysin positive; sustentacular cells may express S100/SOX10.",
          "Loss of MAX expression may support MAX pathway involvement but should be correlated with germline testing.",
        ],
        differential: [
          "Other hereditary PPGL syndromes, especially SDHx, VHL, RET, and NF1: distinguish by associated tumors and molecular testing.",
          "MEN1 and MEN2: compare endocrine tumor spectrum and defining gene.",
        ],
        molecular: [
          "MAX is a transcriptional regulator that dimerizes with MYC-family proteins.",
          "Germline loss-of-function variants predispose to endocrine and neural crest tumors; tumors may show loss of the remaining allele.",
          "MAX is recognized as the susceptibility gene for MEN5.",
        ],
        clues: [
          "Pheochromocytoma with bilateral disease, metachronous PPGL, or a family history.",
          "PPGL accompanied by pituitary, parathyroid, or neural crest tumors.",
        ],
      },
      {
        name: "MAFA-Related Familial Insulinomatosis",
        genes: "MAFA",
        inheritance: "Autosomal dominant",
        profile: [
          "Usually presents in adulthood, with variable age at onset.",
          "Both sexes are affected.",
          "Pancreatic islets are involved.",
          "Clinical presentation reflects recurrent hypoglycemia from multifocal insulin-producing lesions.",
        ],
        criteria: [
          "Multifocal pancreatic beta-cell proliferations or multiple insulinomas in a familial setting.",
          "Confirm a germline activating MAFA variant.",
          "Distinguish from sporadic insulinoma and other causes of congenital or familial hyperinsulinism.",
        ],
        histology: [
          "Multifocal beta-cell hyperplasia and insulin-producing neuroendocrine lesions may be present.",
          "Individual insulinomas are well-differentiated pancreatic neuroendocrine tumors.",
        ],
        ihc: [
          "Insulin highlights beta-cell proliferations and insulin-producing tumors.",
          "Synaptophysin, chromogranin, and INSM1 support neuroendocrine differentiation.",
        ],
        differential: [
          "Sporadic insulinoma: usually solitary and lacks the familial MAFA-associated pattern.",
          "MEN1-associated pancreatic NETs: assess other endocrine tumors and MEN1 status.",
          "Other familial hyperinsulinism: correlate age, biochemical profile, and genetic findings.",
        ],
        molecular: [
          "Germline activating MAFA variants alter transcriptional regulation of pancreatic beta-cell function.",
          "The molecular diagnosis distinguishes familial insulinomatosis from sporadic multifocal beta-cell disease.",
        ],
        clues: [
          "Multiple insulin-producing pancreatic lesions with familial hypoglycemia.",
        ],
      },
      {
        name: "Birt–Hogg–Dubé Syndrome",
        genes: "FLCN",
        inheritance: "Autosomal dominant",
        profile: [
          "Usually recognized in adulthood.",
          "Both sexes are affected.",
          "Skin, lungs, and kidneys are principal sites.",
          "Features include fibrofolliculomas, pulmonary cysts with spontaneous pneumothorax, and renal neoplasms.",
        ],
        criteria: [
          "Multiple fibrofolliculomas or characteristic pulmonary cysts with renal tumors or family history.",
          "Confirm a germline pathogenic FLCN variant.",
          "Evaluate renal tumors for hybrid oncocytic/chromophobe morphology.",
        ],
        histology: [
          "Fibrofolliculoma shows a follicular epithelial component with radiating strands in a fibrous stroma.",
          "Renal tumors include hybrid oncocytic/chromophobe tumors, chromophobe RCC, and oncocytoma.",
          "Pulmonary cysts are irregular and often basilar or medial.",
        ],
        ihc: [
          "Renal tumors may show variable CK7, CD117, and other renal epithelial marker profiles depending on subtype.",
          "FLCN IHC loss can support pathway inactivation but does not independently establish germline disease.",
        ],
        differential: [
          "Sporadic renal oncocytoma or chromophobe RCC: multiplicity, hybrid morphology, lung cysts, and skin lesions favor BHD.",
          "Other hereditary renal tumor syndromes: compare renal tumor morphology and extra-renal manifestations.",
        ],
        molecular: [
          "FLCN encodes folliculin, involved in AMPK/mTOR and cellular energy-sensing pathways.",
          "Germline loss-of-function variants predispose to renal tumors; somatic second hits may occur.",
          "Sequence and deletion/duplication analysis should be considered.",
        ],
        clues: [
          "Hybrid oncocytic/chromophobe renal tumor with pulmonary cysts or spontaneous pneumothorax.",
          "Multiple facial fibrofolliculomas in a patient with renal neoplasia.",
        ],
      },
      {
        name: "Familial Platelet Disorder with Myeloid Malignancy Predisposition",
        genes: "RUNX1",
        inheritance: "Autosomal dominant",
        profile: [
          "May present from childhood through adulthood.",
          "Both sexes are affected.",
          "Hematopoietic system is involved, with lifelong thrombocytopenia and platelet dysfunction.",
          "Predisposition includes myelodysplastic syndrome and acute myeloid leukemia.",
        ],
        criteria: [
          "Personal or family history of thrombocytopenia and abnormal bleeding with a myeloid neoplasm or familial clustering.",
          "Confirm a germline pathogenic RUNX1 variant.",
          "Distinguish germline variants from somatic RUNX1 mutations in myeloid neoplasms.",
        ],
        histology: [
          "Bone marrow findings depend on the associated myeloid neoplasm.",
          "MDS may show dysplasia in one or more hematopoietic lineages.",
          "AML morphology and immunophenotype are classified using standard criteria.",
        ],
        ihc: [
          "Use standard myeloid immunophenotyping; RUNX1 IHC is not a germline diagnostic assay.",
        ],
        differential: [
          "Other inherited thrombocytopenias with myeloid malignancy risk, including ETV6- and ANKRD26-related disorders.",
          "Acquired thrombocytopenia and sporadic MDS/AML: assess family history and germline status.",
        ],
        molecular: [
          "RUNX1 encodes a core-binding factor transcription factor essential for hematopoiesis.",
          "Germline loss-of-function variants predispose to platelet dysfunction and myeloid malignancy.",
          "Nonhematopoietic tissue may be required for germline confirmation when blood or marrow is affected by a neoplasm.",
        ],
        clues: [
          "MDS or AML in a patient with longstanding familial thrombocytopenia or platelet dysfunction.",
        ],
      },
      {
        name: "Familial Chordoma",
        genes: "TBXT",
        inheritance: "Autosomal dominant in reported families",
        profile: [
          "Often presents in adulthood, but age varies.",
          "Both sexes are affected.",
          "Tumors arise along the axial skeleton, particularly the sacrum and skull base.",
          "Family history of chordoma may be present.",
        ],
        criteria: [
          "Chordoma in multiple family members or multiple primary chordomas in a compatible setting.",
          "Confirm a germline TBXT duplication or other pathogenic variant when indicated.",
          "Classify the tumor by site and histologic subtype.",
        ],
        histology: [
          "Conventional chordoma shows cords and lobules of cells in abundant myxoid matrix.",
          "Physaliphorous cells have bubbly, vacuolated cytoplasm.",
          "Dedifferentiated chordoma shows an abrupt transition to a high-grade sarcoma.",
        ],
        ihc: [
          "Brachyury (TBXT) is a highly useful nuclear marker for chordoma.",
          "Cytokeratins and EMA are typically positive.",
        ],
        differential: [
          "Chondrosarcoma: usually lacks nuclear brachyury and epithelial marker expression.",
          "Metastatic carcinoma: correlate with clinical history and brachyury expression.",
          "Chordoid meningioma at the skull base: use anatomic, morphologic, and immunophenotypic context.",
        ],
        molecular: [
          "TBXT encodes the brachyury transcription factor involved in notochord development.",
          "Germline TBXT duplication is associated with familial chordoma in a subset of families.",
        ],
        clues: [
          "Chordoma in a patient with a first-degree relative with chordoma.",
          "Axial chordoma with a familial pattern, particularly at the skull base or sacrum.",
        ],
      },
      {
        name: "Hyperparathyroidism–Jaw Tumor Syndrome",
        genes: "CDC73",
        inheritance: "Autosomal dominant",
        profile: [
          "Often presents in adolescence or adulthood.",
          "Both sexes are affected.",
          "Parathyroid glands and jaw are characteristic sites; renal and uterine lesions may also occur.",
          "Presentation may include primary hyperparathyroidism, jaw ossifying fibroma, or both.",
        ],
        criteria: [
          "Primary hyperparathyroidism with an ossifying fibroma of the jaw or a compatible family history.",
          "Parathyroid carcinoma or atypical parathyroid tumor should prompt consideration of CDC73-related disease.",
          "Confirm a germline pathogenic CDC73 variant.",
        ],
        histology: [
          "Parathyroid tumors may show atypical features or carcinoma, including invasive growth.",
          "Jaw lesions are ossifying fibromas rather than brown tumors of hyperparathyroidism.",
          "Renal lesions may include cysts and neoplasms.",
        ],
        ihc: [
          "Loss of nuclear parafibromin expression in a parathyroid neoplasm supports CDC73 inactivation.",
          "Retained parafibromin does not completely exclude a pathogenic variant; interpret with internal controls.",
        ],
        differential: [
          "Sporadic parathyroid adenoma: consider CDC73 testing in young patients, atypical tumors, or carcinoma.",
          "Brown tumor: reactive giant-cell lesion associated with hyperparathyroidism, not a true ossifying fibroma.",
          "MEN1 and other hereditary hyperparathyroidism syndromes: compare associated tumors and molecular findings.",
        ],
        molecular: [
          "CDC73 encodes parafibromin, a tumor suppressor component of the PAF1 transcription complex.",
          "Germline loss-of-function variants or deletions predispose to parathyroid and jaw tumors.",
          "Tumors often show a second hit and loss of parafibromin expression.",
        ],
        clues: [
          "Parathyroid carcinoma or atypical parathyroid tumor, especially in a young patient.",
          "Primary hyperparathyroidism with a jaw ossifying fibroma.",
          "Parafibromin loss in a parathyroid neoplasm.",
        ],
      },
    ],
  },
];

const pathologyClues = [
  [
    "Bilateral, multifocal papillary renal tumors",
    "Hereditary papillary renal carcinoma (MET)",
  ],
  [
    "Multifocal/bilateral medullary thyroid carcinoma with C-cell proliferations",
    "MEN2 (RET)",
  ],
  [
    "Pheochromocytoma with medullary thyroid carcinoma or mucosal neuromas",
    "MEN2 (RET)",
  ],
  [
    "Familial, multifocal, or unusually early-onset neuroblastoma",
    "Hereditary neuroblastoma (ALK, PHOX2B)",
  ],
  [
    "Congenital segmental lipomatous scalp nevus with ocular/CNS abnormalities",
    "Encephalocraniocutaneous lipomatosis (FGFR1)",
  ],
  [
    "Fibrous dysplasia with café-au-lait pigmentation or endocrine hyperfunction",
    "McCune–Albright syndrome (GNAS)",
  ],
  [
    "Facial capillary malformation with leptomeningeal vascular lesions or glaucoma",
    "Sturge–Weber syndrome (GNAQ)",
  ],
  ["Plexiform neurofibroma or MPNST arising in a neurofibroma", "NF1 (NF1)"],
  [
    "Bilateral vestibular schwannomas or multiple meningiomas with schwannomas",
    "NF2-related schwannomatosis (NF2)",
  ],
  [
    "Childhood rhabdomyosarcoma/neuroblastoma with Costello phenotype",
    "Costello syndrome (HRAS)",
  ],
  [
    "Juvenile myelomonocytic leukemia with Noonan-like features",
    "Noonan syndrome / RASopathy",
  ],
  [
    "Linear nevus sebaceus with neurologic, ocular, or skeletal abnormalities",
    "Schimmelpenning–Feuerstein–Mims syndrome (RAS genes)",
  ],
  [
    "Multiple GISTs, especially with familial clustering",
    "GIST predisposition (KIT, PDGFRA)",
  ],
  [
    "Multiple or recurrent cardiac myxomas with spotty pigmentation",
    "Carney complex (PRKAR1A)",
  ],
  [
    "Segmental congenital overgrowth with vascular/adipose abnormalities",
    "PIK3CA-related overgrowth spectrum",
  ],
  ["Hundreds of conventional colorectal adenomas", "FAP (APC)"],
  [
    "Proximal gastric fundic gland polyposis with relative antral sparing",
    "GAPPS (APC promoter 1B)",
  ],
  [
    "Colorectal adenomatous polyposis with oligodontia",
    "AXIN2-related polyposis",
  ],
  [
    "Multiple proximal sessile serrated lesions meeting cumulative criteria",
    "Serrated polyposis syndrome",
  ],
  [
    "Wilms tumor with genitourinary abnormalities or nephropathy",
    "WT1-related tumor predisposition",
  ],
  [
    "Aniridia with genitourinary abnormalities or Wilms tumor",
    "WAGR syndrome (WT1/PAX6 deletion)",
  ],
  [
    "Multiglandular parathyroid disease with pancreatic/duodenal NET or pituitary tumor",
    "MEN1 (MEN1)",
  ],
  [
    "Small-bowel hamartomatous polyp with arborizing smooth muscle",
    "Peutz–Jeghers syndrome (STK11)",
  ],
  [
    "Diffuse gastric signet-ring carcinoma with young age/family history",
    "Hereditary diffuse gastric cancer (CDH1, CTNNA1)",
  ],
  [
    "Familial colorectal polyposis with mixed polyp histology",
    "Hereditary mixed polyposis (GREM1)",
  ],
  [
    "Multiple basal cell carcinomas at a young age with jaw keratocysts",
    "Gorlin syndrome (PTCH1, SUFU)",
  ],
  [
    "Craniosynostosis with polysyndactyly and segmental abnormalities",
    "Curry–Jones syndrome (SMO)",
  ],
  [
    "Multiple osteochondromas in a child or young adult",
    "Multiple osteochondromas (EXT1, EXT2)",
  ],
  [
    "Multiple scalp cylindromas, spiradenomas, or trichoepitheliomas",
    "Brooke–Spiegler syndrome (CYLD)",
  ],
  [
    "Multiple/bilateral renal angiomyolipomas with CNS or skin lesions",
    "Tuberous sclerosis complex (TSC1, TSC2)",
  ],
  [
    "Macrocephaly with mucocutaneous lesions and mixed GI polyps",
    "PTEN hamartoma tumor syndrome",
  ],
  [
    "Lymphadenopathy/lymphoma with recurrent infections and immune dysregulation",
    "Activated PI3Kδ syndrome (PIK3CD)",
  ],
  [
    "Pheochromocytoma with bilateral disease or family history",
    "MEN5 / MAX-related tumors",
  ],
  [
    "Multiple insulin-producing pancreatic lesions with familial hypoglycemia",
    "MAFA-related familial insulinomatosis",
  ],
  [
    "Hybrid oncocytic/chromophobe renal tumor with lung cysts or pneumothorax",
    "Birt–Hogg–Dubé syndrome (FLCN)",
  ],
  [
    "MDS/AML with lifelong familial thrombocytopenia",
    "Familial platelet disorder (RUNX1)",
  ],
  ["Chordoma in multiple family members", "Familial chordoma (TBXT)"],
  [
    "Parathyroid carcinoma/atypical tumor with jaw ossifying fibroma",
    "Hyperparathyroidism–jaw tumor syndrome (CDC73)",
  ],
] as const;

function Section({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-4">
      <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
      <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </section>
  );
}

export default function GrowthFactorReceptorAndRelatedPage() {
  const [query, setQuery] = useState("");
  const [activePathway, setActivePathway] = useState("all");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [showOverview, setShowOverview] = useState(true);
  const [showClues, setShowClues] = useState(true);
  const q = query.trim().toLowerCase();
  const visible = useMemo(
    () =>
      pathways
        .map((p) => ({
          ...p,
          entities: p.entities
            .filter((e) => activePathway === "all" || p.id === activePathway)
            .filter(
              (e) =>
                !q ||
                [
                  e.name,
                  e.genes,
                  e.inheritance,
                  ...e.profile,
                  ...e.criteria,
                  ...e.histology,
                  ...e.ihc,
                  ...e.differential,
                  ...e.molecular,
                  ...e.clues,
                  p.title,
                ]
                  .join(" ")
                  .toLowerCase()
                  .includes(q),
            ),
        }))
        .filter((p) => p.entities.length),
    [q, activePathway],
  );
  const allKeys = pathways.flatMap((p) =>
    p.entities.map((e) => `${p.id}:${e.name}`),
  );
  const allExpanded = allKeys.length > 0 && allKeys.every((k) => expanded[k]);
  const toggleAll = () =>
    setExpanded(
      allExpanded ? {} : Object.fromEntries(allKeys.map((k) => [k, true])),
    );
  const filteredClues = pathologyClues.filter(
    ([clue, syndrome]) => !q || `${clue} ${syndrome}`.toLowerCase().includes(q),
  );
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
          PathologyGPS · Genetic Tumor Syndromes
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Growth Factor Receptors and Related Signaling Pathways
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          A practical diagnostic reference linking inherited and mosaic pathway
          alterations to their associated tumor spectra, clinicopathologic
          findings, and molecular tests.
        </p>
      </header>

      <div className="sticky top-0 z-20 mb-6 flex flex-col gap-3 border-b border-slate-200 bg-white/95 py-3 backdrop-blur sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search syndromes, genes, morphology, markers, or clues…"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={activePathway}
          onChange={(e) => setActivePathway(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-700"
        >
          <option value="all">All pathways</option>
          {pathways.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
        <button
          onClick={toggleAll}
          className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <section className="mb-8 overflow-hidden rounded-xl border border-slate-200">
        <button
          onClick={() => setShowClues(!showClues)}
          className="flex w-full items-center justify-between bg-sky-50 px-5 py-4 text-left"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-sky-700">
              Diagnostic entry point
            </span>
            <span className="mt-1 block text-lg font-bold text-slate-900">
              Pathology Clues
            </span>
          </span>
          <span className="text-sky-800">{showClues ? "−" : "+"}</span>
        </button>
        {showClues && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3">Pathologic / clinical finding</th>
                  <th className="px-5 py-3">Consider</th>
                </tr>
              </thead>
              <tbody>
                {filteredClues.map(([clue, syndrome], i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="px-5 py-3.5 font-medium text-slate-800">
                      {clue}
                    </td>
                    <td className="px-5 py-3.5 text-sky-800">{syndrome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredClues.length === 0 && (
              <p className="px-5 py-6 text-sm text-slate-500">
                No matching pathology clues.
              </p>
            )}
          </div>
        )}
      </section>

      <section className="mb-8 overflow-hidden rounded-xl border border-slate-200">
        <button
          onClick={() => setShowOverview(!showOverview)}
          className="flex w-full items-center justify-between px-5 py-4 text-left"
        >
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Molecular framework
            </span>
            <span className="mt-1 block text-lg font-bold text-slate-900">
              Pathway Overview
            </span>
          </span>
          <span className="text-slate-600">{showOverview ? "−" : "+"}</span>
        </button>
        {showOverview && (
          <div className="divide-y divide-slate-100">
            {pathways.map((p) => (
              <div
                key={p.id}
                className="grid gap-2 px-5 py-4 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{p.genes}</p>
                </div>
                <div className="space-y-1 text-sm leading-6 text-slate-700">
                  <p>
                    <strong>Function:</strong> {p.function}
                  </p>
                  <p>
                    <strong>Pathogenic mechanisms:</strong> {p.mechanism}
                  </p>
                  <p>
                    <strong>Associated syndromes:</strong> {p.syndromes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Entity Outlines</h2>
        <p className="text-sm text-slate-500">
          {visible.reduce((n, p) => n + p.entities.length, 0)} entities
        </p>
      </div>
      <div className="space-y-8">
        {visible.map((p) => (
          <section key={p.id} id={p.id}>
            <div className="mb-3 border-b-2 border-sky-700 pb-2">
              <h2 className="text-xl font-bold text-slate-900">{p.title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {p.function}
              </p>
            </div>
            <div className="space-y-3">
              {p.entities.map((e) => {
                const key = `${p.id}:${e.name}`;
                const open = !!expanded[key];
                return (
                  <article
                    key={key}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <button
                      onClick={() =>
                        setExpanded((s) => ({ ...s, [key]: !s[key] }))
                      }
                      aria-expanded={open}
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
                    >
                      <span>
                        <span className="block font-semibold text-slate-900">
                          {e.name}
                        </span>
                        <span className="mt-1 block text-xs font-medium text-sky-800">
                          {e.genes} <span className="text-slate-400">·</span>{" "}
                          {e.inheritance}
                        </span>
                      </span>
                      <span className="mt-0.5 text-lg text-slate-500">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                    {open && (
                      <div className="border-t border-slate-100 px-5 pb-5 pt-1">
                        <Section title="Clinical Profile" items={e.profile} />
                        <Section
                          title="Essential Diagnostic Criteria"
                          items={e.criteria}
                        />
                        <Section title="Histopathology" items={e.histology} />
                        <Section title="Immunophenotype" items={e.ihc} />
                        <Section
                          title="Differential Diagnosis"
                          items={e.differential}
                        />
                        <Section
                          title="Molecular Pathology"
                          items={e.molecular}
                        />
                        <Section title="Pathology Clues" items={e.clues} />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="rounded-xl border border-dashed border-slate-300 px-6 py-12 text-center text-sm text-slate-500">
          No matching entities. Try another gene, syndrome, marker, or
          morphology term.
        </div>
      )}
      <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        PathologyGPS · Diagnostic Excellence. This reference supports, but does
        not replace, integrated clinicopathologic assessment and germline
        genetic counseling.
      </footer>
    </main>
  );
}
