"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  group: string;
  lineage: string;
  site: string;
  profile: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
  pitfalls: string[];
};
const items: Item[] = [
  {
    name: "Hidrocystoma/cystadenoma",
    group: "Benign",
    lineage: "Sweat gland — apocrine/eccrine (ductal; often overlapping)",
    site: "Most hidrocystomas occur on the face, with a predilection for the eyelids, but they can also affect the ears, vulva, and fingers.",
    profile: [
      "Hidrocystomas are solitary, asymptomatic, bluish, cystic, and translucent lesions, usually located on the face.",
      "They typically measure 5–10 mm but can reach 70 mm in size.",
      "Multiple lesions (Robinson-type hidrocystomas) are rare .",
      "Hidrocystoma affects middle-aged adults of both sexes .",
      "Etiology Hidrocystomas usually increase in size during the summer or after exposure to heat; they decrease in size or disappear in winter.",
    ],
    criteria: [
      "Essential: a unilocular or multilocular cystic lesion lined by columnar cells with or without decapitation secretion and surrounded by a layer of myoepithelial cells.",
      "Staging Not relevant",
    ],
    morphology: [
      "Hidrocystomas typically present as round to oval solitary cystic structures.",
      "They are lined by columnar epithelium, often showing decapitation secretion, surrounded by myoepithelial cells and a basement membrane.",
      "Mucin may be present in the columnar cells.",
      "Most cases contain abundant mucin in the lumen, but the content is sometimes homogeneous and eosinophilic.",
      "Accumulation of secretion material can compress and flatten the epithelium.",
    ],
    ihc: [
      "Immunohistochemically, luminal cells are positive for EMA and CEA; the myoepithelial elements are immunoreactive for S100, SOX10, and p63.",
      "Other markers include GCDFP-15, as well as various keratins in a pattern similar to that seen in the secretory portion of the eccrine glands .",
    ],
    molecular: [],
    differential: [
      "lacrimal gland cysts.",
      "Cytology Insufficient information available",
    ],
    pitfalls: [],
  },
  {
    name: "Syringoma",
    group: "Benign",
    lineage: "Sweat gland — eccrine",
    site: "Most syringomas arise in the lower eyelids and periorbital area . Eruptive lesions tend to occur on the neck, chest, axillae, pubic area, umbilicus, and genital region.",
    profile: [
      "Syringoma manifests as skin-colored or slightly yellow smooth papules.",
      "Eruptive syringoma manifests as several scattered small papules (mostly on the anterior chest wall and flexural areas of the limbs), which may coalesce to form plaques .",
      "They can have a linear and one-sided distribution.",
      "Syringomas most commonly affect elderly women, but the eruptive pattern is most common in young women .",
      "Clear cell syringoma, which is more common in people with diabetes, is histopathologically characterized by ducts and solid aggregates of epithelial cells with optically clear cytoplasm.",
    ],
    criteria: [
      "Essential: skin-colored or slightly yellow smooth papules; ductal structures embedded in a sclerotic stroma.",
      "Staging Not relevant",
    ],
    morphology: [
      "Syringomas are well-circumscribed lesions more frequently located in the upper half of the dermis.",
      "Syringoma has two components: epithelial cells forming ducts, cords, tubules, and cysts; and a homogeneous and sclerotic stroma.",
      "The lumina of the ductal and tubular structures are lined by a double layer of cuboidal cells, sometimes containing granular basophilic material.",
      "The ducts often show characteristic extensions resembling a tadpole tail.",
      "Solid collections of epithelial cells are also observed, often containing multiple confluent cytoplasmic vacuoles.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "In superficial biopsies, the differential diagnosis includes microcystic adnexal carcinoma, sclerosing/morphoeic basal cell carcinoma, and columnar trichoblastoma (formerly desmoplastic trichoepithelioma), from which distinction may be impossible without complete removal and clinicopathological correlation.",
      "Ductal proliferations in cicatricial alopecia, alopecia areata, and prurigo nodularis may resemble syringoma; however, in such cases, the stroma is different.",
      "Eruptive hamartomas of clear cells of the eccrine duct (or so-called clear cell metaplasia of the eccrine duct) resemble clear cell syringomas , but these lesions affect only the excretory ducts of pre-existing eccrine glands.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Poroma",
    group: "Benign",
    lineage: "Sweat gland — eccrine / poroid (apocrine-pattern variants occur)",
    site: "Intraepidermal poroma commonly involves the extremities, but it can affect other sites. About 65% of classic poromas involve the palms or soles. Intradermal poroma commonly involves the head and neck region.",
    profile: [
      "The classic pattern of poroma typically arises as a solitary sessile or pedunculated papule or an asymptomatic nodule ranging from 2 to 20 mm in size, but they can also be cup-shaped, papillomatous, or wart-like.",
      "The color of the lesion varies from red to the normal skin color.",
      "Some neoplasms have an angiomatous, fleshy appearance resembling pyogenic granuloma.",
      "The age at presentation is 60–80 years.",
      "Etiology Unknown Pathogenesis Poromas are thought to derive from the basal keratinocytes of the sweat duct ridge and the lower acrosyringium .",
    ],
    criteria: [
      "Essential: a neoplasm composed of two cellular populations: poroid (smaller and darker) and cuticular (larger and with an eosinophilic cytoplasm) with duct differentiation.",
      "Desirable: richly vascular stroma resembling granulation tissue; areas of necrosis en masse within neoplastic aggregations (classic poromas and dermal duct tumors).",
      "Staging Not relevant",
    ],
    morphology: [
      "All poromas are composed of poroid and cuticular cells.",
      "Poroid cells have a rounded or oval nucleus and scant cytoplasm.",
      "Cuticular cells have ample eosinophilic cytoplasm and a central nucleus, sometimes with moderate atypia.",
      "Ductal differentiation is seen, in the form of small intracytoplasmic vacuoles or the formation of authentic intracytoplasmic ductal structures.",
      "Additional findings include areas of necrosis, cystic areas, foci of keratinization, pale cells, dendritic melanocytes, melanin pigment, and keratohyalin granules.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Clonal-type seborrhoeic keratosis can be confused with the hidroacanthoma simplex pattern, but the ductal structures and two populations of cells in the hidroacanthoma simplex pattern facilitate correct diagnosis.",
      "Hidradenomas are composed mainly of cells with pale cytoplasm, whereas poromas include both poroid and cuticular cells.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Syringofibroadenoma",
    group: "Benign",
    lineage: "Sweat gland — eccrine ductal",
    site: "Syringofibroadenoma involves mainly the lower extremities and exceptionally the nails .",
    profile: [
      "Solitary syringofibroadenomas have variable morphology.",
      "Multiple lesions (eccrine syringofibroadenomatosis) present as small papules or plaques of > 50 mm, which in some cases have a linear distribution.",
      "The surface is usually hyperkeratotic and often shows features of chronic lymphedema.",
      "Syringofibroadenoma affects older patients, with an average age of 60 years.",
      "Etiology In most non-syndromic settings, this is considered to be a reactive process.",
    ],
    criteria: [
      "Essential: ductal epithelial hyperplasia in a fenestrated pattern, embedded in a loose myxoid stroma.",
      "Staging Not relevant",
    ],
    morphology: [
      "There is ductal epithelial hyperplasia in a fenestrated pattern, oriented perpendicularly to the surface of the skin.",
      "The cords of epithelium are interconnected.",
      "The stroma shows loose fibrillary collagen containing abundant mucin and a lymphoplasmacytic infiltrate.",
      "Venules and thick-walled capillaries are abundant.",
      "In some syringofibroadenomas, the ductal cells give a positive PAS reaction and stain positively with colloidal iron .",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Poromas contain more solid areas and different stroma.",
      "Fibroepithelial basal cell carcinoma shows a reticular proliferation of epithelial cells; however, focally there is stromal retraction and nuclear palisading, as well as primitive follicular germinative buds.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Hidradenoma",
    group: "Benign",
    lineage: "Sweat gland — apocrine/eccrine (overlapping)",
    site: "The anatomical distribution is wide, with a predilection for the trunk and limbs.",
    profile: [
      "Hidradenoma is an asymptomatic, solitary, firm nodule, usually < 20–30 mm in diameter, although it can be > 100 mm .",
      "Occasionally, lesions may be ulcerated .",
      "Hidradenoma can affect people of any age, both male and female .",
      "Etiology Unknown Pathogenesis Hidradenomas harbour a t(11;19) translocation, which results in the fusion of CRTC1 (MECT1) at 19p13.1 with MAML2 at 11q21.",
    ],
    criteria: [
      "Essential: a well-circumscribed neoplasm with a lobular and solid/cystic growth pattern; histologically, a mixture of clear cells, polygonal eosinophilic cells, mucinous cells, squamoid cells, and ductal structures; the stroma is characteristically hyalinized.",
      "Staging Not relevant",
    ],
    morphology: [
      "Hidradenomas are well-circumscribed dermal neoplasms that may extend into the subcutaneous tissue.",
      "Most hidradenomas are solid lobular proliferations, but some contain large cystic spaces filled with homogeneous eosinophilic material.",
      "The majority of hidradenomas are composed of pale or clear cells (hence the synonym “clear cell hidradenoma”).",
      "However, other cell types, including polygonal, mucinous, squamoid, oxyphilic/oncocytic, and epidermoid cells, can also be present.",
      "The proportion of various cell types and their combinations vary from case to case.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Poroid hidradenoma has two cell types (poroid and cuticular), both of which are very different from the cells of hidradenoma.",
      "In poroid hidradenoma, tubular structures are only seen in the areas of cuticular cells.",
      "Like other poromas, poroid hidradenoma frequently shows areas of necrosis en masse.",
      "Trichilemmomas consist of pale or clear cells showing signs of trichilemmal differentiation; they often expand the follicular infundibulum and exhibit peripheral palisading surrounded by a thick and prominent basement membrane.",
      "In contrast, hidradenoma can connect with pre-existing infundibular structures, but the neoplastic epithelial islands form solid aggregates in the dermis and subcutis.",
    ],
    pitfalls: [],
  },
  {
    name: "Spiradenoma",
    group: "Benign",
    lineage: "Sweat gland — eccrine/apocrine (overlapping)",
    site: "Spiradenomas most commonly occur on the face or upper part of the trunk.",
    profile: [
      "Spiradenomas are rare neoplasms that usually appear in adulthood, although congenital cases have been described .",
      "Most spiradenomas are solitary subcutaneous nodules; however, multiple lesions can occur in both syndromic and sporadic settings, sometimes in a linear distribution.",
      "Pain is a common clinical feature associated with spiradenoma .",
      "Spiradenomas are quite rare benign tumors occurring in younger adults.",
      "There is no predilection for sex or ethnicity.",
    ],
    criteria: [
      "Essential: round nodules of basaloid cells admixed with lymphocytes and basement membrane material.",
      "Staging Not relevant",
    ],
    morphology: [
      "Spiradenomas consist of single or several round nodules of basaloid cells with smooth borders.",
      "They are centerd in the dermis and occasionally extend into subcutaneous tissue.",
      "The stroma is edematous, with numerous dilated blood and lymph vessels.",
      "The tumor is often populated by numerous lymphocytes.",
      "Spiradenomas are composed of two types of cells: light (or clear) and dark.",
    ],
    ihc: [
      "SOX10 is intensely expressed.",
      "Myoepithelial cells express calponin, SMA, and p63.",
      "Luminal cells express KIT (43%), EMA, CEA, and cytokeratins.",
    ],
    molecular: [
      "CYLD mutation analysis may be helpful, particularly if a germline genetic disorder is suspected.",
    ],
    differential: [
      "Rarely, spiradenoma shows prominent cystic change from which immature basaloid cells emanate in a fenestrated pattern, simulating trichoblastoma.",
      "Some cases show features overlapping those of cylindroma, emphasizing the close relationship between these tumors.",
      "Spiradenomas can focally resemble adenoid cystic carcinoma .",
      "Spiradenocarcinoma can be distinguished by the lack of dual cell differentiation and mitotic activity in low-grade spiradenocarcinoma, and the presence of a high-grade carcinoma adjacent to a benign-appearing spiradenoma .",
      "MYB expression is lost in the malignant tumors, which is diagnostically helpful .",
    ],
    pitfalls: [],
  },
  {
    name: "Cylindroma",
    group: "Benign",
    lineage: "Sweat gland — apocrine/eccrine (overlapping)",
    site: "Cylindroma most commonly affects the head and neck, but it is also found on the trunk and extremities.",
    profile: [
      "Cylindromas are typically smooth, dome-shaped, hairless, reddish-brown papules or nodules.",
      "Multiple cylindromas located on the scalp have historically been referred to as “turban tumors”.",
      "Cylindromas can be solitary or multiple.",
      "They can arise sporadically or as part of Brooke–Spiegler syndrome.",
    ],
    criteria: [
      "Essential: a symmetrical, well-circumscribed lesion, histologically composed of multiple aggregates of basaloid cells in a jigsaw-puzzle arrangement and surrounded by a prominent basement membrane.",
      "Staging Not relevant",
    ],
    morphology: [
      "Cylindroma is a symmetrical, well-circumscribed lesion.",
      "It consists of multiple aggregates of basaloid cells in a jigsaw-puzzle arrangement and surrounded by a prominent basement membrane that gives a positive PAS reaction.",
      "Two types of cells form the epithelial collections: small basaloid cells and larger pale cells.",
      "There are also ductal structures.",
      "Many neoplasms show findings of both spiradenoma and cylindroma in the same lesion (spiradenocylindroma) .",
    ],
    ihc: [
      "The tumor cells usually express KIT (CD117) and SOX10 .",
      "MYB overexpression has also been reported and does not attest to the presence of a fusion gene .",
    ],
    molecular: [
      "CYLD mutation analysis may be helpful, particularly if a germline genetic disorder is suspected.",
    ],
    differential: [
      "Adenoid cystic carcinoma with a prominent jigsaw-puzzle arrangement can enter the differential diagnosis, as can rare examples of basal cell carcinoma in which a thick basement membrane surrounds the aggregates of basaloid cells .",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Tubular adenoma",
    group: "Benign",
    lineage: "Sweat gland — apocrine",
    site: "It is most common in the skin of the lower limbs but can also affect the face and scalp.",
    profile: [
      "The lesions appear as asymptomatic, single, well-circumscribed nodules with a smooth surface.",
      "In some cases, they show a papillated surface and can be ulcerated.",
      "Their size ranges from < 10 mm to 70 mm, although most cases are < 20 mm.",
      "Tubular adenoma most frequently occurs in middle-aged women .",
      "Etiology Unknown Pathogenesis Similar to syringocystadenoma papilliferum, tubular adenoma can develop sporadically or (more frequently) in the genetic setting of a cutaneous mosaic RASopathy, such as nevus sebaceus of Jadassohn.",
    ],
    criteria: [
      "Essential: lobules of irregularly shaped tubules with a dual or multilayered epithelium embedded in fibrous stroma.",
      "Desirable: intraluminal micropapillae lacking a fibrovascular core.",
      "Staging Not relevant",
    ],
    morphology: [
      "Tubular adenomas are well-circumscribed dermal neoplasms that may extend into the subcutis.",
      "They have an overall lobular architecture and are typically encased by a fibrous stroma.",
      "The lobules consist of multiple irregularly shaped tubular structures that have a double- to several-layered epithelial lining.",
      "The peripheral epithelial layer consists of cuboidal to flattened (myoepithelial) cells, and the luminal layer consists of columnar cells that sometimes demonstrate decapitation secretion.",
      "In some tubules, papillary cellular extensions that are devoid of stroma project into the lumina.",
    ],
    ihc: [
      "Immunohistochemistry with the anti–BRAF p.V600E antibody (clone VE1) can be used successfully to detect cases with BRAF p.V600E mutation .",
      "The luminal cells of the tubules are positive for CEA and EMA, whereas the outer cell layer is typically reactive for myoepithelial markers including SMA, calponin, SOX10, and p63 .",
      "A focal lack of myoepithelial cells can be seen in areas with prominent squamous metaplasia or intraluminal secretions.",
    ],
    molecular: [
      "Some cases of tubular adenoma carry mutations in the MAPK signalling pathway, affecting BRAF, KRAS , and HRAS .",
      "Tubular adenomas associated with nevus sebaceus almost always harbour HRAS or KRAS mutations .",
      "Activating mutations of BRAF, HRAS, and KRAS increase cell growth, differentiation, and survival.",
    ],
    differential: [
      "Tubular adenoma and syringocystadenoma papilliferum show overlapping morphological features .",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Syringocystadenoma papilliferum",
    group: "Benign",
    lineage: "Sweat gland — apocrine (often follicular-associated)",
    site: "About 90% of cases are located on the head and neck, including the eyelids and external auditory canal . Less commonly, they may involve the mammary region and lower extremities.",
    profile: [
      "Most lesions appear as a solitary papule or nodule.",
      "Less frequently, they present as multiple grouped, oozing, crusted papules or nodules forming a plaque or horn.",
      "Many cases are associated with nevus sebaceus of Jadassohn.",
      "The tumors have a female predilection and occur across a wide age range.",
      "Etiology None Pathogenesis Pathogenesis is due to activating mutations in the MAPK signalling pathway, affecting BRAF, KRAS, and HRAS.",
    ],
    criteria: [
      "Essential: an intradermally located tumor with micropapillary cystic architecture; connection with the epidermis and/or pre-existing hair follicles.",
      "Desirable: plasma cell–rich stroma.",
      "Staging Not relevant",
    ],
    morphology: [
      "SCAP is an endophytic crateriform lesion, connected focally to the epidermis/hair follicle and composed of two layers of cells forming dilated papillary and cystic structures.",
      "The luminal cells are columnar, with rounded or oval nuclei near the basal pole of the cell and abundant eosinophilic cytoplasm with decapitation secretion.",
      "Mucinous metaplasia may be observed.",
      "The outer layer consists of basal/myoepithelial cells.",
      "The overlying squamous epithelium often displays prominent hyperplasia.",
    ],
    ihc: [
      "BRAF p.V600E mutation can be shown, with excellent sensitivity and specificity, using the anti–BRAF p.V600E antibody (clone VE1).",
      "The luminal cells of the tubules are positive for CEA and EMA, whereas the outer cell layer is typically reactive for myoepithelial markers (SMA, calponin, SOX10, and p63) .",
      "A focal lack of myoepithelial cells can be seen in areas with prominent squamous metaplasia or intraluminal secretions.",
    ],
    molecular: [
      "Syringocystadenoma papilliferum is associated with BRAF p.V600E and HRAS mutations .",
    ],
    differential: [
      "The histopathological differential diagnosis of SCAP includes hidradenoma papilliferum and nipple adenoma .",
      "Hidradenoma papilliferum has papillary formations similar to those of SCAP, and the epithelial cells lining these structures also show evidence of secretion by decapitation; however, hidradenoma papilliferum is not connected to the epidermis, lacks plasma cells, and is localized in the vulva .",
      "In adenoma of the nipple, proliferation of tubular structures is more prominent, connections with follicular infundibula are less obvious, and there are no plasma cells.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Mixed tumor",
    group: "Benign",
    lineage:
      "Sweat gland — mixed epithelial/myoepithelial; usually apocrine-type",
    site: "These tumors often involve the scalp and face but can also affect the external ear canal, eyelids, hands and arms, and acral sites. The trunk and genital region are rarely involved.",
    profile: [
      "Mixed tumors are solitary (rarely multiple), well-circumscribed nodules with a smooth surface.",
      "They are typically 5–30 mm, but can be as large as 120 mm.",
      "Tumors with an osteocartilaginous component may be firm .",
      "Mixed tumor is most common in middle-aged men (median age: 53.5 years); the reported age range is 10–96 years .",
      "Etiology Unknown Pathogenesis Pluripotent cells are probably the source of glandular and myoepithelial cells.",
    ],
    criteria: [
      "Essential: a well-circumscribed, smooth-surfaced nodule; tubules and cords of glandular epithelium embedded in a myxohyalinized or cartilaginous stroma; for eccrine mixed tumors: no signs of decapitation secretion or of sebaceous or follicular differentiation.",
      "Staging Not relevant",
    ],
    morphology: [
      "Mixed tumor has two main patterns: eccrine and apocrine.",
      "The apocrine pattern presents as a well-circumscribed lesion with three components: epithelial, myoepithelial, and mesenchymal (i.e. mucinous, chondroid, osseous, adipocytic, or fibrotic).",
      "The epithelial component is composed of elongated, branched tubules and cystic spaces.",
      "These epithelial structures are lined by two cell layers; the peripheral layer is composed of cuboidal myoepithelial cells, and the inner layer is formed by columnar cells.",
      "The luminal cell layer may exhibit secretion by decapitation.",
    ],
    ihc: [
      "Mixed tumors express SOX10, p63, S100, calponin, SMA, EMA, KIT, CEA, various cytokeratins, and PLAG1 (although the eccrine pattern does not express PLAG1).",
    ],
    molecular: [],
    differential: [
      "Myoepithelioma is a related entity, distinguished by a lack of ductal structures.",
      "When the mesenchymal component is prominent, the differential diagnosis of mixed tumor includes chondroma, but chondromas do not contain epithelial cells.",
      "Cytology FNAB smears show fibrillary chondromyxoid material, with a prominent cellular component composed of epithelial and myoepithelial cells .",
    ],
    pitfalls: [],
  },
  {
    name: "Myoepithelial tumor",
    group: "Benign",
    lineage: "Sweat gland — myoepithelial / mixed adnexal",
    site: "Cutaneous myoepithelioma shows a wide anatomical distribution, with a predilection for the extremities .",
    profile: [
      "Patients with cutaneous myoepithelioma present with a painless, slow-growing papule or nodule .",
      "Myoepithelioma usually arises in adults, with a peak incidence in the third through fifth decades and an M:F ratio of 3:1 .",
      "Etiology Unknown Pathogenesis More than 80% of syncytial myoepitheliomas harbour an EWSR1::PBX3 fusion .",
    ],
    criteria: [
      "Essential: lobulated, trabecular, or nested architecture with variably epithelioid, spindled, plasmacytoid, or clear cells within a myxoid or hyalinized stroma; for syncytial myoepithelioma: sheets of histiocytoid or short spindle cells with pale eosinophilic cytoplasm; EMA and S100 positivity.",
      "Desirable: positivity for EMA/keratins and for S100, SOX10, or GFAP.",
      "Staging Not relevant",
    ],
    morphology: [
      "Cutaneous myoepitheliomas are well circumscribed, occasionally with an epidermal collarette.",
      "Some tumors are lobulated and composed of a trabecular or nested arrangement of epithelioid, spindled, plasmacytoid, or clear cells, usually within a myxoid or hyalinized stroma, with areas of solid, sheet-like growth .",
      "Extension into the subcutis may be seen.",
      "Cutaneous syncytial myoepitheliomas (accounting for 50% of cases) are composed of sheets of histiocytoid to short spindle cells with pale eosinophilic cytoplasm; one third show adipocytic metaplasia, whereas chondroid differentiation is rare .",
      "Myoepithelial carcinomas are exceptionally rare and often show marked nuclear atypia and a high mitotic rate; the minimal criteria for malignancy have not been established in the skin .",
    ],
    ihc: [],
    molecular: ["Rearrangements of EWSR1 can be detected."],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Adnexal adenocarcinoma NOS",
    group: "Malignant",
    lineage: "Sweat gland — apocrine/eccrine, not otherwise specified",
    site: "Adnexal adenocarcinoma can involve any site, but it occurs most commonly in the head and neck (particularly the cheek), followed by the trunk .",
    profile: [
      "Patients with adnexal adenocarcinoma usually present with a solitary nodule or plaque of variable size and color, which may be longstanding and slow-growing.",
      "Most cases occur in the elderly, with no sex predilection.",
      "Etiology Unknown Pathogenesis Unknown Macroscopic appearance Patients usually present with a non-ulcerated papule/nodule.",
    ],
    criteria: [
      "Essential: a primary infiltrative dermal epithelial neoplasm with evidence of ductal differentiation, which cannot be designated as a specific type of cutaneous sweat gland carcinoma; exclusion of metastasis from another site.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "The lesions are asymmetrical, poorly circumscribed, and infiltrative.",
      "They often involve the full thickness of the dermis and extend into the subcutaneous and deeper tissues.",
      "Tumor cells are arranged in tubules, cords, and nests, with ductal/glandular structures devoid of an obvious myoepithelial cell layer.",
      "There may be solid areas.",
      "Tumor cells exhibit abundant eosinophilic or granular cytoplasm and pleomorphic nuclei, occasionally with numerous mitotic figures.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Microcystic adnexal carcinoma has a superficial component with keratin-filled (follicular) cysts, as well as a deeper glandular component that has less atypia than is seen in adnexal adenocarcinoma.",
      "Apocrine carcinoma shows glandular and ductal structures, with cytologically malignant cells showing decapitation secretion.",
      "Basal cell carcinoma with eccrine differentiation shows obvious basal cell carcinoma (i.e. basaloid cells with peripheral palisading, clefting, and myxoid stroma) and focal ductal differentiation.",
      "Squamoid eccrine ductal carcinoma shows malignant squamous epithelium in the superficial regions, occasionally resembling squamous cell carcinoma, while the deeper areas of the lesion display ducts expressing CEA and EMA .",
      "Secretory carcinoma has the characteristic secretion contents in the lumen.",
    ],
    pitfalls: [],
  },
  {
    name: "Microcystic adnexal carcinoma",
    group: "Malignant",
    lineage:
      "Adnexal carcinoma — follicular and ductal (sweat gland) differentiation",
    site: "The tumors have a preference for the central face, mainly the upper lip and nasolabial fold. Extrafacial lesions are rare . The solid pattern of the tumor is more common on the scalp (see below) .",
    profile: [
      "Most cases arise as a sclerotic plaque, with an average diameter of 20 mm; less commonly, they can arise as a nodule, or a cyst-like tumor.",
      "Ulceration is unusual.",
      "There is no sex predilection.",
      "Patients are usually affected in their fifth or sixth decade of life, but the reported age range is wide.",
    ],
    criteria: [
      "Essential: a sclerotic plaque or (sometimes) a nodule or cystic tumor; an infiltrative neoplasm with a desmoplastic stroma composed of strands and nests of bland cells with variable formation of cysts and ducts and no mitotic activity.",
      "Desirable: perineural invasion.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Microcystic adnexal carcinoma is an infiltrative neoplasm that involves the dermis and often extends to underlying tissues, commonly showing horizontal stratified zonation .",
      "It is composed of various proportions of cornifying cysts with compact or laminated keratinous material, usually distributed in the upper part of the lesion; solid nests, strands, and columns of small monomorphic epithelial cells in the midzone; and ductal structures composed of two layers of small cuboidal cells (empty or filled with eosinophilic material) in the lower part.",
      "Perineural invasion is common, but there is no pleomorphism or necrosis, and mitoses are exceptional.",
      "The stroma is sclerotic, hyalinized, and paucicellular, and granulomatous inflammation induced by ruptured cysts may be seen.",
      "Focal clear cell change is frequent.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Cribriform tumor (previously carcinoma)",
    group: "Malignant",
    lineage: "Sweat gland — apocrine-type",
    site: "The site of predilection is the lower extremities, which are affected in > 80% of cases. The head and neck area and other sites are rarely involved .",
    profile: [
      "Cribriform tumor manifests as a solitary skin-colored nodule of 10–30 mm in diameter, often having a firm consistency on palpation.",
      "The duration of symptoms ranges from several months to several years .",
      "Cribriform tumor is a rare neoplasm.",
      "The M:F ratio is 1:2, and the reported age range is 20–77 years, with a median patient age of 47 years .",
    ],
    criteria: [
      "Essential: a nodular tumor composed of interconnected solid and cribriform nests of epithelial cells with scant eosinophilic cytoplasm, nuclear hyperchromasia, small round lumina, intraluminal micropapillary projections, and thin thread-like intraluminal bridging strands.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Most tumors are well circumscribed, although the borders are occasionally jagged and there may be small, satellite-like aggregates of tumor cells seemingly separated from the main lesion.",
      "The neoplasm is composed of multiple interconnected solid nests of epithelial cells with round or oval, hyperchromatic nuclei; inconspicuous or absent nucleoli; granular chromatin; and scant eosinophilic cytoplasm.",
      "In addition to the solid areas, there are also small round lumina that are either empty or filled with an eosinophilic substance that gives a homogeneously positive PAS reaction, giving rise to a cribriform pattern.",
      "The ratio of solid to cribriform areas varies both within a given neoplasm and among tumors.",
      "Common features are larger ductal spaces (sometimes with decapitation secretion); intraluminal micropapillary projections; and thin, thread-like intraluminal bridging strands.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Adenoid cystic carcinoma shows a cribriform pattern but is composed of basaloid epithelial cells arranged around pseudolumina (pseudocysts) filled with mucin or eosinophilic or basophilic material.",
      "In addition to the pseudocystic structures, there are small true ducts with myoepithelial cell differentiation.",
      "These dual-type lumina are never seen in cribriform tumor; neither are the deposits of basement membrane material or perineural invasion that are typical of adenoid cystic carcinoma .",
      "Cutaneous secretory carcinoma also shows cribriform areas but consists of back-to-back proliferations of tubules and microcysts with conspicuous intraluminal secretions.",
      "Coexpression of S100, mammaglobin, STAT5A, and pan-TRK helps to distinguish the neoplasm from cribriform tumor .",
    ],
    pitfalls: [],
  },
  {
    name: "Porocarcinoma",
    group: "Malignant",
    lineage: "Sweat gland — eccrine/poroid",
    site: "The most common site is the lower limbs, followed by the head and neck, trunk, and upper limbs .",
    profile: [
      "Patients with porocarcinoma present with an ulcerated nodule.",
      "Rapid growth, ulceration, and bleeding of a longstanding pre-existing poroma may also be observed.",
      "In one large series, the prevalence of porocarcinoma was 18 cases in 450 000 consecutive skin biopsy specimens (0.004%).",
      "In large series, the mean age at presentation has varied from 61.5 to 73 years (range: 12–91 years).",
    ],
    criteria: [
      "Essential: an infiltrative neoplasm connected to the epidermis, composed of poroid cells and displaying at least focal ductal differentiation.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Porocarcinoma in situ is confined to the epidermis and usually shows the pattern of classic poroma accompanied by cytological features of malignancy .",
      "About 10% of all porocarcinomas are in situ lesions .",
      "Invasive porocarcinoma additionally displays an intradermal proliferation with infiltrative borders and atypical cytological features that vary from moderate to frankly anaplastic.",
      "At least focal ductal differentiation is usually found.",
      "Perineural invasion, intravascular invasion, and necrosis en masse are variable features.",
    ],
    ihc: [],
    molecular: [
      "Although not clinically relevant, fusions (of YAP1, NUTM1, PAK2) have been described in poromas .",
    ],
    differential: [
      "Porocarcinomas with low-grade atypia can be very difficult to distinguish from poroma.",
      "Focal enlarged, atypical-appearing p53-positive cuticular cells can be observed in some poromas .",
      "Porocarcinomas, as opposed to poromas, often show diffuse or focal loss of RB1 expression .",
      "Poorly differentiated porocarcinoma may be difficult to classify as such, because the typical composition of poroid cells and cuticular cells is often no longer recognizable.",
      "Single-cell necrosis in other neoplasms may result in pseudoductal structures that can mimic porocarcinoma.",
    ],
    pitfalls: [],
  },
  {
    name: "NUT carcinoma",
    group: "Malignant",
    lineage:
      "Sweat gland — adnexal carcinoma category in supplied WHO section; lineage may be uncertain",
    site: "NUT carcinoma of the skin has so far been described on the lower limb, shoulder, hand, and trunk . However, because of the rarity of cases, there is insufficient knowledge of the anatomical distribution.",
    profile: [
      "The tumor may arise as a cutaneous papule or nodule, which in some cases may have been present for years .",
      "Regional metastatic spread might be present at the time of diagnosis .",
      "NUT carcinoma of the skin is a very rare and probably underrecognized tumor entity.",
      "Etiology Unknown Pathogenesis NUT carcinoma is characterized by the fusion of the NUTM1 gene either with BRD4 or with genes encoding interacting partners of BRD4, i.e.",
    ],
    criteria: [
      "Essential: a primitive epithelial neoplasm composed of monotonous tumor cells displaying a prominent single nucleolus, with frequent formation of ducts and keratinization foci; molecular evidence of BRD3 or NSD3 gene fusion with a member of the NUT family (NUTM1 or NUTM2B); exclusion of metastasis from elsewhere.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "This infiltrating neoplasm is located in the dermis and/or subcutaneous tissue, usually without apparent connection to the epidermis (which may be ulcerated).",
      "Tumor cells are organized in strands, tubules, or solid aggregates and display round nuclei with vesicular clear chromatin and a prominent single nucleolus.",
      "Characteristic features are small round ducts with eosinophilic cuticles and foci of abrupt keratinization.",
      "Clear cell changes and high-grade areas may be observed.",
      "Ductal structures are positive for EMA and CEA.",
    ],
    ihc: [],
    molecular: [
      "BRD3::NUTM1, NSD3::NUTM1, and BRD3::NUTM2B gene fusions are detected in this setting .",
    ],
    differential: [
      "This includes metastasis of extracutaneous NUT carcinoma and YAP1::NUTM1-rearranged poroma and porocarcinoma, the latter displaying NUT positivity by immunohistochemistry .",
      "Cytology The features of these tumors in cytology preparations have not yet been described.",
    ],
    pitfalls: [],
  },
  {
    name: "Malignant neoplasms arising from spiradenoma, cylindroma, or spiradenocylindroma",
    group: "Malignant",
    lineage:
      "Sweat gland — apocrine/eccrine (arising in spiradenoma/cylindroma)",
    site: "The anatomical distribution is wide, with a predilection for the head and neck area .",
    profile: [
      "The tumors usually are large nodules, several centimetres in size (median: 40 mm).",
      "In some cases, recent rapid growth is seen in a longstanding lesion .",
      "The lesions typically occur as sporadic solitary neoplasms or as a component of Brooke–Spiegler syndrome, an inherited autosomal dominant disease characterized by the development of multiple adnexal cutaneous neoplasms (most commonly spiradenoma, cylindroma, spiradenocylindroma, and trichoepithelioma).",
      "Adults are affected (median age: 63.5 years), with no significant sex bias .",
      "Etiology The tumors may arise in the setting of Brooke–Spiegler syndrome .",
    ],
    criteria: [
      "Essential: a pre-existing benign spiradenoma, cylindroma, or spiradenocylindroma associated with a bona fide malignant proliferation.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "The tumors are large and multinodular, involving the dermis and subcutis.",
      "A pre-existing benign spiradenoma, cylindroma, or hybrid spiradenocylindroma is at least focally present, with gradual or abrupt transition.",
      "Morphologically low-grade tumors are easily mistaken for spiradenoma or cylindroma.",
      "Loss of the dual cell population, cytological atypia, increased mitotic activity, and loss of intratumoral lymphocytes are evident upon careful examination.",
      "Other clues include infiltrative growth with neoplastic aggregates located far away from the main bulk of the tumor, and less conspicuous basement membrane surrounding neoplastic aggregates (in malignant tumors evolving from cylindroma).",
    ],
    ihc: [
      "The tumors express cytokeratins, and ductal differentiation is highlighted by staining for EMA and CEA.",
      "Although staining for MYB is seen in benign spiradenoma, cylindroma, and spiradenocylindroma, MYB expression is lost in the malignant counterparts.",
      "The Ki-67 (MIB1) proliferation index may be increased in the malignant areas, and there is variable expression of p53 .",
    ],
    molecular: [],
    differential: [
      "Rare spiradenomas focally display an atypical adenomatous/adenomyoepitheliomatous component, which may be a precursor adenocarcinoma in situ, but this component is not sufficient to qualify the neoplasm as malignant .",
      "Rare patterns of HPV-induced basaloid (cloacogenic) squamous cell carcinoma in the perianal area must be considered in the differential diagnosis .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Malignant mixed tumor",
    group: "Malignant",
    lineage:
      "Sweat gland — mixed epithelial/myoepithelial; usually apocrine-type",
    site: "The anatomical distribution is wide, with no specific site predilection.",
    profile: [
      "The neoplasms occur as a solitary nodule or tumor and may reach a large size (as large as 100 mm).",
      "There is sometimes a history of sudden rapid growth.",
      "Multiple cutaneous lesions have been reported in rare patients who presented with metastatic disease .",
      "This neoplasm occurs predominantly in the elderly, with no sex predilection.",
      "Etiology Malignant mixed tumors are thought to progress from a benign precursor.",
    ],
    criteria: [
      "Essential: adenocarcinoma, myoepithelial carcinoma, carcinoma NOS, and sarcomatoid (metaplastic) carcinoma associated with a pre-existing benign mixed tumor, the remnants of which either are juxtaposed with the malignant tissue or blend gradually with it.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "A pre-existing benign mixed tumor (usually an apocrine mixed tumor) in association with a malignant component is a prerequisite for the diagnosis of malignant mixed tumor.",
      "The remnants of the benign neoplasm are either juxtaposed with the malignant tissue or blend gradually with it.",
      "The malignant component shows heterogeneity from case to case and can display the following patterns: adenocarcinoma (apocrine), myoepithelial carcinoma, carcinoma NOS, and sarcomatoid (metaplastic) carcinoma.",
      "Adenocarcinoma is composed of sheets of tumor cells arranged in nodules, with glands and papillary structures in which apocrine secretion can be identified.",
      "In the absence of convincing apocrine features, the malignant component may be referred to as a carcinoma NOS.",
    ],
    ihc: [],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant as yet.",
    ],
    differential: [
      "As strictly defined, the diagnosis of cutaneous malignant mixed tumor should only be made when a neoplasm has a clearly identifiable pre-existing benign component.",
      "However, in most reports published to date, this diagnosis was instead based on the biphasic (so-called mixed) appearance of a neoplasm in the absence of a recognizable pre-existing benign mixed tumor.",
      "In some cases, the benign neoplasm may have been completely overgrown by the evolving malignant neoplasm, but it is likely that tumors of different lineages were also included in these reports.",
      "Approximately 10% of cases of benign apocrine mixed tumor show focal atypical cytological features, including enlarged hyperchromatic cells and multinucleated bizarre cells, which are mainly seen in the areas with squamous cell metaplasia, among hyaline cells, or in foci of oxyphilic metaplasia .",
      "However, most of these lesions manifest benign architectural features and follow a benign course.",
    ],
    pitfalls: [],
  },
  {
    name: "Hidradenocarcinoma",
    group: "Malignant",
    lineage: "Sweat gland — apocrine/eccrine (hidradenoma-associated)",
    site: "There is a slight predilection for the head and neck, but the anatomical distribution is wide.",
    profile: [
      "Hidradenocarcinoma is a solitary tumor varying in size from 10 to 60 mm.",
      "Rare patients with metastatic disease present with multiple cutaneous lesions.",
      "The reported duration of the symptoms is 1–40 years.",
      "There is a slight male predominance, and most patients are in their fifth to seventh decade of life.",
      "Etiology Unknown Pathogenesis The t(11;19) translocation involving the genes CRTC1 (MECT1) and MAML2 has been identified in hidradenocarcinoma, but this finding is significantly less common than in hidradenoma, in which about 50% of cases harbour the translocation .",
    ],
    criteria: [
      "Essential: an infiltrative tumor composed of any combination of atypical clear, eosinophilic polygonal, squamoid, oncocytic, and mucinous cells with increased mitotic activity, and necrosis; exclusion of metastasis from renal cell carcinoma.",
      "Desirable: perineural and lymphovascular invasion in less pleomorphic cases; remnants of benign hidradenoma.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Hidradenocarcinoma is composed of the same cell types as hidradenoma, including clear cells, squamoid cells, oncocytic cells, mucinous cells, eosinophilic polygonal cells, and transitional elements in variable proportions, usually with a predominance of clear cells or squamoid cells.",
      "The malignant cells show nuclear pleomorphism, increased mitotic activity, an infiltrative growth pattern, necrosis, and perineural and lymphovascular invasion.",
      "Both low-grade and high-grade tumors are recognized, and some neoplasms contain frankly anaplastic areas.",
      "In about one third of cases, a residuum of a benign hidradenoma is observed.",
      "However, in low-grade cases, the pre-existing hidradenoma can be difficult to recognize, because cytologically bland areas blend imperceptibly with the atypical cells.",
    ],
    ihc: [
      "CEA and EMA decorate the luminal borders of ductal structures.",
      "Overexpression of ERBB2 (HER2) has occasionally been documented and has not been associated with ERBB2 gene amplification as demonstrated by FISH .",
      "Ki-67 and p53 have been assessed for their value in distinguishing between hidradenoma and hidradenocarcinoma, with inconclusive results.",
      "However, the pre-existing benign hidradenoma is always p53-negative, a feature that can aid in diagnosis .",
    ],
    molecular: ["CRTC1::MAML2 fusions are diagnostic but rare."],
    differential: [
      "For clear cell–predominant cases, the differential diagnosis includes metastatic clear cell renal cell carcinoma, which is usually richly vascularized (often with blood lakes or intratumoral hemorrhage) and typically coexpresses vimentin, PAX8, and CAIX .",
      "Regional lymph node involvement may be seen in cases of histologically benign hidradenomas with lymphatic involvement or evidence of a tumor diagnosed simultaneously with the cutaneous primary.",
      "Because follow-up of such cases has not revealed any adverse outcomes, it has been suggested that these tumors constitute so-called benign metastases.",
      "However, a longer follow-up and more cases are needed to prove or disprove this theory .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Endocrine mucin-producing sweat gland carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — eccrine",
    site: "There is a predilection for the eyelid/periorbital skin, with very rare extrafacial occurrence .",
    profile: [
      "Patients with EMPSGC present with a slow-growing, skin-colored or bluish nodule, papule, or cyst.",
      "Sometimes, it may be multifocal .",
      "The true incidence is unknown.",
      "Most cases occur in the sixth and seventh decades of life.",
    ],
    criteria: [
      "Essential: solid, papillary, and/or cystic architecture; polygonal cells with bluish cytoplasm; low mitotic activity; mild cytological pleomorphism; neuroendocrine nuclei; intracellular or extracellular mucin.",
      "Desirable: expression of neuroendocrine markers.",
      "Staging The Union for International Cancer Control (UICC) / American Joint Committee on Cancer (AJCC) TNM system for non-melanoma eyelid carcinoma applies.",
    ],
    morphology: [
      "EMPSGC typically grows as one or more well-demarcated, expansile nodules with cystic, solid, papillary, pseudopapillary, or cribriform architecture.",
      "Tumor cells are polygonal to round, small to intermediate-sized ductal cells, about 1.5 times the size of sweat gland luminal ductal cells.",
      "They have amphophilic or bluish cytoplasm and round to oval nuclei with finely stippled chromatin and inconspicuous nucleoli.",
      "Mild cytological pleomorphism can be noted in some cases.",
      "Small amounts of intracellular and extracellular mucin can be demonstrated by mucicarmine or PAS staining .",
    ],
    ihc: [
      "Synaptophysin or chromogranin expression can be focal, or even absent on a small biopsy, and does not rule out the diagnosis .",
      "INSM1, a most sensitive neuroendocrine marker , is usually positive.",
      "All EMPSGCs strongly express ER, PR, and CK7.",
      "In contrast, expression of these receptors in apocrine carcinoma is variable.",
    ],
    molecular: [],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Mucinous carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — apocrine-type (primary cutaneous)",
    site: "The most commonly reported location is the periorbital area (i.e. the eyelid or brow; accounting for 50% of cases), followed by non-periorbital areas of the face or neck (20% of cases) and the scalp (17% of cases) . Other localizations are rare. For rare neoplasms occurring in the anogenital area, an origin from anogenital mammary-like glands has been proposed .",
    profile: [
      "Patients with primary cutaneous mucinous carcinoma present with a solitary, slow-growing nodule or cyst-like lesion that is flesh-colored, blue, or erythematous and 5–80 mm in size, with most cases measuring 15–20 mm.",
      "Multicentric presentation is rare.",
      "The age-adjusted incidence rate is 0.04 cases per 100 000 person-years.",
      "A systematic review of 159 published cases found that 122 (~77%) of the patients were White, 20 (~13%) were Asian, and 16 (~10%) were Black .",
    ],
    criteria: [
      "Essential: a tumor composed of nests and strands of atypical epithelial cells floating in lakes of extracellular mucin.",
      "Desirable: associated in situ ductal lesions (ducts with a preserved peripheral basal/myoepithelial cell layer) defining the tumor as primary cutaneous; in the absence of an in situ component, a metastasis should be excluded by clinical investigation.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "The stereotypical presentation is that of neoplastic cells arranged in nests, strands, or individual units floating in lakes of extracellular mucin, sometimes separated by variably thick fibrous septa.",
      "The histopathological spectrum of primary cutaneous mucinous carcinoma is wide, and it is analogous to that seen in its mammary counterparts, with at least two distinguishable patterns: a more common pure tumor, in which extracellular mucin constitutes > 90%; and a rare mixed form, in which there is an invasive ductal component in addition to the mucinous element .",
      "The floating neoplastic epithelial cells are usually relatively monomorphic, although some tumors may show substantial nuclear pleomorphism.",
      "Mitoses are generally scarce.",
      "An essential feature, which should be looked for, is an in situ component; it is detected in most cases (60–70%) and defines the neoplasm as primary cutaneous.",
    ],
    ihc: [
      "The in situ component may be highlighted by staining for myoepithelial markers (including p63 and calponin).",
      "The epithelial neoplastic cells express low-molecular-weight cytokeratins, EMA, CEA, E-cadherin, GATA3, MYB, and GCDFP-15.",
      "ER and PR are expressed in most cases.",
      "The typical CK7+/CK20− phenotype can sometimes be useful in the differential diagnosis with metastatic lesions.",
    ],
    molecular: [],
    differential: [
      "Because histologically identical neoplasms can occur in other organs, primary cutaneous mucinous carcinoma must be differentiated from a metastasis or direct invasion from an underlying extracutaneous neoplasm .",
      "The presence of an in situ component qualifies the tumor as primary cutaneous; however, its absence does not necessarily imply an extracutaneous origin, because disrupted myoepithelial cells may no longer be identifiable during disease progression .",
      "For such cases, a full clinical workup is needed to establish the origin.",
      "Potential pitfalls related to in situ lesions include mammary carcinoma originating from an intradermal lactiferous duct (which could be indistinguishable from a primary cutaneous lesion) and the misinterpretation of normal-looking pre-existing ducts and glands as an in situ lesion.",
      "Localization of the tumor on the chest wall and axilla is a strong indicator of mammary origin, whereas microscopic identification of dirty necrosis (disruption of cells resulting in cellular debris) and goblet cell differentiation is a clue to intestinal origin.",
    ],
    pitfalls: [],
  },
  {
    name: "Digital papillary adenocarcinoma",
    group: "Malignant",
    lineage: "Sweat gland — eccrine-type",
    site: "The fingers and toes, and the adjacent skin of the palms and soles, are affected. The hands are more commonly involved (accounting for > 80% of cases) than the feet. Rare tumors have been reported on non-acral sites, particularly the scrotum .",
    profile: [
      "The neoplasm presents as a slow-growing, asymptomatic, deep-seated nodule in most cases, measuring an average of 17 mm (range: 4–43 mm).",
      "The reported duration of symptoms before excision is between 2 months and 15 years.",
      "The tumor can sometimes be clinically confused with a ganglion or a cyst.",
      "A population-based study revealed an incidence of 0.08 cases per 1 million person-years for digital papillary adenocarcinoma .",
      "The patient age at presentation is 14–83 years (average: 52 years), with a clear male preponderance .",
    ],
    criteria: [
      "Essential: a tumor consisting of true papillae with a supportive fibrous core, fused back-to-back glands, solid lobules, and nests, with at least a focally recognizable peripheral layer of myoepithelial cells.",
      "Desirable: HPV42 positivity; immunohistochemistry showing a myoepithelial component.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Historically, aggressive digital papillary adenomas and digital adenocarcinomas were both recognized, but cases originally classified as aggressive digital papillary adenoma later developed metastases ; therefore, the term “adenoma” has now been abandoned in this setting, and all such lesions are classified as digital papillary adenocarcinoma.",
      "Digital papillary adenocarcinoma is usually a multinodular, poorly circumscribed or well-circumscribed lesion located within the dermis and often the subcutaneous tissue, without a connection to the epidermis.",
      "A mixture of solid, cystic, and papillary growth patterns is usually seen.",
      "In the areas with papillary structures, both true papillae with a supportive fibrous core and pseudopapillae lacking a core protruding into or lying free within the cystic spaces may be seen.",
      "A typical feature is the presence of fused back-to-back glands lined by cuboidal to low columnar epithelial cells, occasionally showing apocrine secretion.",
    ],
    ihc: [
      "The tumor cells are diffusely positive for pancytokeratin and CK7.",
      "Staining for EMA and CEA highlights the glands and luminal borders of the papillae.",
      "Immunostaining for S100 is variable in both luminal cells and myoepithelial cells.",
      "The myoepithelial cells stain for SMA, calponin, p63, and (focally) podoplanin (recognized by D2-40) .",
    ],
    molecular: [
      "Mutation detection and HPV detection may be relevant in cases with metastasis.",
    ],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Adenoid cystic carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — apocrine/eccrine (cutaneous)",
    site: "The most common location is the scalp (affected in ~30% of cases), followed by the trunk (in particular the chest wall) and abdomen, which are affected in about 25% of cases. Other locations are rare .",
    profile: [
      "Patients with AdCC present with a solitary nodule averaging 30 mm (range: 5–80 mm), often present for several years before diagnosis.",
      "Pain and hyperaesthesia have rarely been reported with skin tumors .",
      "An incidence rate of 0.23 cases per 1 million person-years has been reported .",
      "This neoplasm generally affects middle-aged to elderly individuals (average age: ~60 years).",
    ],
    criteria: [
      "Essential: coexistence of true small bilayered ducts (with or without secretion) and pseudocysts containing basophilic mucinous material in a multinodular neoplasm; two main cell types – ductal and myoepithelial cells.",
      "Desirable: perineural invasion; coexpression of MYB and KIT (CD117); demonstration of MYB or MYBL1 rearrangements in selected cases.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "AdCCs are characterized by a mixture of cribriform, tubular, and solid patterns forming variably shaped nodules in the dermis and/or subcutis.",
      "The essential diagnostic feature is the coexistence of true small bilayered ducts and pseudocysts.",
      "The true ductal structures are usually sparse, have small round lumina, and are composed of inner epithelial cells with uniform round nuclei (sometimes with small nucleoli) surrounded by an outer layer of basal/myoepithelial cells.",
      "Intraluminal secretion can be seen.",
      "The pseudocystic structures are usually larger than ducts, and they contain abundant basophilic mucinous material that stains positively with Alcian blue at pH 2.5 and/or hyalinized eosinophilic material that gives a positive PAS reaction.",
    ],
    ihc: [
      "The neoplastic cells show diffuse cytoplasmic positivity for broad-spectrum keratins, CAM5.2, and CK7.",
      "Staining with CK5/6 and D2-40 is variable.",
      "The basaloid and myoepithelial cells display nuclear staining for SOX10.",
      "EMA, CEA, and CK15 label the luminal cells surrounding the true ducts.",
    ],
    molecular: [
      "Identification of mutually exclusive MYB::NFIB or MYBL1::NFIB fusions may be helpful in selected cases.",
    ],
    differential: [
      "Cutaneous secretory carcinoma consists of back-to-back tubules and microcysts with conspicuous intraluminal secretions and shows a distinctive positivity for S100, mammaglobin, STAT5A, and NTRK .",
      "Adenoid basal cell carcinoma is distinguished from AdCC by its lack of true ductal structures with myoepithelial cells, the presence of peripheral palisading of neoplastic cells and retraction artefact (often associated with stromal mucin), and at least focal areas of conventional basal cell carcinoma .",
      "Cribriform carcinoma is composed of more eosinophilic cells; lacks myoepithelial cells; and focally manifests solid areas and peculiar thin, thread-like intraluminal bridging strands .",
      "Rare cases of spiradenoma and spiradenocylindroma display areas resembling AdCC by virtue of a cribriform pattern; homogeneous, eosinophilic, or granular basophilic material; and/or ductal structures with a recognizable peripheral myoepithelial cell layer.",
      "The proportion of the AdCC-like pattern varies from 5% to 30% of the tumor volume; therefore, the identification of typical areas of spiradenoma/cylindroma, as well as the absence of nuclear pleomorphism, perineural growth, and increased mitotic activity, facilitates the recognition of this spiradenoma/spiradenocylindroma with an AdCC-like pattern .",
    ],
    pitfalls: [],
  },
  {
    name: "Apocrine carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — apocrine",
    site: "The axilla is the most commonly involved site; the distribution generally parallels the normal distribution of apocrine glands . Bilateral lesions are extremely rare . Other reported locations include the scalp and extremities .",
    profile: [
      "The neoplasm occurs as a solitary nodule or multinodular mass measuring ≥ 20 mm.",
      "Ulceration and hemorrhage may be present.",
      "The lesions usually grow slowly and have often been present for a long time before the diagnosis .",
      "Apocrine carcinoma predominantly affects adults in their fifth or sixth decade of life, with no sex or race predilection.",
      "Etiology Unknown Pathogenesis The finding of an in situ ductal component in apocrine carcinoma suggests that the neoplasm is best compared to invasive breast carcinoma of no special type (also known as invasive mammary ductal carcinoma).",
    ],
    criteria: [
      "Essential: a carcinoma composed of papillary, tubular, or solid structures with apocrine secretion, with or without a peripheral myoepithelial cell layer; exclusion of metastatic breast apocrine carcinoma.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "The most common growth patterns are papillary, tubular, and solid, which usually indicate an invasive component.",
      "The neoplastic cells have abundant eosinophilic cytoplasm, which may be granular and sometimes partly vacuolated.",
      "Small lumina or intracytoplasmic vacuoles resulting from abortive ductal differentiation may be present, but decapitation secretion is usually less conspicuous than in an associated in situ component.",
      "There is variable nuclear pleomorphism and mitotic activity.",
      "Perineural invasion and intravascular involvement may rarely be seen.",
    ],
    ihc: [
      "The neoplastic cells express cytokeratins (including CK7), are usually positive for GCDFP-15, and are variably positive for CEA .",
      "S100, EMA, ER, PR, and AR are variably expressed.",
      "An in situ component is best identified by an intact peripheral basal/myoepithelial cell layer .",
    ],
    molecular: [],
    differential: [
      "Mammary ductal carcinoma metastatic to the skin, or involving it by contiguous extension in axillary lesions, can be difficult or even impossible to distinguish from primary cutaneous apocrine carcinoma.",
      "However, in situ precursor lesions or evidence of transition from pre-existing apocrine glands, if present, identify the neoplasm as a primary cutaneous tumor.",
      "Immunohistochemistry can also be helpful; EGFR (HER1), podoplanin (recognized by D2-40), and p63 are more frequently expressed in primary tumors than in metastatic adenocarcinomas.",
      "A panel of several antibodies may have some utility in the distinction; metastatic breast carcinoma is adipophilin+, ER−, PR−, ERBB2 (HER2)+, CK5/6+/− (weak), and mammaglobin+/− (weak), whereas primary apocrine carcinoma is adipophilin−, ER+, PR+/−, ERBB2 (HER2)−, CK5/6+/− (strong and diffuse), and mammaglobin+/− (strong and diffuse).",
      "However, full clinical investigation remains the gold standard .",
    ],
    pitfalls: [],
  },
  {
    name: "Squamoid eccrine ductal carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — eccrine ductal",
    site: "The head and neck area is typically affected. The limbs and trunk are rarely involved .",
    profile: [
      "The tumors present as large nodules and plaques (as large as a few centimetres) .",
      "With only about 60 cases reported, these tumors appear to be rare, but they are probably underrecognized .",
      "They occur in sun-damaged skin of elderly (median age: 80 years) White individuals, with a male predominance .",
    ],
    criteria: [
      "Essential: a biphasic tumor with a desmoplastic stroma, a component of SCC usually in the superficial to mid dermis, and a ductal component in the mid to deep dermis.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "SEDC is a poorly marginated and frequently ulcerated dermal-based neoplasm with diffusely infiltrative margins and frequent invasion of the subcutis.",
      "The median tumor thickness is 4.3 mm (range: 1.5–18 mm), and the tumor has a biphasic appearance.",
      "In the superficial aspects, the tumor is composed of lobules and nests with overt squamous differentiation and multifocal epidermal connection, closely resembling well-differentiated to moderately differentiated SCC.",
      "In the deeper areas, the tumor is characterized by a diffusely infiltrative growth pattern of irregular cords and strands of cuboidal cells with prominent cytological atypia, nuclear pleomorphism, and ductal differentiation in a desmoplastic stroma.",
      "Perineural infiltration is relatively common.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "On superficial biopsies, SEDC may be indistinguishable from invasive SCC if the deeper-seated ductal component is not represented in the biopsy.",
      "This may be one reason for the underrecognition of this entity.",
      "However, this distinction is of little clinical consequence, because the prognosis and treatment recommendations are similar.",
      "Similarly, porocarcinoma may show squamous differentiation.",
      "It lacks zonation, and the tumor cells show poroid features.",
    ],
    pitfalls: [],
  },
  {
    name: "Syringocystadenocarcinoma papilliferum",
    group: "Malignant",
    lineage: "Sweat gland — apocrine",
    site: "Because syringocystadenocarcinoma papilliferum usually evolves from a pre-existing syringocystadenoma papilliferum (a common secondary tumor in nevus sebaceus of Jadassohn), the most common location is the head and neck area, particularly the scalp .",
    profile: [
      "The lesion appears clinically as a nodule, inflammatory plaque, or tumor (sometimes ulcerated), 20–60 mm in size.",
      "It is sometimes associated with a sebaceous nevus .",
      "Syringocystadenocarcinoma papilliferum is extremely rare, with < 100 reported cases .",
      "Etiology Unknown Pathogenesis In a benign precursor, syringocystadenoma papilliferum, mutation of BRAF and HRAS has been found .",
    ],
    criteria: [
      "Essential: a tumor with papillary architecture, with nuclear and cellular atypia, abnormal mitotic figures, loss of polarity, and a focal disorderly proliferation of the neoplastic cells; an intact myoepithelial cell layer in in situ lesions.",
      "Desirable: remnants of benign syringocystadenoma papilliferum and/or nevus sebaceus; presence of BRAF mutation.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "In most cases, the tumor shows the overall papillary architecture of syringocystadenoma papilliferum (or direct transition from syringocystadenoma papilliferum can be seen), with areas exhibiting nuclear and cellular atypia, abnormal mitotic figures, loss of polarity, and a focal disorderly proliferation of the neoplastic cells, resulting in solid areas and/or cribriform structures.",
      "In situ tumors are associated with an intact myoepithelial cell layer.",
      "The invasive adenocarcinomatous component usually appears as a well-differentiated or moderately differentiated adenocarcinoma; rarely, an intradermal proliferation of small ductal structures composed of a single cell layer involving the full thickness of the dermis or sarcomatoid (metaplastic) carcinoma is seen .",
      "Intravascular invasion is extremely rare .",
      "Other rare appearances of the invasive component include well-differentiated to moderately differentiated squamous cell carcinoma, such as verrucous carcinoma, lesions resembling lymphoepithelioma-like carcinoma, and tumors with a basaloid component .",
    ],
    ihc: [
      "The in situ component can be highlighted by staining for myoepithelial cell markers.",
      "The epithelial cells, in both the pre-existing benign lesion and the carcinoma (including areas with pagetoid spread), stain for CK7 and CAM5.2.",
      "BRAF p.V600E can be detected by VE1 immunohistochemisty in both the precursor lesion and the carcinoma component .",
    ],
    molecular: [],
    differential: [
      "Areas of hyperplasia of luminal cells with mild architectural disorder, nuclear crowding, and formation of solid or cribriform areas may sometimes be seen in otherwise benign syringocystadenoma papilliferum; however, unless unequivocal cytological atypia and abnormal mitotic figures are present, such lesions should not be diagnosed as syringocystadenocarcinoma papilliferum (in situ) .",
      "Rare cases of syringocystadenoma papilliferum associated with florid pseudocarcinomatous hyperplasia in the overlying or adjacent epidermis or adnexal epithelium should be distinguished from syringocystadenocarcinoma papilliferum in which an invasive component is represented by a well-differentiated squamous cell carcinoma .",
      "Pagetoid spread of the neoplastic cells in syringocystadenocarcinoma papilliferum should not be misinterpreted as extramammary Paget disease, especially in small specimens.",
      "Clinicopathological correlation is essential in such cases .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Secretory carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — secretory-type (ETV6::NTRK3-associated)",
    site: "The axilla is the most common site. Rare lesions arise on the face (including the lips), trunk, groin, and limbs .",
    profile: [
      "The neoplasm presents as a nondescript solitary small papule or nodule .",
      "Secretory carcinoma is a rare and probably underrecognized neoplasm, with < 40 cases reported.",
      "There is slight female preponderance.",
    ],
    criteria: [
      "Essential: characteristic abundant secretion within microcystic and tubular spaces.",
      "Desirable: coexpression of S100, mammaglobin, and STAT5A; evidence of ETV6::NTRK3 fusion or ETV6 rearrangement.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Tumors present as intradermal, circumscribed, unencapsulated nodules composed of bland neoplastic cells arranged in microcystic, tubular, and solid growth patterns, with characteristic abundant secretion within the microcystic and tubular spaces.",
      "Cells in the tubular areas may have a cuboidal appearance.",
      "Necrosis, perineural invasion, and lymphovascular involvement are not seen.",
      "The mitotic rate is low.",
      "Immunohistochemically, the neoplastic cells are diffusely positive for S100, mammaglobin, and STAT5A, and they are variably positive for anti-NTRK antibody .",
    ],
    ihc: [],
    molecular: ["ETV6::NTRK3 translocation is detected in most cases."],
    differential: [
      "Primary cutaneous secretory carcinoma appears identical to its extracutaneous counterparts; therefore, clinical correlation is essential to distinguish it from a metastasis from a breast or salivary gland primary.",
      "The presence of prominent intraluminal secretions sometimes resembling thyroid colloid may occasionally raise the possibility of a metastasis from a thyroid carcinoma, but secretory carcinoma is negative for thyroid transcription factor 1 (TTF1).",
      "Of note, there are thyroid gland neoplasms histologically resembling secretory carcinoma, as well as tumors with different morphology but harbouring the ETV6::NTRK3 translocation .",
      "Microsecretory adenocarcinoma (with MEF2C::SS18 fusion) has recently been reported in skin .",
      "Cribriform carcinoma of the skin composed of solid areas punctuated by small round spaces arranged in a cribriform pattern may occasionally resemble a secretory carcinoma, in particular when abundant eosinophilic secretion that gives a homogeneous positive PAS reaction is evident in the lumina of the cystic and tubular spaces.",
    ],
    pitfalls: [],
  },
  {
    name: "Signet-ring cell / histiocytoid carcinoma",
    group: "Malignant",
    lineage: "Sweat gland — apocrine-type",
    site: "Most tumors involve the eyelids. Rarely, identical neoplasms have been reported in the axilla .",
    profile: [
      "Patients with eyelid lesions present with a diffuse thickening of the involved lid, which is covered by normal or erythematous skin.",
      "Cases are often misinterpreted as inflammatory disorders, which can delay the correct diagnosis and worsen the prognosis.",
      "Extension into the adjacent eyelid results in a monocle appearance.",
      "Signet-ring cell / histiocytoid carcinoma is a rare neoplasm, with < 60 cases reported.",
      "The tumor mainly affects men, with an M:F ratio of about 4:1 .",
    ],
    criteria: [
      "Essential: single rows of cells with eccentric nuclei displaced by vacuolated cytoplasm and/or with eosinophilic granular cytoplasm; exclusion of metastatic lobular carcinoma of the breast and exclusion of adenocarcinomas with a signet-ring cell morphology arising in the gastrointestinal tract.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "The tumor is composed of sheets or cords of single rows of cells arranged interstitially between collagen bundles.",
      "The cells have eccentric nuclei displaced by vacuolated cytoplasm (in the signet-ring cell pattern) or exhibit eosinophilic granular cytoplasm (in the histiocytoid pattern).",
      "Both cell types can be found in a single lesion, but one type usually predominates.",
      "Immunohistochemically, the neoplastic cells express high- and low-molecular-weight pancytokeratins, CK7, E-cadherin, CEA, EMA, GCDFP-15, and human milk fat globule .",
    ],
    ihc: [],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant unless tyrosine kinase inhibitor therapy is contemplated.",
    ],
    differential: [
      "The main differential diagnoses are metastatic lobular carcinoma of the breast and adenocarcinomas with a signet-ring cell morphology originating from the gastrointestinal tract.",
      "Immunohistochemistry (i.e. lack of CK5/6, CDX2, and ERBB2 [HER2] expression) can be helpful in some cases, but careful clinicopathological correlation with a full clinical workup is mandatory to rule out a primary internal malignancy .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Trichoblastoma",
    group: "Benign",
    lineage: "Hair follicle — germinative/basal follicular",
    site: "The head and neck area are predilection sites for all trichoblastoma patterns. Large lesions seem to have a predilection for the pelvic girdle.",
    profile: [
      "Sporadic lesions are typically solitary, asymptomatic, skin-colored or reddish, and 5–30 mm in size.",
      "Large nodular trichoblastoma is often associated with a sebaceous nevus and appears pigmented.",
      "Syndromic tumors appear as bilateral, small (2–10 mm), discrete and/or confluent skin-colored papules and nodules on the face, preferentially involving the nasolabial folds.",
      "Sporadic tumors typically occur in the fifth or sixth decade of life, whereas syndromic lesions usually develop around puberty.",
      "Etiology Most cases are sporadic; multiple lesions are usually associated with Brooke–Spiegler syndrome or its phenotypic subtype, multiple familial trichoepithelioma, characterized by the occurrence of only trichoepitheliomas .",
    ],
    criteria: [
      "Essential: a well-circumscribed neoplasm composed of epithelial aggregates of germinative follicular cells and abundant, densely cellular fibrotic stroma.",
      "Staging Not relevant",
    ],
    morphology: [
      "On the basis of their architectural features, trichoblastomas can be grouped in large nodular, small nodular, adamantinoid (lymphadenoma), retiform, and racemiform patterns.",
      "Conventional and desmoplastic trichoepitheliomas have also been referred to as cribriform and columnar trichoblastomas, respectively .",
      "A combination of the above patterns is not uncommon .",
      "Trichogerminoma is also considered a pattern of trichoblastoma by most authors , although its distinctive molecular profile argues in favor of a peculiar subtype .",
      "All trichoblastomas are usually well-circumscribed, non-ulcerated neoplasms confined to the dermis, rarely involving the subcutis.",
    ],
    ihc: [
      "The epithelial cells are positive for BerEP4 .",
      "Data on the presence of CK20-positive Merkel cells in trichoblastoma are somewhat conflicting: although some studies have found a consistent presence of Merkel cells , there are also cases completely devoid of Merkel cells .",
      "The follicular stem cell marker PHLDA1 (TDAG51) has been proposed as the best marker for histopathological differential diagnosis between trichoblastoma and basal cell carcinoma, because it is usually positive in the former and negative in the latter .",
      "The negative results for PHLDA1 in basaloid neoplasms developed in nevus sebaceus support the notion that they are basal cell carcinomas rather than trichoblastomas .",
    ],
    molecular: [],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Pilomatricoma",
    group: "Benign",
    lineage: "Hair follicle — matrical",
    site: "Lesions have a predilection for the head and neck (affected in 50% of cases), followed by the extremities (upper: 25% of cases, lower: 10% of cases) and the trunk (15% of cases) .",
    profile: [
      "Patients with pilomatricoma present with a solitary, mobile, often hard (due to calcification) papule or nodule, measuring 10–30 mm .",
      "The overlying skin may look normal, show red or bluish discoloration, or be anetodermic or bullous/lymphangiectatic .",
      "Giant lesions and perforating tumors due to the transepidermal elimination of neoplastic cells have been reported.",
      "Pilomatricoma is common, accounting for about 1% of all pathologically diagnosed benign skin lesions .",
      "It is the most common non-melanocytic cutaneous tumor excised in children .",
    ],
    criteria: [
      "Essential: neoplastic aggregates of matrical, intermediate, and shadow (ghost) cells in variable proportions, depending of the age of the lesion.",
      "Staging Not relevant",
    ],
    morphology: [
      "Pilomatricomas consist of one or multiple well-circumscribed dermal nodules, often involving the subcutis.",
      "Neoplastic cells have a variable appearance.",
      "Peripheral cells are monomorphic, round, small, and deeply basophilic, with indistinct borders, central vesicular nuclei, and prominent nucleoli, and they are mitotically active.",
      "These peripheral matrical cells keratinize towards shadow (or ghost or mummified) cells.",
      "In rare examples, acantholysis between matrical cells has been described .",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Melanocytic matricoma",
    group: "Benign",
    lineage: "Hair follicle — matrical (with melanocytic component)",
    site: "The head and neck are the most frequent sites for this tumor, followed by the trunk and the limbs.",
    profile: [
      "Melanocytic matricoma appears as a solitary, pigmented, purple or brownish-black papule or nodule.",
      "The surface may be ulcerated or crusted, and the lesion may be painful .",
      "Melanocytic matricoma is rare, with only about 25 cases reported , predominantly in elderly men.",
      "Etiology Unknown Pathogenesis Unknown Macroscopic appearance See Clinical features, above.",
    ],
    criteria: [
      "Essential: a well-circumscribed dermal nodule composed of solid aggregates of matrical cells with numerous scattered dendritic pigmented melanocytes and melanin deposits.",
      "Staging Not relevant",
    ],
    morphology: [
      "Patients with melanocytic matricoma present with a well-circumscribed dermal nodule composed of solid aggregates of basophilic matrical and supramatrical cells with scant cytoplasm, round nuclei, prominent nucleoli, and frequent mitotic figures .",
      "Small clusters of shadow cells may be seen at the center of the aggregates.",
      "Neoplastic cell aggregates contain numerous scattered pigmented dendritic melanocytes and deposits of melanin.",
      "With rare exceptions , there is no connection with the epidermis or hair follicles, although consumption of the epidermis overlying the tumor has been described .",
      "Rare tumors contain atypical melanocytes or epithelial cells .",
    ],
    ihc: [
      "The matrical cells express PHLDA1 and nuclear β-catenin, but not BerEP4 .",
      "Intratumoral melanocytes express S100, HMB45 antigen (PMEL [gp100]), melan-A, and SOX10 .",
    ],
    molecular: [],
    differential: [
      "pigmented pilomatricoma / pilomatrical carcinoma and basal cell carcinoma with matrical differentiation .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Trichilemmoma",
    group: "Benign",
    lineage: "Hair follicle — outer root sheath / trichilemmal",
    site: "Lesions occur mostly on the head and neck, with a predilection for the centrofacial area .",
    profile: [
      "Patients with trichilemmoma present with a (usually) solitary, small (3–8 mm in diameter), hemispherical papule with a smooth or verrucous surface.",
      "Trichilemmoma frequently develops in a pre-existing nevus sebaceus of Jadassohn .",
      "Multiple trichilemmomas may be associated with Cowden syndrome .",
      "Most trichilemmomas arise in middle-aged to elderly adults , with a slight male predilection.",
      "Multiple lesions, especially if there is involvement of the oral mucosa, can be a cutaneous marker of Cowden syndrome .",
    ],
    criteria: [
      "Essential: a solitary, vertically oriented benign tumor with an exophytic and an endophytic component; hair follicle–associated lobules of clear cells with peripheral palisading surrounded by a thick basement membrane.",
      "Staging Not relevant",
    ],
    morphology: [
      "Most lesions are vertically oriented, show an exophytic and endophytic component, and are usually associated with one or more pre-existing hair follicles.",
      "Prominent digitated to bulbous thickening of the follicular infundibulum is seen, with superficial hypergranulosis and hyperkeratosis.",
      "A collarette of adnexal epithelium often surrounds the lesion .",
      "The main bulk of the lesion is composed of lobules of monomorphic epithelial cells with pale eosinophilic or clear cytoplasm (the latter due to abundant glycogen) and round, vesicular, and eccentrically located nuclei, reminiscent of cells of the outer root sheath (trichilemma) of the lower segment of hair follicle.",
      "Frequently, the cells in the periphery display palisading and rest on a thick basement membrane similar to the vitreous membrane of normal hair follicles.",
    ],
    ihc: [
      "PTEN expression may be lost, more commonly in lesions from patients with Cowden syndrome .",
      "Both conventional and desmoplastic trichilemmomas commonly express p16 and CD34 .",
    ],
    molecular: ["Not clinically relevant in most cases"],
    differential: [
      "The histopathological differential diagnosis of trichilemmoma includes other clear cell proliferations, especially the clear cell subtype of apocrine hidradenoma.",
      "In contrast with trichilemmoma, clear cell hidradenoma is a mostly solid neoplasm, which often occupies the entire thickness of the dermis with little or no contact with the epidermis.",
      "Inside the aggregates of clear cells of clear cell hidradenoma, there is evidence of ductal differentiation.",
      "Often, mucinous cells are observed in some of these ductal structures, forming part of the layer of luminal cells.",
      "In general, in clear cell hidradenoma there is no peripheral palisading, and the peripheral cells are not apposed on a thick basement membrane as in trichilemmomas.",
    ],
    pitfalls: [],
  },
  {
    name: "Trichoadenoma",
    group: "Benign",
    lineage: "Hair follicle — infundibular",
    site: "In most cases the lesion is located on the face or the scalp , although examples have also been described on the back, buttock, thigh, and vulva .",
    profile: [
      "Trichoadenoma usually appears as a small, slowly growing, solitary nodular lesion with a telangiectatic surface.",
      "Multiple milia-like cystic structures surrounded by thin linear vessels on an erythematous-yellowish background of poorly defined borders have been described as characteristic dermoscopic features of trichoadenoma .",
      "Trichoadenoma may appear at any age from birth to 80 years .",
      "In 1 reported case the lesion was congenital .",
    ],
    criteria: [
      "Essential: a well-circumscribed dermal nodule composed of tiny interconnected infundibular cysts.",
      "Staging Not relevant",
    ],
    morphology: [
      "Trichoadenoma appears as a well-circumscribed dermal nodule composed of epithelial and mesenchymal components.",
      "The epithelial component consists of numerous infundibulocystic structures, which may be connected to each other, but without connections to the epidermis.",
      "These cystic structures are small infundibular cysts, lined by squamous epithelium with a basal layer, an eosinophilic squamous layer of variable thickness, and a well-developed granular layer.",
      "The content of the cysts is basophilic and orthokeratotic keratin, similar to the keratin present in the infundibulum of hair follicles.",
      "Sometimes the epithelial lining of these cysts is similar to the epithelium of the sebaceous duct, resembling steatocystoma.",
    ],
    ihc: [
      "Scattered CK20-positive Merkel cells are detected in the epithelial aggregates of trichoadenoma .",
      "Immunoprofile studies for cytokeratins support the hypothesis that trichoadenoma differentiates mainly towards the follicular infundibulum and follicular bulge of the outer root sheath .",
      "Trichoadenoma in association with intradermal melanocytic nevus supports the notion that trichoadenoma and columnar trichoblastoma (formerly desmoplastic trichoepithelioma) represents the two ends of a spectrum of lesions .",
    ],
    molecular: [],
    differential: [
      "With an inadequate and too-superficial biopsy, differential diagnosis with syringoma, columnar trichoblastoma (formerly desmoplastic trichoepithelioma), and microcystic adnexal carcinoma may be impossible, and a larger and deeper sample should be requested.",
      "Syringoma is composed of small ductal structures lined by two layers of epithelial cells embedded in a sclerotic stroma.",
      "Infundibular cysts are less numerous in syringoma than in trichoadenoma, and in difficult cases, immunostains for EMA and CEA demonstrate that ductal structures of syringoma express these two markers in the luminal border of the ducts, whereas infundibular cysts of trichoadenoma are negative.",
      "Columnar trichoblastoma (formerly desmoplastic trichoepithelioma) with abundant infundibular cysts may resemble trichoadenoma, but it is mostly composed of elongated thin cords of basaloid follicular germinative cells expressing PHLDA1 and a prominent desmoplastic stroma .",
      "Microcystic adnexal carcinoma is a malignant and poorly circumscribed neoplasm that often extends to subcutaneous tissue.",
    ],
    pitfalls: [],
  },
  {
    name: "Trichofolliculoma",
    group: "Benign",
    lineage: "Hair follicle — follicular infundibulum",
    site: "Most lesions occur on the face . Rarely, cases occur on the genitalia and upper limbs .",
    profile: [
      "Patients with trichofolliculoma present with a single skin-colored, dome-shaped papule measuring 5–7 mm.",
      "A characteristic but not constant feature is the presence of a central pore with a tuft of thin white vellus hair shafts (Pinkus sign) .",
      "Multiple trichofolliculomas are rarely seen .",
      "Trichofolliculoma is rare.",
      "It shows a slight male predominance and a predilection for middle-aged adults .",
    ],
    criteria: [
      "Essential: a central cystic, dilated follicular infundibulum surrounded by immature villous hair follicles in different stages of development.",
      "Staging Not relevant",
    ],
    morphology: [
      "Trichofolliculoma is a symmetrical, well-circumscribed lesion, with its larger axis perpendicular to the skin surface and a central dilated follicular infundibulum connected to the epidermis.",
      "Emanating radially from this cystic infundibulum are numerous vellus hair follicles showing differentiation towards the lower hair follicle segment, in different stages of development.",
      "The central cystic infundibulum contains infundibular keratin and occasional hair shafts.",
      "Sebaceous glands may be associated with the hair follicles, and in some lesions they are the dominant component.",
      "Surrounding each miniature hair follicle is a well-developed perifollicular connective tissue sheath, and in the vicinity there are well-circumscribed collections of fibrocytes that represent miniature follicular papillae.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Folliculocystic sebaceous hamartoma, with large, voluminous sebaceous glands rather than miniature villous hair follicles at the periphery, is considered by some authors to be a late-stage trichofolliculoma (previously called sebaceous trichofolliculoma) , but this suggestion has recently been questioned .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Pilar sheath acanthoma",
    group: "Benign",
    lineage: "Hair follicle — follicular infundibulum / pilar sheath",
    site: "The most common location is the face, with a predilection for the upper lip .",
    profile: [
      "Pilar sheath acanthoma arises as a single papule or nodule with a central depression filled with keratin.",
      "Clinical diagnosis is usually as a giant comedo.",
      "Pilar sheath acanthoma is rare.",
      "It usually develops in middle-aged and elderly patients (age range: 30–76 years), with no sex predilection.",
    ],
    criteria: [
      "Essential: solid lobules of follicular isthmic epithelium around dilated infundibular structures.",
      "Staging Not relevant",
    ],
    morphology: [
      "Pilar sheath acanthoma is a symmetrical, well-circumscribed, vertically oriented lesion.",
      "It consists of a large central crater filled by basket-weave orthokeratotic keratin and formed as a result of the confluence of several contiguous dilated follicular infundibula.",
      "Emanating from this central crater, in a radial arrangement, are solid lobules composed of pale eosinophilic cells similar to those seen in the outer root sheath of the isthmus of the hair follicle.",
      "These lobules often show peripheral palisading of the cells and contain small ducts lined by a wavy eosinophilic cuticle.",
      "In rare instances, the neoplastic lobules are distributed in a horizontal configuration, and they may contain ductal structures showing decapitation secretion or contain small clusters of mature sebocytes .",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "This includes dilated pore of Winer and trichofolliculoma.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Tumor of the follicular infundibulum",
    group: "Benign",
    lineage: "Hair follicle — infundibular",
    site: "Single lesions typically occur on the face, and multiple lesions favor the face and neck.",
    profile: [
      "Tumors of the follicular infundibulum occur as solitary or (more often) multiple smooth or slightly hyperkeratotic and hypopigmented papules arranged in plaques .",
      "Multiple lesions are more common on photoexposed areas and appear as grouped hypopigmented macules with a reticulated pattern, or they may present as lesions mimicking hypopigmented plane warts .",
      "In some patients, eruptive lesions have been described .",
      "The relative frequency reported is 3–17 cases per 100 000 skin biopsies or 12 cases per 121 500 biopsies .",
      "There is no sex predilection .",
    ],
    criteria: [
      "Essential: anastomosing epithelial cords, similar to the epithelium of the follicular isthmus, connected to the epidermis and involving the superficial dermis with a reticulated and fenestrated pattern.",
      "Staging Not relevant",
    ],
    morphology: [
      "Tumor of the follicular infundibulum is composed of anastomosing horizontally arranged cords of pale epithelial cells, connecting at intervals with the epidermis and creating a fenestrated pattern .",
      "Most cells within the cords are large, with pale cytoplasm (as a result of abundant intracytoplasmic glycogen) and a small round or oval nucleus.",
      "Peripheral cells are basaloid, with basophilic, poorly defined cytoplasm and palisading of the nuclei.",
      "At the periphery of neoplastic cords, epithelial prominences consisting of small infundibular cysts are seen.",
      "Small ductal structures with irregular luminal borders, similar to sebaceous ducts, and small clusters of mature sebocytes may be also seen .",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Superficial basal cell carcinoma shows peripheral clefting and cytological atypia.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Trichodiscoma and fibrofolliculoma",
    group: "Benign",
    lineage: "Hair follicle — perifollicular / follicular hamartomatous",
    site: "Most lesions arise on the head and neck, especially on the nose and perinasal skin.",
    profile: [
      "Trichodiscoma and fibrofolliculoma arise as solitary or multiple white or skin-colored papules with a smooth surface, measuring 1–10 mm, with no symptoms .",
      "The presence of multiple lesions strongly suggests Birt–Hogg–Dubé syndrome, in which they are associated with angiofibromas, oral papules, cutaneous collagenomas, renal neoplasms, and pulmonary cysts .",
      "Spindle cell–predominant trichodiscoma (SCPT) is a pattern presenting as a solitary, dome-shaped, skin-colored papule with a smooth surface, measuring 5–10 mm.",
      "Trichodiscoma, fibrofolliculoma, and SCPT are rare.",
      "Solitary lesions tend to occur in the fifth or sixth decade of life, with no sex predilection .",
    ],
    criteria: [
      "Essential: a dome-shaped papule with infundibulocentric proliferation of delicate epithelial strands and surrounding stroma (fibrofolliculoma), or predominant central stroma with lateral collarettes of mature sebaceous lobules (trichodiscoma); stroma composed of fibrillary collagen bundles, mucin, and CD34-positive fibrocytes.",
      "Staging Not relevant",
    ],
    morphology: [
      "Fibrofolliculoma and trichodiscoma represent stages of a single pathological process forming a morphological continuum.",
      "Fibrofolliculoma is a symmetrical dermal infundibulocentric proliferation, with a central dilated infundibulum from which thin epithelial strands and sebaceous glands emanate, sometimes with a fenestrated pattern.",
      "The characteristic stroma is composed of fibrillary ribbon-like collagen, mucin, and fibrocytes in varying proportions .",
      "The fibrocytes are spindle-shaped, with elongated, slightly wavy nuclei and tapering cytoplasm .",
      "Collagen bundles are perpendicular to the epithelial strands.",
    ],
    ihc: [],
    molecular: [
      "No genetic data are needed for the diagnosis.",
      "Patients with multiple lesions should be referred for oncogenetic consultation and testing.",
    ],
    differential: [
      "dermal spindle cell lipoma and neurofibroma.",
      "In contrast with spindle cell lipoma, most spindle cells may show loss of RB1 staining, but FISH analysis does not demonstrate heterozygous deletion of RB1 .",
      "The spindle cells of neurofibroma are S100-positive.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Proliferating trichilemmal tumor",
    group: "Intermediate",
    lineage: "Hair follicle — outer root sheath / trichilemmal",
    site: "More than 90% of cases occur on the scalp. Rare cases have been described in the perianal region .",
    profile: [
      "PTT usually manifests as a solitary, slow-growing, exophytic lesion, 20–250 mm in size.",
      "Some lesions grow rapidly and may develop ulceration.",
      "In 1 reported case, a tumor developed in a pre-existent nevus sebaceus .",
      "PTT most commonly occurs in women aged > 40 years.",
      "Etiology The etiology is unknown.",
    ],
    criteria: [
      "Essential: a solid-cystic neoplasm with prominent epithelial infoldings into the cystic cavity, composed of irregular aggregates of keratinocytes with trichilemmal keratinization.",
      "Staging The eighth edition of the Union for International Cancer Control (UICC) TNM staging system applies for cases with metastases.",
    ],
    morphology: [
      "PTT displays a morphological continuum .",
      "At one end of the spectrum, it appears as a well-circumscribed dermal solid and cystic neoplasm, sometimes involving the subcutaneous tissue.",
      "In addition to the typical features of a trichilemmal cyst, the tumor is characterized by prominent epithelial infoldings into the cystic cavity.",
      "Small, basaloid cells displaying peripheral palisading are arranged along a thick vitreous membrane, and inner layers of the neoplasm show differentiation towards large monomorphic keratinocytes with abundant eosinophilic cytoplasm, lacking significant atypia, with low mitotic activity and abrupt keratinization in the absence of a granular layer .",
      "Areas of calcification and abundant cholesterol crystals are frequently seen within the compact eosinophilic keratin.",
    ],
    ihc: [],
    molecular: ["Not clinically relevantMalignant tumors with follicular"],
    differential: [
      "The histopathological differential diagnosis of PTT includes ruptured trichilemmal cyst, giant trichilemmal horn, SCC, and the proliferating pattern of epidermal (infundibular) cyst.",
      "Ruptured trichilemmal cysts may show irregular aggregates of keratinocytes with trichilemmal keratinization, but they lack the solid multilobular structure of PTT.",
      "Giant cutaneous trichilemmal horn consists of a mixture of squamous cells and trichilemmal keratinized debris and in some cases is connected at its base to a trichilemmal cyst.",
      "Mitotic activity is frequent, and cytological atypia is lacking .",
      "Uncommonly, SCC may show a cystic configuration, but nuclear atypia is more marked than in PTT.",
    ],
    pitfalls: [],
  },
  {
    name: "Pilomatrical carcinoma",
    group: "Malignant",
    lineage: "Hair follicle — matrical",
    site: "The site of predilection is the face, with rare cases reported in other locations.",
    profile: [
      "Pilomatrical carcinoma presents as a solitary, often ulcerated nodule.",
      "Pilomatrical carcinoma is rare .",
      "Most cases develop in middle-aged or elderly individuals.",
    ],
    criteria: [
      "Essential: a poorly circumscribed neoplasm composed of solid aggregates of matrical cells, with areas of necrosis en masse and focal aggregates of shadow cells.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Pilomatrical carcinoma is poorly circumscribed and infiltrative, and it involves the deep dermis, subcutaneous tissue, and even skeletal muscle and fascia.",
      "The lesion is composed of solid aggregates of immature basaloid matrical cells with scant cytoplasm, a vesicular nucleus, a prominent nucleolus, and numerous mitoses.",
      "Atypical mitoses may be seen.",
      "Shadow cells are less abundant in pilomatrical carcinoma than in pilomatricoma, but they are characteristic and useful in the diagnosis .",
      "In some cases, inner root sheath differentiation (including trichohyalin granules and nests of bluish-grey cornified material) can be seen.",
    ],
    ihc: [
      "Pilomatrical carcinomas show both nuclear and cytoplasmic staining for β-catenin in the basaloid matrical cells, as well as nuclear expression of CDX2 and LEF1 ; BerEP4 is negative .",
    ],
    molecular: [],
    differential: [
      "Pilomatrical carcinoma should be distinguished from pilomatricoma and basal cell carcinoma with matrical differentiation.",
      "Pilomatricoma is a benign cystic neoplasm that appears as a symmetrical, well-circumscribed lesion with regular and smooth borders; it usually does not show any areas of necrosis en masse or the cytological atypia seen in pilomatrical carcinoma.",
      "Basal cell carcinoma with matrical differentiation is a neoplasm with all the architectural and cytological features of a basal cell carcinoma, and focal aggregates of shadow cells; rarely, areas with matrical differentiation predominate and display some degree of cytological atypia .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Trichoblastic carcinoma/carcinosarcoma",
    group: "Malignant",
    lineage: "Hair follicle — germinative/basal follicular",
    site: "The reported lesions have occurred in the head and neck and the trunk.",
    profile: [
      "These neoplasms appear to affect elderly patients and present as a solitary nodule.",
      "Both neoplasms are very rare and probably underrecognized.",
      "Fewer than 10 cases of bona fide trichoblastic carcinosarcoma have been reported .",
    ],
    criteria: [
      "Essential: an invasive tumor with dual differentiation towards follicular stroma and follicular epithelium; for trichoblastic carcinoma: a benign stromal component identical to that of trichoblastoma, and an atypical basaloid component; for trichoblastic carcinosarcoma: a biphasic tumor in which both the epithelial (basaloid) and mesenchymal components resembling specific follicular mesenchyme…",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Trichoblastic carcinoma is an invasive but well-circumscribed neoplasm composed of a stromal component identical to that of trichoblastoma and a basaloid component that shows moderate to severe atypia.",
      "In trichoblastic carcinosarcoma, both the epithelial and the mesenchymal components are malignant, with pleomorphic cells, abnormal mitotic figures, crowding, and hyperchromasia.",
      "Each epithelial nodule is intimately associated with the stroma, which recapitulates specific follicular mesenchyme by virtue of papilla-like aggregations that are often aligned across a broad front, resembling continuous papillae.",
      "Despite their close association throughout the tumor, the epithelial and stromal cells are sharply separated, with no gradual transition between the two elements; this is an important feature distinguishing this neoplasm from sarcomatoid (metaplastic) basal cell carcinoma.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "Trichoblastic carcinoma is distinguished from trichoblastoma by atypia in the epithelial component.",
      "Basal cell carcinoma lacks the specialized follicular stroma and is composed of basaloid epithelial cells that are less atypical than those seen in trichoblastic carcinoma/carcinosarcoma.",
      "In basal cell carcinoma with sarcomatoid differentiation, the transition between the epithelial and mesenchymal components is gradual, and the mesenchymal component appears as pleomorphic sarcoma rather than resembling follicular papillae .",
      "Trichoblastic carcinoma should be differentiated from benign plaque-like trichoblastomas that occur around the mouth and frequently involve the underlying skeletal muscle, which is a normal constituent of the deep dermis in this area .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Trichilemmal carcinoma",
    group: "Malignant",
    lineage: "Hair follicle — outer root sheath / trichilemmal",
    site: "Trichilemmal carcinoma involves sun-exposed areas, most commonly the face, scalp, and neck, and less frequently the back of the hands.",
    profile: [
      "Trichilemmal carcinoma manifests as an erythematous, tan, or flesh-colored papule; a keratotic nodule; or an indurated plaque mimicking squamous or basal cell carcinoma.",
      "It is frequently ulcerated.",
      "Trichilemmal carcinoma may arise in patients exposed to chronic actinic damage, receiving radiotherapy treatment with long latency periods, or affected by xeroderma pigmentosum.",
      "Trichilemmal carcinoma has a predilection for elderly individuals; the majority of cases occur between the seventh and ninth decades of life.",
      "There is no sex predominance .",
    ],
    criteria: [
      "Essential: a cutaneous nodule on a sun-exposed, hair-bearing anatomical site; a lobular proliferation of atypical, glycogen-rich clear cells lacking mucin and palisading around a follicular unit.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "Trichilemmal carcinoma is characterized by a proliferation of tumoral lobules (composed of large atypical cells with clear cytoplasm) with a sharply defined border and pushing margins continuous with the epidermis or pilosebaceous structures.",
      "The tumor cells give a positive PAS reaction, and there are prominent nucleoli, frequent mitoses, and foci of trichilemmal keratinization.",
      "At the periphery of the lobules, the keratinocytes show palisading and are surrounded by a prominent connective tissue sheath.",
      "The tumor is more commonly associated with an invasive component centerd on a pilosebaceous unit and may show pagetoid spread in the overlying epidermis.",
      "The tumor cells are strongly positive for p53 and focally positive for CD34 (My10), which is a marker of differentiation from the outer root sheath.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "The main differential diagnosis of trichilemmal carcinoma is clear cell squamous cell carcinoma, although these tumors are considered by some authors to be the same entity .",
      "Squamous cell carcinoma with clear cells lacks trichilemmal keratinization and lobular proliferation.",
      "Trichilemmal carcinoma must be distinguished from other skin cancers with clear cell changes.",
      "The identification of ductal differentiation with CEA and EMA staining is useful for differentiating hidradenocarcinoma from trichilemmal carcinoma.",
      "Desmoplastic trichilemmoma may rarely exhibit an infiltrative growth pattern but lacks pleomorphism and mitoses.",
    ],
    pitfalls: [],
  },
  {
    name: "Sebaceoma",
    group: "Benign",
    lineage: "Sebaceous gland",
    site: "Sebaceomas arise most commonly on the face and scalp, and rarely on the trunk or extremities .",
    profile: [
      "Sebaceomas are solitary, yellow-tan papules/nodules .",
      "They may rarely arise in a pre-existing sebaceous nevus .",
      "Lesions associated with Muir–Torre syndrome may be multifocal .",
      "Sebaceomas may be associated with Muir–Torre syndrome , part of Lynch syndrome (see the Digestive System Tumors and Genetic Tumor Syndromes volumes of this series ).",
      "The mean patient age at diagnosis is 70 years , and there is a female predominance .",
    ],
    criteria: [
      "Essential: a solitary, yellow-tan papule/nodule; well-circumscribed cellular lobules composed mostly of small, monomorphic, immature but cytologically benign basaloid cells admixed with fewer mature sebocytes (< 50%), haphazardly distributed throughout the tumor.",
      "Staging Not relevant",
    ],
    morphology: [
      "Sebaceoma consists of well-circumscribed cellular lobules composed mostly of small monomorphic immature basaloid cells admixed with fewer mature sebocytes (< 50%), haphazardly distributed throughout the tumor.",
      "Mature sebocytes have abundant cytoplasmic vacuoles that produce scalloped nuclei.",
      "Duct-like structures and cystic areas may be seen, which often show an eosinophilic cuticle and occasionally contain holocrine secretions .",
      "Infundibulocystic structures, squamous metaplasia, and apocrine differentiation can also be observed .",
      "Mitotic figures may be common in the immature component, but atypical forms and necrosis are not expected.",
    ],
    ihc: [],
    molecular: [
      "Diagnostic molecular pathology is not relevant for individual tumors.",
      "Germline sequencing may be indicated in some cases.",
    ],
    differential: [
      "Sebaceous carcinoma and sebaceous adenoma are the most common differential diagnoses.",
      "BerEP4 negativity may help in the distinction from basal cell carcinoma .",
      "Some other cutaneous neoplasms, such as squamous cell carcinomas and basal cell carcinomas, may show very focal sebaceous differentiation.",
      "Many reported cases of so-called “ripple-pattern” trichoblastomas are in fact sebaceoma.",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Sebaceous adenoma",
    group: "Benign",
    lineage: "Sebaceous gland",
    site: "Sebaceous adenoma is principally seen in the skin of the head and neck.",
    profile: [
      "Sebaceous adenoma is a well-circumscribed yellow-tan nodule (5–15 mm) .",
      "Lesions associated with Muir–Torre syndrome may be multifocal and can have a central cystic area or a papillomatous morphology resembling keratoacanthoma .",
      "Mismatch repair (MMR)-deficient sebaceous neoplasms occur more commonly outside of the head and neck area than do MMR-stable sebaceous neoplasms .",
      "Sebaceous adenomas are principally seen as solitary lesions in people aged > 40 years .",
      "They are usually located in sun-damaged skin of the head and neck area.",
    ],
    criteria: [
      "Essential: a well-circumscribed yellow-tan nodule; well-circumscribed lobular aggregates consisting mostly of mature sebocytes, with a variable rim of immature, cytologically benign basaloid cells; direct connection to the overlying epidermis.",
      "Staging Not relevant",
    ],
    morphology: [
      "Sebaceous adenomas are well-circumscribed lobular aggregates composed mostly of mature sebocytes, with a variable rim of immature basaloid cells, recapitulating normal sebaceous glands .",
      "The mature sebocytes are characterized by an abundant vacuolated, “bubbly” cytoplasm and a central scalloped nucleus, and these sebocytes predominate (> 50% of all tumor cells) over the small monomorphic immature basaloid cells.",
      "Sebaceous adenoma may show a direct connection to the overlying epidermis, which may be covered by keratin and cellular debris.",
      "MMR-deficient sebaceous neoplasms show cystic change, intratumoral mucin, squamous metaplasia, ulceration, a lymphocytic infiltrate, and intertumoral heterogeneity more often than do MMR-stable sebaceous neoplasms .",
    ],
    ihc: [
      "The vacuolated cytoplasm of the mature sebocytes expresses EMA and adipophilin .",
    ],
    molecular: [
      "Diagnostic molecular pathology is not relevant for individual tumors.",
      "Germline sequencing may be indicated in some cases.",
    ],
    differential: [
      "The principal differential diagnosis for sebaceous adenoma is sebaceous hyperplasia, in which sebaceous lobules are arranged around a central follicle that is connected to the epidermis, but sebaceous hyperplasia shows a clear association with a central hair follicle, whereas sebaceous adenoma does not.",
      "Sebaceoma is another benign nodular lesion composed of a more equal admixture of basaloid epithelial cells and small groups of vacuolated sebocytes .",
      "Considerable morphological overlap may exist between sebaceous adenoma and sebaceoma .",
      "Cytology Not clinically relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Sebaceous carcinoma",
    group: "Malignant",
    lineage: "Sebaceous gland",
    site: "Sebaceous carcinoma can occur anywhere but shows a predilection for the head and neck and occurs most commonly around the eyelids : 75% of all cases arise in a periocular (eyelid) location . They may involve the conjunctival and/or skin surface. Extraocular sebaceous carcinomas occur most commonly on the skin of the head and neck, followed by the trunk, genitals, and extremities. Rare cases occur in the oral cavity, salivary gland, lung, and breast .",
    profile: [
      "Patients with sebaceous carcinoma present with a tan-pink-yellow, firm, occasionally nodular lesion measuring 10–30 mm.",
      "Periocular sebaceous carcinoma may be mistaken clinically for benign inflammatory or neoplastic conditions, leading to a delay in diagnosis and to higher morbidity and mortality .",
      "Pagetoid sebaceous carcinoma may resemble chronic blepharoconjunctivitis .",
      "Sebaceous carcinoma develops in older adults, with no sex predilection.",
      "The median age at diagnosis is 73 years.",
    ],
    criteria: [
      "Essential: a firm, tan-pink-yellow, occasionally nodular lesion, sometimes resembling inflammation; an invasive or intraepithelial tumor showing sebaceous differentiation, manifesting as multivesicular cytoplasmic clearing with nuclear scalloping.",
      "Desirable: immunohistochemical confirmation of sebaceous differentiation in cases lacking obvious histopathological evidence of sebaceous differentiation.",
      "Staging The eighth edition of the Union for International Cancer Control (UICC) / American Joint Committee on Cancer (AJCC) TNM system forms the basis for staging.",
      "The application of the eighth edition of the AJCC system was found to be useful in predicting nodal metastasis; however, local recurrence and distant metastasis were not significantly correlated to the T classification .",
    ],
    morphology: [
      "Well-differentiated sebaceous carcinoma consists of lobules of polygonal tumor cells with atypical, oval vesicular nuclei and abundant intracytoplasmic vacuoles that impart a foamy appearance and impinge on the nucleus, creating scalloping.",
      "Central comedo-type necrosis may be seen.",
      "More poorly differentiated tumors show a higher N:C ratio, nuclear pleomorphism, prominent nucleoli, basophilic cytoplasm with fewer intracellular vacuoles , and brisk mitotic activity.",
      "Sebaceous carcinoma may show basaloid, squamoid (often with keratin pearl formation), spindle cell / sarcomatoid, or neuroendocrine (rippled or organoid growth) features .",
      "Invasive tumors can adopt various architectural patterns, including well-circumscribed lobules with pushing borders and variable comedonecrosis, papillary architecture, and highly infiltrative cords; combinations of these patterns are often observed.",
    ],
    ihc: [
      "Sebaceous carcinoma shows immunoreactivity for pancytokeratin (and also CK7), adipophilin, EMA, BerEP4, AR, p40, and p63 .",
      "EMA labelling may enhance the cytoplasmic vacuolization of the tumor cells, but it is often only positive in well-differentiated tumors and lacks specificity.",
      "Adipophilin is a more sensitive and specific marker of sebaceous differentiation .",
      "Positivity for CD10, DOG1, KIT (CD117), p16, p53, perforin, and factor XIIIa has also been reported in sebaceous carcinoma .",
    ],
    molecular: [
      "Diagnostic molecular pathology is not relevant for individual tumors.",
      "Germline sequencing may be indicated in some cases.",
    ],
    differential: [
      "Sebaceous carcinoma should be excluded when examining basaloid, squamoid, and clear cell epithelial tumors in periocular locations.",
      "The differential diagnosis includes sebaceoma, balloon cell melanoma, clear cell squamous cell carcinoma, basal cell carcinoma, Merkel cell carcinoma, and metastatic clear cell carcinomas from visceral organs.",
      "Cytology Not relevant",
    ],
    pitfalls: [],
  },
  {
    name: "Hidradenoma papilliferum",
    group: "Benign",
    lineage: "Anogenital mammary-like gland — apocrine-type",
    site: "Most cases affect the vulva; less frequently, the perianal and perineal skin is involved.",
    profile: [
      "The lesion occurs as a solitary asymptomatic nodule or cyst-like lesion measuring 2–20 mm .",
      "Hidradenoma papilliferum is the most common benign glandular neoplasm of the vulva.",
      "It almost exclusively affects White women aged 20–89 years; it occurs rarely in children and in Black populations .",
    ],
    criteria: [
      "Essential: a solitary asymptomatic nodule or cyst-like lesion; complex growth of branching and anastomosing epithelial papillae and tubules with a myoepithelial cell layer.",
      "Staging Not clinically relevant",
    ],
    morphology: [
      "Hidradenoma papilliferum appears as a well-circumscribed intradermal solid-cystic nodule with a complex pattern of branching and anastomosing tubules interconnected in a labyrinthine manner, focally forming papillae.",
      "The tubules and papillae consist of a central axis of fibrous tissue lined by a luminal layer of epithelial cells surrounded by a layer of myoepithelial cells.",
      "Decapitation secretion is common.",
      "Cystic change, sclerosing adenosis–like and mammary-type ductal changes, and necrosis have been identified.",
      "Oxyphilic metaplasia, especially in areas with solid growth with nuclear polymorphism, may simulate adenocarcinoma.",
    ],
    ihc: [],
    molecular: [],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Fibroadenoma and phyllodes tumor of anogenital mammary-like glands",
    group: "Benign",
    lineage: "Anogenital mammary-like gland — mammary-type",
    site: "Most cases occur in the vulva and perianal area . Rare patients also present with mammary fibroadenoma, similar lesions in the axilla , and bilateral anogenital tumors .",
    profile: [
      "Fibroadenoma and phyllodes tumor occur as solitary nodules measuring 8–60 mm (mean size: 30 mm).",
      "In the reported cases, the age at diagnosis was 20–69 years (mean: 39 years) .",
      "Both tumors are very uncommon, with < 80 cases reported to date.",
      "Most patients are female .",
    ],
    criteria: [
      "Essential: biphasic histology (for both lesions); for fibroadenoma: round or elongated, often branching and anastomosing glandular structures surrounded by usually paucicellular stroma; for phyllodes tumor: leaf-like projections and hypercellular stroma.",
      "Staging Not clinically relevant",
    ],
    morphology: [
      "Fibroadenoma is a well-circumscribed neoplasm composed of round or elongated, often branching and anastomosing glandular structures surrounded by a paucicellular stroma containing bland spindled or stellate cells, showing low or practically no mitotic activity.",
      "When the glandular lumina maintain round or oval configurations, the image is that of a pericanalicular growth pattern, whereas abundant stroma compressing the glandular elements into slit-like structures produces an intracanalicular pattern .",
      "Phyllodes tumor shows a growth pattern with leaf-like projections into glandular lumina.",
      "The stroma is usually hypercellular, typically with periglandular condensation; cellularity commonly varies within a given neoplasm .",
      "Three categories are delineated: benign, low-grade, and high-grade; the grade is defined by stromal atypia.",
    ],
    ihc: [
      "The epithelial component stains for ER, PR, and GATA3, whereas ERBB2 (HER2) is negative.",
      "Stromal cells, including those in PASH areas, are positive for vimentin and CD34 and variably positive for actins .",
      "Vascular markers are negative in PASH .",
    ],
    molecular: [],
    differential: [
      "Fibroadenoma and benign phyllodes tumor manifest overlapping features; in some cases, distinguishing between them can be difficult.",
      "Generally, phyllodes tumors have more-cellular stroma (with variation within a lesion), less regular outlines, and leaf-like projections.",
      "Focal connection to the epidermal surface with numerous plasma cells may resemble syringocystadenoma papilliferum.",
      "Fibroepithelial foci resembling fibroadenoma may rarely be found in other complex lesions of anogenital mammary-like glands .",
      "Fibrocystic disease and other lesions with prominent ductal hyperplasia may be differential diagnoses in a limited specimen .",
    ],
    pitfalls: [],
  },
  {
    name: "Mammary Paget disease",
    group: "Malignant",
    lineage:
      "Mammary gland / nipple epidermis — Paget-type intraepidermal spread",
    site: "MPD involves the nipple and areola; in advanced cases, it may extend to the adjacent skin of the breast. One breast is typically involved, but there may be both synchronous and metachronous involvement . A supernumerary nipple (or ectopic breast tissue adjacent to a supernumerary nipple) can also very rarely be involved .",
    profile: [
      "There is usually an eczematous scaly or crusted lesion confined to the nipple or areola, sometimes associated with ulceration or inversion of the nipple and discharge.",
      "Rare cases are pigmented, resembling a melanocytic lesion.",
      "MPD accounts for 1–4% of all breast carcinomas.",
      "It almost exclusively affects women; < 1% of reported cases occurred in men .",
    ],
    criteria: [
      "Essential: large intraepidermal atypical cells with abundant pale cytoplasm and large nuclei with prominent nucleoli; single cells or small clusters typically leaving a single layer of basal keratinocytes; positivity for low-molecular-weight cytokeratins and ERBB2.",
      "Staging If no underlying carcinoma or ductal carcinoma in situ is present, MPD is staged as Tis according to the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
      "If there is invasive carcinoma, it is staged according to the invasive component .",
    ],
    morphology: [
      "The neoplastic cells (Paget cells) have abundant weakly eosinophilic or pale-staining cytoplasm and large vesicular nuclei.",
      "They are scattered in the epidermis (pagetoid spread) in the form of solitary units, clusters, or (rarely) acinar/glandular structures.",
      "Skin adnexa can also be involved.",
      "Paget cells contain intracellular mucin in 40% of cases, and they may contain melanin due to phagocytosis (a possible diagnostic pitfall ).",
      "The epidermis is often hyperkeratotic and acanthotic, especially in longstanding lesions.",
    ],
    ihc: [],
    molecular: [
      "There is no known association with a specific gene mutation, although it has been suggested that the MSI1/mTOR pathway may drive the pathogenesis of mammary and extramammary Paget disease .",
      "Genetically, Paget cells are similar to the underlying carcinoma cells in most cases .",
    ],
    differential: [
      "Clinically, MPD must be distinguished from eczema and nipple adenoma.",
      "The histological differential diagnosis includes spongiotic dermatoses, candidiasis/dermatophytes, squamous cell carcinoma in situ (Bowen disease), and superficial spreading melanoma.",
      "Rare cases of clinically pigmented MPD contain melanin pigment, usually in isolated dendritic melanocytes, thus raising the possibility of melanoma.",
      "These isolated cells express melanocytic markers (melan-A [MART1], SOX10), while the surrounding Paget cells express CK7, EMA, and ERBB2 (HER2) .",
      "In some cases, hyperplasia of Toker cells, a normal component of the nipple, may present a diagnostic dilemma .",
    ],
    pitfalls: [],
  },
  {
    name: "Extramammary Paget disease",
    group: "Malignant",
    lineage:
      "Cutaneous apocrine / anogenital mammary-like gland-associated (often secondary)",
    site: "The labium majus of the vulva is the most common site, followed by the labium minus and clitoris. The perineum, perianal area, scrotum, penis, lower abdomen, and inguinal folds can also be affected. Outside the anogenital region, EMPD can very rarely affect non-genital regions .",
    profile: [
      "The most common presentation is a relatively well-demarcated flat or slightly elevated, scaly, oozing, erythematous patch or plaque accompanied by pruritus or burning; thus, these lesions often clinically resemble eczema.",
      "They generally cover a large area (median: 20.5 cm2) .",
      "Rare forms include lesions with hyperpigmentation or hypopigmentation and multicentric lesions (e.g. genital lesions associated with unilateral or bilateral axillary involvement, occurring synchronously or metachronously) .",
      "EMPD accounts for about 1% of all neoplasms in the anogenital area.",
      "It mostly occurs in White postmenopausal women, with a median age of about 70–75 years.",
    ],
    criteria: [
      "Essential: presence of atypical epithelial cells involving the epidermis; confirmation by immunohistochemistry (low-molecular-weight cytokeratin, CK7, CEA).",
      "Desirable: clinical/imaging evaluation to help distinguish primary from secondary; additional immunohistochemistry (uroplakin, CK20, p63, CDX2, NKX3-1, ERBB2).",
      "Staging Staging depends on the subtype, primary versus secondary EMPD, and the location; for example, invasive vulval Paget disease is staged the same way as other vulval cancers.",
      "There is a proposal for TNM staging .",
    ],
    morphology: [
      "The intraepithelial neoplastic cells (Paget cells) have vesicular nuclei with prominent nucleoli and abundant basophilic to amphophilic cytoplasm.",
      "They occur as solitary cells or well-demarcated solid nests or gland-like structures.",
      "Many cases also involve underlying skin adnexa, especially hair follicles and eccrine ducts .",
      "Occasionally, there is focal dermal invasion by single cells, glands, or small groups of cells (invasive Paget disease).",
      "Less common morphological changes include epidermal hyperplasia resembling syringocystadenocarcinoma papilliferum, syringoma-like structures, melanin pigment within the cytoplasm of the neoplastic cells simulating a melanocytic lesion, signet-ring cell morphology, and association with other vulvar lesions .",
    ],
    ihc: [
      "Primary EMPD is consistently positive for CK7 and GATA3 and with CAM5.2, and it often expresses CEA, GCDFP-15, ERBB2, CA125, and AR .",
      "ER and PR may be positive or negative .",
    ],
    molecular: [],
    differential: [
      "The most important issue is the distinction between primary and secondary EMPD.",
      "Coexpression of CK20 and CDX2 by the Paget cells and dirty necrosis (although the latter is unusual) support a colorectal origin.",
      "Uroplakin-3 expression is typical for urothelial carcinoma, whereas coexpression of PSA and NKX3-1 suggests an underlying prostatic carcinoma.",
      "Potential mimics of EMPD are vulvar Toker cells, vulvar and penile analogues of cervical stratified mucin-producing intraepithelial lesion , high-grade squamous intraepithelial lesion, melanoma, pagetoid dyskeratosis, and clear cell papulosis.",
      "In addition to immunohistochemistry, clinicopathological correlation is essential for correct diagnosis.",
    ],
    pitfalls: [],
  },
  {
    name: "Adenocarcinoma of mammary gland type",
    group: "Malignant",
    lineage: "Anogenital mammary-like gland — mammary-type",
    site: "The most common location is the labia majora .",
    profile: [
      "Most patients are postmenopausal and present with a vulval mass.",
      "These are rare vulval neoplasms.",
      "Etiology Unknown Pathogenesis Adenocarcinoma of mammary gland type is proposed to arise from anogenital mammary-like glands located in the anal and vulval area .",
    ],
    criteria: [
      "Essential: a solitary nodule with a fibrous cut surface, similar to breast carcinoma; histology consistent with that of invasive breast carcinoma.",
      "Desirable: location usually the labia majora; association with lobular structures consistent with mammary differentiation; immunohistochemical expression of ER, PR, and ERBB2.",
      "Staging Staging follows the eighth edition of the Union for International Cancer Control (UICC) TNM classification.",
    ],
    morphology: [
      "The most common type is adenocarcinoma, which is identical to mammary invasive ductal carcinoma and may (uncommonly) have an identifiable in situ component in the adjacent glands.",
      "Rare types include lobular, tubulolobular, mixed ductal and lobular, and mammary analogue secretory carcinoma.",
      "There is commonly expression of ER, PR, GATA3, and ERBB2 .",
      "Based on the immunoprofile, they can be classified like their breast counterparts into luminal A, luminal B, HER2-enriched, and basal-like subtypes .",
      "Cytology No data available",
    ],
    ihc: [],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant in most cases.",
      "Secretory carcinoma harbours the characteristic ETV6::NTRK3 fusion.",
    ],
    differential: [
      "The supplied excerpt does not specify a differential diagnosis.",
    ],
    pitfalls: [],
  },
];

const cats = ["All", "Benign", "Intermediate", "Malignant"];
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
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
}
export default function AdnexalTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Microcystic adnexal carcinoma",
    "Sebaceous carcinoma",
    "Extramammary Paget disease",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.lineage,
            x.site,
            ...x.profile,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential,
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
            PathologyGPS / Skin / Adnexal Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Skin Adnexal Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A site-oriented, morphology-first reference to cutaneous adnexal
                neoplasms, emphasizing essential diagnostic criteria,
                immunophenotype, and practical differential diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Location narrows the field; architecture and cytology establish
                the diagnosis.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Adnexal tumors show substantial morphologic overlap. Correlate
                anatomic site, depth, clinical pattern, and the relationship to
                native epidermal and adnexal structures.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: start with anatomic location">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "Head and neck / eyelid",
                "Hidrocystoma, syringoma, poroma, spiradenoma, cylindroma, trichoblastoma, pilomatricoma, sebaceous tumors, and most periocular sebaceous carcinomas.",
              ],
              [
                "Palms and soles / digits",
                "Poroma; digital papillary adenocarcinoma; consider acral-specific clinical and histologic context.",
              ],
              [
                "Scalp",
                "Proliferating trichilemmal tumor, cylindroma, trichilemmoma, trichofolliculoma, and pilomatrical lesions.",
              ],
              [
                "Vulva / anogenital skin",
                "Hidradenoma papilliferum, syringoma, mammary-like gland tumors, extramammary Paget disease, and mammary-type adenocarcinoma.",
              ],
              [
                "Trunk and proximal limbs",
                "Hidradenoma, mixed tumor, tubular adenoma, poroma, and many nonspecific adnexal carcinomas.",
              ],
              [
                "Periorificial / central face",
                "Microcystic adnexal carcinoma and trichoblastoma; assess infiltrative growth and perineural invasion.",
              ],
              [
                "Perianal / genital skin",
                "Extramammary Paget disease, syringocystadenoma papilliferum variants, and site-specific glandular lesions.",
              ],
              [
                "Any site with multiple lesions",
                "Consider inherited syndromes, particularly CYLD-associated Brooke–Spiegler syndrome and other syndrome-linked adnexal proliferations.",
              ],
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-slate-900">{v[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{v[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Tumor classification by differentiation and biologic behavior">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            Each entity is assigned to its principal differentiation category as
            organized in the supplied WHO excerpt. Several sweat gland tumors
            show overlapping apocrine and eccrine features; the table preserves
            that overlap rather than implying a lineage that morphology cannot
            reliably separate.
          </p>
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-3 py-3">Differentiation / tissue type</th>
                  <th className="px-3 py-3">Behavior</th>
                  <th className="px-3 py-3">Tumor / entity</th>
                </tr>
              </thead>
              <tbody>
                {[...items]
                  .sort((a, b) => {
                    const order = [
                      "Sweat gland — apocrine/eccrine (ductal; often overlapping)",
                      "Sweat gland — eccrine",
                      "Sweat gland — eccrine / poroid (apocrine-pattern variants occur)",
                      "Sweat gland — eccrine ductal",
                      "Sweat gland — apocrine",
                      "Sweat gland — apocrine/eccrine (overlapping)",
                      "Sweat gland — apocrine/eccrine (arising in spiradenoma/cylindroma)",
                      "Sweat gland — mixed epithelial/myoepithelial; usually apocrine-type",
                      "Sweat gland — apocrine/eccrine, not otherwise specified",
                      "Adnexal carcinoma — follicular and ductal (sweat gland) differentiation",
                      "Sweat gland — apocrine-type",
                      "Sweat gland — adnexal carcinoma category in supplied WHO section; lineage may be uncertain",
                      "Sweat gland — apocrine/eccrine (hidradenoma-associated)",
                      "Sweat gland — eccrine-type",
                      "Sweat gland — secretory-type (ETV6::NTRK3-associated)",
                      "Sweat gland — apocrine/eccrine (cutaneous)",
                      "Sweat gland — eccrine/poroid",
                      "Sweat gland — eccrine ductal",
                      "Hair follicle — germinative/basal follicular",
                      "Hair follicle — matrical",
                      "Hair follicle — matrical (with melanocytic component)",
                      "Hair follicle — outer root sheath / trichilemmal",
                      "Hair follicle — infundibular",
                      "Hair follicle — follicular infundibulum",
                      "Hair follicle — follicular infundibulum / pilar sheath",
                      "Hair follicle — perifollicular / follicular hamartomatous",
                      "Sebaceous gland",
                      "Anogenital mammary-like gland — apocrine-type",
                      "Anogenital mammary-like gland — mammary-type",
                      "Mammary gland / nipple epidermis — Paget-type intraepidermal spread",
                      "Cutaneous apocrine / anogenital mammary-like gland-associated (often secondary)",
                    ];
                    return (
                      order.indexOf(a.lineage) - order.indexOf(b.lineage) ||
                      ["Benign", "Intermediate", "Malignant"].indexOf(a.group) -
                        ["Benign", "Intermediate", "Malignant"].indexOf(
                          b.group,
                        ) ||
                      a.name.localeCompare(b.name)
                    );
                  })
                  .map((p, i) => (
                    <tr
                      key={p.name}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="border-t border-slate-200 px-3 py-2.5 align-top text-slate-700">
                        {p.lineage}
                      </td>
                      <td className="border-t border-slate-200 px-3 py-2.5 align-top">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${p.group === "Benign" ? "bg-emerald-50 text-emerald-800" : p.group === "Malignant" ? "bg-rose-50 text-rose-800" : "bg-amber-50 text-amber-800"}`}
                        >
                          {p.group}
                        </span>
                      </td>
                      <td className="border-t border-slate-200 px-3 py-2.5 align-top font-semibold text-slate-900">
                        {p.name}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
              <b className="text-slate-900">Classification note:</b>{" "}
              “Apocrine/eccrine” indicates the WHO sweat-gland grouping or
              recognized morphologic overlap; it does not mean every tumor has
              two demonstrable lineages. Poroma-family tumors are classified as
              poroid/sweat duct neoplasms.
            </div>
            <div className="rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-600">
              <b className="text-slate-900">Behavior note:</b> “Intermediate” is
              retained where the page uses that category. Phyllodes tumors span
              benign, borderline, and malignant grades; proliferating
              trichilemmal tumors also require grading and clinicopathologic
              correlation.
            </div>
          </div>
        </Panel>
        <Panel title="Naming guide: Greek and Latin roots">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 text-sm leading-6">
            {[
              [
                "adnexal",
                "Latin adnexus, “attached” — skin appendages attached to the skin: hair follicles and sebaceous/apocrine/eccrine glands.",
              ],
              [
                "hidro- / hidr-",
                "Greek hydōr, “water” — historically used for sweat-gland lesions (e.g., hidrocystoma, hidradenoma).",
              ],
              [
                "syringo-",
                "Greek syrinx, “pipe or tube” — refers to duct-like structures (syringoma, syringocystadenoma).",
              ],
              [
                "poroma / poro-",
                "Greek poros, “passage or pore” — poroid tumors show sweat-duct differentiation.",
              ],
              [
                "adenoma / adeno-",
                "Greek adēn, “gland” — glandular differentiation; carcinoma denotes malignant epithelial behavior.",
              ],
              [
                "spiradenoma",
                "Combines spir- (coil/spiral, referring to the coiled sweat apparatus) and adēn (“gland”).",
              ],
              [
                "cylindroma",
                "Greek kylindros, “cylinder” — named for the characteristic jigsaw-puzzle arrangement of tumor islands.",
              ],
              [
                "tricho- / pil-",
                "Greek thrix/trichos and Latin pilus, both meaning “hair” — follicular differentiation.",
              ],
              [
                "matricoma",
                "From hair matrix — matrical differentiation recapitulates the hair bulb matrix.",
              ],
              [
                "trichilemmal",
                "From the hair follicle outer root sheath (the trichilemma); often associated with abrupt keratinization.",
              ],
              [
                "sebaceous",
                "Latin sebum, “fat/grease” — sebocyte differentiation with lipid-rich cytoplasm.",
              ],
              [
                "apocrine / eccrine",
                "Greek apo- + krinein (“separate/secrete”) and ekkrinein (“secrete out”) — historical glandular secretion terms.",
              ],
            ].map((v, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-3">
                <b className="text-slate-900">{v[0]}</b>
                <p className="mt-1 text-slate-600">{v[1]}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Etymology is a memory aid, not a reliable predictor of lineage or
            behavior. Historical names do not always map cleanly to current
            concepts.
          </p>
        </Panel>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity reference
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile, diagnostic criteria, and differential
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, location, morphology, immunomarker, or gene.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. eyelid, scalp, CRTC1::MAML2, BerEP4..."
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
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700">
                          {p.lineage}
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
                          Clinical Profile
                        </h4>
                        <Bullets items={p.profile} />
                        <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                          Essential Diagnostic Criteria
                        </h4>
                        <Bullets items={p.criteria} />
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Histopathology
                        </h4>
                        <Bullets items={p.morphology} />
                        {p.ihc.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Immunophenotype
                            </h4>
                            <Bullets items={p.ihc} />
                          </>
                        )}
                        {p.molecular.length > 0 && (
                          <>
                            <h4 className="mb-3 mt-5 text-sm font-bold uppercase tracking-wider">
                              Molecular Pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </>
                        )}
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Differential Diagnosis
                        </h4>
                        <Bullets items={p.differential} />
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
        <Panel title="Interpretive cautions">
          <Bullets
            items={[
              "Benign adnexal tumors are much more common than carcinomas; clinical irregularity, ulceration, or pain is not independently diagnostic of malignancy.",
              "Many adnexal tumors overlap morphologically. A descriptive diagnosis such as “atypical adnexal tumor” or “adnexal tumor of uncertain malignant potential” may be appropriate when benign versus malignant behavior cannot be resolved.",
              "For adnexal carcinoma, exclude metastasis from an extracutaneous primary with clinical evaluation and a directed immunohistochemical panel.",
              "Assess depth, infiltrative growth, perineural invasion, lymphovascular invasion, mitotic activity, necrosis, and any adjacent benign component.",
              "Multiple adnexal neoplasms should prompt consideration of a hereditary syndrome; correlate with clinical history and family history.",
            ]}
          />
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope note:</b> This reference is based
          on the supplied WHO excerpt. Molecular findings are included only
          where the excerpt identifies diagnostic or potentially useful
          alterations. Site and clinical associations should be interpreted in
          clinicopathologic context.
        </footer>
      </div>
    </main>
  );
}
