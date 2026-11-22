"use client";

import { useEffect, useMemo, useState } from "react";
function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+.-]+/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 90);
}

type Entity = {
  name: string;
  definition: string;
  clinical: string;
  criteria: string;
  histology: string;
  molecular: string;
  differential: string;
};

const entities: Entity[] = [
  {
    name: "Nodular fasciitis",
    definition:
      "Nodular fasciitis (NF) is a benign mesenchymal neoplasm composed of plump, uniform fibroblastic/myofibroblastic cells that display a tissue culture–like pattern.",
    clinical:
      "• NF typically develops on the surface of fascia and extends into the subcutis, although occasional cases are intramuscular\n• Dermal localization is less common",
    criteria:
      "• Essential: bland, myofibroblastic spindle cell proliferation with a feathery, tissue culture–like growth pattern\n• Variably myxoid stroma with microcystic changes\n• Extravasated red blood cells\n• Desirable: assessment of USP6 gene rearrangements can be helpful in selected cases",
    histology:
      "• NF is composed of plump spindle to stellate cells lacking nuclear hyperchromasia or pleomorphism\n• Mitotic figures may be plentiful, but atypical forms are not observed\n• Although the tumor may be highly cellular, it typically exhibits cystic discohesion and myxoid stromal changes, imparting a torn, feathery, or tissue culture–like appearance\n• Hypercellular areas often show S- or C-shaped fascicles, or a storiform growth pattern\n• Stromal collagen is usually minimal, though keloidal collagen bundles may be present and occasionally prominent",
    molecular:
      "• Molecular testing is usually unnecessary in clinically and histologically typical cases\n• However, in challenging cases, break-apart USP6 FISH or targeted RNA fusion assays or next-generation sequencing techniques may be used to support the diagnosis\n• USP6 fusion genes are not identified in all cases of NF, and a negative result does not exclude the diagnosis",
    differential:
      "• Myxofibrosarcoma or low-grade myofibroblastic sarcoma: look for infiltrative malignant growth, atypia, and atypical mitoses\n• USP6 supports nodular fasciitis",
  },
  {
    name: "Proliferative fasciitis and proliferative myositis",
    definition:
      "Proliferative fasciitis is a subcutaneous benign neoplasm characterized by large ganglion-like cells and plump myofibroblastic cells. Proliferative myositis has the same cellular composition but occurs within skeletal muscle.",
    clinical:
      "• Proliferative fasciitis develops most frequently in the upper extremities, particularly the forearms, followed by the lower extremities and trunk\n• Proliferative myositis arises predominantly in the trunk, shoulder girdles, and upper arms, and less often in the thighs",
    criteria:
      "• Essential: plump spindle cells admixed with ganglion-like cells\n• Variable collagenous/myxoid stroma\n• Subcutaneous/fascial involvement (proliferative fasciitis)\n• Intramuscular checkerboard growth pattern (proliferative myositis)",
    histology:
      "• These cells usually have one nucleus but may have two or three\n• They may be evenly or irregularly distributed\n• Mitotic figures are found in both the spindle cells and the ganglion-like cells and may be relatively numerous but are not atypical\n• The stroma varies from myxoid to collagenous\n• The lesional borders are typically infiltrative or poorly defined",
    molecular:
      "• The neoplastic ganglion-like cells show FOS rearrangement, which is detectable by FISH, whereas the reactive spindle cells lack FOS rearrangement",
    differential:
      "• Nodular fasciitis: ganglion-like cells favor proliferative fasciitis/myositis\n• Checkerboard entrapment of muscle favors proliferative myositis",
  },
  {
    name: "Myositis ossificans and fibro-osseous pseudotumor of digits",
    definition:
      "Myositis ossificans and fibro-osseous pseudotumor of digits are self-limited, benign neoplasms composed of spindle cells and osteoblasts associated with bone formation.",
    clinical:
      "• Myositis ossificans can occur throughout the body, with common sites including trauma-prone areas, such as the elbow, thigh, buttock, and shoulder",
    criteria:
      "• Essential: hypercellular fascicles of uniform spindle cells\n• Admixed woven bone with zonation, being most mature at the periphery",
    histology:
      "• Myositis ossificans is characterized by a distinctive zonal architecture\n• In the centre, the lesion is densely cellular, composed of spindle cells oriented randomly or in short intersecting fascicles\n• The spindle cells have eosinophilic cytoplasm and plump vesicular nuclei with nucleoli\n• Normal mitoses are often numerous\n• The stroma is vascular and myxoid and contains fibrin, extravasated erythrocytes, scattered lymphocytes, and osteoclast-like giant cells",
    molecular:
      "• Molecular studies for USP6 rearrangement may be useful in the appropriate clinicopathological context",
    differential:
      "• Extraskeletal osteosarcoma: orderly peripheral maturation favors myositis ossificans\n• Malignant osteoid and absent zonation favor osteosarcoma",
  },
  {
    name: "Ischaemic fasciitis",
    definition:
      "Ischaemic fasciitis is a reactive pseudosarcomatous fibroblastic/myofibroblastic proliferation, often associated with prolonged compression of soft tissue overlying bony prominences.",
    clinical:
      "• Ischaemic fasciitis usually arises around the limb girdles, sacral region, and greater trochanter\n• The chest wall and back may also be affected\n• Ischaemic fasciitis usually develops in the deep subcutis, but involvement of the deep dermis, skeletal muscle, and tendinous tissue can also occur",
    criteria:
      "• Essential: zonal appearance with central fibrinoid degeneration and cystic changes\n• Periphery with granulation tissue–like vascular component\n• Admixed plump ganglion-like myofibroblasts",
    histology:
      "• The histological hallmark of ischaemic fasciitis is a distinct zonal appearance\n• The central part of the lesion is characterized by a hypocellular area of fibrinoid degeneration/necrosis with or without pseudocystic degeneration or infarcted fat\n• The fibroblastic/myofibroblastic cells vary in size and shape\n• Fibrosis/fibrohyalinosis or myxoid stromal change, hyalinosis of vessel walls, vessels with fibrin thrombi, an inflammatory infiltrate, and extravasated erythrocytes may be observed\n• Mitotic activity can be seen, mainly in the granulation tissue–like areas, but is inconspicuous overall",
    molecular: "• Not clinically relevant",
    differential:
      "• Proliferative fasciitis: central fibrinoid necrosis and pseudocystic change with peripheral granulation tissue favor ischemic fasciitis",
  },
  {
    name: "Elastofibroma",
    definition:
      "Elastofibroma is a benign, poorly defined proliferation of fibroelastic tissue with excessive abnormal elastic fibers.",
    clinical:
      "• Elastofibroma most often arises in the deep soft tissue between the lower scapula and the thoracic wall\n• It may rarely occur in extrascapular locations, including other parts of the thoracic wall, extremities, limb girdles, neck, eyes, oral cavity, and gastrointestinal tract or other viscera",
    criteria:
      "• Essential: a bland, hypocellular fibrofatty tumor with excessive abnormal elastic fibers",
    histology:
      "• A focally myxoid matrix is common\n• Immunohistochemically, the spindle cells are positive for CD34, but negative for SMA, desmin, and S100",
    molecular: "• Not clinically relevant",
    differential:
      "• Desmoid-type fibromatosis: elastofibroma contains characteristic abnormal elastic fibers and mature fat\n• Desmoid shows sweeping fascicles",
  },
  {
    name: "Fibrous hamartoma of infancy",
    definition:
      "Fibrous hamartoma of infancy (FHI) is a benign soft tissue neoplasm of infants and young children, characterized by an organoid, triphasic morphology composed of bundles of bland fibroblastic/myofibroblastic cells, nodules of primitive mesenchyme, and mature adipose tissue.",
    clinical:
      "• FHI commonly involves the axillae, trunk, upper extremities, and genital region\n• Other reported locations include the scalp, foot, hand, orbit, and buttock",
    criteria:
      "• Essential: triphasic morphology consisting of fibroblastic/myofibroblastic bundles, primitive mesenchymal nodules, and mature adipose tissue",
    histology:
      "• About 25% of cases show areas resembling giant cell fibroblastoma [[Martos-Cabrera L, Sampedro-Ruiz R, Pérez-González YC, et al\n• Hamartoma fibroso de la infancia: una serie de 21 casos y revisión de la literatura\n• Actas Dermosifiliogr\n• 2021\n• 112:520–7",
    molecular: "• Not clinically relevant",
    differential:
      "• Lipofibromatosis: the triphasic pattern with primitive mesenchymal nodules favors fibrous hamartoma of infancy",
  },
  {
    name: "Fibromatosis colli",
    definition:
      "Fibromatosis colli is a benign, self-limited fibrous proliferation occurring in the sternocleidomastoid muscle of infants. Some cases progress to shortening of the muscle, resulting in torticollis.",
    clinical:
      "• Fibromatosis colli affects the sternocleidomastoid muscle, with a predilection for the right over the left\n• Most commonly, the middle or distal third of the muscle body is involved\n• However, about 15% of cases involve the entire muscle",
    criteria:
      "• Essential: fusiform mass in the sternocleidomastoid muscle of infants\n• Bland fibroblastic proliferation with associated atrophic skeletal muscle",
    histology:
      "• Surgical specimens are infrequent, obtained only from the minority of patients requiring tenotomy for persistent torticollis\n• When histology is obtained, sections demonstrate a paucicellular, scar-like fibroblastic proliferation entrapping skeletal muscle",
    molecular: "• Not clinically relevant",
    differential:
      "• Infantile fibromatosis: sternocleidomastoid-centered lesion in an infant with atrophic entrapped muscle supports fibromatosis colli",
  },
  {
    name: "Juvenile hyaline fibromatosis",
    definition:
      "Juvenile hyaline fibromatosis is a rare autosomal recessive disorder characterized by painful and disfiguring deposits of hyalinized fibrous material in the dermis, subcutaneous soft tissues, gingiva, and viscera.",
    clinical:
      "• Juvenile hyaline fibromatosis is a multisystem disease that involves the skin, subcutaneous tissue, gingiva, bone, and viscera\n• Juvenile hyaline fibromatosis typically presents in infancy but can also manifest later in childhood, with more severe cases appearing earlier",
    criteria:
      "• Essential: subcutaneous nodules and gingival hypertrophy with abundant hyaline-like material\n• Desirable: confirmation by germline sequencing of ANTXR2",
    histology:
      "• Lesions are characterized by abundant extracellular eosinophilic, non-fibrillar hyaline-like material that obliterates normal tissue structures\n• The cellular component comprises plump to spindled, uniform fibroblasts, often arranged in cords mimicking vascular spaces\n• The extracellular matrix deposits are strongly PAS-positive and diastase-resistant",
    molecular:
      "• The identification of a pathogenic germline variant mutation in ANTXR2 (4q21.21) confirms the diagnosis",
    differential:
      "• Other hyaline deposition disorders: PAS-positive, diastase-resistant extracellular hyaline plus gingival and systemic findings support this syndrome",
  },
  {
    name: "Calcifying fibrous tumor",
    definition:
      "Calcifying fibrous tumor is a benign paucicellular fibroblastic neoplasm with dense stromal collagen, chronic inflammation, and variably prominent psammomatous and/or dystrophic calcification, which often arises on serosal surfaces.",
    clinical:
      "• In soft tissues, calcifying fibrous tumor may involve subcutaneous fat or deep somatic tissue, and has been reported to occur on the trunk, neck, and extremities\n• Tumours often arise at serosal sites, specifically pleura, peritoneum, and paratesticular serosal surfaces",
    criteria:
      "• Essential: circumscribed hypocellular densely collagenous mass\n• Scattered bland spindled fibroblasts and a sparse lymphoplasmacytic infiltrate\n• Desirable: admixed dystrophic or psammomatous calcifications",
    histology:
      "• Calcifying fibrous tumor is characteristically a paucicellular circumscribed mass with abundant hyalinized collagen, within which are scattered, bland, long spindled fibroblasts\n• These lesional cells have pale eosinophilic cytoplasm and are often inconspicuous among the collagen\n• There may be clefts or cracks within the collagenous stroma\n• Admixed calcifications may be of dystrophic or psammomatous type and may be abundant or sparse\n• Around 20% do not have calcifications and may be more difficult to recognize (non-calcifying calcifying fibrous tumor)",
    molecular: "• Not clinically relevant",
    differential:
      "• GIST or inflammatory myofibroblastic tumor: dense hyalinized collagen, psammomatous/dystrophic calcification, and lymphoplasmacytic infiltrate\n• KIT/DOG1 and ALK are typically negative",
  },
  {
    name: "Inclusion body fibromatosis",
    definition:
      "Inclusion body fibromatosis is a benign, sometimes multicentric, myofibroblastic neoplasm with characteristic eosinophilic intracytoplasmic inclusions.",
    clinical:
      "• Extradigital examples are reported on the extremities, tongue, and breast",
    criteria:
      "• Essential: dermal-based, cytologically bland myofibroblastic proliferation\n• Eosinophilic intracytoplasmic and paranuclear inclusions",
    histology:
      "• Spindle cells have lightly eosinophilic cytoplasm and an elongated, cytologically bland nucleus, and they exhibit low mitotic activity\n• Cells proliferate in whorls, interlacing short fascicles, or storiform arrays within a variably collagenous dermis\n• They characteristically grow perpendicular to the epidermis, surround adnexa, and occasionally infiltrate deeper tissues\n• By immunohistochemistry, the inclusions are commonly highlighted with actin, calponin, and (occasionally) caldesmon",
    molecular: "• Not clinically relevant",
    differential:
      "• Digital fibromatosis without inclusions: the characteristic eosinophilic paranuclear inclusions are the key discriminator",
  },
  {
    name: "Fibroma of tendon sheath",
    definition:
      "Fibroma of tendon sheath (FTS) is a benign fibroblastic/myofibroblastic spindle cell neoplasm, usually attached to a tendon sheath.",
    clinical:
      "• FTS typically arises on the flexor tendons of the fingers, most commonly affecting the thumb, index, and middle fingers\n• Intra-articular involvement, particularly of the knee, elbow, or wrist, is rare",
    criteria:
      "• Essential: a paucicellular or moderately cellular collagen-rich lesion with slit-like vessels\n• Desirable: occurs most often on the finger tendons",
    histology:
      "• FTS is well circumscribed and lobulated, composed of bland spindle cells embedded in a collagenous stroma\n• The cellularity is generally low but can be variable, often increasing towards the periphery of the tumor\n• Characteristic slit-like, thin-walled vessels are typically present and tend to be more conspicuous at the edges\n• Degenerative changes, including myxoid or cystic alterations, chondroid or osseous metaplasia, and occasional pleomorphic cells, may be observed\n• The morphological features of FTS can overlap with those of nodular fasciitis, myofibroma, and desmoplastic fibroma, making the differential diagnosis challenging",
    molecular:
      "• The identification of USP6 fusion genes or locus rearrangement may be useful",
    differential:
      "• Nodular fasciitis: FTS is collagen-rich and lobulated with slit-like vessels\n• NF is more myxoid and tissue-culture-like",
  },
  {
    name: "Desmoplastic fibroblastoma",
    definition:
      "Desmoplastic fibroblastoma is a benign, paucicellular, hypovascular neoplasm composed of bland spindle or stellate fibroblasts within abundant collagenous stroma.",
    clinical:
      "• The most common sites are the upper arm, shoulder, lower limb, back, and forearm\n• Tumors may also arise on the hands and feet\n• The tumor typically presents as an asymptomatic, painless, slow-growing subcutaneous mass, but fascial and skeletal muscle involvement is relatively common",
    criteria:
      "• Essential: hypocellular and hypovascular tumor with abundant collagenous stroma\n• Bland spindled and stellate cells",
    histology:
      "• Although well demarcated grossly, most tumors microscopically infiltrate subcutaneous fat, and approximately 25% extend into skeletal muscle\n• Rare examples are purely intramuscular\n• The lesions have abundant collagenous or myxocollagenous matrix with hypovascularity\n• Cellularity ranges from low to moderate, and the neoplastic cells tend to be uniformly distributed within the extracellular matrix\n• The lesional cells are stellate, bipolar, and spindled, and they have uniform, bland nuclei with distinct small nucleoli",
    molecular: "• Not clinically relevant",
    differential:
      "• Fibroma of tendon sheath: diffuse strong nuclear FOSL1 supports desmoplastic fibroblastoma\n• FTS more often has slit-like vessels",
  },
  {
    name: "Myofibroblastoma",
    definition:
      "Myofibroblastoma is a benign neoplasm composed of myofibroblastic cells and bands of hyalinized collagen, with a variable adipocytic component.",
    clinical:
      "• Approximately half of cases occur in the inguinal/groin area, including the vulva/vagina, perineum, and scrotum\n• However, there is a wide anatomical distribution, including trunk/axilla, breast, extremities, abdominal cavity, retroperitoneum, and viscera\n• The majority are superficial/subcutaneous",
    criteria:
      "• Essential: haphazardly intersecting short fascicles of bland spindle cells\n• Bands of hyalinized collagen\n• Variable adipocytic component\n• Desirable: expression of CD34 and/or desmin",
    histology:
      "• Tumours are unencapsulated and generally well circumscribed\n• The spindle cells are arranged in variably sized short fascicles, with interspersed broad bands of hyalinized collagen or (less commonly) ropy collagen\n• Scattered mast cells are often present\n• Tumours may vary from markedly cellular to paucicellular and hyalinized and usually contain admixed mature adipocytes, which can range from rare to occasionally the dominant component\n• Schwannoma-like palisading, focal epithelioid or round cell morphology, or degenerative-type nuclear atypia (enlarged hyperchromatic nuclei and multinucleation) can occur",
    molecular:
      "• Loss of RB1 can be demonstrated by FISH, although this is usually not necessary to establish the diagnosis",
    differential:
      "• Cellular angiofibroma and spindle cell lipoma: overlap in the RB1-deleted family\n• Integrate site, vessels, collagen, adipocytes, desmin and CD34",
  },
  {
    name: "Calcifying aponeurotic fibroma",
    definition:
      "Calcifying aponeurotic fibroma (CAF) is a benign neoplasm with a propensity to arise in the soft tissues of the hands and feet in children and adolescents, characterized by alternating zones of bland spindle cells and less cellular, partly calcified zones with plump to epithelioid cells.",
    clinical:
      "• CAF arises most commonly on the palmar surfaces of the hands and fingers, followed by the plantar surfaces of the feet and toes\n• Wrists and ankles are less commonly involved",
    criteria:
      "• Essential: geographical areas of calcified matrix surrounded by palisading epithelioid fibroblasts\n• Interspersed bland spindle cells in a collagenous stroma",
    histology:
      "• The cellular component has a fibromatosis-like appearance with infiltration of adjacent soft tissue components\n• Entrapment of nerves and vessels may be seen\n• The cells show no nuclear atypia or mitotic activity\n• The cells are often arranged around the calcifications\n• Osteoclast-type giant cells are frequently seen in these areas, and osseous metaplasia has been described",
    molecular:
      "• Detection of the FN1::EGF gene fusion may be helpful in cases of CAF lacking calcification, although this is not required for routine diagnosis as most cases display the salient features",
    differential:
      "• Fibromatosis or soft-tissue chondroma: alternating cellular spindle zones and calcified epithelioid-cell foci support calcifying aponeurotic fibroma",
  },
  {
    name: "SMAD3-rearranged fibroblastic tumor",
    definition:
      "SMAD3-rearranged fibroblastic tumor is a benign spindle cell neoplasm with EWSR1::SMAD3 fusion and a predilection for superficial acral sites, characterized by alternating cellular fascicles and hyalinized areas.",
    clinical:
      "• Tumours are superficially located within dermis and/or subcutaneous fat\n• These lesions occur on the extremities with a large majority located in the hands and feet",
    criteria:
      "• Essential: superficial acral nodule\n• Short intersecting cellular fascicles of bland spindle cells with variably hyalinized areas\n• Desirable: immunoreactivity for ERG\n• EWSR1::SMAD3 fusion or EWSR1 gene rearrangement in select cases",
    histology:
      "• The tumors are typically well demarcated but show infiltration into subcutaneous fat\n• Superficial cases may directly abut the epidermis\n• The tumors consist of short intersecting cellular fascicles of monomorphic fibroblastic spindle cells lacking nuclear pleomorphism, hyperchromasia, or prominent nucleoli\n• Mitotic activity is typically low\n• The stroma is either collagenous or myxoid",
    molecular:
      "• The EWSR1::SMAD3 fusion or EWSR1 gene rearrangement may be confirmed by molecular methods",
    differential:
      "• Other superficial acral spindle-cell tumors: correlate the characteristic morphology with SMAD3 rearrangement\n• Avoid diagnosis by CD34/ERG alone",
  },
  {
    name: "PRRX1-rearranged fibroblastic tumor",
    definition:
      "PRRX1-rearranged fibroblastic tumor is a benign spindle cell neoplasm characterized by PRRX1 rearrangements, most often with NCOA1.",
    clinical:
      "• Tumours most commonly arise in subcutaneous tissue of the trunk or proximal extremities, with a smaller subset presenting in the head and neck\n• Rare dermal and intramuscular cases have been reported",
    criteria:
      "• Essential: a paucicellular, circumscribed, bland spindle cell neoplasm\n• Hyalinized stroma with variably wire-like and ropy collagen\n• Prominent ectatic and irregular vascular spaces\n• Demonstration of PRRX1 rearrangement",
    histology:
      "• Tumours present as a circumscribed, occasionally multilobular mass with elongated, irregular, and ectatic vascular spaces evident at low magnification\n• Closer inspection shows a predominantly paucicellular neoplasm composed of bland spindle cells arranged haphazardly or in short fascicles within a hyalinized background\n• Focal increased cellularity, myxoid/edematous stromal change, or dense eosinophilic ropy or wire-like collagen are often appreciated\n• Tumours with KMT2D alterations appear to have especially prominent perivascular hyalinization, and a subset of superficial cases may show scattered clusters of pigmented dendritic cells\n• The tumor cells have monomorphic ovoid nuclei with small nucleoli and scant pale cytoplasm with tapering processes",
    molecular:
      "• Identification of a PRRX1 rearrangement helps differentiate this tumor from other fibroblastic neoplasms",
    differential:
      "• Desmoplastic fibroblastoma and fibroma of tendon sheath: compare cellularity, collagen pattern, site, and defining molecular findings",
  },
  {
    name: "Angiomyofibroblastoma",
    definition:
      "Angiomyofibroblastoma is a benign superficial myofibroblastic neoplasm with a predilection for the vulva and vagina.",
    clinical:
      "• Virtually all cases arise in pelviperineal subcutaneous tissue, with the majority arising in the vulva\n• About 10–15% of cases occur in the vagina",
    criteria:
      "• Essential: bland round to spindle cells in a perivascular distribution\n• Prominent small to medium vessels",
    histology:
      "• Angiomyofibroblastoma is generally well demarcated by a thin fibrous pseudocapsule from surrounding soft tissue\n• At low magnification, tumors show alternating hypocellular and hypercellular areas and prominent small to medium-sized thin-walled vessels\n• Thick-walled, often hyalinized vessels, can be seen\n• The tumor cells, which are set in a variably myxedematous to fibrous stroma and typically concentrated around the vasculature, are round to spindle-shaped, with eosinophilic cytoplasm\n• Binucleated and multinucleated tumor cells may occur",
    molecular: "• Not clinically relevant",
    differential:
      "• Cellular angiofibroma: angiomyofibroblastoma has alternating cellularity and perivascular clustering\n• Cellular angiofibroma has thick-walled vessels",
  },
  {
    name: "Cellular angiofibroma",
    definition:
      "Cellular angiofibroma is a benign, cellular, and richly vascularized fibroblastic neoplasm that usually arises in the superficial soft tissues of the vulvovaginal, inguinoscrotal, or paratesticular regions.",
    clinical:
      "• Cellular angiofibromas typically arise in the superficial soft tissues of the vulvovaginal, inguinoscrotal, or paratesticular regions\n• Rare examples have been described at other sites, including oral mucosa, anorectal region, orbit, male pelvis, prostate, and subcutaneous tissue of the chest wall",
    criteria:
      "• Essential: bland spindle cells\n• Short bundles of delicate collagen fibers\n• And numerous small to medium-sized thick-walled vessels\n• Variable adipocytic component",
    histology:
      "• The tumors are generally well circumscribed\n• Poorly marginated, infiltrative tumors occur rarely in men\n• The spindle cell component is randomly distributed throughout the lesion, occasionally with a fascicular arrangement or nuclear palisading\n• Spindle cells have short, oval to fusiform nuclei with inconspicuous nucleoli and scant, palely eosinophilic cytoplasm with poorly defined borders\n• Mitoses are generally sparse, but they can be more frequent in some cases",
    molecular:
      "• Deletion of RB1, located in chromosome band 13q14, can be detected by FISH or other molecular methods but is usually not required for diagnosis",
    differential:
      "• Angiomyofibroblastoma and solitary fibrous tumor: thick-walled hyalinized vessels favor cellular angiofibroma\n• STAT6 supports solitary fibrous tumor",
  },
  {
    name: "Angiofibroma of soft tissue",
    definition:
      "Angiofibroma of soft tissue is a benign fibroblastic neoplasm composed of uniform spindle cells with abundant fibromyxoid stroma and a prominent network of branching, thin-walled blood vessels.",
    clinical:
      "• Angiofibroma of soft tissue typically arises in the lower extremity, sometimes involving or adjacent to the knee\n• Unusual anatomical locations include the upper extremity, back, abdominal wall, pelvic cavity, and breast",
    criteria:
      "• Essential: bland and uniform short spindle cells\n• Variably myxoid or collagenous stroma\n• Prominent small, thin-walled branching blood vessels\n• Desirable: AHRR or NCOA2 gene rearrangements in select cases",
    histology:
      "• Angiofibroma of soft tissue is composed of uniform bland spindle cells in a variably myxoid to collagenous stroma with a prominent vascular network\n• The lesions are mostly well circumscribed\n• The architecture is vaguely lobulated, with alternating myxoid and collagenous areas and regional variation in cellularity\n• The neoplastic spindle cells have inconspicuous palely eosinophilic cytoplasm and short ovoid or tapering nuclei, with irregular nuclear contours, fine chromatin, and indistinct nucleoli\n• Cytological atypia and nuclear hyperchromasia are generally absent",
    molecular:
      "• Detection of AHRR or NCOA2 rearrangement or AHRR::NCOA2 gene fusion (or other rare variant fusion) supports the diagnosis, but it is generally not required",
    differential:
      "• Solitary fibrous tumor: delicate branching vessels and bland short spindle cells\n• STAT6 nuclear staining favors solitary fibrous tumor",
  },
  {
    name: "Nuchal-type fibroma",
    definition:
      "Nuchal-type fibroma is a benign fibroblastic proliferation that commonly arises in the posterior neck in middle-aged adults.",
    clinical:
      "• Nuchal-type fibroma is a superficial lesion that occurs in the dermis and subcutis\n• Although the majority arise in the posterior neck (70%), they may occur at extranuchal sites, including the upper back, shoulder, head, extremities, and buttock",
    criteria:
      "• Essential: a hypocellular collagenous lesion with bland fibroblasts\n• Entrapped adipose tissue and small nerve bundles\n• Typically arising at the posterior aspect of neck in adults",
    histology:
      "• Entrapped normal structures, including adipose tissue, skeletal muscle, and nerves, may be seen\n• Many nuchal-type fibromas contain a localized proliferation of small nerves, in some cases similar to those in traumatic neuroma\n• This feature is usually absent in Gardner fibroma, which may otherwise be morphologically indistinguishable from nuchal-type fibroma\n• By immunohistochemistry, the stromal fibroblasts are positive for CD34 and negative for β-catenin (absent nuclear staining), SMA, and desmin",
    molecular: "• Not clinically relevant",
    differential:
      "• Desmoplastic fibroblastoma: nuchal-type fibroma is markedly hypocellular and entraps fat and nerve bundles",
  },
  {
    name: "Acral fibromyxoma",
    definition:
      "Acral fibromyxoma is a benign fibroblastic neoplasm with a marked predilection for the periungual region of the digits.",
    clinical:
      "• Acral fibromyxoma shows a strong predilection for the periungual and subungual regions of the fingers and toes\n• Other areas of the hands and feet, ankles, wrists, lower legs, and thighs are affected rarely",
    criteria:
      "• Essential: acral, usually periungual location\n• Lobulated architecture with storiform or fascicular growth\n• Bland spindle cells in a variably myxoid or collagenous matrix",
    histology:
      "• Acral fibromyxomas present in the dermis and subcutis as lobulated tumors, occasionally with a polypoid growth and surrounding epidermal collarettes\n• Most tumors show an infiltrative growth pattern, with rare invasion of underlying bone\n• The tumors are composed of bland-appearing spindled or stellate cells arranged loosely in a variably myxoid or collagenous stroma\n• Alternating myxoid and hyaline zones with wavy fascicles of collagen fibers are frequent\n• Scattered multinucleated cells may be present",
    molecular:
      "• The tumors show deletion of the RB1 gene, but demonstration of this is not required",
    differential:
      "• Superficial acral fibromyxoma versus myxoid DFSP: assess CD34, architecture, and infiltrative pattern",
  },
  {
    name: "Gardner fibroma",
    definition:
      "Gardner fibroma is a benign plaque-like neoplasm composed of coarse, haphazardly arranged collagen bundles with sparsely interspersed fibroblasts, often associated with familial adenomatous polyposis (FAP).",
    clinical:
      "• These tumors typically present as painless mass-forming lesions",
    criteria:
      "• Essential: plaque-like mass in the paraspinal region or trunk of young children\n• Haphazard arrangement of coarse collagen fibers with clefts or cracks and few inconspicuous spindle cells\n• Desirable: expression of CD34 and nuclear β-catenin",
    histology:
      "• A helpful diagnostic feature is entrapment of adjacent adipose tissue and neurovascular bundles at the edge of the lesion\n• Rare tumors may show abundant intralesional adipose tissue\n• By immunohistochemistry, CD34 is almost always positive, whereas SMA is negative\n• Nuclear accumulation of β-catenin is often observed, particularly in cases associated with FAP",
    molecular:
      "• Although not necessary for diagnosis, identification of germline APC variants can have important implications for surgical and long-term case management",
    differential:
      "• Desmoid fibromatosis: Gardner fibroma is hypocellular with coarse haphazard collagen\n• Desmoid is more cellular with sweeping fascicles",
  },
  {
    name: "Palmar fibromatosis and plantar fibromatosis",
    definition:
      "Palmar and plantar fibromatoses are benign nodular fibroblastic/myofibroblastic proliferations typically arising in the volar aspect of the hands and fingers or involving plantar aponeuroses, respectively.",
    clinical:
      "• Palmar fibromatosis preferentially involves the volar or flexor aspect of the hands and is bilateral in as many as 50% of cases",
    criteria:
      "• Essential: bland, variably cellular nodular proliferation of spindled fibroblasts/myofibroblasts\n• Collagenous stroma\n• Involvement of aponeurosis and variably subcutis and dermis in the palmar and plantar aspect",
    histology:
      "• Typically, tumors involve a thickened palmar/plantar tendon or aponeurosis, forming single to multiple discontinuous, moderately cellular spindle cell nodules in a collagenous stroma\n• Morphologically, there are three phases of growth (proliferative, involutional, and late-stage)\n• Some plantar lesions are hypercellular and mitotically active and mimic spindle cell sarcomas, but they lack atypia\n• Mitotic activity may be prominent in pediatric examples\n• Occasionally, particularly plantar lesions show interspersed multinucleated cells",
    molecular: "• Not clinically relevant",
    differential:
      "• Scar or reactive fibrous proliferation: nodular fascicular proliferation in palmar/plantar fascia supports fibromatosis",
  },
  {
    name: "Desmoid fibromatosis",
    definition:
      "Desmoid fibromatosis is an intermediate, locally aggressive, deep-seated myofibroblastic neoplasm with infiltrative growth and a propensity for local recurrence.",
    clinical:
      "• Desmoid fibromatosis is most commonly diagnosed in the extremities (30–40% of cases)\n• Lesions also occur in the retroperitoneum or abdominal cavity (15%), abdominal wall (20%), and chest wall (10–15%)",
    criteria:
      "• Essential: long, sweeping fascicles of bland myofibroblasts\n• Infiltrative growth\n• Desirable: nuclear β-catenin expression\n• CTNNB1 variant in select cases",
    histology:
      "• Desmoid fibromatosis is characterized by long, sweeping fascicles of bland fibroblasts and myofibroblasts with infiltration into surrounding soft tissues\n• The fascicles typically span an entire 10× objective field, and lymphoid aggregates are often appreciated at the advancing edge of the lesion\n• The tumor cells demonstrate pale eosinophilic cytoplasm and lack nuclear hyperchromasia or cytological atypia\n• Thin-walled blood vessels, occasionally with a gaping or staghorn appearance, are often prominent with variable perivascular edema\n• Mitotic figures are variable, but atypical mitoses are lacking",
    molecular: "Not specified in the supplied source.",
    differential:
      "• Scar, nodular fasciitis, and low-grade fibromyxoid sarcoma: long sweeping bland fascicles with infiltrative growth\n• Nuclear beta-catenin/CTNNB1 supports desmoid",
  },
  {
    name: "Lipofibromatosis",
    definition:
      "Lipofibromatosis (LPF) is an intermediate, locally aggressive pediatric soft tissue neoplasm with a predilection for the hands and feet; it is composed of an admixture of mature fat, short fascicles of bland spindle cells, and lipoblast-like cells in the interface between these components.",
    clinical:
      "• LPF preferentially involves the hands and feet, although it can also occur at other locations such as the trunk and the head and neck\n• LPF typically presents as a slow-growing, poorly demarcated subcutaneous mass, which can also involve skeletal muscle",
    criteria:
      "• Essential: an admixture of mature fat, short fascicles of bland spindle cells and lipoblast-like cells\n• Infiltrative margins\n• Most often in the hands and feet of young children",
    histology:
      "• Lipofibromatosis is composed of mature adipose tissue traversed by cellular fascicles of spindle cells with bland, uniform, elongated nuclei\n• Fat usually forms a major proportion of the lesion\n• In newborn patients, the fat lobules may have an immature appearance with myxoid matrix\n• Small collections of univacuolated cells may be present in the fibroblastic component, where melanin-laden cells have occasionally been documented\n• Lipofibromatosis entraps subcutaneous tissue and sometimes skeletal muscle",
    molecular: "• Not clinically relevant",
    differential:
      "• Fibrous hamartoma of infancy: lipofibromatosis is predominantly infiltrative spindle cells admixed with fat, without the classic triphasic pattern",
  },
  {
    name: "Giant cell fibroblastoma",
    definition:
      "Giant cell fibroblastoma (GCF) is a locally aggressive fibroblastic neoplasm, closely related to dermatofibrosarcoma protuberans (DFSP), arising primarily in children and characterized by the presence of multinucleated giant cells and pseudovascular spaces.",
    clinical:
      "• GCF is preferentially located in superficial soft tissues of the trunk and (more rarely) the extremities, and the head and neck region\n• GCF rarely involves superficial skeletal muscles",
    criteria:
      "• Essential: spindle cells and scattered multinucleated cells, often lining pseudovascular spaces\n• Infiltrative margins within dermis and subcutaneous fat\n• Hypocellular lesion with myxoid or collagenous stroma\n• Desirable: COL1A1::PDGFB fusion in select cases",
    histology:
      "• GCF is a dermal and subcutaneous tumor, rarely involving skeletal muscle\n• Classic GCF infiltrates the subcutaneous fat with a honeycomb pattern and spare cutaneous adnexal structures\n• This neoplasm is usually hypocellular, composed of loose fascicles of wavy spindle cells in a myxoid to collagenous stroma\n• Numerous pleomorphic mononucleated and multinucleated giant cells are also present\n• Tumour cells display an amphophilic cytoplasm and oval hyperchromatic nuclei",
    molecular:
      "• The identification of t(17\n• 22) Is useful in non-classic cases",
    differential:
      "• DFSP: giant cell fibroblastoma has pseudovascular spaces and multinucleated giant cells\n• Both may show COL1A1::PDGFB",
  },
  {
    name: "Dermatofibrosarcoma protuberans",
    definition:
      "Dermatofibrosarcoma protuberans (DFSP) is a superficial, intermediate, locally aggressive spindle cell neoplasm with a diffusely infiltrative, storiform growth pattern. Fibrosarcomatous DFSP is characterized by a fascicular growth pattern, increased mitotic activity, and metastatic potential.",
    clinical:
      "• These tumors show a predilection for the trunk and the proximal extremities, followed by the head and neck region\n• Involvement of the genital area, the breast, and acral sites is less common",
    criteria:
      "• Essential: storiform architecture and uniform spindle cell morphology\n• Diffusely infiltrative growth with a honeycomb pattern in the subcutis\n• For fibrosarcomatous DFSP: fascicular architecture with increased mitotic activity\n• Desirable: expression of CD34",
    histology:
      "• Classic DFSP DFSP is a dermal-based tumor typically showing additional diffuse infiltration of subcutaneous adipose tissue, giving rise to the characteristic honeycomb appearance\n• The tumor is composed of cytologically uniform spindled cells containing plump or elongated wavy nuclei, arranged in storiform, whorled, or cartwheel growth patterns\n• Cytological atypia is minimal and mitotic activity is low\n• The collagenous stroma contains small blood vessels\n• The superficial portion of the neoplasm may be less cellular, causing considerable challenges in the differential diagnosis on small biopsies",
    molecular:
      "• However, the COL1A1::PDGFB fusion may be cryptic in about 2% of cases, and another 2% of cases harbour alternative fusions involving PDGFD",
    differential:
      "• Dermatofibroma: DFSP shows honeycomb infiltration of subcutaneous fat and diffuse CD34\n• Dermatofibroma is usually more circumscribed and factor XIIIa-positive",
  },
  {
    name: "Solitary fibrous tumor",
    definition:
      "Solitary fibrous tumor (SFT) is an intermediate, rarely metastasizing fibroblastic neoplasm characterized by bland spindle cell morphology; a patternless growth pattern; a prominent branching, thin-walled, dilated (staghorn) vasculature; and NAB2::STAT6 gene fusion.",
    clinical:
      "• SFTs may occur at any anatomical site, including superficial and deep soft tissues and within visceral organs and bone\n• About 30–40% of extrapleural, extrameningeal SFTs arise in the extremities\n• 30–40% Arise in deep soft tissues, the abdominal cavity, the pelvis, or the retroperitoneum",
    criteria:
      "• Essential: spindled to ovoid cells in a patternless architecture with prominent branching and hyalinized vasculature\n• Variable stromal collagen deposition\n• Desirable: STAT6 expression by immunohistochemistry",
    histology:
      "• A prominent branching, frequently dilated vascular network is often present (termed staghorn or haemangiopericytomatous)\n• Scattered smaller or medium-sized hyalinized blood vessels may also be identified\n• Morphological patterns correlate with the NAB2::STAT6 fusion variant\n• SFTs most often have low mitotic counts, without substantial nuclear pleomorphism or necrosis\n• By immunohistochemistry, SFT typically shows strong and diffuse expression of CD34 and nuclear STAT6",
    molecular:
      "• NAB2::STAT6 gene fusions are pathognomonic of SFT, and STAT6 immunohistochemistry is a sensitive and specific surrogate for all fusion types",
    differential:
      "• Synovial sarcoma and other CD34-positive spindle tumors: patternless architecture, branching vessels, and nuclear STAT6 support solitary fibrous tumor",
  },
  {
    name: "Inflammatory myofibroblastic tumor",
    definition:
      "Inflammatory myofibroblastic tumor (IMT) is an intermediate, rarely metastasizing myofibroblastic neoplasm composed of plump spindle cells accompanied by an inflammatory infiltrate of plasma cells, lymphocytes, and/or eosinophils.",
    clinical:
      "• Unusual locations include somatic soft tissues, pancreas, liver, CNS, and placenta",
    criteria:
      "• Essential: fascicles of plump spindle cells with inflammatory infiltrate and a variable collagenous or myxoid stroma\n• Desirable: expression of ALK\n• ALK, ROS1, RET, NTRK, or other gene rearrangements, in selected cases",
    histology:
      "• The morphology of IMT can be heterogeneous\n• Spindled fibroblastic-myofibroblastic cells and inflammatory cells form three basic histological patterns\n• The second is a hypercellular pattern, which is characterized by a compact fascicular spindle cell proliferation with variable myxoid and collagenous stroma and inflammatory infiltrate\n• Dystrophic calcifications and osseous metaplasia are occasionally seen\n• One or more patterns are often seen within a single tumor",
    molecular:
      "• In addition to immunohistochemical detection of ALK protein, molecular assays for ALK may be used to confirm the diagnosis but are generally not required\n• Exceptional situations such as inversion of ALK on the same chromosome arm may lead to a false negative FISH result\n• In ALK-negative cases, immunohistochemistry for ROS1 and pan-TRK and/or molecular tests for non-ALK gene rearrangements may be useful",
    differential:
      "• Nodular fasciitis and reactive inflammation: myofibroblastic spindle cells with lymphoplasmacytic infiltrate\n• Kinase fusion testing supports IMT",
  },
  {
    name: "Low-grade myofibroblastic sarcoma",
    definition:
      "Low-grade myofibroblastic sarcoma (LGMS) is an intermediate, rarely metastasizing spindle cell neoplasm with mild nuclear variability and a diffusely infiltrative growth pattern.",
    clinical: "• There is a wide anatomical distribution",
    criteria:
      "• Essential: diffusely infiltrative growth\n• Cellular fascicles of spindle cells with pale eosinophilic cytoplasm\n• Nuclear atypia\n• Desirable: variable expression of SMA and/or desmin",
    histology:
      "• Histologically, LGMSs are characterized by a diffusely infiltrative growth pattern\n• In deep neoplasms, cells often grow between individual skeletal muscle fibers\n• The cytoplasm is sparser and less brightly eosinophilic than that of smooth muscle neoplasms\n• More rarely, tumors are hypocellular, with more prominent, sometimes hyalinized, collagenous stroma\n• Mitotic activity is present, while necrosis is relatively rare",
    molecular: "• There are no specific genetic or molecular markers",
    differential:
      "• Nodular fasciitis and desmoid fibromatosis: infiltrative growth with cytologic atypia and mitotic activity favors sarcoma",
  },
  {
    name: "Superficial CD34-positive pleomorphic fibroblastic tumor",
    definition:
      "Superficial CD34-positive pleomorphic fibroblastic tumor is an intermediate, rarely metastasizing neoplasm of the skin and subcutis, characterized by spindled cells with abundant, granular to glassy eosinophilic cytoplasm, marked nuclear pleomorphism, a low mitotic count, and diffuse CD34 expression.",
    clinical:
      "• This tumor most frequently occurs in the lower extremities, especially thigh, followed by arm, buttock, shoulder, and (rarely) vulva\n• This tumor typically presents as a slow-growing, painless mass of superficial soft tissues",
    criteria:
      "• Essential: superficial location\n• Spindle cells with granular to glassy eosinophilic cytoplasm\n• Marked nuclear pleomorphism but a low mitotic count\n• Diffuse CD34 expression",
    histology:
      "• Lipidized tumor cells are commonly present\n• The neoplastic cells show moderate to marked nuclear pleomorphism, often with bizarre, hyperchromatic nuclei containing prominent nucleoli and intranuclear cytoplasmic pseudoinclusions\n• Despite these alarming nuclear features, mitotic activity is very low, and necrosis is rarely seen\n• A mixed inflammatory cell infiltrate is often present\n• There is morphological overlap with tumors reported as PRDM10-rearranged soft tissue tumors",
    molecular: "• Not clinically relevant",
    differential:
      "• Atypical fibroxanthoma/pleomorphic dermal sarcoma and DFSP: superficial dermal location, pleomorphism, and CD34 expression guide distinction",
  },
  {
    name: "Myxoinflammatory fibroblastic sarcoma",
    definition:
      "Myxoinflammatory fibroblastic sarcoma is an intermediate, rarely metastasizing neoplasm showing both a predilection for acral sites and variably myxoid and cellular areas with bland spindle cells, a prominent inflammatory infiltrate, and scattered large polygonal cells with macronucleoli.",
    clinical:
      "• The tumor presents most often in the acral sites: hands, fingers, and feet, more often on dorsal sides\n• Rarely it presents in the proximal parts of extremities and trunk wall",
    criteria:
      "• Essential: variably myxoid and cellular areas with bland spindle cells, a prominent inflammatory infiltrate, and scattered large polygonal cells with macronucleoli",
    histology:
      "• The tumor contains large polygonal cells with nuclear pleomorphism, pseudoinclusions, and large eosinophilic nucleoli, potentially mimicking Hodgkin cells\n• Vacuolated pseudolipoblasts and mildly atypical spindle cells are often seen\n• There is a prominent stromal lymphoplasmacytic and neutrophilic inflammatory component\n• Cellularity is moderate to high in half of the cases\n• Stroma is mostly collagenous, usually with at least focal myxoid areas",
    molecular: "• Not clinically relevant",
    differential:
      "• Tenosynovial giant cell tumor and acral fibromyxoma: bizarre virocyte-like cells in myxoinflammatory stroma favor MIFS",
  },
  {
    name: "Nodular necrotizing fibroblastic tumor",
    definition:
      "Nodular necrotizing fibroblastic tumor is a superficial mesenchymal neoplasm composed of epithelioid cells with a brisk inflammatory infiltrate and, in many cases, central necrosis.",
    clinical:
      "• Tumours tend to occur in the skin and subcutis of the limbs, trunk, or acral sites, the latter of which account for less than half of cases\n• No bone involvement has been reported so far",
    criteria:
      "• Essential: well-defined nodules of neoplastic cells with surrounding and/or admixed inflammation\n• Tumor cells with copious, eosinophilic to amphophilic cytoplasm and enlarged, vesicular nuclei with prominent nucleoli\n• Often central necrosis\n• Desirable: evidence of YAP1::MAML2 fusion",
    histology:
      "• Nodular necrotizing fibroblastic tumor shows a nodular or multilobular growth pattern\n• Tumour lobules are sometimes separated by fibrous septa showing florid lymphoplasmacytic inflammation\n• Some lobules show central necrosis\n• The neoplastic cells are large, with copious, dense, amphophilic to eosinophilic cytoplasm, usually with emperipolesis of inflammatory cells\n• The nuclei are large and vesicular, with prominent red nucleoli",
    molecular: "• Identification of YAP1::MAML2 fusion can be helpful",
    differential:
      "• Inflammatory myofibroblastic tumor and other inflammatory spindle-cell lesions: assess nodular necrosis, cytologic features, and defining molecular findings",
  },
  {
    name: "Infantile fibrosarcoma",
    definition:
      "Infantile fibrosarcoma (IFS) is a locally aggressive fibroblastic tumor, most frequently occurring in infancy, characterized by an ETV6::NTRK3 fusion or other alterations leading to oncogenic activation of kinase genes.",
    clinical:
      "• IFS most commonly involves the soft tissues of the extremities, followed by the trunk and the head/neck\n• Tumours in intra-abdominal, retroperitoneal, or visceral sites are less frequent but do occur",
    criteria:
      "• Essential: a primitive ovoid/round cell or spindle cell tumor, often arranged in sheets or fascicles\n• Thin-walled, ectatic, branching vessels and/or mixed chronic inflammation\n• Desirable: ETV6::NTRK3 or other alterations of kinase genes",
    histology:
      "• IFS may demonstrate a spectrum of histological patterns across cases and within a given case\n• Most frequently, IFS is a cellular, monomorphic neoplasm composed of primitive, ovoid/round to spindled cells, arranged either in compact, haphazard sheets or in long fascicles\n• Often tumors demonstrate a prominent ectatic or haemangiopericytoma-like vascular pattern\n• The background stroma may range from myxoid to heavily collagenous\n• A subset of cases have decreased cellularity with a collagenized matrix",
    molecular:
      "• Gene fusions or activating variants involving receptor tyrosine kinase encoding genes (e.g\n• ETV6::NTRK3) or downstream effector molecule (BRAF) fusions or activating alterations may be demonstrated by various molecular modalities",
    differential:
      "• Fibrous hamartoma of infancy and cellular congenital/infantile fibromatosis: infantile fibrosarcoma is a malignant cellular spindle-cell neoplasm\n• Test for NTRK fusion when appropriate",
  },
  {
    name: "Myxofibrosarcoma",
    definition:
      "Myxofibrosarcoma is a malignant fibroblastic neoplasm with variably myxoid stroma, nuclear pleomorphism, and a characteristic curvilinear vasculature.",
    clinical:
      "• Myxofibrosarcomas usually arise in the superficial soft tissue of the limbs, including the limb girdles, with the lower extremities more commonly involved than the upper extremities\n• Involvement of the trunk, head and neck, and hands and feet are rare",
    criteria:
      "• Essential: multinodular architecture with infiltrative margins\n• Variably pleomorphic tumor cells with myxoid stroma and curvilinear vasculature\n• Hypercellular areas in higher-grade tumors",
    histology:
      "• Subcutaneous tumors are highly infiltrative and often extend well beyond the clinically apparent lesion\n• At the low-grade end of the spectrum, myxofibrosarcoma is relatively hypocellular, composed of scattered hyperchromatic, spindled to stellate cells within a prominent myxoid stroma\n• The tumor cells are often clustered around the curvilinear vessels with or without associated chronic inflammatory cells\n• Vacuolated tumor cells resembling lipoblasts (pseudolipoblasts) may be present\n• In low-grade tumors, mitotic activity is inconspicuous",
    molecular: "• Not clinically relevant",
    differential:
      "• Nodular fasciitis and other myxoid sarcomas: infiltrative multinodular growth, curvilinear vessels, and atypia favor myxofibrosarcoma",
  },
  {
    name: "Low-grade fibromyxoid sarcoma",
    definition:
      "Low-grade fibromyxoid sarcoma is a malignant fibroblastic neoplasm characterized by alternating collagenous and myxoid areas, deceptively bland spindle cells with a whorling growth pattern, and arcades of small blood vessels.",
    clinical:
      "• The most common sites of involvement are the proximal extremities and trunk, usually subfascial in depth",
    criteria:
      "• Essential: alternating fibrous and myxoid areas\n• Bland spindle cells in a whorling or short fascicular growth pattern\n• Desirable: MUC4 expression\n• FUS gene rearrangement in select cases",
    histology:
      "• Low-grade fibromyxoid sarcoma is composed of collagenous areas and myxoid nodules\n• An abrupt transition between these two areas is typical\n• The tumor cells are bland, spindled, and sometimes plump, and they grow in short fascicles or in a whorling pattern\n• Mitotic activity is generally inconspicuous\n• Arcades of small vessels and arteriole-sized vessels with perivascular sclerosis are seen",
    molecular:
      "• If MUC4 is negative or not available, identification of FUS::CREB3L2 (or other rare variants) offers molecular genetic support for the diagnosis",
    differential:
      "• Myxofibrosarcoma and desmoid fibromatosis: bland whorled cells with alternating fibrous/myxoid zones\n• Diffuse MUC4 and FUS::CREB3L2 support LGFMS",
  },
  {
    name: "Sclerosing epithelioid fibrosarcoma",
    definition:
      "Sclerosing epithelioid fibrosarcoma is a rare malignant fibroblastic neoplasm composed of distinctive epithelioid cells arranged in cords and nests and embedded in a densely sclerotic hyalinized stroma.",
    clinical:
      "• Tumours are deep-seated and arise most often in the upper or lower extremities or limb girdle, followed by the trunk and the head and neck\n• Rarely, tumors arise in the pelvis, retroperitoneum, viscera, or bone",
    criteria:
      "• Essential: epithelioid cells arranged in cords, nests, or trabeculae and embedded in a dense sclerotic hyalinized stroma\n• Keratin-negative\n• Desirable: diffuse strong MUC4 expression (in most cases)\n• EWSR1::CREB3L1 or other rearrangements",
    histology:
      "• Sclerosing epithelioid fibrosarcoma shows infiltrative growth within the adipose tissue and skeletal muscle in most cases\n• A characteristic feature is the prominent hyalinized sclerotic collagenous stroma, showing variable degrees of cellularity\n• The tumor cells usually have clear to pale eosinophilic cytoplasm and uniform round nuclei with inconspicuous nucleoli\n• Although more than half of the cases may show a spindle cell component, it is usually limited in nature\n• Pseudoalveolar or acinar growth patterns are occasionally seen",
    molecular:
      "• Demonstration of EWSR1::CREB3L1 or other rearrangements can help confirm the diagnosis\n• For cases with characteristic morphology and MUC4 expression, additional molecular studies are not required\n• However, in tumors lacking MUC4 staining, sequencing is recommended to demonstrate the alternative fusions involving YAP1 and KMT2A for a definitive diagnosis",
    differential:
      "• Carcinoma and epithelioid sarcoma: epithelioid cords/nests in dense hyalinized stroma\n• Use keratins, MUC4, and fusion testing",
  },
  {
    name: "Undifferentiated pleomorphic sarcoma",
    definition:
      "Undifferentiated pleomorphic sarcoma (UPS) is a malignant pleomorphic mesenchymal neoplasm showing no identifiable line of differentiation and no distinctive molecular aberration when analysed by presently available technology. UPS is a diagnosis of exclusion.",
    clinical:
      "• UPS may be found at any location\n• UPS has no characteristic clinical features that distinguish it from other types of sarcoma",
    criteria:
      "• Essential: spindle, pleomorphic, epithelioid morphology\n• Absence of any morphological or immunohistochemical feature of specific lines of differentiation",
    histology:
      "• UPS is morphologically intermediate- to high-grade and may display pleomorphic, spindle cell, and epithelioid areas, without specific defining features\n• They lack an identifiable line of differentiation, other than a (myo)fibroblastic appearance\n• UPS is often patternless, with frequent enlarged, irregular, bizarre, multinucleated tumor giant cells with coarse chromatin and prominent nucleoli\n• The amount of cytoplasm is variable, and it is pale to eosinophilic\n• Intracytoplasmic or intranuclear inclusions can be seen",
    molecular:
      "• Molecular analysis may help exclude other entities in the differential diagnosis of UPS\n• The presence of MDM2 and CDK4 amplification may suggest a dedifferentiated liposarcoma\n• Mutations in BRAF, NRAS, KIT, or NF1",
    differential:
      "• Exclude specific lineages first: diagnosis requires pleomorphic malignancy without definable differentiation after appropriate IHC/molecular workup",
  },
];

