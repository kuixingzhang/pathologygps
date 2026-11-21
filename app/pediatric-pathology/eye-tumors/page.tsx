"use client";

import { useMemo, useState } from "react";

type Differential = { name: string; distinction: string };
type Entity = {
  name: string;
  group: string;
  clue: string;
  summary: string;
  clinical: string[];
  criteria: string[];
  histology: string[];
  ihc: string[];
  differential: Differential[];
  molecular?: string[];
  pitfalls?: string[];
};

const entities: Entity[] = [
  {
    name: "Epibulbar Choristoma",
    group: "Conjunctival and Epibulbar Lesions",
    clue: "Congenital ectopic mature tissue at the ocular surface; identify the tissue components and exclude atypia.",
    summary:
      "A benign developmental lesion composed of mature tissues in an abnormal epibulbar location. Subtypes include epibulbar dermoid, dermolipoma, and complex choristoma.",
    clinical: [
      "Present at birth or recognized in early childhood; no sex predilection is established.",
      "Typically arises in the superior or inferior temporal epibulbar conjunctiva, often inferotemporally at the limbus.",
      "Dermoids are firm, whitish, well-circumscribed limbal lesions and may contain cilia; dermolipomas are soft, yellow, superotemporal lesions.",
      "Large lesions may involve the cornea, impair lid closure, or cause amblyopia.",
    ],
    criteria: [
      "Confirm conjunctival, limbal, or corneal localization.",
      "Identify mature ectopic tissue without cytologic atypia or destructive growth.",
      "Classify as dermoid, dermolipoma, or complex choristoma according to the tissue components.",
      "Dermoid: dermal-type collagen with squamous epithelium and variably present skin appendages.",
      "Dermolipoma: abundant mature adipose tissue in addition to dermal-type tissue.",
      "Complex choristoma: two or more heterotopic mature tissue types, commonly lacrimal gland and cartilage.",
    ],
    histology: [
      "Dermoid contains interweaving dermal-type collagen bundles covered by squamous epithelium.",
      "Cilia with sebaceous and sweat glands may be present in dermoids.",
      "Dermolipoma contains a prominent component of mature adipose tissue.",
      "Complex choristoma may contain lacrimal acini, cartilage, smooth muscle, nerve bundles, bone, or other mature tissues.",
    ],
    ihc: [
      "Immunohistochemistry is generally unnecessary for conventional lesions.",
      "Use lineage-directed markers only when an unusual component requires confirmation.",
    ],
    differential: [
      {
        name: "Epibulbar osseous choristoma",
        distinction:
          "Composed predominantly of mature compact lamellar bone rather than dermal, adipose, or mixed heterotopic tissues.",
      },
      {
        name: "Phakomatous choristoma",
        distinction:
          "Typically arises in the medial lower eyelid or anterior orbit and contains lens-like epithelial islands surrounded by a PAS-positive capsule-like membrane.",
      },
    ],
    pitfalls: [
      "Do not use a neoplastic term such as dermoid tumor for this developmental choristoma.",
      "Bilateral lesions are uncommon and may occur in syndromic settings, including Goldenhar syndrome.",
    ],
  },
  {
    name: "Epibulbar Osseous Choristoma",
    group: "Conjunctival and Epibulbar Lesions",
    clue: "Firm epibulbar mass composed of mature compact lamellar bone.",
    summary:
      "A benign developmental choristoma composed of mature bone, usually in the superotemporal conjunctiva.",
    clinical: [
      "Usually congenital and recognized in childhood or adolescence, although later incidental diagnosis occurs.",
      "Reported slight female predominance.",
      "Typically unilateral and superotemporal in the conjunctiva; temporal and rarely inferotemporal sites occur.",
      "Presents as a firm yellow-white, orange, pink, or white subconjunctival nodule; CT may show calcification.",
    ],
    criteria: [
      "Confirm an epibulbar conjunctival location.",
      "Identify compact lamellar bone with morphologically normal osteocytes.",
      "Assess for additional heterotopic tissues that would support a complex choristoma.",
      "Exclude an infiltrative or cytologically atypical bone-forming neoplasm.",
    ],
    histology: [
      "Mature compact lamellar bone contains normal osteocytes in lacunae.",
      "Haversian canals may be present.",
      "Dense fibrous tissue forms a periosteal covering with an internal osteogenic layer.",
      "Hematopoietic marrow is usually absent.",
      "Additional cartilage, lacrimal tissue, nerves, or adipose tissue may indicate a complex choristoma.",
    ],
    ihc: [
      "Immunohistochemistry is not routinely required; morphology establishes the diagnosis.",
    ],
    differential: [
      {
        name: "Epibulbar choristoma",
        distinction:
          "Contains dermal, adipose, lacrimal, cartilaginous, or other mature heterotopic tissues rather than a lesion composed predominantly of compact lamellar bone.",
      },
    ],
    pitfalls: [
      "Avoid the term osteoma when the lesion is a congenital epibulbar choristoma.",
    ],
  },
  {
    name: "Phakomatous Choristoma",
    group: "Conjunctival and Epibulbar Lesions",
    clue: "Congenital medial lower-eyelid mass with lens-like epithelial islands and a thick PAS-positive capsule.",
    summary:
      "A rare benign developmental lesion derived from lens placode tissue, occurring outside the globe.",
    clinical: [
      "Present at birth as a slowly enlarging, smooth, firm subcutaneous mass.",
      "No consistent sex predilection is established.",
      "Typically involves the deep medial lower eyelid; rare cases are confined to the inferior anterior orbit.",
      "May measure up to 2 cm.",
    ],
    criteria: [
      "Confirm a medial lower-eyelid or inferior anterior orbital location.",
      "Identify islands of cuboidal to polygonal epithelial cells in desmoplastic stroma.",
      "Demonstrate a thick eosinophilic, PAS-positive basement membrane-like material surrounding epithelial islands.",
      "Correlate with lens differentiation; malignant features are absent.",
    ],
    histology: [
      "Epithelial islands are composed of cuboidal to polygonal cells.",
      "A thick, amorphous, eosinophilic PAS-positive membrane surrounds the epithelial islands.",
      "Bladder cells and psammomatous calcifications may be present.",
      "The intervening stroma is densely collagenous and desmoplastic.",
    ],
    ihc: [
      "Lesional cells express vimentin and S100.",
      "Lens crystallin proteins support lens differentiation.",
      "Cytokeratins are typically negative.",
    ],
    differential: [
      {
        name: "Epibulbar choristoma",
        distinction:
          "Contains mature dermal, adipose, or other heterotopic tissues and lacks the characteristic lens-like epithelial islands with PAS-positive capsule.",
      },
      {
        name: "Medulloepithelioma",
        distinction:
          "Arises intraocularly, usually from the ciliary body, and forms multilayered neuroepithelial cords, ribbons, and cystic spaces.",
      },
    ],
    pitfalls: [
      "The historical term Zimmerman tumor is not recommended.",
      "Simple excision is generally curative; recurrence has not been reported.",
    ],
  },
  {
    name: "Conjunctival Junctional, Compound, and Subepithelial Nevi",
    group: "Conjunctival Melanocytic Lesions",
    clue: "Symmetric melanocytic nests with maturation and/or epithelial inclusion cysts; architecture defines the subtype.",
    summary:
      "Benign acquired conjunctival melanocytic nevi classified by the location of nevus cells as junctional, compound, or subepithelial (stromal).",
    clinical: [
      "Junctional nevi are usually diagnosed in childhood or adolescence; compound nevi have a median diagnostic age in the early twenties, and subepithelial nevi occur at an older age.",
      "Compound and subepithelial nevi show an approximately equal sex distribution.",
      "Usually involve the juxtalimbal or bulbar conjunctiva; plica and caruncle involvement is less common.",
      "Typically well-circumscribed, tan to brown, mobile lesions; compound and subepithelial nevi are often elevated and may contain epithelial cysts.",
      "Growth during childhood may occur; new growth in adulthood warrants evaluation for melanoma.",
    ],
    criteria: [
      "Identify a nested intraepithelial and/or subepithelial proliferation of cytologically bland melanocytes.",
      "Junctional nevus: nests are confined predominantly to the epithelial-subepithelial junction.",
      "Compound nevus: melanocytic nests involve both epithelium and substantia propria.",
      "Subepithelial nevus: melanocytes are confined to the substantia propria.",
      "Look for symmetry, maturation with depth, epithelial inclusion cysts, and low proliferative activity.",
      "Absence of extensive pagetoid spread, significant atypia, and mitoses in the subepithelial component supports benignity.",
    ],
    histology: [
      "Junctional nests contain type A epithelioid and/or type B smaller nevus cells along the epithelial-subepithelial junction.",
      "Compound nevi contain symmetric junctional and subepithelial components.",
      "Epithelial inclusion cysts are common in compound nevi and may be surrounded by stromal nevus cells.",
      "Maturation may progress from type A to type B and type C cells with depth, although it is not universal.",
      "Subepithelial nevi resemble the stromal component of compound nevi.",
      "Inflammation and occasional multinucleated cells may occur without establishing malignancy.",
    ],
    ihc: [
      "Nevus cells express S100, SOX10, MITF, and Melan-A.",
      "HMB45 is often negative or only weakly and focally positive, particularly in the junctional component.",
      "Ki-67 is low and usually limited to the junctional component.",
    ],
    differential: [
      {
        name: "Inflamed juvenile conjunctival nevus",
        distinction:
          "Occurs in children and adolescents and shows prominent lymphoplasmacytic and eosinophilic inflammation, rapid apparent growth, and sometimes disordered or reverse maturation.",
      },
      {
        name: "Conjunctival melanoma",
        distinction:
          "Favored by destructive or asymmetric growth, significant cytologic atypia, pagetoid spread, mitotic activity in the stromal component, ulceration, and/or molecular copy-number abnormalities.",
      },
    ],
    molecular: [
      "BRAF p.V600E and NRAS p.Q61 mutations are common in conjunctival nevi but do not distinguish nevus from melanoma.",
      "FISH panels assessing RREB1, MYB, MYC, and CCND1 copy-number changes may help classify melanocytic lesions of uncertain malignant potential.",
    ],
    pitfalls: [
      "Corneal involvement is characteristically absent in conventional conjunctival nevi.",
      "Prominent inflammation or growth in a child does not by itself establish melanoma.",
    ],
  },
  {
    name: "Inflamed Juvenile Conjunctival Nevus",
    group: "Conjunctival Melanocytic Lesions",
    clue: "Juvenile compound nevus with prominent inflammation, epithelial inclusions, and often alarming clinical vascularity or growth.",
    summary:
      "A distinctive inflamed compound conjunctival nevus of children and adolescents that may show architectural and cytologic features mimicking melanoma.",
    clinical: [
      "Occurs in children and adolescents, with a mean age around 13 years; many series show male predominance.",
      "Usually perilimbal and may involve the limbus.",
      "Presents as an elevated, well-circumscribed, often amelanotic or variably pigmented nodule.",
      "May enlarge rapidly and appear vascular, with congested feeder vessels and epithelial cysts.",
      "Atopic dermatitis, asthma, and allergic conjunctivitis may coexist.",
    ],
    criteria: [
      "Preserve the overall compound nevus architecture, often triangular or V-shaped at low power.",
      "Identify a junctional component extending beyond the stromal component.",
      "Find epithelial inclusion cysts or solid epithelial rests within the stroma.",
      "Demonstrate a prominent inflammatory infiltrate, typically lymphocytes, plasma cells, and eosinophils.",
      "Exclude convincing malignant features such as atypical mitoses, destructive invasion, ulceration, or necrosis.",
      "Interpret apparent atypia in the context of patient age, architecture, inflammation, and immunostaining pattern.",
    ],
    histology: [
      "The lesion often has a triangular or V-shaped configuration.",
      "Confluent junctional nests may extend horizontally beyond the subepithelial component.",
      "Epithelial inclusions are common and may contain goblet cells and mucin.",
      "Dense lymphocytic inflammation is prominent, often with germinal centers.",
      "Plasma cells and eosinophils are frequent; eosinophils may infiltrate the superficial epithelium.",
      "Maturation may be incomplete or paradoxical, with larger cells in the deeper component.",
      "Mitoses are rare and the Ki-67 proliferation index remains low.",
    ],
    ihc: [
      "HMB45 highlights the intraepithelial component and superficial stromal nevus cells.",
      "Ki-67 is low despite the sometimes alarming morphology.",
      "CD3 and CD20 demonstrate a mixed T-cell and B-cell inflammatory population.",
      "Plasma cells may express IgG4, but this alone does not establish IgG4-related disease.",
    ],
    differential: [
      {
        name: "Conjunctival junctional, compound, and subepithelial nevi",
        distinction:
          "Conventional nevi lack the marked inflammatory infiltrate and prominent eosinophils characteristic of the juvenile inflamed variant.",
      },
      {
        name: "Conjunctival melanoma",
        distinction:
          "Usually shows destructive growth, significant atypia, atypical mitoses, ulceration, or pagetoid spread; the preserved nevus architecture and low proliferation favor an inflamed juvenile nevus.",
      },
      {
        name: "Conjunctival lymphoma",
        distinction:
          "May present as a salmon-colored patch but consists of a lymphoid proliferation rather than a melanocytic nevus with epithelial inclusions.",
      },
    ],
    pitfalls: [
      "Rapid growth, vascularity, and cytologic atypia can be misleading; correlate with the characteristic architecture and inflammatory background.",
      "IgG4-positive plasma cells may be numerous but do not independently diagnose IgG4-related disease.",
    ],
  },
  {
    name: "Diffuse Choroidal Neurofibroma and Ganglioneuroma",
    group: "Uveal and Iris Lesions",
    clue: "Diffuse or multifocal choroidal expansion by Schwannian and fibroblastic elements, usually in an NF1 setting.",
    summary:
      "Benign diffuse choroidal lesions comprising neurofibroma and, when numerous mature ganglion cells are present, choroidal ganglioneuroma.",
    clinical: [
      "May occur in pediatric patients with NF1; frequency appears to increase with age.",
      "No consistent sex predilection is established.",
      "Typically diffuse or multifocal, with a predilection for the posterior pole; ciliary nerve involvement may occur.",
      "Often detected incidentally on modern imaging or in an enucleated blind, painful, buphthalmic eye.",
      "May be associated with congenital iris ectropion, glaucoma, or anterior displacement of ciliary processes.",
    ],
    criteria: [
      "Identify diffuse or multifocal thickening of the choroid.",
      "Demonstrate a haphazard proliferation of Schwann cells and fibroblasts.",
      "Classify as choroidal ganglioneuroma when conspicuous mature ganglion cells accompany the neurofibromatous component.",
      "Correlate with clinical features of NF1 and evaluate for associated uveal abnormalities.",
      "Exclude a discrete melanocytic neoplasm when the lesion is mass-forming or pigmented.",
    ],
    histology: [
      "The choroid is diffusely expanded by Schwann cells and fibroblasts.",
      "Mast cells are often present in the neurofibromatous component.",
      "Choroidal melanocytes may be admixed with the proliferating Schwannian cells.",
      "Tactile corpuscle-like ovoid bodies with lamellated Schwann cells may be present.",
      "Numerous mature ganglion cells support the designation of ganglioneuroma.",
    ],
    ihc: [
      "Schwannian cells typically express S100 and SOX10.",
      "Neuronal markers may highlight mature ganglion cells in ganglioneuromatous lesions.",
    ],
    differential: [
      {
        name: "Lisch nodule (iris hamartoma)",
        distinction:
          "A Lisch nodule is a discrete, minimally elevated melanocytic hamartoma on the anterior iris surface, not a diffuse choroidal proliferation.",
      },
      {
        name: "Uveal melanoma",
        distinction:
          "Usually forms a discrete melanocytic mass with cytologic and architectural features of a melanocytic neoplasm rather than diffuse Schwannian and fibroblastic expansion.",
      },
    ],
    molecular: [
      "NF1 inactivation is expected in NF1-associated lesions.",
      "Rare reported cases associated with Cowden syndrome may harbor PTEN alterations.",
    ],
    pitfalls: [
      "Ganglion cells may be a normal constituent of the choroid; their presence alone should not prompt a ganglioneuroma diagnosis without the appropriate diffuse stromal lesion.",
    ],
  },
  {
    name: "Lisch Nodule (Iris Hamartoma)",
    group: "Uveal and Iris Lesions",
    clue: "Bilateral small iris surface nodules composed of bland spindle melanocytes in a patient with NF1.",
    summary:
      "A benign melanocytic hamartoma of the iris, strongly associated with neurofibromatosis type 1.",
    clinical: [
      "Usually appears in early childhood and becomes more prevalent with age.",
      "No sex predilection is established.",
      "Occurs on the anterior iris surface, predominantly in the inferior half; lesions are often bilateral.",
      "Small tan-to-cream, minimally elevated nodules; two or more are a diagnostic clinical criterion for NF1.",
    ],
    criteria: [
      "Confirm localization to the anterior surface of the iris.",
      "Identify a plaque-like proliferation of cytologically bland melanocytes.",
      "Correlate with NF1 clinical criteria and the often bilateral distribution.",
      "Exclude cytologic atypia and mitotic activity.",
    ],
    histology: [
      "A dome-shaped plaque is composed predominantly of bland spindle-shaped melanocytes.",
      "Melanocytes are arranged haphazardly with indistinct borders.",
      "Ovoid or rounded melanocytes and melanophages may be present.",
      "The underlying iris stroma may contain similar melanocytes.",
      "Nucleoli are inconspicuous and mitotic figures are absent.",
    ],
    ihc: [
      "Lesional melanocytes express S100.",
      "Melan-A and SOX10 may support melanocytic lineage when needed.",
    ],
    differential: [
      {
        name: "Diffuse choroidal neurofibroma and ganglioneuroma",
        distinction:
          "These lesions expand the choroid diffusely and are composed of Schwannian and fibroblastic elements, sometimes with ganglion cells.",
      },
      {
        name: "Iris mammillations",
        distinction:
          "Mammillations are multiple regularly distributed, smooth, mound-like elevations of the iris pigment epithelium rather than a melanocytic stromal plaque.",
      },
    ],
    molecular: [
      "NF1 alterations underlie the syndromic association; no specific molecular test is required for diagnosing a Lisch nodule.",
    ],
    pitfalls: [
      "Two or more Lisch nodules are one of the clinical diagnostic criteria for NF1; a solitary lesion is less specific.",
    ],
  },
  {
    name: "Retinocytoma",
    group: "Retinal Neuroepithelial Tumors",
    clue: "Well-differentiated retinal lesion composed of photoreceptor-like fleurettes, with calcification and gliosis but no active malignant growth.",
    summary:
      "A rare, differentiated and generally benign retinal tumor considered related to retinoblastoma; similar morphology may occur in treated retinoblastoma.",
    clinical: [
      "Age at diagnosis ranges from infancy to middle age, with a mean around 29 years; no sex predilection is established.",
      "Most lesions are unilateral, although bilateral or multifocal lesions may occur in patients with germline RB1 alterations.",
      "Arises in the neurosensory retina and may be unilateral or bilateral.",
      "Typically appears semitranslucent with mild-to-moderate surrounding pigmentary changes; intralesional cysts and calcification are common.",
    ],
    criteria: [
      "Identify a retinal lesion composed predominantly or entirely of differentiated photoreceptor-like cells.",
      "Find fleurette formation and bland nuclei without brisk mitotic activity or significant necrosis.",
      "Look for calcification, gliosis, and retinal pigment epithelial alterations.",
      "Distinguish a primary retinocytoma from retinocytoma-like differentiation in a previously treated retinoblastoma.",
      "Correlate with clinical and family history because the relationship to retinoblastoma is not fully resolved.",
    ],
    histology: [
      "Photoreceptor differentiation forms fleurettes resembling bouquets of flowers.",
      "Elongated cells have bland nuclei with powdery chromatin.",
      "Mitoses and apoptosis are absent or inconspicuous.",
      "Calcification and gliosis may be present.",
      "Retinal pigment epithelial hyperplasia and degenerative changes may accompany the lesion.",
    ],
    ihc: [
      "Photoreceptor differentiation may be supported by retinal neuronal markers.",
      "Immunophenotype should be interpreted with morphology and clinical history; no single marker independently establishes retinocytoma.",
    ],
    differential: [
      {
        name: "Retinoblastoma",
        distinction:
          "Shows primitive small round blue cells, frequent mitoses and apoptosis, geographic necrosis, and often Flexner-Wintersteiner rosettes; retinocytoma is composed of bland differentiated photoreceptor-like cells.",
      },
    ],
    molecular: [
      "Retinocytoma generally harbors biallelic RB1 loss but has fewer secondary mutations and less aneuploidy than retinoblastoma.",
      "A second retinocytoma or a concurrent retinoblastoma in either eye strongly raises concern for a germline RB1 alteration.",
      "Ki-67 and p53 are typically not expressed; p16 and p130 may be increased, supporting a senescence-associated phenotype.",
    ],
    pitfalls: [
      "Treated retinoblastoma may develop retinocytoma-like differentiation; treatment history is essential.",
    ],
  },
  {
    name: "Retinoblastoma",
    group: "Retinal Neuroepithelial Tumors",
    clue: "Primitive retinal small round blue cell tumor with frequent mitoses, apoptosis, necrosis, and often calcification.",
    summary:
      "The most common primary intraocular malignancy of childhood, driven in most cases by biallelic RB1 inactivation; a small subset is associated with MYCN amplification.",
    clinical: [
      "More than 90% are diagnosed before 5 years of age; bilateral disease presents at a younger median age than unilateral disease.",
      "No sex predilection.",
      "Arises in the retina; unilateral or bilateral, with rare trilateral disease in heritable cases.",
      "Typically presents with leukocoria or strabismus; advanced disease may cause glaucoma, buphthalmos, hyphema, proptosis, or orbital extension.",
      "Endophytic tumors seed the vitreous; exophytic tumors extend into the subretinal space and may cause retinal detachment.",
    ],
    criteria: [
      "In a young child, identify an intraocular retinal mass, commonly unilateral or bilateral.",
      "Histology shows a primitive small round blue cell neoplasm with scant cytoplasm and frequent mitoses and apoptosis.",
      "Geographic necrosis and dystrophic calcification are common.",
      "Flexner-Wintersteiner rosettes support retinal differentiation; Homer Wright rosettes may also occur.",
      "Assess degree of differentiation, anaplasia, necrosis, choroidal invasion, optic nerve invasion, and extraocular extension.",
      "Document the depth and extent of choroidal and optic nerve invasion and the status of the optic nerve margin in enucleated specimens.",
      "Do not perform routine biopsy of a suspected intraocular retinoblastoma because of the risk of extraocular dissemination.",
    ],
    histology: [
      "Primitive neuroblastic cells have basophilic nuclei and scant cytoplasm.",
      "Numerous mitotic figures and apoptotic bodies are characteristic.",
      "Geographic necrosis occurs between viable perivascular tumor cuffs.",
      "Dystrophic calcification is common and may be prominent after treatment.",
      "Flexner-Wintersteiner rosettes have central lumina and resemble retinal differentiation.",
      "Homer Wright rosettes contain central neuropil rather than a true lumen.",
      "Fleurettes indicate photoreceptor differentiation and may occur focally.",
      "Severe anaplasia features enlarged pleomorphic hyperchromatic nuclei and numerous mitoses.",
      "Choroidal invasion, postlaminar optic nerve invasion, meningeal involvement, and extraocular extension are critical high-risk findings.",
    ],
    ihc: [
      "Synaptophysin and neuron-specific enolase highlight tumor cells when confirmation of invasion is needed.",
      "RB1 immunostaining is lost in most conventional retinoblastomas.",
      "Immunohistochemistry is not routinely required when morphology and clinical findings are classic.",
    ],
    differential: [
      {
        name: "Retinocytoma",
        distinction:
          "Composed of bland photoreceptor-like cells and fleurettes without the brisk mitotic activity, apoptosis, and geographic necrosis of retinoblastoma.",
      },
      {
        name: "Medulloepithelioma",
        distinction:
          "Usually arises from the ciliary body and forms multilayered neuroepithelial cords, ribbons, and cysts in a myxoid matrix; LIN28A is commonly positive.",
      },
      {
        name: "Coats disease",
        distinction:
          "Shows retinal telangiectasia and exudation without a true retinal tumor mass; calcification is not a typical feature.",
      },
      {
        name: "Persistent fetal vasculature",
        distinction:
          "Typically produces a retrolental fibrovascular stalk and microphthalmia rather than a primitive retinal neoplasm.",
      },
    ],
    molecular: [
      "Biallelic RB1 inactivation is the central molecular event in nearly all cases; germline RB1 alterations are present in approximately 40% of affected children.",
      "A small subset, especially unilateral tumors in very young children, shows high-level MYCN amplification without RB1 alteration.",
      "Additional recurrent changes include gains of 1q and 6p and loss of 16q.",
      "Germline testing and genetic counseling are important for identifying heritable disease and at-risk relatives.",
    ],
    pitfalls: [
      "A friable tumor may disperse during grossing and mimic invasion; artifact typically forms irregular aggregates admixed with necrotic and viable cells rather than true infiltrative sheets.",
      "Anterior chamber involvement alone is not equivalent to high-risk metastatic invasion.",
      "Careful orientation and sampling of the optic nerve, pupil-optic nerve section, and choroid are essential for risk assessment.",
    ],
  },
  {
    name: "Medulloepithelioma",
    group: "Retinal and Ciliary Body Neuroepithelial Tumors",
    clue: "Ciliary body tumor composed of multilayered polarized neuroepithelial cords and ribbons, often with cysts and myxoid matrix.",
    summary:
      "A rare embryonal neuroepithelial neoplasm, usually arising from the inner surface of the ciliary body. Teratoid tumors contain heteroplastic tissues.",
    clinical: [
      "Usually occurs in children aged 2–5 years; rare adult cases are reported.",
      "Female predominance has been reported.",
      "Typically arises from the inner surface of the ciliary body; rare retinal and optic nerve examples occur.",
      "Presents with visual loss, leukocoria, strabismus, red painful eye, secondary glaucoma, or iris neovascularization.",
      "Intratumoral cysts, lens notching, lens coloboma, or a neoplastic cyclitic membrane may provide diagnostic clues.",
    ],
    criteria: [
      "Identify a tumor centered on the inner surface of the ciliary body.",
      "Demonstrate anastomosing cords, bands, or ribbons of polarized multilayered neuroepithelial cells.",
      "Look for hyaluronic acid-rich myxoid pools and intratumoral cystic spaces.",
      "Classify as teratoid when heteroplastic cartilage, muscle, or brain-like tissue is present; otherwise classify as non-teratoid.",
      "Assess cellular atypia, mitotic activity, necrosis, local invasion, and extraocular extension.",
      "Use LIN28A immunoreactivity as supportive evidence in the appropriate morphologic setting.",
    ],
    histology: [
      "Polarized multilayered neuroepithelial cells form anastomosing cords, bands, and ribbons.",
      "A delicate net-like or diktyomatous architecture may be present.",
      "Neuroepithelial structures are often surrounded by hyaluronic acid-rich myxoid material.",
      "Intralesional cysts are common.",
      "Rosettes may be present in poorly differentiated areas.",
      "Teratoid tumors contain heteroplastic elements, most commonly hyaline cartilage, but may also contain muscle or brain-like tissue.",
      "Malignant features include primitive basophilic sheets, increased mitotic activity, pleomorphism, necrosis, and invasion of uvea, cornea, sclera, optic nerve, or extraocular tissues.",
    ],
    ihc: [
      "LIN28A is positive in most intraocular medulloepitheliomas and is typically negative in retinoblastoma.",
      "Vimentin and neuron-specific enolase may be positive.",
      "Cytokeratin and CK18 expression has been reported; other neural markers show variable results.",
    ],
    differential: [
      {
        name: "Retinoblastoma",
        distinction:
          "Usually arises in the retina and consists of primitive small round blue cells with frequent mitoses, apoptosis, and geographic necrosis; LIN28A is generally negative.",
      },
      {
        name: "Phakomatous choristoma",
        distinction:
          "Is an extraocular medial lower-eyelid developmental lesion with lens-like epithelial islands and a PAS-positive capsule, not an intraocular ciliary body neuroepithelial tumor.",
      },
    ],
    molecular: [
      "Germline DICER1 alterations are associated with a small subset and may indicate DICER1-related tumor predisposition syndrome.",
      "Somatic DICER1 and KMT2D mutations have been reported.",
      "LIN28A expression is diagnostically useful; C19MC amplification characteristic of some CNS embryonal tumors is absent.",
    ],
    pitfalls: [
      "Histologic criteria for benign versus malignant behavior correlate imperfectly with clinical outcome; document invasion and extraocular extension carefully.",
      "Metastatic disease is associated with extraocular extension.",
    ],
  },
  {
    name: "Pilocytic Astrocytoma and Other Optic Pathway Gliomas",
    group: "Optic Nerve and Pathway Tumors",
    clue: "Childhood optic pathway glioma, usually pilocytic astrocytoma, with piloid cells, Rosenthal fibers, and MAPK pathway activation.",
    summary:
      "Optic pathway gliomas involve the optic nerve, chiasm, tracts, or radiations. Most are pilocytic astrocytomas; less common patterns include pilomyxoid astrocytoma and ganglioglioma.",
    clinical: [
      "NF1-associated tumors are typically diagnosed in early childhood; sporadic tumors occur throughout the first two decades.",
      "No consistent sex predilection is established.",
      "Involve the optic nerve, chiasm, optic tracts, or radiations; may extend to the hypothalamus.",
      "Present with visual loss, proptosis, endocrinopathy, or hypothalamic dysfunction.",
      "NF1-associated tumors are often indolent; sporadic tumors more frequently progress and require treatment.",
    ],
    criteria: [
      "Identify an expansile glioma involving the optic nerve or optic pathway in a child or young adult.",
      "Pilocytic astrocytoma shows piloid astrocytes with bipolar processes and a variable biphasic pattern.",
      "Look for Rosenthal fibers and eosinophilic granular bodies.",
      "Pilomyxoid astrocytoma shows monomorphic piloid cells in a prominent myxoid background and is often more cellular.",
      "A distinct ganglion cell component supports ganglioglioma.",
      "Correlate with imaging and NF1 status; biopsy is generally reserved for atypical clinical or radiologic presentations.",
    ],
    histology: [
      "Pilocytic astrocytoma contains bipolar piloid cells with long processes.",
      "A biphasic pattern may alternate compact piloid areas with loose microcystic areas rich in oligodendrocyte-like cells.",
      "Rosenthal fibers are frequent.",
      "Eosinophilic granular bodies may be present.",
      "Myxoid change, microcysts, calcification, hyalinized vessels, and hemorrhage may occur.",
      "Pilomyxoid astrocytoma is more monomorphic and typically has a diffusely myxoid background.",
      "Ganglioglioma contains a well-defined neoplastic ganglion cell component.",
    ],
    ihc: [
      "GFAP and OLIG2 support glial differentiation.",
      "Synaptophysin and neuronal markers highlight the ganglion cell component in ganglioglioma.",
      "IHC findings should be integrated with morphology and molecular results.",
    ],
    differential: [
      {
        name: "Pilomyxoid astrocytoma",
        distinction:
          "Shows monomorphic piloid cells in a diffuse myxoid background and tends to have a higher recurrence and CSF dissemination risk than conventional pilocytic astrocytoma.",
      },
      {
        name: "Ganglioglioma",
        distinction:
          "Contains a distinct neoplastic ganglion cell component in addition to the glial component.",
      },
    ],
    molecular: [
      "MAPK pathway activation is characteristic.",
      "NF1-associated tumors commonly show biallelic NF1 inactivation.",
      "Sporadic pilocytic astrocytomas frequently harbor KIAA1549::BRAF fusion resulting from a 7q34 tandem duplication.",
      "BRAF p.V600E mutations occur in a minority of cases.",
    ],
    pitfalls: [
      "Optic pathway gliomas are often diagnosed radiologically; tissue sampling may risk additional optic nerve injury.",
      "Marked nuclear atypia alone may be degenerative; brisk mitotic activity should prompt careful assessment for more aggressive behavior.",
    ],
  },
];