const groups = [
  {
    name: "Reactive / self-limited and pseudoneoplastic",
    terms: [
      "Nodular fasciitis",
      "Proliferative fasciitis and proliferative myositis",
      "Myositis ossificans and fibro-osseous pseudotumor of digits",
      "Ischaemic fasciitis",
    ],
  },
  {
    name: "Benign fibroblastic / myofibroblastic",
    terms: [
      "Elastofibroma",
      "Fibrous hamartoma of infancy",
      "Fibromatosis colli",
      "Juvenile hyaline fibromatosis",
      "Calcifying fibrous tumor",
      "Inclusion body fibromatosis",
      "Fibroma of tendon sheath",
      "Desmoplastic fibroblastoma",
      "Myofibroblastoma",
      "Calcifying aponeurotic fibroma",
      "SMAD3-rearranged fibroblastic tumor",
      "PRRX1-rearranged fibroblastic tumor",
      "Angiomyofibroblastoma",
      "Cellular angiofibroma",
      "Angiofibroma of soft tissue",
      "Nuchal-type fibroma",
      "Acral fibromyxoma",
      "Gardner fibroma",
    ],
  },
  {
    name: "Fibromatoses",
    terms: [
      "Palmar fibromatosis and plantar fibromatosis",
      "Desmoid fibromatosis",
      "Lipofibromatosis",
    ],
  },
  {
    name: "Intermediate / locally aggressive",
    terms: [
      "Giant cell fibroblastoma",
      "Dermatofibrosarcoma protuberans",
      "Solitary fibrous tumor",
      "Inflammatory myofibroblastic tumor",
    ],
  },
  {
    name: "Malignant",
    terms: [
      "Low-grade myofibroblastic sarcoma",
      "Superficial CD34-positive pleomorphic fibroblastic tumor",
      "Myxoinflammatory fibroblastic sarcoma",
      "Nodular necrotizing fibroblastic tumor",
      "Infantile fibrosarcoma",
      "Myxofibrosarcoma",
      "Low-grade fibromyxoid sarcoma",
      "Sclerosing epithelioid fibrosarcoma",
      "Undifferentiated pleomorphic sarcoma",
    ],
  },
];

const workflow = [
  [
    "First establish the compartment and setting",
    "Superficial dermis/subcutis versus fascia, tendon/aponeurosis, skeletal muscle, or deep soft tissue; age, site, growth rate, prior trauma/compression, and multiplicity are major discriminators.",
  ],
  [
    "Look for a defining architecture",
    "Tissue-culture-like/myxoid (nodular fasciitis); zonal bone (myositis ossificans); triphasic organoid pattern (fibrous hamartoma of infancy); thick collagen and slit vessels (tendon-sheath fibroma); patternless growth and branching vessels (solitary fibrous tumor); honeycomb fat infiltration (DFSP).",
  ],
  [
    "Decide whether the lesion is bland, infiltrative, or cytologically malignant",
    "Infiltration alone does not equal sarcoma: desmoid fibromatosis and DFSP infiltrate. Conversely, bland cytology does not exclude malignancy in entities such as low-grade fibromyxoid sarcoma.",
  ],
  [
    "Use immunohistochemistry as a differential-directed panel",
    "Choose markers to test a specific hypothesis, not as a broad screening panel. Interpret staining in the lesional cells and in the correct compartment.",
  ],
  [
    "Use molecular testing to resolve a real diagnostic fork",
    "Examples include USP6, CTNNB1, COL1A1::PDGFB, NAB2::STAT6, kinase fusions in IMT/infantile fibrosarcoma, FUS::CREB3L2, and EWSR1::CREB3L1. A negative assay may not exclude a morphologically compatible entity.",
  ],
  [
    "Integrate margins, grade, and clinical behavior",
    "State the biologic category and the feature that drives it. For infiltrative or malignant lesions, correlate sampling and imaging; avoid upgrading a benign lesion solely because mitoses are present when atypical mitoses/necrosis are absent.",
  ],
];