const overview = [
  {
    name: "Epibulbar choristoma",
    group: "Developmental lesion",
    clue: "Mature ectopic dermal, adipose, or mixed tissues",
    key: "Classify dermoid, dermolipoma, or complex choristoma",
  },
  {
    name: "Epibulbar osseous choristoma",
    group: "Developmental lesion",
    clue: "Compact lamellar bone",
    key: "Normal osteocytes in mature bone",
  },
  {
    name: "Phakomatous choristoma",
    group: "Developmental lesion",
    clue: "Lens-like epithelial islands in medial lower eyelid",
    key: "PAS-positive capsule-like membrane",
  },
  {
    name: "Conjunctival nevi",
    group: "Melanocytic lesion",
    clue: "Junctional, compound, or subepithelial nevus cells",
    key: "Symmetry, maturation, inclusion cysts",
  },
  {
    name: "Inflamed juvenile conjunctival nevus",
    group: "Melanocytic lesion",
    clue: "Inflamed compound nevus in a child or adolescent",
    key: "Epithelial inclusions plus lymphocytes, plasma cells, eosinophils",
  },
  {
    name: "Diffuse choroidal neurofibroma / ganglioneuroma",
    group: "Uveal lesion",
    clue: "Diffuse Schwannian and fibroblastic choroidal expansion",
    key: "Mature ganglion cells support ganglioneuroma",
  },
  {
    name: "Lisch nodule",
    group: "Iris hamartoma",
    clue: "Bland melanocytic plaque on anterior iris",
    key: "Often bilateral; associated with NF1",
  },
  {
    name: "Retinocytoma",
    group: "Retinal tumor",
    clue: "Differentiated photoreceptor-like tumor",
    key: "Fleurettes without brisk proliferation",
  },
  {
    name: "Retinoblastoma",
    group: "Retinal malignancy",
    clue: "Primitive retinal small round blue cell tumor",
    key: "Mitoses, apoptosis, necrosis; assess invasion",
  },
  {
    name: "Medulloepithelioma",
    group: "Ciliary body tumor",
    clue: "Multilayered neuroepithelial cords and ribbons",
    key: "Ciliary body origin; LIN28A positive",
  },
  {
    name: "Optic pathway gliomas",
    group: "Optic nerve tumor",
    clue: "Usually pilocytic astrocytoma",
    key: "Piloid cells, Rosenthal fibers, MAPK alteration",
  },
];

const groups = [
  "All groups",
  ...Array.from(new Set(entities.map((e) => e.group))),
];

export default function EyeTumorsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All groups");
  const [expanded, setExpanded] = useState<string[]>(
    entities.map((e) => e.name),
  );
  const filtered = useMemo(
    () =>
      entities.filter((e) => {
        const haystack = [
          e.name,
          e.group,
          e.clue,
          e.summary,
          ...e.clinical,
          ...e.criteria,
          ...e.histology,
          ...e.ihc,
          ...e.differential.map((d) => `${d.name} ${d.distinction}`),
          ...(e.molecular ?? []),
          ...(e.pitfalls ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return (
          (group === "All groups" || e.group === group) &&
          haystack.includes(query.toLowerCase())
        );
      }),
    [query, group],
  );
  const toggle = (name: string) =>
    setExpanded((current) =>
      current.includes(name)
        ? current.filter((x) => x !== name)
        : [...current, name],
    );
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-slate-800">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
          Ophthalmic Pathology
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
          Eye Tumors
        </h1>
        <p className="mt-3 max-w-4xl text-base leading-7 text-slate-600">
          Diagnostic overview of major pediatric ocular and ocular adnexal
          lesions, emphasizing anatomic site, histologic architecture, lineage
          markers, and clinically relevant molecular findings.
        </p>
      </header>
      <section className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            Tumor Classification at a Glance
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Anatomic location and defining architecture are the most useful
            first steps in narrowing the differential diagnosis.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Entity</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Typical pattern</th>
                <th className="px-4 py-3">Key diagnostic point</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {overview.map((item) => (
                <tr key={item.name} className="align-top">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{item.group}</td>
                  <td className="px-4 py-3 text-slate-600">{item.clue}</td>
                  <td className="px-4 py-3 text-slate-700">{item.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-6 rounded-xl border border-sky-100 bg-sky-50/60 p-5">
        <h2 className="text-lg font-semibold text-slate-900">
          Practical Diagnostic Framework
        </h2>
        <ol className="mt-3 grid gap-3 text-sm leading-6 text-slate-700 md:grid-cols-2">
          <li>
            <strong>1. Start with the anatomic compartment.</strong> Distinguish
            conjunctiva/epibulbar surface, eyelid/orbit, uvea/iris,
            retina/ciliary body, and optic pathway.
          </li>
          <li>
            <strong>2. Define the tissue lineage.</strong> Separate
            choristomatous mature tissues, melanocytic proliferations,
            Schwannian lesions, and neuroepithelial tumors.
          </li>
          <li>
            <strong>3. Evaluate architecture and cytology.</strong> Assess
            symmetry, maturation, inclusion cysts, rosettes, necrosis, mitotic
            activity, and invasion.
          </li>
          <li>
            <strong>4. Use ancillary studies selectively.</strong> Apply lineage
            markers and molecular testing when they resolve a specific
            differential or identify a hereditary tumor predisposition.
          </li>
        </ol>
      </section>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search entities, criteria, markers, or differentials..."
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm"
        >
          {groups.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
        <button
          onClick={() =>
            setExpanded(
              expanded.length === entities.length
                ? []
                : entities.map((e) => e.name),
            )
          }
          className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium hover:bg-slate-50"
        >
          {expanded.length === entities.length ? "Collapse all" : "Expand all"}
        </button>
      </div>
      <div className="space-y-4">
        {filtered.map((entity) => {
          const isOpen = expanded.includes(entity.name);
          return (
            <article
              key={entity.name}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggle(entity.name)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                    {entity.group}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-950">
                    {entity.name}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {entity.clue}
                  </p>
                </div>
                <span className="mt-1 shrink-0 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="mb-5 text-sm leading-6 text-slate-700">
                    {entity.summary}
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    <Section title="Clinical Profile" items={entity.clinical} />
                    <Section
                      title="Essential Diagnostic Criteria"
                      items={entity.criteria}
                    />
                    <Section title="Histopathology" items={entity.histology} />
                    <Section
                      title="Immunohistochemistry and Immunophenotype"
                      items={entity.ihc}
                    />
                    <section>
                      <h3 className="mb-2 text-base font-semibold text-slate-900">
                        Differential Diagnosis
                      </h3>
                      <div className="space-y-3">
                        {entity.differential.map((d) => (
                          <div
                            key={d.name}
                            className="rounded-lg border border-amber-100 bg-amber-50/50 p-3"
                          >
                            <p className="text-sm font-semibold text-slate-900">
                              {d.name}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-slate-700">
                              {d.distinction}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                    {entity.molecular && (
                      <Section
                        title="Molecular Pathology"
                        items={entity.molecular}
                      />
                    )}
                  </div>
                  {entity.pitfalls && (
                    <div className="mt-6 rounded-lg border border-rose-100 bg-rose-50/50 p-4">
                      <h3 className="text-sm font-semibold text-slate-900">
                        Diagnostic Pitfalls
                      </h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                        {entity.pitfalls.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {filtered.length === 0 && (
          <p className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
            No matching entities. Try a different search term or category.
          </p>
        )}
      </div>
      <footer className="mt-10 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
        Ocular specimens require careful orientation, fixation, and sampling.
        Retinoblastoma specimens should be handled and sampled using an
        established ophthalmic pathology protocol, with particular attention to
        the optic nerve, choroid, and extraocular tissues.
      </footer>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