const differential = [
  [
    "Nodular fasciitis",
    "Myxofibrosarcoma",
    "Small, rapidly growing lesion; tissue-culture pattern, myxoid/microcystic stroma and ordinary mitoses. USP6 supports the diagnosis.",
  ],
  [
    "Myositis ossificans",
    "Extraskeletal osteosarcoma",
    "Peripheral maturation and zonal bone formation favor myositis ossificans; malignant cytology and absent zonation favor osteosarcoma.",
  ],
  [
    "Desmoid fibromatosis",
    "Scar / other spindle cell lesions",
    "Long sweeping bland fascicles with infiltrative growth; nuclear beta-catenin or CTNNB1 alteration supports desmoid.",
  ],
  [
    "DFSP",
    "Dermatofibroma",
    "Storiform growth with honeycomb infiltration of fat and diffuse CD34 favors DFSP; confirm PDGFB/PDGFD rearrangement when needed.",
  ],
  [
    "Low-grade fibromyxoid sarcoma",
    "Other bland spindle cell tumors",
    "Alternating fibrous and myxoid zones with bland whorled cells; diffuse MUC4 and FUS::CREB3L2 support the diagnosis.",
  ],
  [
    "Sclerosing epithelioid fibrosarcoma",
    "Carcinoma / epithelioid sarcoma",
    "Epithelioid cords or nests in dense hyalinized stroma; use keratins, MUC4 and fusion testing in context.",
  ],
  [
    "Myxofibrosarcoma",
    "Nodular fasciitis",
    "Infiltrative multinodular growth, curvilinear vessels and cytologic atypia favor myxofibrosarcoma.",
  ],
  [
    "Solitary fibrous tumor",
    "Other CD34-positive spindle cell tumors",
    "Patternless architecture and branching vessels with nuclear STAT6 support solitary fibrous tumor.",
  ],
  [
    "Inflammatory myofibroblastic tumor",
    "Reactive inflammation",
    "Myofibroblastic fascicles with lymphoplasmacytic inflammation; ALK/ROS1 or other kinase fusion may confirm.",
  ],
];

const markerGuide = [
  [
    "SMA / desmin",
    "Myofibroblastic differentiation; expression is variable and not entity-specific. Desmin plus CD34 commonly supports myofibroblastoma in the right morphology.",
  ],
  [
    "CD34",
    "Useful in DFSP, superficial CD34-positive pleomorphic fibroblastic tumor, cellular angiofibroma, myofibroblastoma and several benign lesions; not specific. Distribution and architecture matter.",
  ],
  [
    "Nuclear beta-catenin",
    "Supports desmoid fibromatosis in context; may also occur in Gardner fibroma and cranial fasciitis. Correlate with CTNNB1 testing where appropriate.",
  ],
  [
    "STAT6",
    "Strong nuclear staining supports solitary fibrous tumor; interpret as nuclear staining in lesional cells.",
  ],
  [
    "MUC4",
    "Diffuse strong expression supports low-grade fibromyxoid sarcoma and most sclerosing epithelioid fibrosarcomas; not all SEF are positive.",
  ],
  [
    "ALK / ROS1 / NTRK",
    "Can identify kinase-rearranged inflammatory myofibroblastic tumor; negative ALK does not exclude IMT.",
  ],
  [
    "RB1",
    "Loss may support the RB1-deleted family (myofibroblastoma, cellular angiofibroma, spindle cell/pleomorphic lipoma) but is not independently diagnostic.",
  ],
  [
    "ERG",
    "Can be expressed in SMAD3-rearranged fibroblastic tumor; use with morphology and fusion testing rather than as a stand-alone lineage marker.",
  ],
];

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-teal-800">
        {title}
      </h3>
      <div className="text-sm leading-6 text-slate-700">{children}</div>
    </section>
  );
}
function HighlightText({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return <>{text}</>;

  const escapedTerms = terms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(`(${escapedTerms.join("|")})`, "gi");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        const isMatch = terms.some(
          (term) => part.toLowerCase() === term.toLowerCase(),
        );
        return isMatch ? (
          <mark
            key={index}
            className="rounded-sm bg-yellow-200 px-0.5 text-slate-950"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </>
  );
}

function TextBlock({ value, query }: { value: string; query: string }) {
  const items = value.split("\n").filter(Boolean);
  return (
    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
      {items.map((item, index) => (
        <li key={index}>
          <HighlightText text={item.replace(/^•\s*/, "")} query={query} />
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [expanded, setExpanded] = useState<string[]>([]);
  const [gpsTarget, setGpsTarget] = useState("");
  const [gpsQuery, setGpsQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const target = params.get("gpsTarget");
    const searchQuery = params.get("gpsQuery") ?? "";

    setGpsQuery(searchQuery);

    if (target) {
      setGpsTarget(target);
      setExpanded((current) =>
        current.includes(target) ? current : [...current, target],
      );
    }
  }, []);

  useEffect(() => {
    if (!gpsTarget || !expanded.includes(gpsTarget)) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(`gps-${slugify(gpsTarget)}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [gpsTarget, expanded]);
  const [tab, setTab] = useState<
    "profiles" | "workflow" | "differential" | "ihc"
  >("profiles");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entities.filter((e) => {
      const g = groups.find((x) => x.terms.includes(e.name))?.name ?? "";
      return (
        (group === "All" || group === g) &&
        (!q ||
          [
            e.name,
            e.definition,
            e.clinical,
            e.criteria,
            e.histology,
            e.molecular,
            e.differential,
          ]
            .join(" ")
            .toLowerCase()
            .includes(q))
      );
    });
  }, [query, group]);
  const toggle = (name: string) =>
    setExpanded((old) =>
      old.includes(name) ? old.filter((x) => x !== name) : [...old, name],
    );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-7 border-b border-slate-200 pb-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-teal-700">
            PathologyGPS · Soft Tissue
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fibroblastic and Myofibroblastic Tumors
          </h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600">
            A morphology-first diagnostic reference emphasizing defining
            criteria, biologic behavior, immunophenotypic interpretation,
            molecular confirmation, and practical differential diagnosis.
          </p>
        </header>

        <div className="mb-5 flex flex-wrap gap-2">
          {(
            [
              ["profiles", "Entity profiles"],
              ["workflow", "Diagnostic GPS"],
              ["differential", "Differential diagnosis"],
              ["ihc", "IHC / molecular guide"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${tab === id ? "bg-teal-700 text-white" : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === "profiles" && (
          <>
            <div className="mb-4 grid gap-3 md:grid-cols-[1fr_280px]">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search entity, morphology, diagnostic criteria, molecular alteration…"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm"
              >
                <option>All</option>
                {groups.map((g) => (
                  <option key={g.name}>{g.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing {filtered.length} of {entities.length} entities
              </span>
              <button
                onClick={() => setExpanded(filtered.map((x) => x.name))}
                className="font-semibold text-teal-700"
              >
                Expand visible
              </button>
            </div>
            <div className="space-y-3">
              {filtered.map((e) => (
                <article
                  key={e.name}
                  id={`gps-${slugify(e.name)}`}
                  className="scroll-mt-24 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(e.name)}
                    className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left hover:bg-slate-50"
                  >
                    <div>
                      <h2 className="font-semibold text-slate-900">
                        <HighlightText text={e.name} query={gpsQuery} />
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        <HighlightText text={e.definition} query={gpsQuery} />
                      </p>
                    </div>
                    <span className="mt-1 text-lg text-teal-700">
                      {expanded.includes(e.name) ? "−" : "+"}
                    </span>
                  </button>
                  {expanded.includes(e.name) && (
                    <div className="grid gap-3 border-t border-slate-100 bg-slate-50/70 p-4 lg:grid-cols-2">
                      <Panel title="Clinical profile">
                        <TextBlock value={e.clinical} query={gpsQuery} />
                      </Panel>
                      <Panel title="Essential diagnostic criteria">
                        <TextBlock value={e.criteria} query={gpsQuery} />
                      </Panel>
                      <Panel title="Histopathology and immunophenotype">
                        <TextBlock value={e.histology} query={gpsQuery} />
                      </Panel>
                      <Panel title="Differential diagnosis">
                        <TextBlock value={e.differential} query={gpsQuery} />
                      </Panel>
                      <Panel title="Molecular pathology">
                        <TextBlock value={e.molecular} query={gpsQuery} />
                      </Panel>
                      <Panel title="Practical diagnostic emphasis">
                        <p>
                          Interpret the defining pattern in conjunction with
                          anatomic site, age, growth pattern, and biologic
                          behavior. Do not use a single immunostain or molecular
                          result in isolation. Review the complete lesion and
                          margins when infiltration, heterogeneity, or a
                          higher-grade component is a concern.
                        </p>
                      </Panel>
                    </div>
                  )}
                </article>
              ))}
              {filtered.length === 0 && (
                <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
                  No entities match this search.
                </div>
              )}
            </div>
          </>
        )}

        {tab === "workflow" && (
          <div className="space-y-3">
            {workflow.map(([title, body], i) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-800">
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-semibold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "differential" && (
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-100 text-left text-xs uppercase tracking-wide text-slate-600">
                <tr>
                  <th className="px-4 py-3">Index diagnosis</th>
                  <th className="px-4 py-3">Important mimic</th>
                  <th className="px-4 py-3">Discriminating features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {differential.map((r) => (
                  <tr key={r[0]} className="align-top">
                    <td className="px-4 py-3 font-semibold text-slate-800">
                      {r[0]}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{r[1]}</td>
                    <td className="px-4 py-3 leading-6 text-slate-600">
                      {r[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === "ihc" && (
          <div className="space-y-3">
            <Panel title="How to use the panel">
              Start with the morphologic differential, then select a small panel
              that can separate the leading possibilities. The same marker may
              be shared by multiple entities; staining pattern, intensity,
              distribution, and molecular context matter.
            </Panel>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-100 text-left text-xs uppercase tracking-wide text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Marker / test</th>
                    <th className="px-4 py-3">Diagnostic use and limitation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {markerGuide.map((r) => (
                    <tr key={r[0]} className="align-top">
                      <td className="whitespace-nowrap px-4 py-3 font-semibold">
                        {r[0]}
                      </td>
                      <td className="px-4 py-3 leading-6 text-slate-600">
                        {r[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <footer className="mt-8 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500">
          Educational decision support, not a substitute for integrated
          diagnosis. Content is structured from the supplied WHO excerpt; where
          the excerpt provides no detailed criteria, the page does not invent
          them. Molecular testing is supportive and should be selected according
          to the specific differential diagnosis.
        </footer>
      </div>
    </main>
  );
}
