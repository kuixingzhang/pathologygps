"use client";
import { useMemo, useState, type ReactNode } from "react";

type Item = {
  name: string;
  family: string;
  subgroup: string;
  behavior: string;
  icdo: string | null;
  clinical: string[];
  definition: string[];
  histology: string[];
  ihc: string[];
  molecular: string[];
  differential: string[];
  criteria: string[];
};

const items: Item[] = [
  {
    name: "Nevus Lipomatosus Superficialis",
    family: "Adipocytic tumors",
    subgroup: "Adipocytic tumors",
    behavior: "Benign / hamartomatous",
    clinical: [
      "Classic NLS is more common in the gluteal region and neighbouring skin 13858911 ; 4648802 ; 6629609 ; 7430482 , and it manifests with multiple lesions. There may be a linear or zosteriform distribution that does not cross the midline 1235780 ; 1219048 . Solitary NLS has a wider anatomical distribution, including in the head and neck 9248887 ; 16268886 ; 3273051 ; 5647029 , upper extremities 1235780 ; 22607282 ; 34494674 ; 31452824 , distal lower extremities 13858911 ; 1235780 ; 18474480 , and external genitalia 12974709 .",
      "NLS manifests as slow-growing, skin-colored to yellow, dome-shaped plaques formed by confluent papules and nodules. The overlying skin is wrinkled or cerebriform, sometimes with comedones 1235780 ; 1219048 . The plaques vary in size from 3 mm to 200 mm 13858911 ; 1219048 . There are usually no associated clinical abnormalities 13858911 . Rarely, NLS can be associated with generalized folded skin (Michelin tyre baby syndrome) 464627 ; 25424205 .",
      "NLS is rare. In the classic form, lesions arise at birth or develop in the first two decades of life 1235780 . Solitary NLS has been reported in a wider age group (birth to 88 years) 23113758 ; 12974709 . There is no sex predilection 17223884 .",
    ],
    definition: [
      "nevus lipomatosus superficialis (NLS) is a rare cutaneous hamartoma characterized by dermal ectopic adipose tissue.",
    ],
    histology: [
      "NLS is composed of aggregates of mature adipocytes at the level of the papillary and upper reticular dermis, typically around blood vessels 13858911 ; 1219048 . Accompanying connective tissue changes in the dermis include increased dermal capillaries inversely proportional to the fat content, irregularly distributed and sometimes thickened collagen, reduction of elastic fibres, and increased numbers of fibroblasts 13858911 ; 11277956 . The epidermis may show irregular acanthosis, follicular plugging 13858911 ; 4648802 ; 1219048 , and (rarely) various abnormalities of folliculosebaceous units 12031036 ; 14721781 ; 16029355 ; 33223741 ; 15649197 ; 17224390 .",
    ],
    ihc: [],
    molecular: [
      "The pathogenesis is unknown. It has been suggested that lesional adipocytes arise from precursor cells lying close to the blood vessels, analogous to the sequence of events in fetal adipogenesis 7430482 .",
    ],
    differential: [
      "NLS must be differentiated from lipoma and soft tissue fibroma with lipomatous stroma. Lipoma is typically a well-circumscribed subcutaneous nodular lesion composed mostly of mature adipocytes. Although thin connective tissue septa may separate lobules of adipocytes in lipomas, there is no dermis between the adipocytes like in NLS. Soft tissue fibroma contains groups of mature adipocytes in the stroma, but the lesion has a pedunculated silhouette. Soft tissue fibromas with fatty metaplasia are considered by some to be a solitary form of NLS.",
    ],
    criteria: [
      "Essential: aggregates of mature adipocytes at the level of the papillary and upper reticular dermis; dermal connective tissue changes.",
    ],
    icdo: null,
  },
  {
    name: "Fibroma of tendon sheath",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The most common sites are the tendons of the fingers, hands, and wrists. Less common sites include the forearm, foot, and knee 27125357 ; 91424 .",
      "Most tumors present as an asymptomatic to mildly painful, small (< 20 mm), slow-growing, and solitary mass, although multiple nodules have also been reported 23212985 ; 91424 ; 22028571 .",
      "Fibroma of tendon sheath is rare, with a predilection to occur in middle-aged men 23212985 ; 27125357 ; 91424 .",
    ],
    definition: [
      "Fibroma of tendon sheath is a rare benign tumor, presumably of (myo)fibroblastic origin, that arises in the tenosynovial soft tissue, usually attached to a tendon, and occurs predominantly in the upper extremities.",
    ],
    histology: [
      "Fibroma of tendon sheath is composed of small to medium-sized bland fibroblastic spindle and stellate cells arranged in fascicles or a storiform pattern, set within a dense fibrocollagenous hyalinized matrix with slit-like spaces and dilated vascular channels. Some myxoid change, extravasated red blood cells, mononuclear inflammatory cells, and (rarely) giant cells can be seen 26729987 . Cellular areas may also be present 91424 . tumors with unusual histological findings such as a palisading growth pattern, epithelioid cells, and osteoclast-like multinucleated giant cells may have PKM or ASPN as a gene fusion partner 32661296 .",
    ],
    ihc: [],
    molecular: [
      "USP6 rearrangement may support diagnosis in challenging cases.",
      "These tumors have been found to have gene fusions involving USP6 and a variety of partners, including PKM, RCC1, ASPN, COL1A1, COL3A1, MYH9, MIR22HG, CTNNB1, SPARC, CAP1, EMP1, CYTOR (LINC00152), NR1D1, RAB1A, and TNC 34088995 ; 34520696 . They may be a tenosynovial form of nodular fasciitis 32661296 .",
    ],
    differential: [
      "The differential diagnosis includes nodular fasciitis, myofibroma, and benign fibrous histiocytoma.",
    ],
    criteria: [
      "Essential: a well-circumscribed lobulated nodule on tendon; usually hypocellular, with spindle cells in a collagenous background and slit-like vascular spaces.",
      "Desirable: USP6 rearrangement (in selected or challenging cases).",
    ],
    icdo: "0",
  },
  {
    name: "Calcifying aponeurotic fibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "CAF most commonly involves aponeurotic soft tissue of the palms and feet. Other sites include the thigh, arm, elbow, and knee 9865839 .",
      "CAF typically presents as a solitary painless mass. Multiple lesions are exceptional 9865839 .",
      "CAF is rare. It shows a predilection for male children, although adults can also (more rarely) be affected 9865839 .",
    ],
    definition: [
      "Calcifying aponeurotic fibroma (CAF) is a benign, locally infiltrative fibroblastic tumor with chondro-osseous foci, predominantly occurring in the distal extremities of children.",
    ],
    histology: [
      "CAF is infiltrative and composed of bland spindled cells arranged in parallel fascicles with fibrous stroma. Chondroid foci can be seen, with or without calcification, surrounded by epithelioid cells 9865839 ; 13032926 . Chondroid cells, multinucleated giant cells, and calcific debris may be seen 11335964 .",
    ],
    ihc: [
      "There is variable expression of MSA, SMA, CD99, S100, and CD68. Rare cases also label for CD34, CD57, PR, and EMA. β-catenin is negative 18939887 .",
    ],
    molecular: [
      "Detection of FN1::EGF fusion may be helpful in challenging cases.",
      "CAFs have a recurrent translocation involving the promoter region of FN1 (exon 23, 27, or 42) on 2q35 and EGF (exon 17 or 19) on 4q25, resulting in the aberrant overexpression of EGF, which can be detected immunohistochemically 26691015 . This fusion can also be seen in a subset of lipofibromatosis cases, which may represent CAF lacking calcifications 30310176 .",
    ],
    differential: [
      "The differential diagnosis includes infantile digital fibromatosis (inclusion body fibromatosis), fibromatosis, and lipofibromatosis.",
    ],
    criteria: [
      "Essential: an infiltrative bland spindle cell proliferation in parallel fascicles and fibrous background (fibromatosis-like); epithelioid/chondroid cells with or without calcification.",
      "Desirable: FN1::EGF fusion in challenging cases.",
    ],
    icdo: "0",
  },
  {
    name: "Sclerotic fibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Sclerotic fibroma is most common in the head and neck region and in the arms 2029087 .",
      "tumors are solitary or multiple, typically slow-growing, longstanding, painless, white to skin-colored papules or nodules 2029087 ; 2464630 .",
      "Sclerotic fibroma has a predilection for middle-aged adults. Cases associated with Cowden syndrome occur predominantly in men 2029087 , while sporadic cases occur predominantly in women 2464630 .",
    ],
    definition: [
      "Sclerotic fibroma is a benign cutaneous fibrous tumor with a prominent storiform pattern and clefting. The tumors can be sporadic or associated with Cowden syndrome.",
    ],
    histology: [
      "Sclerotic fibromas are polypoid, well-circumscribed, hypocellular lesions with abundant collagen with plywood-like clefting, admixed with banal small spindle cells arranged in a storiform pattern. Myxoid change can be seen 2029087 ; 2464630 . The tumors express CD34 10698210 .",
    ],
    ihc: [],
    molecular: [
      "Loss of PTEN by immunohistochemistry may suggest Cowden syndrome.",
      "tumors that arise in association with Cowden syndrome have loss of PTEN (10q23.3), resulting in loss of its expression.",
    ],
    differential: [
      "Dermatofibroma is the main differential diagnosis. Sclerosing dermatofibrosarcoma protuberans may also mimic a sclerotic fibroma, especially on partial biopsies 28134725 .",
    ],
    criteria: [
      "Essential: hypocellular banal spindle cells arranged in a storiform pattern; abundant collagen with plywood-like clefting.",
      "Desirable: for Cowden syndrome: loss of PTEN expression by immunohistochemistry.",
    ],
    icdo: "0",
  },
  {
    name: "Nuchal-type fibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The most common site is the posterior neck 9921988 , but other sites can be involved. Nuchal-type fibroma most often involves the subcutaneous soft tissue, sometimes with dermal and skeletal muscle involvement.",
      "Patients typically present with a long history of a solitary, superficial to deep, painless swelling; rarely, lesions can be multiple 7872429 ; 21950671 ; 9921988 .",
      "Nuchal-type fibroma has a male predilection and a peak incidence between the third and fifth decades of life.",
    ],
    definition: [
      "Nuchal-type fibroma is a benign fibroblastic tumor characterized by abundant thick collagen bundles, most commonly arising in the posterior neck.",
    ],
    histology: [
      "Nuchal-type fibromas are poorly circumscribed, hypocellular, and characterized by thick collagen fibres and small fibroblasts. Entrapped islands of fat, skeletal muscle, and nerves with traumatic neuroma–like changes can be seen. This feature is usually absent from Gardner fibroma, which is often otherwise indistinguishable from nuchal-type fibroma. Elastic fibres and small blood vessels are present between the collagen fibres.",
    ],
    ihc: [
      "Immunohistochemistry is not specific; the tumors are negative for desmin, actin, S100, and EMA 7872429 ; 9921988 . There may be nuclear expression of β-catenin.",
    ],
    molecular: [
      "Some cases may have mutations in APC or MUTYH; however, mutation analyses are usually unnecessary for the diagnosis.",
      "A few tested cases were found to have APC mutations. One case had a mutation in MUTYH, which encodes a base excision repair protein and has also been implicated in familial adenomatous polyposis 21752055 .",
    ],
    differential: [
      "The differential diagnosis includes desmoid-type fibromatosis and Gardner fibroma (which may be related).",
    ],
    criteria: [
      "Essential: poorly circumscribed hypocellular tumors with small fibroblasts and thick collagen fibres; entrapped fat and nerves.",
    ],
    icdo: "0",
  },
  {
    name: "Pleomorphic fibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Pleomorphic fibroma affects the extremities, trunk, and head and neck 23506010 ; 2916726 ; 33534206 .",
      "The tumors are painless, single, slow-growing, fleshy polyps or papules 23506010 ; 2916726 ; 33534206 .",
      "This fibroma occurs in middle-aged adults 23506010 ; 2916726 ; 33534206 .",
    ],
    definition: [
      "Pleomorphic fibroma is a benign, often polypoid, fibroblastic dermal neoplasm characterized by bizarre pleomorphic cells.",
    ],
    histology: [
      "These tumors are hypocellular and composed of dense, haphazardly arranged collagen bundles admixed with spindle cells and large pleomorphic cells that have hyperchromatic multilobulated nuclei with smudgy chromatin 23506010 ; 2916726 .",
    ],
    ihc: [
      "They are positive for CD34 and show loss of RB1 expression 28543636 ; 33534206 . There is aberrant p53 expression in Li–Fraumeni syndrome–associated cases 32187703 .",
    ],
    molecular: [
      "Not clinically relevant",
      "These tumors have RB1 deletion and are negative for MDM2 amplification 28543636 ; 2916726 . Cases associated with Li–Fraumeni syndrome harbour TP53 germline mutations 32187703 .",
    ],
    differential: [
      "The differential diagnosis includes superficial atypical lipomatous tumor, pleomorphic lipoma, and atypical fibroxanthoma.",
    ],
    criteria: [
      "Essential: dermal dome-shaped to polypoid tumors; dense, haphazardly arranged collagen bundles; hypocellular spindle cells and large pleomorphic cells with hyperchromatic, smudgy chromatin.",
      "Desirable: loss of RB1 expression by immunohistochemistry.",
    ],
    icdo: "0",
  },
  {
    name: "Elastofibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Elastofibroma is most often subscapular. It sometimes involves the chest wall but can occur anywhere.",
      "These tumors are slow-growing, typically solitary, and usually asymptomatic, but they can cause pain, limitation of movement, or scapular snapping/impingement.",
      "Elastofibroma most commonly affects elderly adults, with a female predominance.",
    ],
    definition: [
      "Elastofibroma is a benign soft tissue tumor characterized by abnormal elastic fibres, bland fibroblasts, and myxoid stroma.",
    ],
    histology: [
      "Elastofibromas are large and have poorly defined borders. They are often hypocellular with degenerative collagen fibres that are fragmented, thickened, and globular; these can be highlighted with Verhoeff elastic staining. Variable proportions of bland uniform small spindle cells, aggregates of mature adipocytes, and myxoid stroma are present 7116305 .",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "Elastofibromas have a variety of chromosomal abnormalities. Copy gains (including gains of Xq) 12165800 , alterations to chromosome 1, and t(8;12)(q22;q24.3) 11343783  and/or t(2;19) and (X;1) rearrangements 11458949  have been found in some of the cases.",
    ],
    differential: [],
    criteria: [
      "Essential: fragmented, thickened, and globular collagenous fibres; bland spindle cells; admixed mature adipocytes and myxoid stroma.",
    ],
    icdo: "0",
  },
  {
    name: "Desmoplastic fibroblastoma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Desmoplastic fibroblastoma has a predilection for the upper extremities, although it may occur anywhere 7661281 ; 9670823 ; 8832562 .",
      "This tumor is a painless, solitary, slow-growing mass and predominantly subcutaneous, although it may involve skeletal muscle 9670823 .",
      "Desmoplastic fibroblastomas are rare. They predominantly affect adults (median age: 50–60 years) and show a male predominance 7661281 ; 9593348 ; 9670823 ; 8832562 .",
    ],
    definition: [
      "Desmoplastic fibroblastoma is a benign soft tissue tumor characterized by stellate fibroblasts in a fibromyxoid background.",
    ],
    histology: [
      "Desmoplastic fibroblastomas are hypocellular tumors with bland, spindled to stellate fibroblasts and a fibromyxoid to delicate collagenous background 7661281 ; 9670823 ; 8832562 . Immunohistochemistry is nonspecific; desmin, keratin, and CD34 are negative 8832562 . The differential diagnosis includes desmoid-type fibromatosis.",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "Desmoplastic fibroblastomas have been reported to have translocations involving 11q12, including t(2;11)(q31;q12) and t(11;17)(q12;p11.2) 15036892 ; 19596257 . The FOSL1 gene is located nearby (at 11q13.1), and the FOSL1 protein is overexpressed in these tumors 27442992 ; 22411068 .",
    ],
    differential: [],
    criteria: [
      "Essential: a hypocellular tumor with a fibromyxoid collagenous background; bland spindled to stellate fibroblasts.",
    ],
    icdo: "0",
  },
  {
    name: "Fibrous papule",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The most common sites include the nose and central face 30028760 .",
      "Fibrous papule typically manifests as a dome-shaped, sessile papule that is solitary and sporadic in the vast majority of cases. Multiple (syndromic) fibrous papules may be associated with tuberous sclerosis, and less commonly with Birt–Hogg–Dubé syndrome or multiple endocrine neoplasia type 1 30246432 ; 16021156 ; 9236523 . There is a tendency for multiple fibrous papules to occur in early childhood in tuberous sclerosis, whereas those associated with Birt–Hogg–Dubé syndrome or multiple endocrine neoplasia type 1 are usually seen in adults 30246432 .",
      "Fibrous papules are most commonly seen in middle-aged adults 30028760 .",
    ],
    definition: [
      "Fibrous papule is a benign lesion, presumably of fibroblastic origin, that most commonly occurs on the nose or central face.",
    ],
    histology: [
      "Classic fibrous papule has a dome-shaped configuration with dilated blood vessels within the dermis, surrounded by fibrotic or collagenized stroma with spindle-shaped or stellate fibroblasts 15953376 . The overlying epidermis may show melanocytic hyperplasia 32496596 . Histological patterns of fibrous papule may be hypercellular, pigmented, pleomorphic, clear cell, granular cell, epithelioid, or inflammatory 15953376 .",
    ],
    ihc: [],
    molecular: [
      "Multiple fibrous papules in tuberous sclerosis are thought to occur due to constitutional activation of the mTOR pathway due to germline mutations in TSC1 or TSC2 (tuberous sclerosis), and similar mechanisms have been suggested for the pathogenesis of sporadic fibrous papules 24558502 .",
    ],
    differential: [
      "The differential diagnosis includes fibroma, melanocytic nevus (pigmented or epithelioid pattern), atypical fibroxanthoma (hypercellular or pleomorphic pattern), balloon cell nevus or xanthoma (clear cell pattern), and granular cell tumor (granular pattern).",
    ],
    criteria: [
      "Essential: small papular lesions, usually occurring on the centrofacial skin; dilated dermal blood vessels within a collagenous stroma with prominent stellate or spindle-shaped fibroblasts.",
    ],
    icdo: "0",
  },
  {
    name: "Fibroblastic connective tissue nevus",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Most lesions arise on the trunk, head and neck, and limbs 22892597 ; 22014540 ; 28632950 ; 26268513 ; 30024070 .",
      "FCTN typically manifests as a solitary, slowly growing, painless plaque-like or nodular skin lesion 22892597 ; 28632950 . Some agminate cases have been described 31469926 ; 27296971 , as well as atrophic plaques 28543313  and exophytic tumors 30024070 .",
      "FCTN has a slight female predominance and usually affects young patients (median age: 10 years). Congenital cases have been described 30187166 ; 28067672 , especially on the trunk, as large infiltrated plaques.",
    ],
    definition: [
      "Fibroblastic connective tissue nevus (FCTN) is a benign dermal-based mesenchymal lesion of fibroblastic/myofibroblastic lineage composed of short intersecting fascicles of bland spindled cells.",
    ],
    histology: [
      "FCTN is a poorly circumscribed lesion localized in the reticular dermis and commonly extending into the superficial subcutis. It is composed of bland spindle-shaped and ovoid cells arranged in a short intersecting fascicular pattern and entrapping appendages that are preserved. Cellularity is variable. Mitotic activity is absent. A storiform pattern may be observed. Epidermal papillomatosis and ectopic dermal adipose tissue are commonly observed 22892597 . Elastic fibres may be decreased in number.",
    ],
    ihc: ["Expression of CD34 and SMA is described 28632950 ."],
    molecular: [
      "Not clinically relevant",
      "KHDRBS1::NTRK3 rearrangement has been reported in 1 case 30187166 .",
    ],
    differential: [
      "FCTN overlaps clinically and morphologically with plaque-like CD34-positive dermal fibroma 34449590 ; 30811625  and dermatomyofibroma 26268513 .",
    ],
    criteria: [
      "Essential: short intersecting fascicles of bland spindled cells in the reticular dermis.",
      "Desirable: often associated with adipocytes in the dermis and epidermal papillomatosis; absence of COL1A1::PDGFB fusion (to rule out plaque-stage dermatofibrosarcoma protuberans).",
    ],
    icdo: "0",
  },
  {
    name: "Fibro-osseous tumor of digits",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "FOT affects the subcutaneous tissues of the proximal phalanx of the fingers and, less frequently, the toes 3463398 ; 29787930 ; 19678826 ; 30946936 .",
      "FOT of the digits is a rapidly growing and often painful lesion. Random calcifications are often present on imaging studies. Over time, the lesion becomes hard and well demarcated 12894350 .",
      "The lesions have a broad age distribution, from infancy to late adulthood, but most patients are young adults 3463398 ; 29787930 ; 19678826 ; 32635781 .",
    ],
    definition: [
      "Fibro-osseous tumor (FOT) of digits, arising in the soft tissues of the digits, is a localized, self-limiting, benign neoplasm composed of proliferating spindle cells and osteoblasts.",
    ],
    histology: [
      "The lesion has areas resembling nodular fasciitis with bone in various stages of formation. It is hypercellular and composed of proliferating spindle cells that are oriented randomly or in short intersecting fascicles. The spindle cells have eosinophilic cytoplasm and plump fusiform nuclei with fine chromatin and conspicuous nucleoli. Normal mitoses may be numerous. The stroma is richly vascular and myxoid, and it contains fibrin, extravasated erythrocytes, scattered lymphocytes, and osteoclast-like giant cells. The spindle cells merge with poorly defined trabeculae and sheets of unmineralized woven bone that are rimmed by prominent osteoblasts with amphophilic cytoplasm and harbour large osteocytes 12894350 ; 18384209 .",
    ],
    ihc: [],
    molecular: [
      "Molecular studies for USP6 rearrangement may be useful in the appropriate clinicopathological context.",
      "USP6 fusion genes are present in FOT 29787930 ; 33000481 . USP6 fusion genes are also encountered in nodular fasciitis, a tumor with overlapping morphology.",
    ],
    differential: [
      "FOT and myositis ossificans are histologically similar, except that in the former there is usually no zonation pattern and the bone is located randomly throughout the tumor.",
    ],
    criteria: [
      "Essential: densely cellular fascicles of spindle cells; numerous typical mitoses; abundant admixed woven bone formation that is random or most mature at the periphery.",
      "Desirable: detection of USP6 rearrangement may help in selected cases.",
    ],
    icdo: "0",
  },
  {
    name: "Dermatofibroma (fibrous histiocytoma)",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The classic dermatofibroma is seen most frequently on the legs, followed by the arms and trunk. Rare sites of involvement include the hands, feet, and head and neck 2171878 ; 19054841 ; 33893133 .",
      "Dermatofibroma presents as an isolated, asymptomatic, dome-shaped papule or nodule that usually measures from a few millimetres to 10–20 mm; very rarely, it reaches 100 mm (giant dermatofibroma). It is hyperpigmented, but in early growing lesions and in individuals with lightly pigmented skin it may appear erythematous. Classic dermatofibroma usually exhibits a dusky brown color. The aneurysmal subtype may show a red cut surface, whereas tumors with abundant lipid may be tan to yellow. It is firm and, when squeezed, exhibits a central dimple (“dimple sign”). Dermatofibroma can be eroded or crusted. Occasionally, numerous dermatofibromas in a widespread distribution or in an agminated pattern can be seen. The latter has no clinical significance. Eruptive dermatofibromas can be associated with autoimmune disorders (e.g. lupus erythematosus) 16334865  or in the setting of immunosuppression (e.g. HIV, immunosuppressive drugs) 31625625 .",
      "Dermatofibroma is the most common mesenchymal neoplasm in the skin. It arises over a wide age range but is most common in the third and fourth decades of life. The classic subtype is seen most frequently in the lower extremities of younger female patients. The other subtypes have a more equal sex distribution.",
    ],
    definition: [
      "Dermatofibroma (fibrous histiocytoma) is a common benign papular or nodular skin lesion composed of a combination of (myo)fibroblasts with surrounding reactive dendrocytes and macrophages in between collagen bundles.",
    ],
    histology: [
      "The tumor grows in the reticular dermis, but superficial infiltration of the subcutaneous tissue, along with perivascular lymphocytic inflammation, is frequent. Classic dermatofibroma is polymorphous, composed of spindled to rounded neoplastic cells with surrounding reactive dermal dendrocytes and macrophages 20520936 . There is characteristic, albeit nonspecific, entrapment of collagen bundles at the periphery, forming collagen balls. A storiform growth pattern may be seen. The epidermis typically exhibits hyperplasia with elongated hyperpigmented rete ridges. Follicular and/or sebaceous gland induction and junctional melanocytic hyperplasia may be present 32767564 ; 19955877 ; 25727075 . Early lesions are more cellular, whereas older lesions appear more fibrotic with less macrophages. Numerous histological patterns have been described in the literature (fibrocollagenous, lipidized, clear cell, granular cell, halo, osteoclastic, myofibroblastic, keloidal, palisading, and atrophic, among others) 24937822 ; 10770432 ; 22576077 ; 10231403 ; 9354896 , which have no clinical significance, unlike the subtypes described below; however, one or more patterns or subtypes can overlap in the same tumor. In tumors that are significantly lipidized, the histiocytoid and giant cells contain abundant vacuolated cytoplasm 10770432 .",
      "Cellular dermatofibroma exhibits a fascicular growth pattern, composed of relatively monotonous spindle cells with fine chromatin and pale eosinophilic cytoplasm 30741794 ; 31074502 . Entrapment of superficial subcutaneous tissue is common, whereas approximately 10% of cases exhibit small foci of necrosis, which is not indicative of malignancy 8017561 .",
      "Aneurysmal dermatofibroma contains blood-filled spaces and hemosiderin occupying much of the lesion and mimicking a vascular tumor. It is polymorphous in composition, like the classic subtype, containing neoplastic spindle cells, Touton-type giant cells, lymphocytes, and macrophages 30868503 ; 7607620 . Overlying epidermal hyperplasia and peripheral entrapment of collagen bundles is characteristic.",
      "Atypical dermatofibroma contains scattered atypical and pleomorphic cells. Atypical mitoses and necrosis can be seen 11756767 . The background cells can be uniform or polymorphous, like in cellular or classic dermatofibroma, respectively.",
      "Deep fibrous histiocytoma arises entirely within the subcutaneous or deep soft tissue. It is well circumscribed, in contrast to its superficial counterparts, with a uniform cellularity and storiform growth pattern 2167613 ; 20804915 ; 18300816 .",
    ],
    ihc: [
      "Immunohistochemistry is not particularly helpful in reaching the correct diagnosis. CD68 highlights interspersed histiocytes. Multifocal staining for SMA (more pronounced in the cellular subtype) supports myofibroblastic differentiation. Desmin and CD34 can be focally positive (in 30% and 5% of cases, respectively) 22775584 . Factor XIIIa is not a specific stain, highlighting interspersed reactive dendrocytes.",
    ],
    molecular: [
      "Not clinically relevant",
      "Recurrent gene fusions involving PKC isoforms (PRKCA, PRKCB, and PRKCD) with various genes encoding membrane-associated proteins (e.g. LAMTOR1, PDPN, CD63, and KIRREL family genes) have been identified in a minority of cases 26121314 ; 24721208 ; 30094855 ; 26432191 . As a result, the catalytic domain of PKC in the chimeric protein localizes to the cell membrane 24721208 . These data provide proof of the neoplastic, clonal nature of dermatofibroma.",
    ],
    differential: [
      "Dermatofibrosarcoma protuberans infiltrates the subcutaneous tissue in a honeycomb fashion, is diffusely positive for CD34, and harbours PDGFB/PDGFD rearrangements. Angiomatoid fibrous histiocytoma is an unrelated tumor of intermediate malignancy and should not be confused with the aneurysmal subtype. Superficial pseudomyogenic hemangioendothelioma (PMHE), spindle cell melanoma, squamous cell carcinoma, and superficial leiomyosarcoma are all in the differential with cellular dermatofibroma. They can be distinguished easily with the help of immunohistochemical studies. In approximately half of PMHE cases, interspersed neutrophils can serve as a helpful clue. PMHE expresses keratin and vascular markers (most consistently ERG) and harbours FOSB rearrangements with various partners (most commonly WWTR1 and ACTB). FOSB immunohistochemical stain can serve as a surrogate marker. Melanoma is positive for SOX10, squamous cell carcinoma for keratin markers, and leiomyosarcoma for desmin and caldesmon. Atypical dermatofibroma can be potentially confused with atypical fibroxanthoma / pleomorphic dermal sarcoma. Background findings of classic dermatofibroma would be critical to secure the correct diagnosis.",
      "Epithelioid fibrous histiocytoma (see section Epithelioid fibrous histiocytoma) is now considered a separate entity with characteristic ALK protein overexpression due to ALK rearrangements or, very rarely, due to alternative transcription activation mechanisms 35289445 . Nevertheless, fibrous histiocytomas with epithelioid features and ALK negativity have occasionally been found to harbour PRKCB rearrangements 31653978 .",
    ],
    criteria: [
      "Essential: ovoid to spindled cells; peripheral entrapment of dermal collagen bundles.",
      "Desirable: epidermal hyperplasia; follicular/sebaceous induction.",
    ],
    icdo: "0",
  },
  {
    name: "Superficial fibromatosis",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Intermediate, locally aggressive",
    clinical: [
      "Palmar fibromatosis affects the volar surface of the hands and the flexor aspects of the fingers. In adults, plantar fibromatosis occurs in non–weight-bearing surfaces of the foot, such as the medial plantar arch, from the navicular bone to the base of the first metatarsal 6507097 . In the pediatric population, plantar fibromatosis most commonly involves the anteromedial heel pad 11123783 . About 50% of cases of palmar fibromatosis and as many as 25% of cases of plantar fibromatosis are bilateral 6507097 ; 29310463 . Penile fibromatosis involves the tunica albuginea, on the dorsal aspect of the penis 32681945 .",
      "Palmar fibromatosis develops gradually and manifests as small, painless coalescing nodules forming cords or bands in the subcutaneous tissue and underlying fascial plane. Plantar fibromatosis is often asymptomatic and does not cause contractures, but pain may be present after periods of standing or walking. Penile fibromatosis manifests as firm nodules or plaques, causes abnormal curvature of the penis, and may elicit pain during erection and intercourse 6507097 ; 32681945 .",
      "Palmar fibromatosis shows a prevalence of 1–2% in the population, affecting mainly adults, with a male predominance (M:F ratio: 3:1). Prevalence increases with age and is higher in populations of northern European descent, reaching 30% in age groups > 60 years 10760640 ; 19145463 . Plantar fibromatosis is less common and affects younger patients, including the pediatric population, where it shows a female predominance 8989694 ; 16006806 . Penile fibromatosis affects predominantly White populations of middle-aged adults, with a mean age of 55 years 32681945 .",
    ],
    definition: [
      "Superficial fibromatoses (palmar, plantar, and penile) are nodular, locally recurrent fibroblastic/myofibroblastic proliferations.",
    ],
    histology: [
      "Superficial fibromatoses are characterized by three phases of growth (proliferative, involutional, and late stage). The proliferative stage consists of a cellular, bland proliferation of long fascicles of fibroblasts/myofibroblasts blending into tendons and aponeuroses. Neoplastic cells are elongated cells with tapering vesicular nuclei, small inconspicuous nucleoli, and pale eosinophilic cytoplasm. Mitotic figures may be increased, especially in children. In the background, a collagenous matrix (which increases in the late stages) is seen. Rarely, multinucleated giant cells and osseous or cartilaginous metaplasia are seen.",
    ],
    ihc: [
      "Neoplastic cells may be positive for SMA and focally for desmin. Rare cases display nuclear expression of β-catenin 11455002 ; 17711447 ; 16006806  despite the absence of CTNNB1 or APC mutations",
    ],
    molecular: [
      "Not clinically relevant",
      "Although the pathogenesis of superficial fibromatosis is driven at least in part by the WNT/β-catenin signalling pathway, this tumor lacks the CTNNB1 and APC mutations characteristic of desmoid fibromatosis 11455002 ; 30774465 ; 29310463 .",
    ],
    differential: [
      "Hyperplastic scars may resemble fibromatosis but tend to be non-infiltrative and lack β-catenin expression. Sclerotic fibromas have “plywood”-type collagen and usually express CD34. Nodular fasciitis has a more myxoid background resembling tissue culture.",
    ],
    criteria: [
      "Essential: a cellular fascicular proliferation of spindle cells embedded in collagenous stroma; involvement of aponeurosis and tendons and (variably) the subcutis and dermis.",
    ],
    icdo: "1",
  },
  {
    name: "Inclusion body fibromatosis",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The classic subtype occurs in the hands or feet and involves the dorsal/dorsolateral aspect of the distal or middle second, third, and fourth digits most frequently, followed by the fifth digit, while typically sparing the first digit 840560 ; 3892466 ; 18830128 . Non-classic tumors are reported to occur on the extremities, tongue, and breast 3740876 ; 8209857 ; 6496846 ; 7377793 ; 2836293 .",
      "Patients with the classic subtype present with an asymptomatic, dome-shaped/polypoid cutaneous nodule, typically no larger than 20 mm 840560 ; 3835952 ; 18830128 . Synchronous and/or metachronous lesions occur, sometimes affecting multiple digits 4344937 ; 840560 ; 3835952 , but simultaneous involvement of both the fingers and the toes is rare 840560 . Patients with the non-classic subtype present with solitary masses/nodules 18830128 .",
      "The classic subtype accounts for 2% of pediatric fibroblastic tumors 1946077 . More than 80% of cases present by 3 years of age, with about 30% found at birth 3892466 ; 840560 . No sex predilection exists. Rare cases occur in adults 11069537 ; 7377793 ; 2836293 ; 8209857 .",
    ],
    definition: [
      "Inclusion body fibromatosis is a benign myofibroblastic tumor characterized by eosinophilic intracytoplasmic inclusions and the potential for local recurrence.",
    ],
    histology: [
      "Spindled cells have lightly eosinophilic cytoplasm and an elongated, cytologically bland nucleus, with low mitotic activity. Cells proliferate in whorls, interlacing short fascicles, or storiform arrays within a collagenous dermis, and they characteristically grow perpendicularly to the epidermis and around adnexa, occasionally infiltrating deeper tissues 4344937 ; 3892466 . A variable number of cells harbour a rounded, pale pink, intracytoplasmic (frequently paranuclear), 1.5–24 μm inclusion 14322942 ; 3892466  highlighted by trichrome (red), phosphotungstic acid–hematoxylin (dark purple), and Movat’s (pink) stains 18830128 .",
    ],
    ihc: [
      "Cells express vimentin, muscle actin(s) in a peripheral “tram-track” pattern, calponin, desmin, and CD99 1310240 ; 18830128 . Inclusions mark with calponin-1 24117680  and occasionally with caldesmon 18830128 .",
    ],
    molecular: ["Unknown"],
    differential: [],
    criteria: [
      "Essential: a dermal-based, cytologically bland, spindled cell proliferation; eosinophilic intracytoplasmic inclusions.",
    ],
    icdo: "0",
  },
  {
    name: "Plexiform fibrohistiocytic tumor",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Intermediate, rarely metastasizing",
    clinical: [
      "There is a marked predilection for the arms, particularly the forearms, followed by the lower limbs, trunk, and head and neck area 17870015 ; 10366148 ; 1723956 ; 2847569 .",
      "The tumors present as slowly enlarging nodules and plaques, typically measuring about 20–30 mm 2847569 .",
      "Children, adolescents, and young adults are most commonly affected, with a reported median age ranging from 14.5 to 20 years (overall age range: 1–77 years). There may be a female predilection 17870015 ; 10366148 ; 1723956 ; 2847569 .",
    ],
    definition: [
      "Plexiform fibrohistiocytic tumor (PFHT) is a plexiform tumor within the dermis and subcutis, showing a biphasic morphology characterized by a nodular growth of histiocytoid cells and fascicles of myofibroblastic spindle cells.",
    ],
    histology: [
      "PFHT is a fibroblastic-fibrohistiocytic, dermal–subcutaneous interface tumor composed of small to medium-sized, cannonball-like nodules of whorling, histiocyte-rich foci with osteoclast-like giant cells and/or fascicular spindled myofibroblastic fascicles in the subcutis. PFHT has a plexiform to poorly circumscribed architecture. Three histological patterns are based on the predominant cell type: myofibroblastic, histiocytoid, and mixed 17870015 . Features of hemorrhage (to which the osteoclast-like giant cells are attracted), myxoid change, chronic inflammation (mostly in the pure myofibroblastic pattern), fat or adnexal trapping with perineural or peri-Pacinian corpuscle growth, stromal hyalinization, rare metaplastic bone, and pseudogranulomatous patterns may be observed. Mitotic activity is low, and cytological atypia, vascular invasion, and atypical mitoses are exceedingly rare 2847569 ; 1723956 ; 17870015 ; 17617005 ; 10366148 .",
    ],
    ihc: [
      "There is expression of SMA in the spindled myofibroblastic foci and CD68 in the histiocytic cannonballs with osteoclast-type giant cells. The tumors are generally negative for CD34, desmin, EMA, keratin, and S100.",
    ],
    molecular: [
      "There are no known consistent, reproducible molecular signatures. Single case reports have documented cytogenetic findings that include 46,X,del(X)(q13)[3]/46,XX[23], 46,XY,t(4;15)(q21;q15), and 46,XY,-6,-8, del(4)(q25q31),del(20)(q11.2) with additional der (8) and (p22) 9973942 ; 2164878 ; 21261704 .",
    ],
    differential: [
      "This tumor can be confused with other dermal or subcutaneous reactive or neoplastic processes, including granulomata, fibromatosis, lipofibromatosis, myofibromatosis, fibrous hamartoma of infancy, nodular fasciitis, giant cell tumor of soft parts, so-called plexiform myofibroblastoma (which may be identical to pure myofibroblastic PFHT) 34449590 ; 32618598 , and cellular neurothekeoma 17325474 ; 19342943 ; 17870015 .",
    ],
    criteria: [
      "Essential: a fibrohistiocytic tumor in dermis and subcutis; plexiform growth pattern; fascicular fibroblastic and/or cannonball-like histiocytic proliferation; osteoclast-like giant cells.",
    ],
    icdo: "1",
  },
  {
    name: "Superficial acral fibromyxoma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The great majority arise in the periungual/subungual region of the fingers and toes, with occasional cases involving the hands, feet, ankles, wrists, lower legs, and thighs 11486169 ; 19236516 ; 18537858 ; 18764846 ; 22367301 ; 27825811 .",
      "Acral fibromyxomas are slowly growing and often painful, and they range in size from 10 to 50 mm (mean: ~20 mm) 11486169 ; 18537858 ; 22367301 . Associated nail deformities and lytic lesions of underlying bone may be seen 22367301 ; 18327578 ; 29423724 .",
      "The age range is wide, but most cases occur in middle-aged adults, with a male predilection 11486169 ; 22367301 .",
    ],
    definition: [
      "Superficial acral fibromyxoma is a benign fibroblastic neoplasm typically restricted to acral sites with a marked predilection for the periungual region of the digits and potential for local recurrence.",
    ],
    histology: [
      "Acral fibromyxomas are lobulated dermal and subcutaneous lesions, sometimes with an epidermal collarette. Most have infiltrative borders and the underlying bone may be involved. Most are relatively hypocellular, composed of bland spindled to stellate cells in a loose growth pattern that can be vaguely fascicular to storiform. tumor cells are embedded in a variably collagenous to myxoid stroma, and a thin-walled vasculature may be present in myxoid areas. Multinucleated cells may be present. Mitotic figures are rare 11486169 ; 18537858 ; 18764846 ; 22367301 ; 28045748 . A subset may have increased cellularity 19236516 . Cartilaginous and osseous metaplasia is rare 29360681 .",
    ],
    ihc: [
      "The tumor cells are positive for CD34, CD99, and nestin and may express EMA and SMA in a minority; they are negative for MUC4 and BCL2 11486169 ; 28045748 ; 22367301 . Loss of RB1 expression is seen in most tumors 27825811 .",
    ],
    molecular: [
      "The tumors show deletion of RB1 27825811 , but this is not required for diagnosis.",
      "RB1 deletions have been reported 27825811 .",
    ],
    differential: [
      "The stromal component of onychomatricoma is identical to that of acral fibromyxoma, but acral fibromyxoma lacks an epithelial component. Myxoid neurofibroma is less cellular and the tumor cells are positive for S100. Myxoid dermatofibrosarcoma protuberans is very rare on the digits and lacks the collagen component, and the tumor cells display a storiform pattern.",
    ],
    criteria: [
      "Essential: acral location, usually periungual; a lobulated dermal and subcutaneous tumor with bland spindled to stellate cells; variably myxoid to collagenous stroma.",
      "Desirable: CD34 positivity; frequent loss of RB1 expression by immunohistochemistry.",
    ],
    icdo: "0",
  },
  {
    name: "Cutaneous myxoma (superficial angiomyxoma)",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Solitary lesions, which are not associated with Carney complex, are usually located on distal areas of the limbs or the head 3389450 ; 7615884 . Multiple cutaneous myxomas in patients with Carney complex are particularly frequent in the external auditory canal and on the eyelids 8116795 .",
      "Cutaneous myxomas manifest as slow-growing nodules with a translucent appearance due to abundant mucin content. In patients with multiple lesions, the possibility of Carney complex should be investigated. The syndrome is inherited as an autosomal dominant trait and consists of the association of endocrine hyperactivity (Cushing syndrome, testicular tumors, and acromegaly); spotty skin pigmentation; epithelioid blue naevi; psammomatous melanotic schwannoma; and multiple cutaneous, cardiac, and mammary myxomas 7640202 ; 3729510 ; 11174387 ; 1571257 ; 18804312 . Multiple cutaneous myxomas in the absence of any other anomalies associated with Carney complex have also been described 9747204 ; 8835175 .",
      "Cutaneous myxoma is an uncommon neoplasm occurring mostly in adults. The sex distribution is equal. Most cases are sporadic, but multiple lesions can arise in the setting of Carney complex.",
    ],
    definition: [
      "Cutaneous myxoma (superficial angiomyxoma) is a benign multilobular lesion composed mostly of myxoid material with an arborizing vascular network and spindled or stellate cells.",
    ],
    histology: [
      "Cutaneous myxoma (superficial angiomyxoma) manifests as a well-circumscribed multilobular lesion with abundant vascular component. Collagenous septa compartmentalize the lesion, and the vascular component is more prominent at the periphery 10435560 . Each lobule is composed of abundant myxoid material, with sparse cellularity. The stromal cells have a fusiform or stellate morphology. Adnexal induction in the epidermis covering the lesion is frequently seen in myxomas of patients with Carney complex 22588545 . A prominence of scattered neutrophils in the stroma is also characteristic of cutaneous myxoma 10435560 .",
    ],
    ihc: [
      "There is positivity for α-SMA. The spindle and stellate cells are negative for CD34, S100, factor XIIIa, CD57, CD68, and desmin 10435560 ; 7615884 . Immunohistochemically, loss of expression of PRKAR1A has been found in sporadic superficial angiomyxomas 34532875 ; 34889853 .",
    ],
    molecular: [
      "In cases associated with Carney complex, there are mutations of the PRKAR1A gene 15371594 .",
      "Unknown",
    ],
    differential: [
      "Focal mucinosis lacks the cellular and vascular components seen in cutaneous myxoma. Cutaneous myxomas may involve the genital area 9421071 ; therefore, the histopathological differential diagnosis must be established with aggressive angiomyxoma. Aggressive angiomyxoma is a larger lesion that extends deeply to subcutaneous structures and displays a vascular component characterized by variably sized vessels, from small thin-walled capillaries to large thick-walled vessels with perivascular hyalinization.",
    ],
    criteria: [
      "Essential: a nodular myxoid tumor with an arborizing vascular network and spindled to stellate cells.",
    ],
    icdo: "0",
  },
  {
    name: "Dermatomyofibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Predilection sites are the upper trunk and upper arm, shoulder, axillary folds, and neck, followed by the abdominal wall and thigh 8468425 ; 1597573 ; 19155724 .",
      "DM manifests as an asymptomatic, erythematous, reddish-brown or hypopigmented, longstanding or slowly growing, slightly indurated, flat, plaque-like lesion, or (less often) a nodule 33059951 ; 19155724 . Linear and annular presentations have also been reported. Rarely, the tumor may be congenital, multicentric, or of considerable size 34152037 ; 18801097 .",
      "DM most frequently occurs in young females 8468425 ; 19155724 . DM in young children is rare 21752049 ; 28318057 .",
    ],
    definition: [
      "Dermatomyofibroma (DM) is a rare benign cutaneous mesenchymal neoplasm of fibroblastic/myofibroblastic differentiation.",
    ],
    histology: [
      "Throughout the dermis, there is a horizontally oriented plaque-like arrangement (except in the deep dermis / subcutis where the arrangement is usually perpendicular to the epidermis) of densely packed slender bundles and long fascicles of cytologically bland fusiform spindle cells showing fibroblastic and myofibroblastic differentiation. The epidermis is generally unaffected. The papillary dermis is typically spared. The adnexal structures are surrounded by the tumor but are usually not disrupted. Elastic fibres are preserved or even slightly increased. DM extension into the superficial subcutis is rare.",
    ],
    ihc: [
      "DM usually expresses vimentin and calponin, while α-SMA and CD34 show variable positivity. Desmin, h-caldesmon, and S100 are negative 33059951 ; 19155724 .",
    ],
    molecular: [
      "The absence of COL1A1::PDGFB rearrangement may help in challenging cases.",
      "DM is a myofibroblastic tumor 1597573 ; 8872155 .",
    ],
    differential: [
      "The main differential diagnosis includes dermatofibroma and plaque-stage dermatofibrosarcoma protuberans 31908825 . Unlike in dermatofibrosarcoma protuberans, there is no COL1A1::PDGFB rearrangement 31090131 .",
    ],
    criteria: [
      "Essential: a benign myofibroblastic proliferation limited to the reticular dermis; groups of spindle cells arranged in fascicles and parallel to the epidermis.",
    ],
    icdo: "0",
  },
  {
    name: "Multinucleate cell angiohistiocytoma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Multinucleate cell angiohistiocytoma shows a predilection for the dorsal hands and fingers, lower extremities, and trunk or back 8615046 . The head and neck are rarely involved.",
      "Multinucleate cell angiohistiocytoma presents as solitary or multiple smooth erythematous papules and nodules.",
      "This relatively uncommon lesion arises in middle age. Some studies have demonstrated a female predisposition 25140659 , whereas others have shown equal incidence between sexes 30927287 .",
    ],
    definition: [
      "Multinucleate cell angiohistiocytoma is a benign acquired lesion of fibrohistiocytic and vascular lineage.",
    ],
    histology: [
      "Multinucleate cell angiohistiocytoma consists of a triad of multinucleated cells, stromal fibrosis, and vascular changes. The multinucleated cells are angulated and stellate, with elongated cytoplasmic extensions. They may be few in number and revealed by deeper tissue levels 30927287 . Stromal fibrosis is often parallel to the epidermis. Increased numbers of small-calibre vessels within the papillary and reticular dermis show thickened walls with prominent endothelial cells.",
    ],
    ihc: [
      "The multinucleated cells may express CD68 (variable) and factor XIIIa, yet they are generally negative for CD163, CD34, and factor VIII 19336021 ; 30927287 . The vascular proliferation is highlighted by conventional vascular markers (CD31, CD34, ERG, factor VIII).",
    ],
    molecular: [
      "Its pathogenesis has not fully been elucidated. Several mechanisms have been hypothesized, including a role for fibroblasts, ERα overexpression, and mast cells 33180332 ; 20644465 .",
    ],
    differential: [
      "Fibrous papule (angiofibroma) of the nose is a close mimic but affects the head and neck and shows concentric perifollicular fibrosis. The atrophic pattern of dermatofibroma can resemble multinucleate cell angiohistiocytoma but shows storiform rather than parallel fibrosis and favours the lower extremities. Telangiectasia macularis eruptiva perstans can also display multinucleated stromal cells but usually presents with eosinophils and increased mast cells. Multinucleate cell angiohistiocytoma should be distinguished from reactive multinucleate cell angiohistiocytoma–like changes that may present as a focal histological finding or within another dermatological lesion 31070801 .",
    ],
    criteria: [
      "Essential: solitary or multiple smooth erythematous papules and nodules; multinucleated and angulated stromal cells; dermal fibrosis (often parallel to the epidermis); thickened stromal blood vessels, increased in number and with dilated lumina.",
    ],
    icdo: "0",
  },
  {
    name: "Plaque-like CD34-positive dermal fibroma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The tumor has a broad site distribution but shows a predilection for the proximal limbs, upper trunk, and neck 15337977 ; 20061935 .",
      "The tumor typically presents as a solitary, slowly growing, asymptomatic, well-demarcated, round to oval or medallion-shaped, erythematous to brown-yellow plaque, or (less often) as a nodular or protuberant growth 26645569 , measuring several centimetres in diameter 15337977 ; 20061935 . The surface is often wrinkled, depressed, and pliable 20061935 . Some proliferations can be pruritic and painful 24003290 .",
      "The tumor can be either a congenital or an acquired proliferation 15337977 ; 20061935 ; 30635930 . It has a wide age distribution but most commonly develops in children and young adults 15337977 ; 20061935 ; 28750558  and shows a female predominance 15337977 ; 20061935 ; 30635930 .",
    ],
    definition: [
      "Plaque-like CD34-positive dermal fibroma is a benign tumor of fibroblastic origin characterized histologically by a band-like proliferation of bland CD34-positive spindle cells in the upper dermis, typically sparing the papillary dermis and adnexal structures.",
    ],
    histology: [
      "The tumor is distinguished by a band-like proliferation of variably cellular and fairly uniform fibroblasts in the upper and mid dermis, characteristically sparing the papillary dermis 15337977 ; 20061935 . Extension into the subcutaneous fatty tissue is rare 15337977 ; 20061935 . Some proliferations display a zonation pattern with perpendicular growth towards the surface and more storiform arrangements of tumor cells in the lower parts 20061935 . Concentric growth of tumor cells around adnexal structures, vascular channels, and nerves is often seen. The tumor cells are bland, with small nuclei, inconspicuous nucleoli, and rare mitoses 20061935 . Multiple dilated venules are present throughout the neoplasm 20061935 . Elastic fibres are often fragmented and reduced in number.",
    ],
    ihc: [
      "The tumor cells are diffusely positive for CD34 and fascin 15337977 ; 20061935 ; 30635930 . Staining for factor XIIIa is inconsistent.",
    ],
    molecular: ["Unknown"],
    differential: [
      "Plaque-like CD34 positive dermal fibroma must be distinguished from dermal dermatofibrosarcoma protuberans, dermatomyofibroma, and fibroblastic connective tissue nevus.",
    ],
    criteria: [
      "Essential: a band-like proliferation of uniform fibroblasts in the upper and mid dermis; diffuse CD34 positivity; multiple dilated venules throughout the neoplasm.",
    ],
    icdo: "0",
  },
  {
    name: "Nodular fasciitis",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "Nodular fasciitis can arise from the superficial fascia, from the subcutaneous septa, or (rarely) in the dermis, and it usually bulges into the subcutis. Intramuscular, intra-articular, and visceral lesions are rare 20716998 ; 16434899 ; 27686647 ; 8311183 ; 10380041 . The most common sites are the forearm, thigh, and upper arm, which account for more than half of all cases 6462780 ; however, nodular fasciitis can involve any part of the body 19469872 . Well-described rare subtypes include intravascular fasciitis and cranial fasciitis 7351023 ; 7246849 ; 9923933 .",
      "Nodular fasciitis presents clinically as a relatively rapidly growing subcutaneous mass that enlarges (typically over the course of 3–6 weeks, but in some cases over a period as long as 3 months) and then regresses. It is typically smaller than 20–30 mm in maximal diameter, although an exceptional 100 mm case has been reported 6279273 ; 31355033 . The mass may be tender or painless 6462780 .",
      "Nodular fasciitis can occur at any age but has a peak incidence in the third and fourth decades of life, with equal distribution between the sexes 5675403 ; 13737962 .",
    ],
    definition: [
      "Nodular fasciitis is a self-limited benign myofibroblastic/fibroblastic neoplasm, classically occurring in the subcutis, arranged in a disorganized tissue culture–like pattern; it usually harbours USP6 rearrangement.",
    ],
    histology: [
      "Nodular fasciitis is composed of fibroblasts and/or myofibroblasts without overt cytological atypia. Mitotic activity can be frequent, but the mitoses are not atypical. Cellularity varies between and within lesions. Feathery tissue culture–like areas are typical of the lesion, but more-cellular areas can form fascicles. The stroma can be myxoid and/or collagenous, even keloidal. The vasculature is rich and fine, resembling granulation tissue. Extravasated red cells are usually seen, often in the tissue culture–like areas. Osteoclastic giant cells and chronic inflammatory cells can be present.",
    ],
    ihc: [
      "Strong expression of SMA by the neoplastic cells is characteristic.",
    ],
    molecular: [
      "Molecular testing is usually unnecessary in clinically and histologically typical cases. However, in challenging cases, detection of USP6 rearrangement may be useful to confirm the diagnosis 28752842 ; 29623468 ; 30139549 .",
      "Nodular fasciitis has been shown to harbour a translocation between chromosomes 17 and 22, t(17;22) (p13;q13), which results in MYH9::USP6 fusion and subsequent overexpression of USP6 21826056 . USP6 encodes a deubiquitinating enzyme with roles in cell trafficking, cell signalling, protein breakdown, and inflammation. MYH9 encodes a non-muscle myosin heavy chain that has roles in cell motility, shape, adhesion, and differentiation. A study of p16, CDK4, MDM2, and p53 implicated the possible involvement of cell-cycle arrest and presumed senescence by p16 in lesional myofibroblastic cells in nodular fasciitis, resulting in its self-limited growth and regression 31933915 . In addition, USP6 expression creates a negative feedback via TNFSF10 (TRAIL) and interferon-β, resulting in apoptosis and senescence of tumor cells 34381187 .",
      "Rearrangements in USP6 have been shown in approximately 90% of nodular fasciitis cases, and > 65% of these are MYH9::USP6 gene fusions 21826056 . These are most often detected in earlier (younger) lesions, while the detection of USP6 rearrangements in older lesions can be as low as 20% because of the negative feedback from USP6 expression in tumor cells 34381187 . Other gene promoters can be substituted for MYH9, sometimes with atypical features 28752842 : PPP6R3::USP6 and CALD1::USP6 have been reported in exceptional malignant cases 31538390 ; 34213575 , EIF5A::USP6 fusion has been described in a dermal nodular fasciitis of the left forearm with atypical mitosis 31880592 , and CTNNB1::USP6 fusion was seen in an intraneural nodular fasciitis 35175167 . USP6 rearrangements have also been reported in aneurysmal bone cyst, fibro-osseous tumor of the digits, and a subgroup of fibroma of tendon sheaths. tumors in this group (including nodular fasciitis) have morphological and clinical overlap, and it has been suggested that they may represent a spectrum of manifestations of the same disease process in different locations 32635781 ; 30758758 .",
    ],
    differential: [
      "The histological differential diagnosis depends on the location, the proportion of collagen and myxoid stroma, and cellularity. Collagenous patterns can be mistaken for fibromatosis, collagenous fibroma (desmoplastic fibroblastoma), or granulation tissue. The differential diagnosis also includes neural tumors, nerve sheath tumors, myositis ossificans, proliferative fasciitis, proliferative myositis, and inflammatory myofibroblastic tumors. Large and/or mitotically active nodular fasciitis can be mistaken for sarcoma 11601130 .",
    ],
    criteria: [
      "Essential: bland, typically cellular myofibroblastic spindle cells with a tissue culture–like pattern, variable myxoid stroma, extravasated red blood cells, and lymphocytes.",
      "Desirable: USP6 rearrangement is useful in challenging cases, such as small biopsies or atypical presentations.",
    ],
    icdo: "0",
  },
  {
    name: "EWSR1::SMAD3-rearranged fibroblastic tumor",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Benign Fibroblastic Tumors",
    behavior: "Benign",
    clinical: [
      "The tumors are superficially located within the dermis and/or subcutaneous fat. Dermal involvement may abut the epidermis. The large majority occur in the hands and feet 29957732 ; 29309308 , while the lower extremity represents the most common non-acral site 32901982 .",
      "Patients usually present with a small, painless, superficial tumor in an acral site.",
      "EWSR1::SMAD3-rearranged fibroblastic tumors are rare, with < 20 cases reported to date. Patients have a wide age range (1–68 years, median: 39 years), and most are female (M:F ratio: 1:4) 32901982 .",
    ],
    definition: [
      "EWSR1::SMAD3-rearranged fibroblastic tumor is a distinctive benign fibroblastic neoplasm with strong predilection for the hands and feet.",
    ],
    histology: [
      "These tumors are typically well demarcated, but they can infiltrate subcutaneous fat. In particular, in adults, the acellular center of the tumor appears hyalinized, which can resemble collagen rosettes. The peripheral zones consist of intersecting cellular fascicles of fibroblastic spindle cells within collagenous to more myxoid stroma. However, about half lack this zonation pattern. Lesional cells lack nuclear pleomorphism, hyperchromasia, prominent nucleoli, and mitotic activity. Myopericytomatous growth is rare. There may be focal stippled dystrophic calcification 29309308 ; 29957732 ; 32901982 .",
      "By immunohistochemistry, the fibroblastic tumor cells consistently show strong diffuse nuclear ERG expression, whereas SMA and CD34 are negative. When EWSR1 rearrangement is detected by FISH, a myoepithelial tumor may be considered in the differential diagnosis. However, immunohistochemistry for cytokeratins, EMA, S100, and SOX10 is negative.",
    ],
    ihc: [],
    molecular: [
      "The tumor type is defined by a fusion of exon 7 of EWSR1 with exon 5 or exon 6 of SMAD3, which may be confirmed by next-generation sequencing or validated by break-apart FISH assays 29309308 ; 32901982 .",
      "SMAD3 is an important signal transducer in the TGF-β/SMAD signalling pathway, which is involved in extracellular matrix synthesis by fibroblasts.",
    ],
    differential: [],
    criteria: [
      "Essential: clinical presentation as a small dermal and subcutaneous acral nodule; intersecting hypercellular fascicles comprising bland monomorphic spindle cells lacking mitotic activity, admixed with centrally located acellular hyalinized areas; diffuse strong ERG immunopositivity; molecular studies by FISH or next-generation sequencing confirming EWSR1::SMAD3 fusion.",
    ],
    icdo: "0",
  },
  {
    name: "Dermatofibrosarcoma protuberans",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Intermediate Fibroblastic Tumors",
    behavior: "Intermediate, locally aggressive",
    clinical: [
      "DFSP is most common on the trunk, followed by the proximal extremities and the head and neck region 10870053 ; 27806849 . Rare cases involving the distal extremities and acral sites have been reported 29240584 .",
      "Patients with DFSP typically present with a painless, firm, slow-growing plaque or nodule. Discolouration (brown, reddish-blue, or violaceous) may be seen. Longstanding lesions may develop a multinodular or protuberant appearance. Rapid growth in a longstanding lesion may indicate fibrosarcomatous transformation. Rarely, cases can be subcutaneous; in such cases there is a possible association with PDGFD rearrangement or with head and neck locations 35034038 ; 28420485 . PDGFD-rearranged DFSPs have also been described in tumors in the breast 30014607 .",
      "DFSP occurs most often in young to middle-aged adults, but it can arise at any age and can even be congenital 32558231 ; 21429521 ; 17310000 ; 12502925 .",
    ],
    definition: [
      "Dermatofibrosarcoma protuberans (DFSP) is a superficial fibroblastic mesenchymal tumor with storiform architecture. The majority of cases harbour a COL1A1::PDGFB translocation.",
    ],
    histology: [
      "Classic DFSP",
      "The classic form is characterized by a proliferation of uniform, medium-sized spindle cells with a storiform or cartwheel pattern of growth centred in the dermis. It is separated from the epidermis by a grenz zone and infiltrates the subcutaneous adipose tissue in a lace-like or honeycomb pattern. It lacks the overlying epidermal hyperplasia of a dermatofibroma. The periphery is poorly defined and the tumor can show subtle tentacle-like extension along tissue planes and around lobules of subcutaneous adipose tissue. Less commonly, it can be centred in the subcutis, with minimal or no dermal involvement. Mitotic figures are infrequent. There is minimal atypia. Diffuse strong staining for CD34 is characteristic.",
      "Giant cell fibroblastoma",
      "This subtype is most commonly seen in childhood (and is considered a pediatric subtype of DFSP). Giant cell fibroblastoma has a similar localization to the classic form and shows storiform spindle cell morphology, but it also shows additional features including numerous multinucleated giant cells with a wreath-like arrangement of nuclei around pseudovascular spaces and prominent myxoid change 17349565 ; 12502925 .",
      "Myxoid DFSP",
      "This uncommon subtype is defined as DFSP with > 50% myxoid change. The tumors show multinodular growth with abundant pale myxoid stroma; frequently branching, small, thin-walled vessels; and scattered mast cells 17890911 ; 17721193 . This subtype is diagnostically challenging, because the storiform pattern can be obscured by myxoid stroma.",
      "Pigmented DFSP",
      "This subtype contains numerous dendritic cells containing melanin pigment. The pigmented cells can show positive staining for S100.",
      "Myoid DFSP",
      "This subtype is characterized by pale nodules of spindle-shaped cells with eosinophilic cytoplasm. It has well-defined margins and is often centred on a blood vessel and associated with stromal hyalinization. The nodules are positive for SMA and negative for CD34 and desmin 26076821 .",
      "Plaque-like DFSP",
      "This subtype is characterized by a poorly circumscribed cellular dermal spindle cell tumor with wavy nuclei, a horizontal to fascicular arrangement of cells, and a myxoid stroma 20061935 .",
      "Other morphological patterns",
      "Granular cell, sclerosing, and atrophic tumors have also been described; hybrids of these and all of the above-mentioned forms can also be encountered.",
      "DFSP with fibrosarcomatous transformation",
      "Fibrosarcomatous transformation, which is seen in approximately 10% of DFSP cases, is characterized by (often abrupt) transition to a herringbone or fascicular growth pattern with increased cellularity, increased atypia, and increased mitotic activity. This subtype may form a discrete nodule in a background of DFSP and often shows diminished or lost CD34 expression. Fibrosarcomatous transformation can occur de novo or in recurrent tumor 9591728 . DFSP shows strong diffuse staining for CD34 in most cases (80–90%). CD34 positivity can be lost in fibrosarcomatous areas. Rarely, these tumors can have pleomorphic to even round cell morphologies 21478726 .",
    ],
    ihc: [],
    molecular: [
      "The majority of cases will harbour a COL1A1::PDGFB rearrangement, sometimes cryptic by FISH, with rare cases harbouring alternative rearrangements with PDGFD and partners such as COL6A3, EMILIN2, or TNC.",
      "The tumor is considered to be fibroblastic in origin. Supernumerary ring chromosomes containing the centromere from chromosome 22 and material from chromosomes 22 and 17 is the characteristic cytogenetic finding 2208065 ; 8076341 ; 7757993 . Another alteration, unbalanced t(17;22)(q21.3;q13.1), is more common in pediatric cases. Both aberrations bring the PDGFB gene under the control of the COL1A1 promoter 8988177 . There are numerous breakpoints in the COL1A1 gene (which consists of 52 exons), whereas the PDGFB breakpoint is restricted and always allows expression of PDGFB exon 2 9739023 ; 17950782 . After proteolytic processing that removes the COL1A1 protein leader sequence, there is massive overexpression of normal PDGFB ligand, which ignites downstream pathways, probably in an autocrine fashion. Gains in genomic copies of COL1A1::PDGFB and alterations in the mTOR signalling pathway can be seen in fibrosarcomatous transformation 16980946 ; 28711648 . Rare cases can have cryptic COL1A1::PDGFB or alternative PDGFD rearrangements with COL6A3, EMILIN2, or TNC 34628665 ; 29955147 ; 30014607 ; 35034038 ; 34256767 .",
    ],
    differential: [
      "The distinction from dermatofibroma can be difficult on a small or superficial biopsy. Dermatofibroma has less-uniform cytology, with variability of the spindle cell morphology and admixture with other cell types, including macrophages, lymphocytes, and multinucleated giant cells. Dermatofibroma is usually associated with overlying epidermal hyperplasia. Entrapment of collagen is seen peripherally; it is usually CD34-negative. tumors in the differential diagnosis of DFSP lack rearrangement of PDGFB, but morphology and immunohistochemistry are most often sufficient 17950782 ; 21484928 .",
    ],
    criteria: [
      "Essential: a cellular, predominantly dermal-based tumor with monotonous, short spindle cells with a storiform pattern, typically with infiltrative growth and honeycomb subcutis involvement; diffuse CD34 reactivity; the fibrosarcomatous subtype has a fascicular growth pattern with increased mitoses, sometimes with decreased CD34 labelling.",
      "Desirable: rearrangements involving COL1A1::PDGFB (common) or PDGFD (rare).",
    ],
    icdo: "1",
  },
  {
    name: "Myxoinflammatory fibroblastic sarcoma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Intermediate Fibroblastic Tumors",
    behavior: "Intermediate, locally aggressive; rare metastasis",
    clinical: [
      "MIFS usually affects the acral dorsal extremities, particularly the hands 9578090 ; 9706971 ; proximal examples amount to 5% of cases 12376919 ; 24121178 . The hand, finger, and wrist account for about 60% of cases, and the foot and ankle for 20% 24121178 .",
      "MIFS usually manifests as a painless mass. On imaging, it is centred in the subcutis (in about two thirds of cases) or deeper and typically displays infiltration into adjacent tissues, often mimicking infection, tenosynovial giant cell tumor, or ganglion cysts 27560024 ; 17449774 ; 15908525 .",
      "MIFS is rare. It has a peak incidence in the fourth to sixth decades of life and no sex predilection 24121178 ; 18190444 ; 9706971 ; 9578090 ; 9779486 .",
    ],
    definition: [
      "Myxoinflammatory fibroblastic sarcoma (MIFS) is an infiltrative, locally aggressive fibroblastic neoplasm with a predilection for acral soft tissue, characterized by prominent inflammation, a myxohyaline stroma, and pleomorphic fibroblastic cells with macronucleoli.",
    ],
    histology: [
      "MIFS is infiltrative and multinodular, being centred in the subcutaneous tissue in most cases. Especially in acral sites, these lesions tend to be superficial and to involve the dermis. They are characterized by dense inflammation merging with stroma varying from myxoid to hyalinized and containing sheets and small foci of epithelioid and spindled cells. Some lesions contain foamy histiocytes, giant cells, and hemosiderin. Within the inflammatory background, scattered bizarre cells with large vesicular nuclei and macronucleoli reminiscent of Reed–Sternberg cells are present. Many cells show degenerated (smudged) chromatin. Pseudolipoblasts with cytoplasmic mucopolysaccharide matrix may be seen. The inflammatory infiltrate is mixed, consisting of lymphocytes, plasma cells, histiocytes, and eosinophils in varying proportions. Emperipolesis, often subtle, is a common feature 9779486 ; 32514165 ; 25886867 . Mitotic activity is minimal.",
    ],
    ihc: [
      "Immunohistochemistry is unhelpful. The majority of cases exhibit expression of cyclin D1 (BCL1), factor XIIIa, D2-40, and CD10 9706971 ; 24121178 ; 25886867 ; 32514165 . Variable expression of CD34, CD163, and PRAME is also observed, as well as focal expression of keratin, KIT (CD117), CD68, and actin 18190444 ; 24121178 ; 9706971 ; 25886867 .",
    ],
    molecular: [
      "Amplification of VGLL3 on 3p11-p12, resulting in a supernumerary ring chromosome, is reported in > 50% of cases 31898851 . A t(1;10) with breakpoints around OGA on 10q24 and TGFBR3 on 1p22 is documented in 13% of cases 31898851 ; 32514165  and is also found in pure hemosiderotic fibrolipomatous tumors, in examples with mixed MIFS morphology (where the translocation appears to be more prevalent) 21717526 ; 26980036 , and in pleomorphic hyalinizing angiectatic tumor 24705316 . BRAF fusions or amplifications are also found 28692601 ; 32514165 ; 31898851 .",
    ],
    differential: [],
    criteria: [
      "Essential: typical distal extremity location; atypical fibroblastic cells with macronucleoli; variably myxoid and hyalinized matrix with a mixed inflammatory infiltrate.",
      "Desirable: pseudolipoblasts.",
    ],
    icdo: "1",
  },
  {
    name: "Myxofibrosarcoma",
    family: "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
    subgroup: "Malignant Fibroblastic Tumors",
    behavior: "Malignant",
    clinical: [
      "Myxofibrosarcomas usually involve the extremities, especially the thigh. The trunk, head and neck, and acral sites are rare locations. Approximately half of the cases occur in dermal/subcutaneous tissues; the remainder involve deeper compartments 8604805 ; 15138937 ; 26759307 ; 29065228 .",
      "Myxofibrosarcoma is an often slow-growing and painless tumor with frequent local recurrence. Low-grade cases may develop histological progression to higher grades upon recurrence, thus acquiring an increased risk of metastasis.",
      "Myxofibrosarcoma, with a slight male predominance, is a rather common sarcoma of elderly patients, occurring usually in the sixth to eighth decades of life; it is rare in patients aged < 30 years 8604805 ; 20878245 ; 26759307 .",
    ],
    definition: [
      "Myxofibrosarcoma is a nodular spindle-to-pleomorphic sarcoma with wide variations in cellularity, nuclear atypia, and a myxoid stroma with curvilinear vasculature.",
    ],
    histology: [
      "As the histological grade increases, myxofibrosarcoma exhibits increased cellularity, pleomorphism, and proliferative activity but decreased myxoid stroma 8604805 ; a minimum of myxoid stroma (optimally 5%) is required to distinguish undifferentiated pleomorphic sarcomas 26759307 . Subcutaneous lesions often have extensive infiltration beyond what can be clinically detected 15138937 . Low-grade myxofibrosarcoma is hypocellular, prominently myxoid, and composed of mildly atypical spindle-to-stellate cells featuring nuclear hyperchromasia and perivascular cellular condensation with some mucin-containing pseudolipoblasts 27591498 . The intermediate-grade lesions become more cellular and pleomorphic but lack the solid areas characteristic of high-grade cases. The latter often show necrosis, atypical mitoses, and overlap with undifferentiated pleomorphic sarcoma. The rare epithelioid subtype typically shows cohesive clusters and/or sheets of epithelioid cells with abundant cytoplasm and vesicular nuclei, simulating carcinoma or melanoma 17197925 .",
    ],
    ihc: [
      "SMA and/or CD34 reactivity is occasionally seen in myxofibrosarcoma 23600956 ; 34326362 , whereas desmin and S100 are negative.",
    ],
    molecular: [
      "Myxofibrosarcomas harbour frequent chromosomal structure rearrangements and copy-number alterations, even in low-grade cases, and they exhibit increasing genomic complexity in recurrent lesions with histological progression 16415793 ; 20601955 ; 29100075 ; 30018380 . Myxofibrosarcomas are predominated by somatic copy-number alterations, where several oncogenes (TRIO, RICTOR, SKP2, and AMACR) on frequently gained 5p are variably coamplified and associated with increased grade 22322669 ; 25384383 ; 27577794 . In half of myxofibrosarcomas, the pathogenetic aberrations converge on p53 signalling and the G1/S cell-cycle checkpoint. tumor suppressor mutations that inactivate TP53 (46%, most frequent), RB1 (18%), and/or CDKN2A/CDKN2B (16%) occur more frequently than oncogene amplifications of CDK6, CCND1, or MDM2 30018380 . RB1-inactivated and TP53-inactivated myxofibrosarcomas critically rely on SKP2 for survival 32161142 , while amplifications of TRIO and RICTOR activate the RAC/PAK and AKT/mTOR pathways, respectively 27577794 .",
    ],
    differential: [
      "The differential diagnosis includes superficial angiomyxoma, myxoid spindle cell lipoma, nerve sheath myxoma, myxoid dermatofibrosarcoma, low-grade fibromyxoid sarcoma, and other higher-grade sarcomas with a myxoid matrix.",
    ],
    criteria: [
      "Essential: a multinodular tumor with infiltrative margins; myxoid stroma; variably pleomorphic cells; curvilinear vessels; hypercellular areas in higher-grade lesions.",
    ],
    icdo: "3",
  },
  {
    name: "Cherry hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "The most common location is the trunk, followed by the upper limbs and (less commonly) the lower limbs.",
      "The lesions are multiple, tiny, bright red, asymptomatic papules that increase in number with age.",
      "This hemangioma affects middle-aged to elderly adults, with no sex predilection.",
    ],
    definition: [
      "Cherry hemangioma is a common benign superficial dermal capillary proliferation with a lobular architecture, appearing in adulthood.",
    ],
    histology: [
      "The papillary dermis is expanded by a slightly polypoid lobular proliferation of small congested and dilated capillaries with surrounding loose stroma, often with an epithelial collarette.",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "HRAS and KRAS somatic mutations are found in a small proportion of cases 26802240 , and frequent somatic mutations of GNA14, GNA11, and GNAQ have also been described 34040639 ; 31189994 .",
    ],
    differential: [],
    criteria: [
      "Essential: a lobular proliferation of capillaries in the papillary dermis associated with an epidermal collarette.",
    ],
    icdo: "0",
  },
  {
    name: "Sinusoidal hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "The most common location is the trunk. Subcutaneous tissue of the breast and extremities can be affected.",
      "The lesion is a small, asymptomatic, well-demarcated acquired dermal or subcutaneous bluish nodule.",
      "These relatively rare lesions occur primarily in middle-aged women. In men, they frequently develop in the setting of gynaecomastia.",
    ],
    definition: [
      "Sinusoidal hemangioma is a histologically distinctive benign vascular lesion consisting of thin-walled vascular channels with scant smooth muscle in a sinusoidal or sieve-like pattern, and with features resembling those of anastomosing hemangioma (a lesion seen mainly in the kidney).",
    ],
    histology: [
      "The lesions are lobular and relatively well circumscribed. They are composed of irregular, dilated, congested, thin-walled vascular channels with scant smooth muscle in a sinusoidal or sieve-like pattern, with little intervening stroma 1746680 ; 26945338 ; 19606014 . The endothelial cells are uniform and mitotically quiescent. Thrombosis and dystrophic calcification are often present. A similar sinusoidal vascular pattern is commonly seen focally in venous malformations.",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "In the breast, the differential diagnosis includes well-differentiated angiosarcoma. However, angiosarcoma shows multilayering of endothelial cells, cytological atypia, and mitotic activity.",
    ],
    criteria: [
      "Essential: a lobular proliferation of dilated vascular channels with a sinusoidal or sieve-like pattern.",
    ],
    icdo: "0",
  },
  {
    name: "Microvenular hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "This lesion affects the trunk and extremities, with a predilection for the forearms.",
      "The lesion is a single, small (or occasionally larger), red, asymptomatic papule or plaque. Exceptional eruptive or multiple lesions have been reported 22722465 ; 25263662 ; 20881833 .",
      "This rare hemangioma arises mainly in young adults, with no sex predilection.",
    ],
    definition: [
      "Microvenular hemangioma is a mitotically quiescent vascular lesion, likely to be a type of venous malformation.",
    ],
    histology: [
      "The lesions are poorly defined, usually involve superficial and deep reticular dermis, and consist of elongated (often irregular) small vascular channels resembling venules. The vessels dissect somewhat hyalinized-looking collagen bundles. Extension of channels into arrector pili muscles is common. A single layer of pericytes, which can be highlighted by SMA staining, is consistently present and often conspicuous. The endothelial cells are bland and lack mitotic activity; they are positive for ERG, CD31, and CD34 but negative for podoplanin (recognized by D2-40) 23169416 ; 25263662 .",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "The dissection of collagen may prompt consideration of angiosarcoma or Kaposi sarcoma. Microvenular hemangioma lacks atypia and multilayering; each vessel is surrounded by a pericyte layer, and it is KSHV/HHV8-negative 1939781 ; 25263662 .",
    ],
    criteria: [
      "Essential: a poorly defined dermal proliferation of small, elongated, and irregular venule-like vascular channels.",
    ],
    icdo: "0",
  },
  {
    name: "Hobnail hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "This lesion affects the trunk and extremities.",
      "Most lesions arise as a small, nondescript erythematous papule. Uncommonly, the lesion is a small reddish-brown or purple papule surrounded by concentric ecchymotic haloes, hence the original name “targetoid hemosiderotic hemangioma”.",
      "This relatively rare hemangioma occurs mainly in young and middle-aged adults, with a male predilection.",
    ],
    definition: [
      "Hobnail hemangioma is a benign vascular malformation of lymphatic lineage, with hobnail endothelial cells and a delayed presentation.",
    ],
    histology: [
      "The lesions are wedge-shaped and consist of scattered, thin-walled, irregular vascular channels lined by bland endothelial cells with a hobnail appearance and focal intraluminal papillary projections. Vessels deeper in the lesion become smaller, flattened, and inconspicuous, without hobnail endothelial cells. Red blood cell extravasation, hemosiderin deposition, and perivascular lymphocytes are common. The endothelial cells are strongly positive for podoplanin (recognized by D2-40) and usually negative or weakly positive for CD34, suggesting a lymphatic lineage 15059220 ; 9888709 ; 10472756 ; 24601986 ; 26475078 ; 21821311 .",
    ],
    ihc: [],
    molecular: [
      "Expression of lymphatic markers and negativity for WT1 and mitotic markers supports the conclusion that these are superficial lymphatic malformations that undergo delayed perilesional bleeding and hemosiderin deposition 21798621 ; 21821311 .",
    ],
    differential: [
      "Atypical vascular lesions occurring after radiotherapy may be identical, but they usually lack the wedge-shaped architecture. Papillary intralymphatic angioendothelioma (Dabska tumor) and retiform hemangioendothelioma have hobnail endothelial cells but have a distinctive pattern and are larger and more infiltrative.",
    ],
    criteria: [
      "Essential: a superficial dermal, wedge-shaped collection of irregular, thin-walled lymphatic vascular channels lined by hobnail endothelial cells.",
      "Desirable: perilesional deposits of hemosiderin.",
    ],
    icdo: "0",
  },
  {
    name: "Glomeruloid hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "This lesion affects the trunk and extremities.",
      "The lesions are multiple erythematous papules.",
      "This rare hemangioma shows no sex predilection. Examples occurring outside the setting of multicentric Castleman disease or POEMS syndrome are likely to in fact be papillary hemangioma (see Differential diagnosis, below) 18001423 ; 19077091 ; 18805868 ; 17927585 . A rare association with Erdheim–Chester disease has been reported 30563806 .",
    ],
    definition: [
      "Glomeruloid hemangioma is a reactive vascular proliferation associated with multicentric Castleman disease and POEMS syndrome (polyradiculoneuropathy, organomegaly, endocrinopathy, clonal plasma cell disorder, and skin changes).",
    ],
    histology: [
      "There is dermal proliferation of dilated vascular channels containing clusters of capillaries that resemble renal glomeruli. The endothelial cells often contain intracytoplasmic inclusions that give a positive PAS reaction; these inclusions may be immunoglobulins, enlarged lysosomes, or thanatosomes 2173428 ; 19614998 ; 8030771 .",
    ],
    ihc: [],
    molecular: [
      "Raised serum levels of VEGF have been described in one study, suggesting that this may play in a role in the development of the vascular lesions 30563806 .",
    ],
    differential: [
      "Papillary hemangioma has a predilection for the head and neck and manifests as a single lesion consisting of dermal dilated channels lined by endothelial cells with frequent papillary projections and lacking glomeruloid architecture 18805868 .",
    ],
    criteria: [
      "Essential: dilated dermal vascular channels with intraluminal proliferation of small blood vessels mimicking renal glomeruli.",
    ],
    icdo: "0",
  },
  {
    name: "Papillary hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "Papillary hemangioma occurs almost exclusively on the head and neck 17927585 ; 31592865 .",
      "Papillary hemangioma appears as a solitary, longstanding, bluish-red papule as large as 11 mm in diameter.",
      "It is most common in adult men.",
    ],
    definition: [
      "Papillary hemangioma is a distinctive vascular proliferation consisting of dilated vascular channels with prominent intraluminal papillary projections lined by endothelial cells, many of which contain intracytoplasmic globules.",
    ],
    histology: [
      "Papillary hemangioma is characterized by dermal, widely dilated, thin-walled vascular channels with numerous luminal papillary projections containing capillaries lined by plump endothelial cells, surrounded by pericytes, and displaying frequent intracytoplasmic eosinophilic globules. These globules, known as thanatosomes, represent dilated lysosomes containing debris and fat vacuoles. Endothelial cells are positive for CD31, CD34, and ERG and are negative for lymphatic markers.",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "The lesions are histologically similar to glomeruloid hemangiomas, which differ in their typical multifocally, involvement of the trunk and extremities, and association with POEMS syndrome.",
    ],
    criteria: [
      "Essential: a nodule consisting of ectatic dermal vascular channels with prominent papillary projections lined by endothelial cells with frequent intracytoplasmic eosinophilic globules.",
    ],
    icdo: "0",
  },
  {
    name: "Spindle cell hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "This lesion affects the distal extremities and occasionally the neck.",
      "The lesions are multiple asymptomatic bluish nodules developing over many years, with little tendency for regression. There is a strong association with Maffucci syndrome, and less common associations with lymphedema, early-onset varicose veins, and Klippel–Trénaunay syndrome 7661276 ; 2071088 ; 23485734 ; 8827025 .",
      "This rare hemangioma is more common in the second and third decades of life, with no sex predilection.",
    ],
    definition: [
      "Spindle cell hemangioma is a benign neoplasm composed of spindled cells, ectatic vascular spaces, and vacuolated endothelial cells.",
    ],
    histology: [
      "The tumors are relatively well circumscribed, often partially intravascular, or sometimes poorly defined. They occupy the dermis, with frequent extension into the subcutis, and they consist of irregular, dilated, thin-walled, congested, cavernous-like vascular channels mixed with solid areas of vacuolated epithelioid endothelial cells scattered among bland spindle-shaped cells with pericytic and fibroblastic features and poorly defined eosinophilic cytoplasm. The cavernous vascular channels are lined by a single layer of bland endothelial cells. Thrombi, with or without dystrophic calcification, are common. Smooth muscle cells may be seen focally. Degenerative cytological atypia is sometimes present. The endothelial cells within the vascular channels and the epithelioid vacuolated cells show positive immunostaining for endothelial markers. Spindle cells may show focal positivity for SMA 2071088 ; 23485734 ; 8827025 ; 3740350 .",
    ],
    ihc: [],
    molecular: [
      "Sporadic lesions and lesions associated with Maffucci syndrome are associated with IDH1 p.R132C hotspot mutations 23485734 ; 22057234 ; 28845532 . Frequent somatic alterations in 2p22.3, 2q24.3, and 14q11.2 are also found in spindle cell hemangiomas and enchondromas occurring in patients with Maffucci syndrome 25565925 .",
    ],
    differential: [
      "Nodular Kaposi sarcoma lacks cavernous vascular channels and epithelioid vacuolated cells and is positive for KSHV/HHV8.",
    ],
    criteria: [
      "Essential: a well-circumscribed dermal/subcutaneous tumor composed of dilated, cavernous-like vascular channels intermixed with solid areas composed of vacuolated epithelioid endothelial cells.",
    ],
    icdo: "0",
  },
  {
    name: "Epithelioid hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "Cutaneous lesions have a predilection for the head and neck and the trunk 4008683 .",
      "EHs manifest as single or multiple, persistent, skin-colored to erythematous papules and nodules. Peripheral eosinophilia is seen in 15% of patients 4008683 . Similar lesions may occur in deeper soft tissue, internal organs, and bone.",
      "Lesions occur most commonly in young adults (with a slight male predilection), but people of all ages and ethnic groups are affected 4008683 .",
    ],
    definition: [
      "Epithelioid hemangioma (EH) is a benign vascular proliferation with vessels lined by epithelioid endothelial cells, often with an associated inflammatory component.",
    ],
    histology: [
      "There is a lobular proliferation of vascular channels lined by bland epithelioid endothelial cells with abundant eosinophilic or amphophilic cytoplasm and vesicular nuclei that protrude into the lumen. A focal intravascular component may be seen, and rare examples are entirely intravenous 32094426 . Inflammation is typically prominent, consisting of lymphocytes, histiocytes, plasma cells, and numerous eosinophils. Fibrosis occurs in late-stage lesions, which are also characterized by less inflammation and less prominent epithelioid endothelial cells. In many cases, mural damage in a medium-sized to large artery is present.",
    ],
    ihc: [
      "Immunohistochemically, the endothelial cells are positive for blood vascular markers, lack lymphatic markers, and are accompanied by an SMA-positive pericyte layer. The epithelioid endothelial cells do not express EMA or keratins and usually display nuclear staining for FOSB 29527734 .",
    ],
    molecular: [
      "FOS or FOSB gene rearrangements are commonly present in bone and soft tissue EHs, but they are rare in cutaneous lesions and absent in histologically classic examples of angiolymphoid hyperplasia with eosinophilia, although these are positive for FOSB by immunohistochemistry 26135557 ; 29527734 .",
    ],
    differential: [
      "EH must be distinguished from Kimura disease, which occurs mainly in Asian males, presents with larger and deeper lesions and involvement of lymph nodes, and is often associated with systemic symptoms. Histologically, although the composition of the inflammatory cell infiltrate of Kimura disease is similar to that of EH, germinal centres may be seen and the vascular channels are not lined by epithelioid endothelial cells 6718071 .",
    ],
    criteria: [
      "Essential: a lobular proliferation of small vascular channels lined by epithelioid endothelial cells often associated with prominent inflammation (namely, eosinophils and lymphocytes).",
    ],
    icdo: "0",
  },
  {
    name: "Tufted hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "These lesions have a predilection for the neck and upper trunk.",
      "Tufted hemangiomas manifest as slow-growing, poorly defined macules, papules, nodules, and plaques, with rare focal regression 12383094 ; 20644037 . Patients with large cutaneous lesions may develop Kasabach–Merritt syndrome 10642677 ; 27607323 . This and other features, including genetic evidence of a homogeneous methylation pattern, support the widely held opinion that tufted hemangioma is a smaller, more superficial clinical presentation of kaposiform hemangioendothelioma 31887709 .",
      "This rare hemangioma has a strong predilection for infants and children, with no sex predilection 2644316 ; 20644037 . Congenital cases have been reported 30318642 , and presentation in adult life is exceptional 17186794 .",
    ],
    definition: [
      "Tufted hemangioma is a benign cutaneous vascular tumor sometimes associated with Kasabach–Merritt syndrome and now widely considered part of the kaposiform hemangioendothelioma spectrum.",
    ],
    histology: [
      "Multiple scattered, tightly packed lobules of capillaries are present throughout the dermis and (more rarely) the subcutis, in a cannonball pattern. The lumina of vascular channels are often difficult to discern, and pericytes are prominent. The endothelial cells are flat and occasionally contain intracytoplasmic hyaline structures. A distinctive feature is the presence of a crescent-like lymphatic channel around many individual tumor lobules. The stroma between tumor lobules may be desmoplastic and contain lymphatic-like channels. Focal fascicles of spindled endothelial cells, which are positive for podoplanin (recognized by D2-40), CD31, ERG, and CD34, may be seen within the capillary lobules.",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "Nodular Kaposi sarcoma lacks a cannonball architecture and is positive for KSHV/HHV8.",
    ],
    criteria: [
      "Essential: tufts of capillaries scattered throughout the dermis, with frequent crescent-like lymphatic vessels around tumor lobules.",
    ],
    icdo: "0",
  },
  {
    name: "Angiokeratoma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "ACD is characterized by lesions in a bathing-trunk distribution. AF occurs on the scrotum and vulva 6069899 ; 6019084 . AM occurs on the dorsum of fingers and toes 8993949 . SA occurs mainly on the lower limbs 8993949 .",
      "Patients with ACD present with numerous asymptomatic pinpoint papules with minimal epidermal change. Patients with AF or AM present with single or multiple small red keratotic papules. Patients with SA present with a single keratotic (often crusted) papule or nodule.",
      "Four clinicopathological types of angiokeratomas have been described 6018992 . ACD is associated with Fabry disease and arises in late childhood. AF most commonly occurs in adult men. AM most commonly occurs in adults, with no sex predilection. SA or angiokeratoma circumscriptum also occurs in adults, with no sex predilection.",
    ],
    definition: [
      "Angiokeratoma is a superficial vascular ectasia associated with variable overlying epidermal changes.",
    ],
    histology: [
      "ACD shows dilated, congested vascular channels in the papillary dermis, with minimal epidermal change. Endothelial cells, pericytes, and fibroblasts show cytoplasmic vacuoles representing lipid. AF, AM, and SA show dilated, thin-walled vascular channels in the papillary dermis associated with overlying epidermal changes consisting of acanthosis and hyperkeratosis 6018992 .",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "SA must be distinguished from verrucous venous malformation (see section Verrucous venous malformation).",
    ],
    criteria: [
      "Essential: a papillary dermal proliferation of dilated thin-walled vascular channels with variable overlying epidermal changes and lacking a deep component.",
    ],
    icdo: "0",
  },
  {
    name: "Infantile hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "These lesions are most common on the head and neck and the extremities, but they also occur on the trunk, genitals, and in some viscera (notably, the liver and intestines).",
      "Nascent tumors may be evident at birth but typically appear in the first 2–6 weeks of life, as a bright-red or blue nodule or plaque, often with a strawberry-like appearance. There is initial rapid growth over a period of months, transitioning to a longer involuting phase of a few years 18429772 ; 24641194 . Lesions arising at certain locations may be associated with underlying malformations and multiple lesions; usually, the presence of > 5 lesions is associated with liver hemangiomas 34419524 .",
      "This hemangioma, which occurs in about 4% of the population, is the most common tumor of infancy. It shows a female predilection and is more common in White populations 18429772 ; 24641194 .",
    ],
    definition: [
      "Infantile hemangioma is a benign tumor characterized by a proliferation of lobules of capillaries with a distinctive immunophenotype arising exclusively in infancy and showing spontaneous slow regression.",
    ],
    histology: [
      "The histology of infantile hemangioma defines the three stages of the lesion: proliferation, partial involution, and complete involution. These stages form an overlapping continuum. Early proliferative lesions consist of cellular dermal and/or subcutaneous masses of tightly packed capillaries with small lumina, lined by plump endothelial cells rimmed by pericytes. The capillaries are interspersed with immature dendritic-type cells and arranged in lobules separated by delicate fibrous septa or normal intervening stroma. Perineural extension is common 7737662 , and the feeding and draining vessels may be quite large. During active involution, the lesional capillaries become variably dilated and congested, and gradually disappear. The basement membranes thicken and show apoptotic dust, and the pericapillary mast cells increase in number. Nearing end-stage, the tumor lobules are replaced by loose fibrous or fibrofatty stroma containing a few residual ghost capillaries composed of thickened multilayered rinds of basement membrane material with little or no cellular lining. The endothelial cells show a complex immunophenotype shared only by placental capillaries, including positivity for GLUT1, LeY, CD15, CCR6, IDO1, and IGF2 11735711 .",
    ],
    ihc: [],
    molecular: [
      "The fact that infantile hemangioma’s immunoreactivity for GLUT1, LeY, and other markers is identical to that of placental microvessels suggests that this tumor results from embolization of placental cells or stem cells differentiating towards placental vascular cells 11346333 . Cultured infantile hemangioma endothelial cells are clonal, a finding consistent with a neoplastic process 11254674 . No underlying genetic abnormalities have been identified.",
    ],
    differential: [
      "Infantile hemangioma must be distinguished from congenital non-progressive hemangiomas on the basis of careful clinicopathological correlation and GLUT1 immunohistochemistry. All infantile hemangiomas have endothelial GLUT1 positivity, whereas congenital non-progressive hemangioma endothelial cells are negative for this marker 10665907 .",
    ],
    criteria: [
      "Essential: an acquired vascular tumor developing after birth and composed of lobules of capillaries lined by GLUT1-positive endothelial cells.",
    ],
    icdo: "0",
  },
  {
    name: "Congenital non-progressive hemangiomas: Rapidly involuting congenital hemangioma and non-involuting congenital hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "The most common location is the head, followed by the extremities.",
      "The lesions are usually fully formed at birth, typically following either a persistent clinical course (NICH) or a very rapidly regressive course through infarction (RICH) during the first 6 months of life 15018449 . Initial lesions vary in size and consist of a vascular red or bluish mass with overlying telangiectasia, occasionally associated with ulceration. Rare tumors regress incompletely (PICH) 24176519 . NICH increases in size proportionally as the patient grows, and it does not regress 11391180 . Exceptional cases show limited postnatal growth.",
      "Congenital non-progressive hemangiomas arise at birth, with no sex predilection. They are less common than infantile hemangioma.",
    ],
    definition: [
      "Congenital non-progressive hemangiomas are a distinct group of vascular lesions that arise in utero and are fully formed at birth. There are two clinical subtypes: rapidly involuting congenital hemangioma (RICH) and non-involuting congenital hemangioma (NICH). For cases that regress incompletely, the term “partially involuted congenital hemangioma (PICH)” has been proposed.",
    ],
    histology: [
      "RICH, PICH, and NICH vary along a histopathological spectrum, largely dependent on the degree of infarction. All are composed of variably well-circumscribed capillary lobules within the dermis and/or subcutis. The interlobular stroma is often fibrotic and may contain arteries, veins, and sometimes lymphatic channels of moderate size. Intralobular capillary endothelial cells and pericytes can be plump, but they lack the increased mitotic activity, GLUT1 positivity, and basement membrane multilamination of infantile hemangioma. Persistent lesions (NICHs and PICHs) are more likely to display arteriovenous shunts, hobnail endothelial cells, and a large vessel in the center of the vascular lobules 11391180 . The endothelial cells of all subtypes are negative for GLUT1 15153887 .",
    ],
    ihc: [],
    molecular: [
      "Somatic activating mutations in GNAQ and GNA11 at Q209 have been identified in both NICH and RICH 27058448 .",
    ],
    differential: [
      "The distinction from infantile hemangioma is usually straightforward, on the basis that congenital non-progressive hemangiomas arise at birth and lack endothelial positivity for GLUT1 8774499 ; 9551150 ; 15153887 ; 24176519 .",
    ],
    criteria: [
      "Essential: a congenital lesion; dermal and/or subcutaneous lobules of capillaries lined by endothelial cells that are negative for GLUT1.",
    ],
    icdo: "0",
  },
  {
    name: "Lobular capillary hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "Lesions have a predilection for the fingers and the head and neck, in particular the nasal and oral mucosae. Gingival lesions occur in pregnant women (granuloma gravidarum). Involvement of internal organs is rare 17922196 .",
      "The lesion is a rapidly growing, polypoid, hemorrhagic, and frequently ulcerated blue or red nodule. Multiple lesions occasionally develop; in children, recurrences may be associated with multiple satellites 12423439 ; 3777375 ; 5647967 . Lesions can occur in association with port-wine stain and other vascular malformations. They are also associated with many medications and biological agents, including retinoids and BRAF inhibitors 22134277 ; 6225396 ; 27116335 ; 16958814 . Rare tumors arise in deep dermal / subcutaneous or intravenous locations 575269 . A congenital disseminated aggressive lobular capillary hemangioma with a predilection for the skin, brain, viscera, and musculoskeletal system has been described 32622671 .",
      "This hemangioma (including rare congenital cases) occurs over a wide age range, with no sex predilection 5220911 ; 10827405 ; 1792196 .",
    ],
    definition: [
      "Lobular capillary hemangioma is a common vascular cutaneous and mucosal neoplasm that consists of a proliferation of capillaries with a lobular architecture.",
    ],
    histology: [
      "The tumors are polypoid and have an epidermal collarette, and show frequent ulceration with prominent inflammation consisting of neutrophils, usually restricted to the superficial aspect of the lesion. Variably dilated capillaries lined by plump endothelial cells rimmed by a pericyte layer are arranged in lobules within edematous stroma. Mitotic activity is common, and focal cytological atypia may be noted, in particular in mucosal lesions. Older lesions show variable fibrosis. Deep-seated and intravenous lesions are identical but lack inflammation 1792196 ; 5220911 .",
    ],
    ihc: [],
    molecular: [
      "Sporadic lobular capillary hemangiomas and those occurring within port-wine stain may be associated with RAS-family and BRAF mutations (mainly c.1799T>A p.V600E) 26802240 .",
    ],
    differential: [
      "Nodular Kaposi sarcoma shows a similar architecture but consists of bundles of spindle-shaped cells with clefting, intracytoplasmic eosinophilic globules, and KSHV/HHV8 positivity. Bacillary angiomatosis (an infectious vascular proliferation caused mainly by Bartonella henselae, formerly called Rochalimaea henselae) is histologically similar, but the vascular channels are lined by pale epithelioid endothelial cells and aggregates of neutrophils, and nuclear dust and amorphous basophilic or amphophilic material consisting of Warthin–Starry stain–positive bacteria are identified.",
    ],
    criteria: [
      "Essential: a polypoid tumor with an epithelial collarette and lobules of capillaries associated with an edematous stroma.",
    ],
    icdo: "0",
  },
  {
    name: "Poikilodermatous plaque-like hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "Almost all lesions arise in the lower extremities 30930084 ; 32362008 .",
      "Patients present with asymptomatic, slowly growing, erythematous or violaceous scaly plaques varying in size between 20 and 70 mm that are often described as poikilodermatous. The plaques are typically solitary, rarely multiple. Although clinically the lesions raise concern for poikilodermatous mycosis fungoides, on histology these two entities share no common features.",
      "Most of the patients are elderly men.",
    ],
    definition: [
      "Poikilodermatous plaque-like hemangioma is an acquired band-like vascular proliferation involving the superficial dermis.",
    ],
    histology: [
      "There is a band-like proliferation of small-calibre blood vessels lined by bland endothelium in the papillary and superficial reticular dermis, with no grenz zone and with a concomitant loss or decrease of elastic fibres in the affected area. Most cases exhibit a certain degree of hyperkeratosis or acanthosis and mild lymphocytic inflammation between the vessels. The differential diagnosis includes other vascular neoplasms, such as acquired elastotic hemangioma (smaller and with a similar pattern but with the presence of solar elastosis), microvenular hemangioma (involves the superficial and deep dermis, no absence of elastic fibres, and an absence of a plaque-like architecture), and hobnail hemangioma (wedge-shaped architecture, irregular lymphatic-like channels, lined by hobnail endothelial cells and hemosiderin deposits) 30930084 .",
    ],
    ihc: [],
    molecular: ["Not clinically relevant", "Unknown"],
    differential: [],
    criteria: [
      "Essential: a proliferation of numerous small blood vessels with bland endothelium in the superficial dermis; concomitant loss or attenuation of elastic fibres.",
      "Desirable: a lower-extremity, slowly growing erythematous or violaceous plaque.",
    ],
    icdo: "0",
  },
  {
    name: "Acquired elastotic hemangioma",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "AEH has a predilection for the forearms and the lateral aspect of the neck.",
      "The lesion manifests as an asymptomatic, small papule or plaque developing in sun-exposed skin 12196746 ; 31268926 . Multiple lesions are exceptional 35170476 .",
      "AEH is rare. It occurs in middle-aged and elderly adults, with a slight female predilection.",
    ],
    definition: [
      "Acquired elastotic hemangioma (AEH) is a superficial band-like proliferation of small vascular channels arising in sun-exposed skin and associated with solar elastosis.",
    ],
    histology: [
      "AEH shows a band-like proliferation of capillaries, each surrounded by a layer of pericytes and oriented parallel to the epidermis in the upper reticular dermis. There is background solar elastosis.",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "Microvenular hemangioma involves the mid to deep dermis and is poorly defined and not associated with solar elastosis. Poikilodermatous plaque-like hemangioma is also a superficial plaque-like proliferation but the lesions are larger, the stroma is edematous, elastic fibres are missing, and there is no solar elastosis.",
    ],
    criteria: [
      "Essential: a superficial dermal plaque-like proliferation of capillaries in association with solar elastosis.",
    ],
    icdo: "0",
  },
  {
    name: "Verrucous venous malformation",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "These lesions have a predilection for the distal extremities; occasionally they occur on the trunk.",
      "The lesions are slightly raised singular, grouped, or confluent red to purple plaques that become more hyperkeratotic and may ulcerate, bleed, and slowly enlarge over time. Linear lesions have been reported 10688730 . Local tissue hypertrophy is not a feature.",
      "This is a rare congenital lesion with no sex predilection.",
    ],
    definition: [
      "Verrucous venous malformation is a distinctive localized vascular malformation associated with overlying prominent epidermal changes.",
    ],
    histology: [
      "An epidermis with prominent acanthosis, papillomatosis, hyperkeratosis, parakeratosis, and crusting overlies an expanded papillary dermis with numerous dilated and congested capillaries and venules, often extending into the investing dermis of the skin adnexa while sparing the reticular dermis. The subcutaneous tissue displays an increased density of variably congested capillaries and venules, with occasionally admixed larger veins. Mitotic activity is rare to absent. There may be focal light endothelial positivity for GLUT1, but the full placenta-like vascular phenotype of infantile hemangioma is lacking. Small dilated lymphatic vessels also may be present but the predominant differentiation is clearly blood vascular 10886755 ; 6038751 ; 25263605 .",
    ],
    ihc: [],
    molecular: [
      "Verrucous venous malformation is non-familial. A somatic missense mutation in MAP3K3 has been identified in some cases 25728774 .",
    ],
    differential: [
      "The superficial dermal changes closely resemble angiokeratoma. Histological distinction relies on the identification of a deep dermal / subcutaneous component.",
    ],
    criteria: [
      "Essential: plaques with verrucous epidermal hyperplasia overlying dilated vascular channels in the dermis, with an associated subcutaneous component.",
    ],
    icdo: "0",
  },
  {
    name: "Arteriovenous malformation",
    family: "Vascular Tumors",
    subgroup: "Hemangiomas",
    behavior: "Benign",
    clinical: [
      "AVM can involve the skin, subcutis, bone, and viscera and has a marked predilection for the head, neck, and limbs. Small, superficial vascular lesions with a predilection for the lips, perioral skin, nose, and eyelids of middle-aged to elderly men, traditionally called acral arteriovenous tumor, may not be true AVMs.",
      "AVMs involving skin and deep soft tissue are characterized by a poorly defined bluish or red mass that may be pulsatile, with variably severe arteriovenous shunting, sometimes leading to local tissue necrosis, hemorrhage, or high-output heart failure. The superficial subtype is typically a small red or blue papule. Deep-seated and cutaneous clinical subtypes have been described 17582945 ; 23125071 .",
      "AVMs have no sex predilection. They are congenital but may not become clinically evident until later in life. Most are solitary and sporadic.",
    ],
    definition: [
      "Arteriovenous malformation (AVM) is a congenital vascular anomaly characterized by abnormal arteriovenous connections and high-flow arteriovenous shunting.",
    ],
    histology: [
      "The lesions are histologically heterogeneous but primarily show beds of arterioles, capillaries, and venules set within a fibromyxomatous background, intermixed with larger-calibre arteries and thick-walled veins. In lesions with high-grade shunting, the arteries are tortuous, with fragmented mural elastic laminae, and the veins show irregular intima and/or mural fibrosis, reflective of elevated venous pressure and turbulence. The overlying skin often contains a small-vessel proliferation similar to that seen in ischemia and stasis. Superficial scalp AVMs, which are limited in depth by cranial bone, are histologically similar.",
    ],
    ihc: [],
    molecular: ["Unknown"],
    differential: [
      "Diagnosis typically requires careful clinicopathological correlation and radiological studies, particularly in small samples. Focal cellular small-vessel proliferations in AVM can mimic infantile hemangioma but are GLUT1-negative 28552538 .",
    ],
    criteria: [
      "Essential: superficial or deep vascular proliferation consisting of capillaries, arterioles, and venules associated with larger-calibre arteries and veins.",
    ],
    icdo: "0",
  },
  {
    name: "Lymphangioma (superficial lymphatic malformation)",
    family: "Vascular Tumors",
    subgroup: "Other Benign Vascular Tumors",
    behavior: "Benign",
    clinical: [
      "SLMs may be found in any area of the body surface, but they have a predilection for the axillary folds, shoulders, neck, proximal limbs, genital region, and tongue 831620 ; 5484713 ; 1268059 .",
      "Lesions appear as multiple small translucent or yellowish vesicles grouped in a plaque (with a frogspawn appearance). Frequently, there is a wart-like surface. Purpuric areas due to the presence of a blood vessel component are sometimes seen inside the lesion. The net-like SLMs consist of red to purplish macules with a finely reticulated pattern 26800314 . Most SLMs are accompanied by deeper malformed lymphatic vessels in the subcutis 629576 , and rare cases are associated with visceral involvement 8763441 ; 9563054 . SLM may also be associated with Maffucci syndrome 5440820  and Cobb syndrome 8864618 . Cystic hygroma (cystic lymphangioma) is a subtype of subcutaneous macrocystic lymphatic malformation located in the neck, armpits, and groin folds 14259790 . Lesions involving the posterior triangle of the neck may be associated with hydrops fetalis, Turner syndrome (45,X0 karyotype), diverse congenital malformations, several chromosomal aneuploidies, and fetal death 6888468 .",
      "Lymphangiomatosis is a rare disorder characterized by abnormal lymphatic vessels diffusely distributed within an anatomical region. Cases of lymphangiomatosis with bone and visceral involvement have a poor prognosis and high mortality 8494102 , whereas lesions involving only soft tissues and bone have an indolent course 5484713 . The recently described multifocal lymphangioendotheliomatosis with thrombocytopenia consists of an association of congenital SLM, gastrointestinal lymphatic malformations, and coagulopathy. Severe cases may evolve to massive consumptive coagulopathy (i.e. Kasabach–Merritt syndrome) 15148106 .",
      "SLMs are present at birth or appear during the first few months of life. There is no sex predilection.",
    ],
    definition: [
      "Lymphangiomas are benign vascular lesions composed of a localized collection of dilated lymphatic channels and may represent superficial lymphatic malformations (SLMs).",
    ],
    histology: [
      "SLMs involve the papillary dermis, although they sometimes extend to the reticular dermis and even subcutaneous tissue. Lesions consist of dilated thin-walled vascular structures lined by a single discontinuous layer of flattened endothelial cells 7316423 ; 831620 . Lumina of these vessels either appear empty or are filled with eosinophilic homogeneous lymphatic fluid and sometimes erythrocytes. Small delicate valves are a clue to the diagnosis. Foamy macrophages, multinucleated giant cells, and discrete lymphocytic infiltrate are sometimes present in the underlying dermis. Macrocystic and deeper lymphatic malformations appear as interconnected, irregular, dilated vessels in the subcutaneous fat, some with a thick muscular wall 6025577 . Endothelial cells lining SLM express CD31 and ERG as well as the lymphatic-specific endothelial markers podoplanin (D2-40), LYVE1, and PROX1 19013877 ; 15376314 ; 12853470 .",
      "Lymphangioma circumscriptum, also called microcystic lymphatic malformation, occurs as plaques of clear or hemorrhagic cystic spaces said to resemble frogspawn and consisting of superficial dilated lymphatic vessels up to 10 mm in diameter, with acanthosis of the overlying epidermis 26374361 ; 35739629 . It may be associated with deeper lymphatic malformations 35250235 .",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "VEGFR3 and its ligands VEGF-C and VEGF-D seem to be involved in lymphangiogenesis. Transgenic mice with VEGF-C hyperexpression have been shown to develop lymphatic hyperplasia 9162011 . Families with Milroy disease, a congenital inherited lymphatic disorder transmitted in an autosomal dominant fashion, show mutations in FLT4 (encoding VEGFR3) on chromosome 5q 12543715 ; 9817924 . Mutations in PROX1 10499794  and FOXC2 11078474 ; 17372167 ; 19760751  are also involved in the development of SLM.",
    ],
    differential: [
      "Classically, SLMs and angiokeratomas have been considered as separate entities. However, endothelial cells lining angiokeratoma vessels also have a lymphatic endothelial cell immunophenotype 25243395 ; 24666194 .",
    ],
    criteria: [
      "Essential: dilated thin-walled vascular structures lined by a single discontinuous layer of flattened endothelial cells involving superficial dermis.",
    ],
    icdo: "0",
  },
  {
    name: "Cutaneous epithelioid angiomatous nodule",
    family: "Vascular Tumors",
    subgroup: "Other Benign Vascular Tumors",
    behavior: "Benign",
    clinical: [
      "Cutaneous epithelioid angiomatous nodule affects a wide range of anatomical sites, with a predilection for the trunk and extremities. Mucosal surfaces may also be involved 14726818 ; 18212538 ; 25728975 .",
      "The lesions appear as solitary papules and nodules with erythematous to bluish discolouration, measuring < 15 mm (median: 5 mm). Rarely, the tumors are multiple. An eruptive presentation has also been reported 14726818 ; 21931284 ; 18212538 .",
      "The age of presentation has a wide range, with peak incidence in young to middle-aged adults (median age: 37 years) 14726818 ; 18212538 . There is no strong sex predilection.",
    ],
    definition: [
      "Cutaneous epithelioid angiomatous nodule is a distinctive benign cutaneous vascular proliferation with prominent epithelioid cell morphology.",
    ],
    histology: [
      "The tumors occur as well-circumscribed nodules in the superficial to mid dermis. They are composed of solid sheets of large polygonal epithelioid cells with abundant cytoplasm containing vesicular nuclei with small eosinophilic nucleoli. Intracytoplasmic vacuoles are frequently observed. Mitotic figures are seen, but atypical mitoses and nuclear pleomorphism are absent. Intralesional vascular channels are a focal feature. The tumors show hemosiderin deposition; an inflammatory cell infiltrate composed of lymphocytes, plasma cells, and eosinophils; and variable perilesional fibrosis. The overlying epidermis may be acanthotic with collarette formation. Rarely, there is involvement of deep dermis and superficial subcutis. Immunohistochemically, the tumor cells express endothelial cell markers (CD31, CD34, and factor VIII), and intralesional SMA-positive pericytes are present. Immunohistochemistry for FOSB is negative 28009608 .",
    ],
    ihc: [],
    molecular: ["The tumors are endothelial cell neoplasms."],
    differential: [
      "Differentiation from epithelioid angiosarcoma is important because of its aggressive behavior, and both tumors can occur in a similar clinical context. Epithelioid angiosarcoma is larger and involves deeper structures, with infiltrative margins; it is characterized by nuclear pleomorphism with numerous and atypical mitotic figures. tumor necrosis may also be present. Epithelioid hemangioendothelioma is characterized by epithelioid endothelial cells arranged in cords and strands in a chondromyxoid stroma rather than the solid sheet-like growth seen in epithelioid angiomatous nodule. Epithelioid hemangioma is multinodular and shows more vasoformative elements lined by epithelioid endothelial cells in a fibrous stroma; there is also a variably prominent inflammatory cell infiltrate with eosinophils and lymphoid follicles.",
    ],
    criteria: [
      "Essential: small bluish nodule or papule; nodular proliferation of epithelioid endothelial cells; lack of nuclear pleomorphism and atypical mitotic activity; preserved SMA-positive pericytic layer.",
    ],
    icdo: "0",
  },
  {
    name: "Postradiation atypical vascular lesion",
    family: "Vascular Tumors",
    subgroup: "Other Benign Vascular Tumors",
    behavior: "Benign",
    clinical: [
      "Most lesions appear on the anterior chest, but identical lesions may also occur at irradiation sites for cervical cancer, endometrial cancer, ovarian cancer, Hodgkin lymphoma, myeloma, melanoma, or vascular malformations 16006792 , which has resulted in multiple names for this lesion 2311281 ; 10564386 ; 3771862 ; 12360056 .",
      "Patients typically present with papules, small vesicles, or erythematous ecchymotic plaques with prominent telangiectasia.",
      "Most patients are elderly women. The latency period varies, but it is usually 2–3 years after radiotherapy 16006792 .",
    ],
    definition: [
      "Postradiation atypical vascular lesion (AVL) is a benign vascular proliferation arising in irradiated skin, with histopathological features mimicking angiosarcoma.",
    ],
    histology: [
      "AVL involves the upper and mid dermis and, rarely, the deep dermis. However, in contrast to radiation-induced angiosarcoma, the subcutis is spared. At scanning magnification, an inverted V-shaped architecture is the most common pattern. Less commonly, lesions are poorly defined, lacking the V-shaped pattern and involving only the mid dermis. The proliferation is composed of irregular, branching, anastomosing, thin-walled, empty lymphatic-like vascular channels lined by a single discontinuous layer of endothelial cells with little or no cytological atypia and often displaying hobnail morphology. In places, the vascular channels are back-to-back. Small intravascular papillae are frequently seen.",
      "Two histopathological patterns of AVL have been described: the lymphatic type (described above) and the very rare vascular type 18551753 . In the vascular type, there is proliferation of small capillaries usually lacking a lobular arrangement.",
      "Endothelial cells are positive for ERG, CD34, and CD31. They are also positive for podoplanin (D2-40), PROX1, and LYVE1, which gives support to a lymphatic lineage. The Ki-67 proliferation index is low 11859204 . In lesions of vascular type, endothelial cells express CD31 and CD34, but not lymphatic markers. KSHV/HHV8 is negative.",
      "AVL can coexist or progress to radiation-induced angiosarcoma, and superficially sampled radiation-induced angiosarcomas can be indistinguishable from AVLs (see below) 16006792 ; 16359542 ; 11442250 ; 24943869 ; 18551753 . Radiation-induced angiosarcoma shows endothelial MYC expression and a high Ki-67 proliferation index (> 10%), whereas AVLs are MYC-negative and show no substantial proliferation.",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "AVL is caused by radiation-induced endothelial cell proliferation, the mechanism for which is uncertain. Mutation analysis has demonstrated that AVLs show a low number of HRAS and TERT mutations, whereas postradiotherapy angiosarcomas show a high frequency of EGFR, TP53, HRAS, and TERT mutations 32043616 . MYC and FLT4 gene amplifications are not found in AVL.",
    ],
    differential: [
      "The main differential diagnosis is with radiation-induced angiosarcoma. In the latter there is cytological atypia, multilayering, mitotic activity; tumor cells are positive for MYC, and FISH shows MYC amplification 22121953 ; 20949568 ; 20008140 ; 21909081 ; 30251277 . Furthermore, strong cytoplasmic VEGFR3 (FLT4) staining and FLT4 gene amplification by FISH is more frequent in radiation-induced angiosarcoma that in AVL 25864386 . Hobnail hemangioma can be identical to AVL but the clinical presentation is different and the former is usually associated with prominent hemosiderin deposition. Other differential diagnoses include lymphatic malformations, benign lymphangioendothelioma, and Kaposi sarcoma.",
    ],
    criteria: [
      "Essential: postirradiation appearance of papules, vesicles, or plaques; irregular, branched, anastomosing, thin-walled vascular channels lined by a single discontinuous layer of endothelial cells with little or no cytological atypia and frequent hobnail appearance; involving predominantly the upper dermis.",
    ],
    icdo: "0",
  },
  {
    name: "Pseudomyogenic hemangioendothelioma",
    family: "Vascular Tumors",
    subgroup: "Intermediate Vascular Neoplasms",
    behavior: "Intermediate / uncertain",
    clinical: [
      "Pseudomyogenic hemangioendothelioma most commonly involves the lower extremities (55%); the upper extremities and trunk are less commonly affected (20% each), and the head and neck are rarely involved (5%) 12502927 ; 1371711 ; 23381465 ; 21263239 .",
      "Patients present with painless or painful nodules; ulceration may be present. In about 60% of cases the disease is multifocal, involving multiple tissue planes, most commonly the skin and subcutis, but it may also involve skeletal muscle and bone 12502927 ; 21263239 ; 1371711 ; 23381465 .",
      "Young men (mean age: 30 years) are most commonly affected (M:F ratio: 3.5:1) 21263239 .",
    ],
    definition: [
      "Pseudomyogenic hemangioendothelioma is a rarely metastasizing endothelial neoplasm that often presents as multiple nodules in different tissue planes and histologically mimics a myoid tumor or epithelioid sarcoma.",
    ],
    histology: [
      "Pseudomyogenic hemangioendotheliomas are variably composed of infiltrative sheets and fascicles of spindled (most commonly) to epithelioid cells with dense, eosinophilic cytoplasm 21263239 ; 12502927 . Atypia is usually mild, and tumor nuclei are vesicular with small nucleoli. Significant nuclear atypia may be seen in about 10% of cases 21263239 . Admixed neutrophils are seen in approximately 50%.",
      "By immunohistochemistry, they are positive for keratins (most often with AE1/AE3 clones, less often MNF116), FLI1, ERG, and FOSB, but negative for CD34 21263239 ; 12502927 ; 27515856 ; 28009608 . About 50% are positive for CD31, and focal expression of SMAs is seen in as many as one third of cases. SMARCB1 expression is retained 21263239 .",
    ],
    ihc: [],
    molecular: [
      "Detection of FOSB rearrangement may be helpful.",
      "Pseudomyogenic hemangioendothelioma has rearrangements of FOSB, including SERPINE1::FOSB, ACTB::FOSB, WWTR1::FOSB, CLTC::FOSB, and EGFL7::FOSB 24374978 ; 30459475 ; 30256258 ; 31243110 ; 32749039 ; 33550637 . This results in upregulation, with FOSB acting as an active transcription factor capable of its own regulation 24374978 ; 29511030 . tumors with ACTB::FOSB fusions are more likely to be solitary 30256258 . tumors with EGFL7::FOSB may be more aggressive 33550637 .",
    ],
    differential: [],
    criteria: [
      "Essential: fascicles or sheets of spindled to epithelioid cells with dense eosinophilic cytoplasm, vesicular nuclei, and expression of ERG and AE1/AE3.",
      "Desirable: demonstration of FOSB expression or FOSB rearrangement.",
    ],
    icdo: "1",
  },
  {
    name: "Epithelioid hemangioendothelioma",
    family: "Vascular Tumors",
    subgroup: "Intermediate Vascular Neoplasms",
    behavior: "Malignant (intermediate-grade spectrum)",
    clinical: [
      "EHE rarely involves the skin, with no site predilection 9855348 ; 9130982 .",
      "Most are nondescript nodules, sometimes with a thickened epidermis 25782038 ; 9855348 ; 25386269  or ulceration 24354555 .",
      "EHE most often arises in middle-aged adults, with a slight female predominance 25782038 ; 9130982 ; 9855348 ; 25386269 .",
    ],
    definition: [
      "Epithelioid hemangioendothelioma (EHE) is a malignant endothelial neoplasm composed of epithelioid cells within a myxohyaline stroma; almost all have a WWTR1::CAMTA1 fusion. A distinctive subtype composed of epithelioid cells with abundant cytoplasm and solid, nested, and/or vasoformative growth has a YAP1::TFE3 fusion.",
    ],
    histology: [
      "EHE is composed of relatively bland epithelioid cells, often with intracytoplasmic vacuoles, arranged in cords and nests, embedded in a variably myxohyaline stroma 7093931 . Vasoformative architecture is not seen in conventional EHE. The EHE subtype with YAP1::TFE3 fusion has tumor cells with abundant eosinophilic cytoplasm, arranged in a solid or nested growth pattern, often forming vascular spaces 23737213 ; 34381186 .",
      "Immunohistochemically, EHE is positive for CD31, FLI1, ERG, and (less often) CD34. Low-molecular-weight cytokeratins are expressed in 20–30% of cases 11014572 ; 24986479 ; 34381186 . EHE with WWTR1::CAMTA1 shows diffuse strong nuclear expression of CAMTA1 26414223 ; 24986479 . tumors with YAP1::TFE3 fusion show diffuse nuclear TFE3 expression 23737213 ; however, staining for TFE3 can also be seen in tumors with WWTR1::CAMTA1 fusion 26414223 ; 24986479 . Loss of expression of the C-terminus of YAP1 is more specific for YAP1::TFE3 fusions 34148063 .",
    ],
    ihc: [],
    molecular: [
      "Identification of WWTR1::CAMTA1 and YAP1::TFE3 gene fusions is useful for subtyping.",
      "More than 90% of EHEs have t(1;3) with WWTR1::CAMTA1 fusion 21584898 ; 21885404 ; a rare subtype has a YAP1::TFE3 fusion 23737213 ; 34381186 .",
    ],
    differential: [],
    criteria: [
      "Essential: conventional EHE is composed of cords or nests of epithelioid cells with cytoplasmic vacuolization within a variably myxohyaline stroma; EHE with YAP1::TFE3 fusion shows solid or nested growth, often with well-formed vascular channels, lined by epithelioid cells with abundant eosinophilic cytoplasm.",
      "Desirable (in selected cases): CAMTA1 expression by immunohistochemistry and/or WWTR1::CAMTA1 fusion; TFE3 overexpression by immunohistochemistry and/or TFE3 rearrangement (YAP1::TFE3 fusion).",
    ],
    icdo: "3",
  },
  {
    name: "Hobnail hemangioendotheliomas",
    family: "Vascular Tumors",
    subgroup: "Intermediate Vascular Neoplasms",
    behavior: "Intermediate / uncertain",
    clinical: [
      "PILA most often involves the proximal extremities, especially the buttock or thigh 10971050 ; 10478659 ; 10197456 ; 24063649 ; 29423171 . RHE usually occurs in the skin and subcutaneous tissue of the distal extremities, particularly the leg 21915027 ; 8291650 ; 8764941 ; 9432675 ; 16176302 .",
      "PILA manifests as a slow-growing asymptomatic cutaneous induration, plaque, or nodule. RHE manifests as a red/bluish slow-growing plaque or nodule, usually < 30 mm.",
      "All are rare, with < 50 reported cases of PILA 5343389 ; 10478659  and RHE 21915027 ; 8291650 ; 8764941 ; 9432675 ; 16176302 . PILA typically occurs in infants, with a slight female predominance (M:F ratio: ~0.7:1). RHE usually affects young adults or children, without a sex predilection.",
    ],
    definition: [
      "Papillary intralymphatic angioendothelioma (PILA) and retiform hemangioendothelioma (RHE) are uncommon, rarely metastasizing vascular neoplasms composed at least in part of hobnail endothelial proliferations with a lymphatic endothelial phenotype.",
    ],
    histology: [
      "Cytologically, PILA and RHE are identical, being composed of darkly staining columnar or hobnail endothelial cells. PILA appears as a poorly delineated proliferation of slit-like or dilated lymphatic channels, sometimes with an associated cavernous lymphatic malformation, whereas RHE is typified by an infiltrative growth of elongated, branching vascular channels, resembling the rete testis. Associated hyaline fibrosis is often present. Both PILA and RHE may contain intraluminal papillary tufts with a fibrotic core, lined by hobnailed endothelial cells, which are more prominent in PILA 21915027 . A lymphocytic infiltrate is often present in both.",
    ],
    ihc: [
      "The hobnail endothelial cells of PILA and RHE express pan-endothelial markers (e.g. CD31, ERG, FLI1; less often CD34) and lymphatic endothelial markers (e.g. podoplanin, VEGFR3, and PROX1 10478659 ; 10971050 ; 19674202 ; 22067331 ; 18212541 . Loss of expression of YAP1 C-terminus is seen in the tumors with YAP1 rearrangements 34148063 . Limited synaptophysin expression may also be seen in PILA and RHE, a finding which in combination with shared YAP1::MAML2 fusions supports a relationship between these hobnailed hemangioendotheliomas and composite hemangioendothelioma.",
    ],
    molecular: [
      "PILA pathogenesis is unknown. Subsets of RHE demonstrate YAP1 rearrangements, most often YAP1::MAML2 fusions 32991341 .",
    ],
    differential: [],
    criteria: [
      "Essential: darkly staining hobnail endothelial cells, typically expressing lymphatic markers; slit-like and dilated lymphatic spaces in PILA; branching vascular structures with surrounding fibrosis in RHE.",
    ],
    icdo: "1",
  },
  {
    name: "Composite hemangioendothelioma",
    family: "Vascular Tumors",
    subgroup: "Intermediate Vascular Neoplasms",
    behavior: "Intermediate / uncertain",
    clinical: [
      "CHE most often occurs distally, especially on the hands and feet or the head and neck 10716148 ; 18190450 ; 26050262 ; 28731049 ; 17895759 .",
      "The lesions are longstanding (up to several decades) reddish-blue nodules or plaques 10716148 . Some patients have a history of lymphedema.",
      "CHE affects young adults, with a female predominance; infants and children are rarely affected 17895759 ; 10716148 ; 21233686 .",
    ],
    definition: [
      "Composite hemangioendothelioma (CHE) is a locally aggressive, rarely metastasizing endothelial neoplasm composed of an admixture of components, each resembling other vascular lesions. Neuroendocrine marker expression may be present.",
    ],
    histology: [
      "There is a complex and variable admixture of histological patterns, including retiform, spindle cell, epithelioid, lymphangioma, hemangioma, and even well-differentiated angiosarcoma–like components 10716148 . They most often consist of areas identical to retiform hemangioendothelioma, juxtaposed to foci somewhat resembling epithelioid hemangioendothelioma 17895759 . Neuroendocrine CHE is characterized by a distinctive admixture of retiform hemangioendothelioma–like areas, epithelioid hemangioendothelioma–like areas, and a component with a striking nested appearance, as well as by expression of neuroendocrine markers (typically synaptophysin).",
    ],
    ihc: [
      "The endothelial markers CD31, CD34, FLI1, and ERG are positive. CHE with YAP1::MAML2 fusions show loss of expression of YAP1 C-terminus 34148063 . Neuroendocrine CHE is consistently positive for synaptophysin but usually negative for chromogranin 28731049 .",
    ],
    molecular: [
      "Not clinically relevant",
      "CHEs display endothelial differentiation. A subset of tumors (27% in one study) harbour YAP1::MAML2 gene fusions 32991341 ; 34791601 . PTBP1::MAML2 and EPC1::PCH2 gene fusions have been identified in 3 cases and 1 case of neuroendocrine CHE, respectively 28731049 ; 34862698 .",
    ],
    differential: [
      "The differential diagnosis includes retiform hemangioendothelioma, epithelioid hemangioendothelioma, and angiosarcoma. CHEs showing foci resembling high-grade angiosarcoma are extremely rare, and this diagnosis should be made only after conventional angiosarcoma is rigorously excluded on clinical and morphological grounds.",
    ],
    criteria: [
      "Essential: presence of at least two morphologically distinct vascular tumor elements, most often closely resembling retiform hemangioendothelioma and epithelioid hemangioendothelioma.",
      "Note: Cases arising in pre-existing (lymphatic) vascular malformations must show at least two additional discrete endothelial tumor components.",
    ],
    icdo: "1",
  },
  {
    name: "Kaposi sarcoma",
    family: "Vascular Tumors",
    subgroup: "Intermediate Vascular Neoplasms",
    behavior: "Malignant, often indolent",
    clinical: [
      "The skin is the principal site of involvement. Lesions occur most commonly on the lower limbs, followed by the face and the genitalia. However, mucosal involvement (especially of the oral cavity) is common. Classic KS tends to affect the lower extremities of elderly non–HIV-infected men. Visceral KS in the absence of cutaneous lesions is encountered more frequently among AIDS-related cases [[Pantanowitz L, Stebbing J, Dezube BJ. Overview of Kaposi sarcoma. In: Pantanowitz L, Stebbing J, Dezube BJ, editors. Kaposi sarcoma: a model of oncogenesis. Kerala (India): Research Signpost; 2010. pp. 1–40.]].",
      "Four clinicopathological subtypes are recognized: classic KS, endemic African KS, AIDS-associated KS, and iatrogenic (transplant-related) KS. The spectrum of conventional cutaneous lesions among all four of these clinicopathological groups encompasses patches, plaques, and nodules; these tend to have a purplish appearance, and their sizes can range from small to several centimetres. Lower limb involvement may be accompanied by painful lymphedema. Smaller ulcerated nodules closely resemble pyogenic granulomas. Rarely, verrucous or bullous lesions occur. KS flare may develop when HIV-positive patients are first introduced to antiretroviral therapy.",
      "KS can affect individuals of any age or sex, but it occurs most commonly in adults and shows a predilection for men. However, a high proportion of children and women are affected by AIDS-associated KS in Africa [[Pantanowitz L, Stebbing J, Dezube BJ. Overview of Kaposi sarcoma. In: Pantanowitz L, Stebbing J, Dezube BJ, editors. Kaposi sarcoma: a model of oncogenesis. Kerala (India): Research Signpost; 2010. pp. 1–40.]] 28324233 . The estimated worldwide crude and age-standardized incidence rates of KS are both 0.6 cases per 100 000 person-years, with an M:F ratio of 1.9:1. However, there are striking geographical differences, with the highest crude and age-standardized incidence rates (of 8.8 and 11.2 cases per 100 000 person-years, respectively) seen in eastern Africa. The incidence of KS is highest among men who have sex with men (5.7 per 100 person-years) 15385736 .",
    ],
    definition: [
      "Kaposi sarcoma (KS) is a locally aggressive KSHV/HHV8-associated vascular proliferation. It usually manifests with multiple cutaneous lesions, but it may also involve mucosal sites, lymph nodes, and visceral organs.",
    ],
    histology: [
      "Patch-stage lesions are characterized by abnormal vessels or subtle endothelial cell proliferation with dermal collagen dissection, in particular around the skin adnexa; the promontory sign may also be seen 549492 . Plaque-stage KS is characterized by abnormal vessels, greater cellularity, and a spindle cell proliferation. Additional features include slit-like spaces containing erythrocytes, surrounding spindled cells, siderophages, and occasional cells containing small intracytoplasmic hyaline globules. Subcutaneous extension can occur. Nodular KS lesions show greater cellularity and resultant tumor formation, with haphazardly intersecting fascicles of spindled cells, often accompanied by a plasma cell–predominant inflammatory infiltrate. Mitoses and mild atypia can be seen.",
      "The lesional cells show immunoreactivity for the KSHV/HHV8-associated protein LANA1, as well as CD34, CD31, and podoplanin (recognized by D2-40). Lesions that have regressed after chemotherapy or antiretroviral therapy show increased microvascular density around native dermal vessels 18655700 .",
      "Numerous less-common histopathological patterns have been described (see #34362Table 7.01), including lymphangioma-like KS and anaplastic KS 18655700 ; 20075709 . Rare AIDS-associated cases can harbour an opportunistic pathogen or concomitant pathology (e.g. intravascular lymphoma) 21789262 ; 29532696 ; 31361614 .",
    ],
    ihc: [],
    molecular: [
      "KSHV/HHV8 is detectable in lesional tissue by PCR and in situ hybridization 7489408 .",
      "Whether KS qualifies as a true sarcoma is still a matter of debate 17623796 . There is increasing evidence that early stages are oligoclonal and can regress, while later clonal selection leads to progression 35267506 . KSHV/HHV8 infection alone is insufficient for KS oncogenesis; host immune dysfunction, genetic factors, and environmental factors also play a role. Initially, there is infection by KSHV/HHV8 of resident and circulating endothelial cells and mononuclear inflammatory cells. LANA1 upregulates viral homologues of FLICE inhibitory protein (vFLIP) and cyclin D (viral cyclin). Viral oncoproteins (e.g. vIL6) and antiapoptotic proteins (e.g. LANA1, vIAP, and vBCL2) potentiate the proliferation of infected endothelial cells and immune evasion, while expression of matrix metalloproteinases and proangiogenic molecules leads to migration of infected endothelial cells. An inflammatory phase follows, with secretion of proinflammatory cytokines and chemotaxis of T helper 2 (Th2) inflammatory cells. Subsequent tumorigenesis involves activation of autocrine and paracrine pathways, secretion of stimulatory molecules by inflammatory cells, induction of angiogenesis (e.g. via vGPCR-induced upregulation of VEGF), and spindle cell proliferation. There is reprogramming of blood vessel endothelial cells and a resultant expression profile more akin to that of lymphatic endothelium 17623796 ; 17623793 . In one study, comparative genomic hybridization revealed a recurrent gain at 11q13, with amplification of FGF4 and FGF3 (INT2) identified on subsequent interphase FISH 10786811 . Early disease is associated with clonal Y chromosome loss, while copy-number changes involving chromosomes 16, 17, 21, X, and Y occur during the development of late (nodular) KS lesions 16954721 .",
    ],
    differential: [
      "A wide differential diagnosis exists [[Wadee R, Grayson W. Cutaneous Kaposi sarcoma and its mimics. Diagn Histopathol. 2022 Jan;28(1):38–52. doi:10.1016/j.mpdhp.2021.10.005.]]. The differential diagnoses of the more conventional histopathological patterns of cutaneous KS and the less common histopathological patterns are listed in #34125Table 7.02 and #34362Table 7.01 , respectively.",
    ],
    criteria: [
      "Essential: proliferation of small, slit-like vessels lined by mildly atypical cells and surrounded by bland spindled cells; extravasated erythrocytes and a patchy lymphoplasmacytic infiltrate in the early stage; nuclear KSHV/HHV8 expression (by immunohistochemistry), where available, particularly in early disease.",
    ],
    icdo: "3",
  },
  {
    name: "Cutaneous angiosarcoma",
    family: "Vascular Tumors",
    subgroup: "Intermediate Vascular Neoplasms",
    behavior: "Malignant",
    clinical: [
      "Primary cutaneous angiosarcoma usually occurs in elderly patients on sun-damaged skin of the head and neck 21190880 ; 26276214 ; 28916596 ; 32829071 . Secondary (radiation-induced) angiosarcoma most commonly involves the breast or chest wall following breast-conserving surgery and radiation for carcinoma 15166670 ; 16006792 ; 31448482 . Lymphedema-associated angiosarcoma/lymphangiosarcoma may develop in the ipsilateral arm after radical mastectomy or in other settings of longstanding lymphedema 22682884 ; 21518378 ; 32829071 ; 23024552 .",
      "Early lesions can resemble ecchymoses/hemangiomas, non-vascular tumors, or inflammatory diseases. With progression they often develop into erythematous to violaceous plaques/nodules 14534889 ; 32829071 . Radiation-associated angiosarcomas have an average latency of approximately 5–8 years 15166670 ; 16006792 ; 32043616 . Lymphedema-associated lesions have an average latency of > 10 years 26617830 ; 22682884 ; 26312725 .",
      "Cutaneous angiosarcoma usually arises in elderly patients on sun-damaged skin of the head and neck 21190880 ; 26276214 ; 28916596 ; 32829071 . It also occurs after surgery and radiation therapy, usually for breast cancer, and in the setting of chronic lymphedema 15166670 ; 16006792 ; 22682884 .",
    ],
    definition: [
      "Angiosarcoma is an aggressive malignant vascular neoplasm that variably recapitulates the morphological and immunohistochemical features of endothelial cells.",
    ],
    histology: [
      "There is a wide range of histopathological features, and a given tumor may have a combination of different patterns 15166670 ; 16006792 ; 25330326 ; 18162773 ; 21164288 ; 32829071 ; 20175826 ; 7962828 . Classically, angiosarcoma is composed of architecturally complex vessels lined by hyperchromatic endothelial cells with multilayering of tumor cells in the vascular lumina. tumors may also have back-to-back sieve-like vessels, a solid spindle cell pattern, epithelioid morphology, granular cell morphology, and a clear/foam cell appearance. In postradiation angiosarcoma, distinctive capillary lobule–like and radiation dermatitis–like patterns have been described 16121049 ; 28169467 .",
      "Immunohistochemically, angiosarcoma is positive for CD31, CD34, FLI1, and ERG, and most are positive for podoplanin (D2-40) 7512718 ; 23518636 ; 21317715 ; 22716285 . Radiation- and lymphedema-associated angiosarcomas are almost always positive for MYC, but can be occasionally negative 22121953 ; 21909081 ; 27780597 . Primary angiosarcomas are rarely positive for MYC 24091875  Radiation-induced angiosarcomas also have frequent loss of H3 p.K27me3 expression 28983701 . Epithelioid angiosarcomas may be positive for cytokeratin and EMA 21164288 .",
    ],
    ihc: [],
    molecular: [
      "Radiation- and lymphedema-associated angiosarcomas have amplification of MYC in > 90% of cases; FISH is a useful diagnostic technique 20949568 ; 21909081 ; 22121953 ; 24457083 ; 33128474 . A subset of radiation-induced angiosarcomas have FLT4 amplification 20949568 . Primary cutaneous angiosarcoma rarely has MYC amplification, and molecular testing plays no role in this setting 24091875 .",
      "Angiosarcomas are genetically heterogeneous. Most (primary and secondary) cases harbour complex genetic profiles, lacking recurrent chromosomal changes and containing copy-number alterations and mutations encoding angiogenic factors or endothelial receptors 20217954 ; 25231439 ; 19723655 . There is also upregulation of genes related to angiogenesis and vascular-specific receptor tyrosine kinases (including TIE1, TEK, KDR [encoding VEGFR2], and FLT4 [encoding VEGFR3]) compared with other sarcomas 19723655 ; 18041747 . Some alterations are more frequent in radiation-associated angiosarcomas, but there is some overlap with primary neoplasms 19723655 ; 20949568 . Angiosarcoma of the head, neck, face, and scalp is associated with a high tumor mutation burden and a dominant ultraviolet (UV) radiation damage mutation signature, which suggests that for the subset of patients in this setting, UV radiation damage may be a causative factor and that immune checkpoint inhibition may be beneficial 32042194 . High-level MYC gene amplifications (at 8q24) are present in almost all angiosarcomas associated with irradiation and chronic lymphedema, and rarely (< 10%) in primary angiosarcomas (usually of the breast and bone) 20949568 ; 20008140 ; 24329959 ; 22121953 ; MYC encodes a transcription factor that potently affects cell proliferation and has proangiogenic functions via miR-17–92 cluster activation 16878133 ; 34958509 . Less frequently, secondary angiosarcomas are associated with coamplification of FLT4 (encoding VEGFR3) at 5q35 20949568  and MAML1 (a NOTCH pathway effector); these coexist with MYC amplifications 22383169 ; 34958509 . Recurrent somatic mutations involving angiogenic signalling pathways (e.g. in KDR, PTPRB, and PLCG1) have been described in approximately 40% 10815805 ; 19451274 ; 24633157 . Rare mutations also occur in RAS genes, PIK3CA, TP53, FLT4, and TIE1 19723655 ; 22648906 ; 24633157 ; 34958509 . A small subset of angiosarcomas are associated with CIC gene abnormalities; these typically occur in younger patients and have inferior disease-free survival 26735859 . Recurrent gene fusions are extremely rare in angiosarcoma, with primary CIC-rearranged angiosarcoma documented in 3 young adults, with tumors showing epithelioid to rhabdoid morphology and lacking vasoformation 26735859 ; missense CIC mutations can occur with or without CIC fusions, typically arising in primary neoplasms 26735859 ; 34958509 .",
    ],
    differential: [],
    criteria: [
      "Essential: vasoformative channels with multilayering of atypical endothelial cells or sheet-like growth of atypical endothelial cells; nuclear atypia and mitotic activity; CD31 and ERG expression by immunohistochemistry.",
    ],
    icdo: "3",
  },
  {
    name: "Glomus tumor",
    family: "Pericytic and Perivascular Tumors",
    subgroup: "Pericytic and Perivascular Tumors",
    behavior: "Benign",
    clinical: [
      "Glomus tumors are most frequently located in the distal extremities, particularly in the subungual regions of the hands and feet 11145243 ; 14080348 ; 20530151 ; 35137564 ; rarely, other sites are involved 27065433 ; 27867327 ; 27015262 ; 34660105 . Glomuvenous malformation is more common on the trunk 30677819 . Rare malignant cutaneous glomus tumors have been reported in a variety of locations 18422692 ; 11145243 ; 33344314 .",
      "Most cutaneous glomus tumors come to clinical attention as solitary, small (< 10 mm), painful nodules or plaques, with a pink to blue hue 28163461 ; 28435574 ; 28116265 ; 34953423 ; 34900456 . Glomuvenous malformations are often multiple or familial 30677819 .",
      "Most glomus tumors occur in the skin 21187877 ; 28203512 . Digital and subungual lesions account for 1–4% of benign hand tumors and have a slight female predominance 34609426 . Glomus tumors are most common in the fourth to sixth decades of life 25614464 ; pediatric tumors are very rare 28294349 .",
    ],
    definition: [
      "Glomus tumors are mesenchymal neoplasms composed of cells resembling the modified smooth muscle cells of the normal glomus body.",
    ],
    histology: [
      "Glomus cells are small, uniform, and round, with a central round nucleus, amphophilic to lightly eosinophilic cytoplasm, and a sharp cellular outline with peripheral basal lamina. Oncocytic, epithelioid, myxoid, and hyalinized patterns are recognized 7672784 ; 3038728 . Solid glomus tumors, which account for approximately 75% of all cases, are composed of nests of glomus cells surrounding capillary-sized vessels. Small cuffs of glomus cells are often seen around small vessels located outside the main mass. Glomuvenous malformations, which account for 20% of cases, feature dilated vascular channels with intervening small clusters of glomus cells. Glomus tumors may also contain spindled cells resembling smooth muscle (glomangiomyoma) or a branching, haemangiopericytoma-like vasculature (glomangiopericytoma) 9591720 . Glomangiomatosis is an extremely rare pattern of glomus tumor with an overall architectural resemblance to diffuse angiomatosis 11145243 ; 15372213 ; 19267531 , but containing nests of glomus cells within vessel walls. Symplastic tumors show striking nuclear atypia in the absence of other worrisome features 11145243 ; 19602065 ; 25051107 .",
      "Histologically and/or clinically malignant glomus tumors are extremely rare 11145243 ; 22228777 ; 27772590 . The diagnosis of malignant glomus tumor should be reserved only for tumors showing marked nuclear atypia (with any level of mitotic activity) and/or atypical mitotic figures. A component of pre-existing benign-looking glomus tumor is often present. Malignant glomus tumors may retain an overall architectural resemblance to normal glomus tumor (but with malignant-looking round cells), or they may consist of a spindled component resembling leiomyosarcoma or fibrosarcoma. In the absence of a clear-cut benign precursor, immunohistochemical demonstration of SMA and pericellular collagen IV is required for diagnosis of round cell forms of malignant glomus tumor, in the absence of a clear-cut benign precursor.",
      "Glomus tumors that show atypical features but lack severe nuclear atypia or atypical mitotic activity should instead be classified as glomus tumors of uncertain malignant potential.",
      "Glomus tumors of all types typically express SMA, h-caldesmon, and pericellular collagen IV 11145243 .",
    ],
    ihc: [],
    molecular: [
      "Demonstration of MIR143::NOTCH1, MIR143::NOTCH2, or MIR143::NOTCH3 fusions may be helpful in selected cases.",
      "Multiple familial cutaneous glomus tumors appear to have an autosomal dominant pattern of inheritance 10727310 ; 8141540  and are caused by inactivating loss-of-function mutations in GLMN (1p22.1), which encodes the protein glomulin 11145243 ; 15689436 . Rare glomus tumors are associated with neurofibromatosis type 1 19738042 ; 23849732 ; 25426397 . Sporadic glomus tumors often show rearrangements involving MIR143 and NOTCH genes 23999936 ; 32604167 . BRAF p.V600E mutations have been reported in small numbers of histologically malignant tumors 22317887 ; 28834810 .",
    ],
    differential: [],
    criteria: [
      "Essential: monomorphic round to epithelioid cells with centrally placed, round nuclei and well-defined cell borders, arranged in perivascular nests; malignant glomus tumors may usually be recognized by an adjacent benign component and show either a spindle or round cell sarcomatous phenotype; in malignant examples lacking a benign component, immunohistochemistry and/or molecular diagnosis is required for a definitive diagnosis.",
      "Desirable: immunohistochemical expression of SMA, h-caldesmon, and collagen IV; demonstration of NOTCH gene rearrangements in malignant cases.",
    ],
    icdo: "0",
  },
  {
    name: "Myopericytoma",
    family: "Pericytic and Perivascular Tumors",
    subgroup: "Pericytic and Perivascular Tumors",
    behavior: "Benign",
    clinical: [
      "The distal extremities are the main sites of involvement, followed by the proximal extremities, head and neck (including the oral cavity), and trunk. Most lesions are dermal-based or subcutaneous, while deep lesions are rare, and visceral and intracranial involvement is very rare 16330949 ; 26068635 . Myointimoma of the glans penis may fall within the spectrum of these lesions.",
      "Most arise as solitary painless dermal or subcutaneous nodules. The tumor may occur over a wide age range, from childhood to old age. Multifocal lesions affecting the same or different anatomical sites are uncommon 16330949 . Rare intravascular lesions may be painful 21355959 .",
      "No epidemiological data are available.",
    ],
    definition: [
      "Myopericytoma is a benign neoplasm with perivascular myoid cell differentiation.",
    ],
    histology: [
      "Myopericytoma is a well-circumscribed but unencapsulated nodule of cytologically bland, oval to spindled cells with concentric multilayered perivascular growth. The cytoplasm is eosinophilic, with myoid features. The nuclei are round to ovoid. The cellularity varies greatly, as does the vasculature. The presence of thin-walled communicating vessels may mimic solitary fibrous tumor, while lesions with thicker vessels result in an appearance reminiscent of angioleiomyoma. Cellular solid patterns are similar to myofibroma 16330949 . Rare subtypes include diffuse plexiform growth (myopericytomatosis), intramural growth (within vascular walls), and intravascular myopericytoma. Uncommon features include hyalinization, metaplastic bone, ischemic necrosis, and degenerative atypia. Myopericytoma usually stains for α-SMA and h-caldesmon, and occasionally for MSA, but desmin immunoreactivity is usually absent or focal 27047931 ; 16330949 .",
      "Myopericytoma was considered to form a spectrum with myofibroma, angioleiomyoma, and glomus tumor, but recent studies suggest these are rather distinct at the molecular level, albeit having significantly overlapping morphological and phenotypic features 26558691 .",
      "The differential diagnosis includes myofibroma, angioleiomyoma, and solitary fibrous tumor.",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "Myopericytoma probably differentiates towards myopericytes, intermediate cells between pericytes of Zimmermann and true smooth muscle cells 16330949 . Neointimal (myointimal) cells may contribute to tumorigenesis 21955312 .",
      "A subset of myopericytomas (15%) harbour BRAF mutations, but available data are still limited 25063326 ; 27776010 . Pericytoma-like neoplasms with recently identified gene fusions such as ACTB::GLI and SRF::RELA are probably unrelated to myopericytoma 15111311 ; 28248815 . The few cases examined for PDGFRB mutations showed contradictory data 27776010 ; 28505006 .",
    ],
    differential: [],
    criteria: [
      "Essential: a dermal or subcutaneous nodule with concentric perivascular growth of bland myoid cells.",
    ],
    icdo: "0",
  },
  {
    name: "Myofibroma and myofibromatosis",
    family: "Pericytic and Perivascular Tumors",
    subgroup: "Pericytic and Perivascular Tumors",
    behavior: "Benign; multicentric disease may have visceral involvement",
    clinical: [
      "Solitary lesions originate in the skin or subcutis of the head and neck, upper extremities, or trunk. Deep sites (muscle and bones) are uncommonly affected 22486319 . Multicentric disease has a similar site distribution to solitary myofibroma. The generalized form of the disease shows concomitant visceral involvement 22486319 .",
      "Myofibroma occurs in three clinicopathological settings: solitary, multicentric, and generalized. The solitary form of the disease has a male predilection, whereas the multicentric form predominantly affects females. Clinically, patients with myofibroma usually present with a well-circumscribed but unencapsulated violaceous superficial dermal or subcutaneous nodule measuring a few millimetres to several centimetres in maximum diameter, with a firm consistency 22486319 .",
      "Myofibroma represents 12% of pediatric soft tissue lesions. The age range is wide, spanning from the neonatal period (including congenital lesions) to 70 years; however, 90% of cases are pediatric, and 65% occur by the age of 2 years 22486319 . Multicentric lesions are exclusively pediatric.",
    ],
    definition: [
      "Myofibroma and myofibromatosis are benign mesenchymal neoplasms of presumed myofibroblastic histogenetic origin/phenotype.",
    ],
    histology: [
      "Myofibroma is characterized by a biphasic growth, with alternating bundles of primitive, darker-staining, small rounded cells and plump spindled mesenchymal cells. These are associated with numerous thin-walled haemangiopericytoma-like vessels and mature eosinophilic plump spindled myoid cells with frequent myointimal-like nodular proliferations (vascular balls). Foci of calcification may be present. Mitotic activity is usually low but may be increased. Foci of ischemic-type coagulation necrosis can be seen. The neoplastic cells stain diffusely for α-SMA, but h-caldesmon is absent or only focally positive. Myofibroma is usually desmin-negative.",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "Although of presumptive myofibroblastic origin 8067513 , myofibroma shares with other perivascular myoid cell neoplasms features of modified myopericytes 16330949 . The presence of vascular balls and myointimal proliferations argues for an analogy to other perivascular myoid cell neoplasms and may explain the morphological overlap between these lesions 9591720 .",
      "Germline mutations in PDGFRB (89%) and NOTCH3 (11%) have been detected in the familial disease. Sporadic solitary lesions have frequent somatic PDGFRB mutations 23731537 ; 23731542 ; 27776010 . PDGFRB mutation types differ between familial and non-familial (sporadic) myofibromatosis cases. SRF rearrangements have been documented in tumors with high cellularity 32529351 .",
    ],
    differential: [],
    criteria: [
      "Essential: biphasic pattern with myoid cells forming fascicles and more primitive cells associated with haemangiopericytoma-like vasculature; absent atypia.",
      "Desirable: identification of PDGFRB mutation in challenging cases, and SRF rearrangement in cellular cases.",
    ],
    icdo: "0",
  },
  {
    name: "Angioleiomyoma",
    family: "Pericytic and Perivascular Tumors",
    subgroup: "Pericytic and Perivascular Tumors",
    behavior: "Benign",
    clinical: [
      "tumors have a propensity to arise in the skin and subcutis of the extremities (particularly around the knee), followed by the head and neck (including oral and sinonasal mucosal sites) 8245243 ; 6722737 ; 17270242 ; 28058733 ; 34463813 ; 30148476 ; 26047608 ; 30208227 ; 15311559 . Rare sites, including subfascial, intraosseous, and CNS, as well as others, have been described 21940181 ; 32058118 ; 34057005 ; 35128202 ; 10794558 . The most common solid subtype typically arises in the lower extremities. The less common venous subtype more often involves the head and neck region, while the rare cavernous form most often occurs in the upper extremities 6722737 .",
      "The lesions are solitary, small, firm, circumscribed, and slow-growing nodules. Approximately half of angioleiomyomas are painful 8025650 ; 17270242 ; 6722737 .",
      "Angioleiomyomas affect a wide age range, with peak incidence in the fourth through sixth decades of life 15311559 ; 6722737 . The solid subtype is significantly more common in women, whereas the venous and cavernous subtypes demonstrate a slight male predominance. The overall M:F ratio is 0.7:1 6722737 .",
    ],
    definition: [
      "Angioleiomyoma is a benign mesenchymal tumor that typically arises in the dermis or subcutis. tumors are composed of thick-walled vessels surrounded by well-differentiated perivascular bundles of smooth muscle. It is a member of the perivascular myoid family of tumors and is on a morphological continuum with myopericytoma.",
    ],
    histology: [
      "All angioleiomyomas are composed of bundles of bland, well-differentiated smooth muscle surrounding blood vessels of varying calibre. Mitotic activity is inconspicuous. Three subtypes of angioleiomyoma have been described based on predominant vascular morphology: solid, venous, and cavernous.",
      "The solid subtype is composed of compact bundles of smooth muscle surrounding compressed, slit-like vessels.",
      "Venous-subtype tumors are made up of thick-walled vessels, with smooth muscle from blood vessel walls blending with intervascular smooth muscle bundles.",
      "Cavernous-subtype lesions are composed of dilated vascular channels, with a proliferation of smooth muscle within intervascular spaces.",
      "Hybrid lesions have been described. Some tumors share features with myopericytoma, with concentric whorling of less spindled to ovoid myoid cells around vessels 17270242 . Minor histological patterns include those with adipocytic metaplasia, prominent hyalinization, degenerative atypia, or calcification 34086643 ; 26691377 ; 26047608 ; 31565982 ; 8879307 .",
    ],
    ihc: [
      "tumor cells are diffusely positive for actins (including SMA), calponin, and h-caldesmon. Desmin expression is variable and may be very focal or completely absent in a small subset of tumors 8025650 ; 17270242 . Melanocytic markers such as HMB45 and melan-A are negative in tumors with adipocytic metaplasia, thus enabling distinction from angiomyolipoma 6722737 ; 17270242 ; 26047608 . Similarly to glomus tumors and myopericytomas, angioleiomyomas demonstrate diffuse immunoreactivity for the pericytic antigen RGS5 26558691 .",
    ],
    molecular: [
      "Not clinically relevant",
      "Angioleiomyomas are thought to arise from vascular smooth muscle 6722737 . Reported cytogenetic abnormalities include monosomy of chromosome 13 and loss of 6p, 21q, and 13q 20471520 ; 14654964 . A very small subset of angioleiomyomas reportedly have NOTCH gene fusions 23999936 ; 32604167 . In contradistinction to myofibromas, angioleiomyomas do not have recurrent somatic PDGFRB mutations 27776010 .",
    ],
    differential: [],
    criteria: [
      "Essential: a well-circumscribed tumor; bundles of cytologically bland smooth muscle cells growing concentrically around blood vessels of varying calibre.",
    ],
    icdo: "0",
  },
  {
    name: "Smooth muscle hamartoma",
    family: "Smooth Muscle Tumors",
    subgroup: "Benign Smooth Muscle Tumors",
    behavior: "Benign / hamartomatous",
    clinical: [
      "The majority of cases occur on the trunk or extremities; the head and neck region and external genitalia are less common sites of involvement 32804407 .",
      "There is a slightly indurated and pigmented or flesh-colored plaque, ranging from millimetres to several centimetres in size, with or without perifollicular papules and hypertrichosis. A positive pseudo–Darier sign is present in 80% of congenital SMHs (CSMHs). Most CSMHs are solitary; however, rare multiple, familial, and non-familial cases have been documented 22630577 . Diffuse CSMH has been described as a component of Michelin tyre baby syndrome 8436660 , and cases of combined SMH with congenital or blue naevi have also been reported 18544054 ; 8436660 .",
      "SMH has a slight male predominance. CSMH is uncommon, affecting approximately 1 in 2600 births 2356798 . Acquired SMH is extremely rare, with < 20 cases reported to date. Age at presentation ranges from 12 to 64 years 29774573 ; 34637157 .",
    ],
    definition: [
      "Smooth muscle hamartoma (SMH) represents an anomalous proliferation of haphazardly arranged smooth muscle bundles in the dermis.",
    ],
    histology: [
      "SMH demonstrates haphazardly arranged, mature smooth muscle bundles in the dermis, often in close proximity to the pilosebaceous units 2658846 . This is in contrast to pilosebaceous leiomyoma, which demonstrates more orderly smooth muscle bundles arranged in ramifying fascicles. Atypia/pleomorphism and mitoses are absent. Focal retraction artefact may be observed around the smooth muscle bundles. Expression of smooth muscle markers is seen. Overlying epidermal hyperkeratosis, acanthosis, and basal hyperpigmentation, reminiscent of Becker nevus, may be encountered.",
    ],
    ihc: [],
    molecular: [
      "A subset of CSMHs result from postzygotic ACTB mutations. These mutations have been previously reported in Becker naevi, suggesting that CSMHs and Becker naevi are biologically related 32170967 .",
    ],
    differential: [],
    criteria: [
      "Essential: haphazardly arranged muscle bundles within the dermis; absent atypia.",
    ],
    icdo: null,
  },
  {
    name: "Cutaneous leiomyomas",
    family: "Smooth Muscle Tumors",
    subgroup: "Benign Smooth Muscle Tumors",
    behavior: "Benign",
    clinical: [
      "The extensor surfaces of the extremities are most commonly affected, followed by the trunk and the head and neck region 11907496 . Genital leiomyomas can involve the scrotum, vulva, nipple, or areola.",
      "Cutaneous leiomyomas are flesh-colored to reddish-brown, firm, dome-shaped papules or nodules. Multiple leiomyomas are more often painful and may be distributed in linear, segmental, or zosteriform patterns 27584971 . Solitary leiomyomas are usually no larger than 20 mm 25605645 . Genital leiomyomas are usually solitary raised to pedunculated papules or nodules, usually < 20 mm but occasionally larger, and asymptomatic. Vulvar tumors may enlarge during pregnancy 25605645 .",
      "Cutaneous leiomyomas are rare. Cases involving multiple tumors typically have an earlier onset than do solitary leiomyomas 25605645 . Solitary tumors show a female predominance.",
    ],
    definition: [
      "Cutaneous leiomyomas are benign dermal smooth muscle tumors derived from intrinsic dermal arrector pili smooth muscle (pilar leiomyomas) or dartoic/vulvar/areolar smooth muscle (genital leiomyomas).",
    ],
    histology: [
      "Pilar leiomyomas are poorly circumscribed dermal nodules of intersecting, well-differentiated smooth muscle bundles composed of spindle cells with elongated, blunt-ended nuclei, perinuclear vacuoles, and eosinophilic cytoplasm 11907496 ; 21430885 ; 25605645 . Rare mitotic figures may be seen 9056647 . Enlarged, hyperchromatic cells similar to those seen in symplastic uterine leiomyomas may be encountered 23550704 ; 11481520 ; 26981742 . SMA, desmin, and caldesmon are typically expressed. Demonstration of loss of fumarate hydratase (FH) expression and enhanced expression of 2-succinocysteine (2SC) is useful in identifying possible cases of hereditary leiomyomatosis and renal cell cancer syndrome 26945337 ; 28288038 ; 27097334 ; 25292446 .",
    ],
    ihc: [],
    molecular: [
      "Molecular testing is not required in sporadic cases. In the familial setting, although FH and 2SC immunohistochemistry identify FH-deficient neoplasms, they do not replace genetic testing, because biallelic FH mutation/inactivation can occur as a purely somatic phenomenon.",
      "For sporadic tumors, the pathogenesis is unknown. For familial leiomyomas, see the Urinary and male genital tumors volume of this series [[WHO Classification of tumors Editorial Board. Urinary and male genital tumors. Lyon (France): International Agency for Research on Cancer; 2022. (WHO classification of tumors series, 5th ed.; vol. 8). https://publications.iarc.who.int/610.]].",
    ],
    differential: [],
    criteria: [
      "Essential: well-differentiated smooth muscle closely resembling normal pilar smooth muscle; occasional mitotic figures and enlarged, hyperchromatic cells may be present; infiltration of subcutaneous fat is absent.",
      "Desirable: expression of SMAs, desmin, and caldesmon (in most cases); absent FH expression and enhanced 2SC expression in hereditary leiomyomatosis and renal cell carcinoma syndrome–associated tumors.",
    ],
    icdo: "0",
  },
  {
    name: "EBV-associated smooth muscle tumor",
    family: "Smooth Muscle Tumors",
    subgroup: "Benign Smooth Muscle Tumors",
    behavior: "Intermediate / uncertain; multifocal potential",
    clinical: [
      "The commonest site of involvement is the CNS, followed by the liver, lung, and subcutaneous tissues of the limbs and trunk 15844077 ; 16330945 ; 21437186 ; 27362573 ; 31700854 ; 22175892 ; 25027306 .",
      "When arising in the subcutis, the tumor manifests as a skin-colored nodule. Occasionally, there may be associated pain 22175892 ; 12207602 ; 33245561 ; 33627249 . Multiple tumors may evolve concurrently or sequentially at different anatomical sites 15844077 ; 12207602 .",
      "EBV-SMT is a rare neoplasm. It occurs in approximately 1–5% of patients with immunosuppression 25027306 . The age range varies widely, but most patients are adults. There is a slight female predominance 21437186 ; 31700854 ; 2217589 ; 25318810 .",
    ],
    definition: [
      "EBV-associated smooth muscle tumor (EBV-SMT) is an EBV-driven benign smooth muscle neoplasm occurring in the clinical setting of immunosuppression.",
    ],
    histology: [
      "Irrespective of site, the majority of EBV-SMTs show circumscription and interlacing fascicles of spindled myoid cells in a background of collagenous matrix 31700854 ; 22175892 ; 33627249 ; 3324556 . Typically, there is an admixed population of smaller rounded cells and intratumoural lymphocytes. Some tumors show focal myxoid change. Mitotic activity is generally low. However, tumors with leiomyosarcoma-like features showing nuclear atypia and necrosis in addition to high mitotic activity have been described 22175892 ; 7990860 ; 25318810 . Some may mimic myopericytoma or angioleiomyoma 25027306 ; 21437186 ; 18199115 ; 22175892 . EBV-SMTs show expression of h-caldesmon, desmin, SMA, and MSA.",
      "Important differential diagnoses include Kaposi sarcoma, leiomyoma, leiomyosarcoma, and a pseudotumour secondary to mycobacterial or fungal infection. None of these entities show nuclear reactivity by in situ hybridization for EBV-encoded small RNA (EBER).",
    ],
    ihc: [],
    molecular: [
      "EBV infection of neoplastic myoid cells is usually demonstrated by in situ hybridization for EBER.",
      "It is postulated that EBV gains entry into a progenitor smooth muscle cell of vascular origin through CD21 receptor function or interaction with an EBV-infected lymphocyte 16330945 ; 7990860 ; 19706821 . There is aberration of the mTOR/AKT pathway 19706821 . Overexpression of MYC has been reported 9890420 ; 22420456 . Multiple tumors represent separate clonal events 16330945 .",
    ],
    differential: [],
    criteria: [
      "Essential: demonstration of EBV infection in the constituent myoid cells of a smooth muscle tumor arising in an immunosuppressed patient.",
    ],
    icdo: "1",
  },
  {
    name: "Atypical intradermal smooth muscle neoplasm",
    family: "Smooth Muscle Tumors",
    subgroup: "Intermediate Smooth Muscle Neoplasms",
    behavior: "Intermediate / uncertain",
    clinical: [
      "The tumors most commonly involve the trunk and lower extremities 21358302 ; 20102404 .",
      "The tumors typically manifest as small (5–30 mm), solitary, and occasionally painful nodules.",
      "Cutaneous leiomyosarcomas are rare, with an age-adjusted incidence of roughly 0.2 cases per 100 000 person-years 31729020 . They most often occur in older men, with a mean patient age of 56 years and an M:F ratio of 3:1 to 4:1 21358302 ; 20102404 .",
    ],
    definition: [
      "Atypical intradermal smooth muscle neoplasm is a primary dermal neoplasm composed of generally well-differentiated spindled cells closely resembling normal arrector pili smooth muscle but showing nuclear enlargement, hyperchromatism, and mitotic activity.",
    ],
    histology: [
      "Atypical intradermal smooth muscle neoplasms are typically well differentiated, consisting of fascicles of relatively uniform, eosinophilic spindled cells with perinuclear vacuoles and cigar-shaped nuclei. Compared with normal pilar smooth muscle, these tumors show greater cellularity, nuclear enlargement, and hyperchromatism, and they show mitotic activity.",
      "Marked nuclear pleomorphism and necrosis are rare; the presence of such features should raise concern for metastasis from a deeply situated tumor, which may be regarded as cutaneous leiomyosarcoma 21989966 . Atypical intradermal smooth muscle neoplasms typically grow in an infiltrative fashion into the surrounding dermis, and they may show limited involvement of the subcutaneous fat.",
      "Immunohistochemically, these tumors are essentially always positive for SMA and desmin, and almost always positive for caldesmon 21358302 ; 20102404 . Expression of keratins may be seen in as many as 45% of cases 21358302 .",
    ],
    ihc: [],
    molecular: [
      "The genetic events underlying the development of atypical intradermal smooth muscle neoplasm are unknown. Germline FH mutation does not appear to be a predisposing factor 20618355 .",
    ],
    differential: [],
    criteria: [
      "Essential: a dermal-based tumor with an infiltrative growth pattern; fascicles of relatively uniform, eosinophilic spindled cells with perinuclear vacuoles and cigar-shaped nuclei; variable SMA, desmin, and caldesmon expression; limited involvement of the subcutaneous fat.",
    ],
    icdo: "1",
  },
  {
    name: "Dermal hyperneury / epithelial sheath neuroma",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "Periorificial and mucosal lesions (lips, eyelid, tongue) appear in multiple endocrine neoplasia type 2B (MEN2B) 30660595 . Cutaneous nerves are enlarged in patients with MEN2B, even in the absence of visible lesions 6127365 . Outside a syndromic setting, there is a slight predilection for the trunk 31216366 . Epithelial sheath neuroma shows a predilection for the back 10680886 .",
      "The lesions are single or multiple and asymptomatic. Rarely, patients may experience itching, intermittent burning, or pain.",
      "Mucocutaneous neural proliferations have been described in syndromic patients as young as 5 years old 16702501 . Most of the patients in the sporadic setting are in their seventh decade of life. There is a slight female preponderance.",
    ],
    definition: [
      "Dermal hyperneury represents a form of small nerve hypertrophy characterized by unusually large and prominent dermal nerve fibres. Epithelial sheath neuroma has similar histological features, with the added finding of mature squamous epithelium surrounding the perineurium.",
    ],
    histology: [
      "Increase in nerve fibre–aggregated neural tissue is observed within the dermis or the dermal/subcutaneous interface. Histological changes are identical in syndromic and non-syndromic cases. Nerve fibres are 1.5–4 times as large as normal nerves. Mild neuroma-like internal nerve fibre disorganization can be seen. Lymphoplasmacytic and histiocytic perineurial inflammation or intraneural mucin accumulation may be seen. In epithelial sheath neuroma, enlarged nerve fibres are ensheathed by squamous epithelium. Subcutaneous extension is exceptional 29797343 . Occasionally, dermal hyperneury presents incidentally to other lesions such as actinic keratosis, basal cell carcinoma, and nodular prurigo.",
    ],
    ihc: [],
    molecular: [
      "Multiple lesions in younger patients should prompt investigation for genetic syndromes and pertinent molecular alterations.",
      "Not entirely elucidated but may involve PTEN-regulated and RET-regulated signalling pathways 26604880 , particularly in syndromic cases.",
    ],
    differential: [],
    criteria: [
      "Essential: enlarged and prominent dermal nerve fibres; nerve sheath squamous cells in epithelial sheath neuroma.",
      "Desirable: mild neuroma-like internal disorganization (in some cases).",
    ],
    icdo: "0",
  },
  {
    name: "Solitary circumscribed neuroma",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "SCN commonly occurs on the face (90%), often near mucocutaneous junctions 2660609  or in oral mucosa 20237984 . SCN can involve any cutaneous site, including acral skin 19614730 .",
      "SCN usually manifests as a small, solitary, asymptomatic, firm, skin-colored papule. Rare examples of multiple SCNs have been reported in the absence of systemic disease 26460241 .",
      "SCN can occur at any age, most commonly in the fifth to seventh decades of life. There is no sex predilection.",
    ],
    definition: [
      "Solitary circumscribed neuroma (SCN) is a benign nodular proliferation of nerve fibres, typically arising as an asymptomatic papule on the face.",
    ],
    histology: [
      "SCN is a dermal-based nodule composed of fascicles of bland spindled cells encased in a delicate, often incomplete, fibrous capsule. Artefactual clefting at the tumor–stroma interface is characteristic 4639250 . Focal palisading of nuclei within the tumor is usually present but Verocay bodies are less common 30834800 . Multilobular and plexiform growth patterns are well described 19614730 ; 8468415 . No cytological atypia or conspicuous mitotic activity is seen.",
    ],
    ihc: [
      "Tumoural Schwann cells are strongly and diffusely positive for S100. Tiny axons throughout the tumor can be identified by staining for NFP 1705947 . The capsular perineural cells stain for EMA, claudin-1, and GLUT1 20237984 .",
    ],
    molecular: [
      "Not clinically relevant",
      "SCN is a benign tumor with slow growth of nerve fibres, unrelated to trauma 2660609 .",
    ],
    differential: [
      "SCN, especially the plexiform subtype, can be mistaken for other benign neural neoplasms, some of which have associations with systemic disease. Neurofibromas are hypocellular tumors with a loose, delicate matrix that are unencapsulated (except in the plexiform subtype). Schwannomas tend to have a more variable cell density (Antoni A and B areas), prominent palisading (Verocay bodies), and hyalinization of vessel walls, and they lack clefting artefact.",
    ],
    criteria: [
      "Essential: a nodular, multinodular or plexiform circumscribed dermal nodule composed of fascicles of Schwann cells and axons without significant atypia or mitotic activity.",
      "Desirable: at least partial encapsulation highlighted by perineural markers (e.g. EMA); artefactual clefting.",
    ],
    icdo: "0",
  },
  {
    name: "Dermal nerve sheath myxoma",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "Dermal nerve sheath myxoma occurs in the distal extremities, particularly the fingers (36% of cases), toes, and lower extremities 16327434 ; 11070116 . It rarely involves the spinal canal 23306964 .",
      "The tumors manifest as small, superficial, slow-growing asymptomatic masses; some are painful 16327434 .",
      "Dermal nerve sheath myxomas are rare. The two largest modern series describe 68 tumors arising over a wide age range (8–72 years), with a peak in the mid-thirties and a slight male predominance 16327434 ; 11070116 .",
    ],
    definition: [
      "Dermal nerve sheath myxoma is a benign peripheral nerve sheath tumor.",
    ],
    histology: [
      "Dermal nerve sheath myxoma characteristically shows a multinodular growth pattern, abundant myxoid matrix, and a dense fibrous border in the dermis, subcutis, or both; it rarely extends to skeletal muscle. Neoplastic cells are small, epithelioid, ring-like, stellate, and spindled Schwann cells in cords, nests, and syncytial-like aggregates, with mild nuclear atypia. Some show ring-like morphology, resembling lipoblasts; rarely, multivacuolated cells with spider-like cytoplasmic processes, nuclear palisading, or Verocay body–like structures are seen. Scattered moderate pleomorphism, similar to that seen in ancient schwannomas, may be present. Mitoses are absent to very few 16327434 .",
    ],
    ihc: [
      "S100 is diffusely positive, and GFAP and CD57 are also often positive 6365307 ; 2645040 ; 16327434 ; 11070116 . Rare cells are positive for AE1/AE3, and the fibrous capsule may show scattered EMA-positive cells.",
    ],
    molecular: [
      "Not clinically relevant",
      "Dermal nerve sheath myxoma was previously called “classic or myxoid variant of neurothekeoma” 7446487 . However, pathological 11070116 ; 17592278 ; 16327434 ; 17325474  and molecular data 21297585  demonstrated the Schwann cell derivation of dermal nerve sheath myxoma, which is clinically and biologically distinct from neurothekeoma. Thus, the gene signature of dermal nerve sheath myxomas is similar to that of dermal schwannomas, whereas cellular neurothekeomas more closely resemble cellular fibrous histiocytomas 21297585 .",
    ],
    differential: [],
    criteria: [
      "Essential: a small, superficial tumor in a distal extremity (especially the fingers); a multilobular, myxoid neoplasm with S100-positive bland spindled and epithelioid cells.",
    ],
    icdo: "0",
  },
  {
    name: "Perineurioma",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "Perineurioma has a wide distribution, occurring most commonly on the lower limbs, followed by the upper limbs and trunk 15958848 . Rarely, it arises on the head/neck, in visceral organs (intestinal mucosa 15958849 ), and also in nerves 7785653 , soft tissues, and central body cavities. Sclerosing perineurioma usually occurs on fingers and palms 9414186 , rarely elsewhere 27845943 .",
      "Perineuriomas manifest as well-circumscribed, painless, skin-colored papules, nodules, or tumors. Ten per cent are dermal, and subcutaneous tissue is more commonly involved than deep soft tissue 11012740 . They are rarely multiple 19187114 .",
      "Perineuriomas are rare. They have a slight female predilection and a wide age range, with a peak incidence in middle-aged adults 15958848 . Children are rarely affected. The sclerosing subtype is more common in young men 9414186 ; 12836021 .",
    ],
    definition: [
      "Perineurioma is a usually benign perineural neoplasm occurring in skin, intestinal mucosa, nerves, and soft tissue.",
    ],
    histology: [
      "Perineuriomas typically show a storiform to fascicular growth pattern, with a lamellar arrangement, perivascular whorls, and a collagenous to myxoid stroma. Plexiform 10936896 ; 16133356  or lipomatous 18496437  patterns have rarely been reported. The tumor cells are slender and spindled, with wavy, tapering nuclei and delicate bipolar cytoplasmatic processes. Occasionally, ancient features with degenerative nuclear changes, multinucleated giant cells, and nuclear pseudoinclusions may be seen 15958848 . The sclerosing subtype shows strands of small epithelioid to spindle cells, rarely showing granular cell changes 18360122 , in dense collagen. The reticular subtype shows anastomosing cords of elongated spindle cells with reticulate architecture 11257623 . Malignant perineuriomas have a similar architecture but also show hypercellularity, hyperchromasia, pleomorphism, and a high mitotic count 9808129 .",
    ],
    ihc: [
      "EMA is positive, from weak and focal to strong and diffuse 15958848 . Collagen IV, laminin 14507408 , claudin, and GLUT1 are often positive 12459629 ; 12836021 , and 60% of tumors express CD34 20849453 . Sclerosing perineurioma shows limited keratin expression 9414186 . tumor cells are negative for S100, SOX10, and GFAP.",
    ],
    molecular: [
      "Perineuriomas share pathogenetic mechanisms with other nerve sheath tumors, similar to schwannoma and meningioma, such as deletion of 22q12, monosomies, and mutations in NF2 9042282 ; 11290539 ; 17122521 ; 30303818 . Deletion of 17q11 (including NF1) is common in soft tissue perineurioma; other alterations include a three-way chromosome 2, 9, and 4 translocation involving ABL1. Rearrangement involving 10q24 frequently occurs in the sclerosing subtype 16096405 . Malignant perineuriomas have been reported with loss of chromosome 13q and small deletions of chromosomes 3, 6, and 9 18844938 ; 30303818 .",
    ],
    differential: [
      "The differential diagnosis includes epithelioid fibrous histiocytoma, fibroma of tendon sheath, sclerotic fibroma, extracranial meningioma, and low-grade fibromyxoid sarcoma 9414186 .",
    ],
    criteria: [
      "Essential: painless, skin-colored papules, nodules, or tumor; storiform, whorled, and lamellar architecture; elongated, slender spindle cells with bipolar cytoplasmatic processes; EMA positive; variable expression of claudin-1, GLUT1, CD34.",
    ],
    icdo: "0",
  },
  {
    name: "Neurofibroma",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "Sporadic neurofibromas occur characteristically on the trunk; diffuse neurofibromas localize on the head and neck 6638406 .",
      "Sporadic neurofibromas are solitary, slow-growing, painless, soft, skin-colored papules or nodules. Subcutaneous (including diffuse) neurofibromas form nodules or deep plaques. Plexiform neurofibromas are congenital, irregular, tortuous, multinodular masses. Diffuse and plexiform neurofibromas usually affect children or young adults 6638406 ; 12789188 ; 3068997 .",
      "All demographic groups are affected, with no sex predilection and with peak incidence in the third decade of life [[Antonescu CR, Scheithauer BW, Woodruff JM. Tumors of the peripheral nervous system. Washington, DC: Armed Forces Institute of Pathology; 2013. (AFIP atlas of tumor pathology, series 4; fascicle 19).]].",
    ],
    definition: [
      "Neurofibroma is a benign tumor of axons, Schwann cells, fibroblasts, and perineurial cells in a collagenous matrix containing mast cells and mucin.",
    ],
    histology: [
      "Neurofibromas are unencapsulated tumors composed of spindle cells, collagen fibres, lymphocytes, and mast cells 2479359 ; skin appendages are usually preserved. Neurofibromas are composed of spindle cells with thin, wavy, hyperchromatic nuclei and delicate, pale, eosinophilic cytoplasm. Several patterns have been described: interstitial mucin is prominent in myxoid neurofibroma 11558882 ; 10564384 ; 7528474 . Sclerotic neurofibroma has scant spindle cells in a collagenous matrix 16441412 ; 18496433 . Lipomatous neurofibroma has admixed adipocytes 12142613 ; 15769276 ; 12140442 .",
      "Diffuse neurofibroma infiltrates dermis and subcutis, entrapping adnexa or adipocytes 7528474 ; 7695017 ; 12789188 .",
      "Plexiform neurofibroma consists of tortuous nerves distended by axons, Schwann cells, and fibroblasts 3068997 ; multivacuolated, mucin-filled cells express CD34 and GLUT1 27816720 .",
      "Melanotic neurofibroma contains variable melanin 3049734 ; 10716146 .",
    ],
    ihc: [
      "Some cells are positive for S100 and SOX10 1693425 ; 7695017 , and for peripherin in thin axons 9414188 . EMA is negative 3169685  except in plexiform neurofibroma. A characteristic “fingerprint” pattern consists of CD34-positive perineurial fibroblasts anastomosing around Schwann cells 20849453 ; 21457155 ; 24033860 . Even non-pigmented diffuse neurofibromas may express melanocytic markers 23715161 ; 9414187 .",
    ],
    molecular: [
      "Molecular analyses do not have an established role in the diagnosis of neurofibroma. However, chromosomal copy-number profiling (showing CDKN2A/CDKN2B deletion) may be helpful for the evaluation of atypical neurofibroma / atypical neurofibromatous neoplasm of uncertain biological potential (see the relevant section in the WHO classification of tumors of soft tissue and bone [[WHO Classification of tumors Editorial Board. Soft tissue and bone tumors. Lyon (France): International Agency for Research on Cancer; 2020. (WHO classification of tumors series, 5th ed.; vol. 3). https://publications.iarc.who.int/588.]]) and its differentiation from MPNST (which shows a complex, highly rearranged genome). Of note, conventional dermal and plexiform neurofibromas, atypical neurofibroma / atypical neurofibromatous neoplasm of uncertain biological potential, and MPNST all exhibit distinct DNA methylation profiles 26857854 .",
      "The originating cell and nosological classification are controversial 5354040 ; 7528474 ; 6798835 ; 9504678 ; 20233971 .",
      "Most neurofibromas are sporadic and solitary. Multiple tumors or the plexiform and diffuse subtypes suggest neurofibromatoses (NF1 and NF2), autosomal dominant disorders caused by genetic alterations in the neurofibromin gene (NF1) on chromosome 17 or in NF2 (encoding merlin [NF2, schwannomin]) on chromosome 22. Many affected patients’ disease reflects new mutations. NF1 encodes neurofibromin (NF1), a negative regulator of the RAS/MAPK pathway. NF1 mutations cause loss of neurofibromin function, resulting in RAS signalling and MAPK activation. Germline plus somatic mutations (NF1−/−) cause loss of functional neurofibromin 22155606 . Detailed genotype–phenotype correlations have been documented 32771543 . Subsequent loss of CDKN2A on chromosome 9p21.3 eventuates in atypical neurofibromatous tumor of uncertain biological potential, which may progress to malignant peripheral nerve sheath tumor (MPNST) 31091306 .",
    ],
    differential: [
      "The differential diagnosis includes schwannoma, perineurioma, dermatofibroma, sclerotic fibroma, neurotized and sclerotic/desmoplastic melanocytic nevus, dermatofibrosarcoma protuberans, fibromatosis, and desmoplastic melanoma.",
    ],
    criteria: [
      "Essential: an infiltrative, low-cellularity spindle cell neoplasm associated with a variably myxoid to collagenous stroma.",
      "Desirable: S100 positivity in the Schwannian cell population and CD34 positivity in the stromal component.",
      "Note: For diagnosis of NF1 and NF2, see the related sections in the pediatric tumors volume of this series [[WHO Classification of tumors Editorial Board. pediatric tumors. Lyon (France): International Agency for Research on Cancer; 2022. (WHO classification of tumors series, 5th ed.; vol. 7). https://publications.iarc.who.int/608.]].",
    ],
    icdo: "0",
  },
  {
    name: "Schwannoma",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "Schwannomas occur in the soft tissues of the extremities, head and neck, and trunk. Subcutaneous localization is more common than dermal. Schwannomas of the skin are thought to arise from small peripheral nerves in subcutaneous soft tissue or, less commonly, in nerve twigs of the dermis.",
      "Schwannomas are slow-growing and occasionally painful 5796779 . They are typically solitary, except in patients with neurofibromatosis type 2 (NF2) or schwannomatosis 19545378 .",
      "Sporadic schwannomas typically arise in the fourth to sixth decades of life 5796779 .",
    ],
    definition: [
      "Schwannoma is a benign neoplasm composed entirely or nearly entirely of mature neoplastic Schwann cells.",
    ],
    histology: [
      "Antoni A areas containing spindle cells with wavy nuclei alternate with hypocellular Antoni B areas, which contain a myxoid matrix and a variable lymphohistiocytic infiltrate. Within the Antoni A areas, parallel rows of nuclei (Verocay bodies) may be seen. Mitoses are rare. In ancient schwannoma, there is degenerative nuclear atypia. Rare subtypes include plexiform, epithelioid, cellular, neuroblastoma-like, and microcystic/reticular schwannoma 3557324 ; 3096870 ; 28368924 ; 18520439 ; 8116794 ; 2493641 ; 26350054 ; 9508344 .",
    ],
    ihc: [
      "Schwannomas are strongly positive for S100 and SOX10 and have an EMA-positive perineurial capsule.",
    ],
    molecular: [
      "Chromosome 22q deletion and/or NF2 mutation are frequent but nonspecific alterations. Schwannomas have a distinct DNA methylation pattern, although in the vast majority of cases, molecular testing is not needed 33479225 .",
      "Conventional schwannomas typically harbour somatic loss-of-function mutations in NF2 and complete or partial loss of chromosome 22, including the wildtype NF2 allele 8889506 . Other recurrently mutated tumor suppressors include ARID1A/ARID1B (mutated in 29% of cases) and TSC1/TSC2 (in 15%). SH3PXD2A::HTRA1 fusions (found in 10% of cases) activate the MAPK pathway and are mutually exclusive with mutations in the receptor tyrosine kinase gene DDR1 (found in 11% of cases) 27723760 . Germline pathogenic mutations in NF2, LZTR1, SMARCB1, and DGCR8, all located on chromosome 22q, are associated with schwannoma susceptibility. Vestibular schwannomas are the hallmark of NF2. Schwannomatosis 1 and schwannomatosis 2 are due to germline mutations of SMARCB1 (INI1) and LZTR1, respectively 17357086 ; 24362817 . Schwannomas in these patients typically demonstrate loss of two tumor suppressors (NF2 and either LZTR1 or SMARCB1) 27921248 . DGCR8 point mutations are associated with familial multinodular goitre with schwannomatosis 31805011 .",
    ],
    differential: [
      "The differential diagnosis includes neurofibroma, although this often has a lattice-like CD34 staining pattern not seen in schwannomas, as well as a smaller proportion of S100/SOX10-positive cells. It also includes solitary circumscribed neuroma. Epithelioid schwannoma should be distinguished from melanoma, myoepithelioma, and ossifying fibromyxoid tumor; roughly 40% of epithelioid schwannomas show loss of SMARCB1 (INI1) expression 28368924 . Cellular schwannomas with increased atypia and/or mitotic activity may raise concern for malignant peripheral nerve sheath tumor (MPNST). However, schwannomas typically show diffuse S100/SOX10 staining (unlike MPNST) and express p16 and H3 p.K27me3, which are lost in most MPNSTs 26990975 .",
    ],
    criteria: [
      "Essential: a well-circumscribed spindle cell tumor with classic Antoni A and/or Antoni B regions.",
      "Desirable: Verocay bodies, encapsulation, hyalinized blood vessels; diffuse S100 immunoreactivity; extensive SOX10 positivity; lack of a lattice-like CD34 staining pattern.",
    ],
    icdo: "0",
  },
  {
    name: "Granular cell tumor",
    family: "Neural Tumors",
    subgroup: "Benign Neural Tumors",
    behavior: "Benign",
    clinical: [
      "Granular cell tumors preferentially affect the deep dermis and subcutaneous and mucosal tissues, with a predilection for the head and neck, trunk, and proximal extremities 26637199 ; 6246310 . The most frequently affected anatomical sites include the tongue, oesophagus, and breast. Granular cell tumors are most frequently solitary; however, 7–29% of patients may display multiple lesions, of which as many as 30% affect the skin and subcutaneous tissues 24082205 .",
      "Granular cell tumors typically manifest as solitary, firm, skin-colored to reddish-brown painless nodules that are not always well defined 26637199 . At times, however, these lesions can be pruritic and/or painful. The lesions vary in size, but they are slow-growing and commonly 5–30 mm in diameter.",
      "Granular cell tumors can be diagnosed in all age groups; however, they predominantly occur in the fourth to sixth decades of life 26637199 . Although they have been reported to occur more frequently in women than in men (M:F ratio ranging from 1:1.8 to 1:2.4) 11314193 , large retrospective studies have suggested a higher frequency in men 10089680 ; 6246310 . These tumors are most prevalent in African Americans 6246310 . The vast majority of granular cell tumors are benign. The malignant form is vanishingly rare (1–2%); this subtype has an age distribution of 3–87 years (median: 53 years) and is reported to be more prevalent in women (65% of cases) and in White populations (70%), affecting the trunk in as many as one third of the cases 28989104 .",
    ],
    definition: [
      "Granular cell tumor is a benign neuroectodermal tumor derived from Schwann cells and composed of epithelioid cells with abundant lysosome-rich granular eosinophilic cytoplasm.",
    ],
    histology: [
      "Granular cell tumors have an infiltrating growth pattern with poorly defined borders and are composed of sheets, nests, and trabeculae of large epithelioid to polygonal cells with abundant eosinophilic and distinctly granular cytoplasm. Cell borders are sometimes not distinctive, resulting in a syncytial growth pattern. Nuclei are usually centrally located, ranging from small, uniform, and mildly hyperchromatic to larger and vesicular with prominent nucleoli 10410172 ; 26637199 ; 9669341 . The finely granular cytoplasm is composed of granules of varying sizes and morphology, which are the result of a massive accumulation of lysosomes; larger intracytoplasmic granules surrounded by clear haloes (pustulo-ovoid bodies of Milian), which can be PAS-positive/diastase-resistant, are commonly observed 17448196 ; 26637199 . Perineural and perivascular involvement is frequent 26637199 . Mitotic figures are generally scant. When affecting the skin, granular cell tumors often elicit exuberant pseudoepitheliomatous hyperplasia, which may result in the consideration of a diagnosis of squamous cell carcinoma 6246310 ; 26637199 .",
      "The vanishingly rare malignant form of granular cell tumor is recognized by overt features of malignancy, including increased cellularity, prominent spindling, high N:C ratio, marked pleomorphism, increased mitotic activity (including aberrant mitotic figures), and necrosis 9669341 ; 21282016 ; 26637199 . It should be noted, however, that malignant granular cell tumors may display bland histological features, and neither mitotic figures nor necrosis alone can identify all tumors with metastatic potential 11584326 ; 19734486 ; 21745132 ; 24617529 .",
    ],
    ihc: [
      "The immunohistochemical profile of granular cell tumors includes strong and diffuse positivity for S100, SOX10, inhibin, and calretinin 22495377 ; 22804786 ; 26637199 . CD68 and CD63 (NKI/C3) are also common expressed, and NSE can also be positive 26637199 . Nuclear expression of TFE3 and MITF, in the absence of rearrangements of these genes, is common 26009539 ; 31788112 ; 17284958 , whereas melan-A, GFAP, keratins, and NFP are largely negative. HMB45, however, has been reported to be uniformly negative in these tumors 17284958 ; 26637199 . The Ki-67 proliferation index is typically low (< 2%) 26637199 ; 15214825 , but it is often higher in atypical and malignant forms 17227124 .",
    ],
    molecular: [
      "Given that loss-of-function mutations affecting ATP6AP1 and ATP6AP2 are probably pathognomonic of granular cell tumors, being detected in < 0.3% of other tumor types analysed to date 30166553 , sequencing analyses of these genes may provide additional confirmatory evidence for a diagnosis of granular cell tumors.",
      "In 72% of cases, whole-exome and targeted sequencing analyses of these cancers have revealed mutually exclusive loss-of-function mutations affecting ATP6AP1 and ATP6AP2, which encode accessory components of the vacuolar ATPase and play pivotal roles in the regulation of endosomal pH and vesicle trafficking 30166553 . In a subset of granular cell tumors with wildtype ATP6AP1 and ATP6AP2, loss-of-function mutations affecting other genes encoding components of the vacuolar H+-ATPase have been detected 30597645 ; 33289181 . These mutations are not only oncogenic but also shown to result in impaired vesicular acidification and altered distribution of endosomes – and consequently, in a massive intracytoplasmic accumulation of early and recycling endosomes 30166553 . The mechanistic basis for the oncogenic properties of these loss-of-function mutations remains to be fully characterized. These tumors have a low mutation burden and appear not to harbour recurrent oncogenic fusion genes 30166553 .",
    ],
    differential: [
      "The differential diagnosis includes non-neural granular cell tumors, which can be distinguished from granular cell tumors by the lack of expression of S100 and SOX10, as well as by the absence of ATP6AP1 or ATP6AP2 mutations and the presence of DCTN1::ALK and SQSTM1::ALK fusion genes 34958499 . In addition, other diverse tumors with granular cell change, including apocrine neoplasms, naevi, melanomas, fibrous histiocytomas, carcinomas, and alveolar soft part sarcoma, should be considered.",
    ],
    criteria: [
      "Essential: nests, sheets and trabeculae of large, epithelioid to polygonal cells with abundant cytoplasm containing copious amounts of intracytoplasmic eosinophilic granules of varying sizes; S100 and SOX10 strongly and diffusely positive; must exclude other, more aggressive, neoplasms showing granular cell changes (e.g. melanoma, breast carcinoma).",
    ],
    icdo: "0",
  },
  {
    name: "Hybrid nerve sheath tumors",
    family: "Neural Tumors",
    subgroup: "Hybrid Nerve Sheath Tumors",
    behavior: "Benign",
    clinical: [
      "tumors show a wide anatomical distribution, most commonly occurring in the dermis or subcutaneous tissue 19623031 ; 9639114 . The most commonly reported site for hybrid schwannoma/perineurioma is on the fingers 15322875 .",
      "Hybrid nerve sheath tumors manifest most often as painless masses in subcutaneous tissue or dermis.",
      "Hybrid nerve sheath tumors are rare. The most common examples are tumors showing hybrid features of schwannoma and perineurioma, followed by hybrid neurofibroma/schwannoma. These tumors may occur at any age, with a peak in young adults and an equal sex distribution 19623031 .",
    ],
    definition: [
      "Hybrid nerve sheath tumors are benign peripheral nerve sheath tumors with combined features of more than one conventional type (neurofibroma, schwannoma, perineurioma).",
    ],
    histology: [
      "Hybrid schwannoma/perineurioma shows a storiform or fascicular growth and is usually composed of an intimate admixture of alternating Schwann cells with plump nuclei and eosinophilic cytoplasm and perineurial cells with slender nuclei and delicate elongated cytoplasmic processes. The Schwann cell component is often prominent. The tumors may show degenerative nuclear atypia (ancient change). Mitoses are rare. The two components can be highlighted by immunohistochemistry: Schwann cells are positive for S100, and perineurial cells for EMA, claudin-1, and GLUT1 19623031 .",
      "Hybrid neurofibroma/schwannoma is composed of schwannomatous nodules or Schwann cell bundles within an otherwise typical neurofibroma. Immunostaining highlights the mixed population of cells in the neurofibromatous component, including fibroblasts (CD34), Schwann cells (S100 and SOX10), and perineurial cells (EMA, claudin-1, and GLUT1), and the monomorphic Schwann cell populations in the Schwann cell solid nodules (highlighted by diffuse expression of S100 and SOX10) 9639114 ; 22446939 .",
      "Hybrid neurofibroma/perineurioma contains a plexiform neurofibroma with areas of perineurial differentiation. These areas are often only recognizable with the aid of immunohistochemistry. The perineuriomatous areas are immunopositive for EMA, GLUT1, and claudin-1, and the neurofibroma areas show a mixed population of cells including fibroblasts (CD34), Schwann cells (S100 and SOX10), and perineurial cells (EMA, claudin-1, and GLUT1) 23676318 ; 24461704 .",
    ],
    ihc: [],
    molecular: [
      "Not clinically relevant",
      "VGLL3 gene rearrangement was found in most cases of hybrid perineurioma/schwannoma in one cohort, suggesting these tumors represent a distinct pathological entity 33649458 .",
    ],
    differential: [],
    criteria: [
      "Essential: intermingled features of two types of benign nerve sheath tumors; appropriate immunohistochemical staining for each component.",
    ],
    icdo: "0",
  },
  {
    name: "Malignant peripheral nerve sheath tumor",
    family: "Neural Tumors",
    subgroup: "Malignant Neural Tumors",
    behavior: "Malignant",
    clinical: [
      "Most are located in the head and neck region and the extremities 19586501 .",
      "The most common symptoms are localized swelling and pain, but many cases are asymptomatic 25695445 . They can occur at any age, but patients with cutaneous MPNST tend to be older than patients with deep-seated tumors. Patients with NF1 are usually younger at the time of diagnosis than patients with sporadic tumors.",
      "Cutaneous MPNST is extremely rare, with few reported cases. Only 2% of cutaneous spindle cell malignancies are MPNSTs 2729526 . Although epithelioid MPNST accounts for < 5% of MPNSTs, this subtype more often involves superficial soft tissues.",
    ],
    definition: [
      "Malignant peripheral nerve sheath tumor (MPNST) is a malignant spindle cell or epithelioid tumor often arising from a peripheral nerve, from a pre-existing benign nerve sheath tumor, or in a patient with neurofibromatosis type 1 (NF1). Cutaneous MPNST is less frequently associated with NF1 than deep MPNST.",
    ],
    histology: [
      "The classic form is composed of fascicles of spindle-shaped cells, often with a haemangiopericytoma-like vascular pattern, and alternating hypercellular and hypocellular areas (tapestry appearance) and perivascular accentuation of cellularity. Heterologous elements, as observed in deep-seated tumors, rarely occur.",
      "Epithelioid MPNST is composed of plump, epithelioid cells with abundant eosinophilic cytoplasm, sometimes embedded in a myxoid or hyalinized matrix, and typically demonstrating a lobulated growth pattern 1746681 .",
    ],
    ihc: [
      "MPNST may be positive for S100 (< 50% of tumors), SOX10 (< 70%), and GFAP (20–30%) 23929265 . Importantly, expression of S100 and SOX10 is patchy or focal. Diffuse positivity for S100 or SOX10 is not usually compatible with the diagnosis of conventional MPNST. Complete loss of expression of H3 p.K27me3 may be helpful in the diagnosis of MPNST, with high-grade tumors (and radiation-induced MPNST) showing more-frequent loss than low-grade tumors 28776579 ; 26645727 ; 26585554 ; 29482987 .",
      "Epithelioid MPNSTs show strong and diffuse expression of S100 and SOX10 but do not show positivity for melanoma markers. They retain H3 p.K27me3, and most show loss of SMARCB1 expression 30864974 . Epithelioid MPNST may also be positive for keratin.",
    ],
    molecular: [
      "In diagnostically challenging cases, DNA methylation profiling can identify a specific tumor signature of MPNST 33479225 . Other supporting molecular data include mutations in NF1 and SUZ12 or EED.",
      "Genomic studies of deep-seated conventional MPNSTs demonstrated highly frequent and concurrent inactivating mutations in three pathways: NF1, CDKN2A/CDKN2B, and PRC2 core components (EED or SUZ12), resulting in complete loss of function 25240281 ; 25119042 ; 25305755 ; 30722027 . In patients with NF1, malignant transformation from pre-existing neurofibromas is often accompanied by progressive genomic alterations that inactivate neurofibromin (NF1), p16/p15 (CDKN2A/CDKN2B), and PRC2 pathways, as well as increased genomic copy-number variations 21987445 ; 25240281 ; 30722027 . About 80% of high-grade MPNSTs exhibit complete loss of PRC2 activity and H3 p.K27me3 26645727 ; 25240281 ; 26585554 . The loss of H3 p.K27me3 has become a useful diagnostic tool in high-grade MPNST. Given the critical role of PRC2 in development and cell-lineage specification, PRC2 loss may underlie the molecular mechanisms of the histological phenotype of heterologous differentiation in MPNSTs. Given the rarity of cutaneous MPNST, its molecular pathogenesis remains unclear.",
      "Epithelioid MPNSTs are distinct from conventional MPNSTs molecularly. SMARCB1 gene inactivation resulting in SMARCB1 loss by immunohistochemistry is observed in approximately 75% of cases 30864974 . They rarely have genetic alterations in the neurofibromin (NF1), p16/p15 (CDKN2A/CDKN2B), and PRC2 pathways 25240281 ; 28368924 .",
    ],
    differential: [
      "The differential diagnosis includes spindle cell melanoma, fibrosarcomatous dermatofibrosarcoma protuberans, melanoma, and (myoepithelial) carcinoma.",
    ],
    criteria: ["See #38514Box 7.01 ."],
    icdo: "3",
  },
  {
    name: "Cellular neurothekeoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Benign",
    clinical: [
      "Cellular neurothekeoma has a predilection for the face (in particular the nasomalar and nasolabial areas), shoulders, and upper limbs 16327434 ; 7446487 ; 17325474 ; 3297114 . It is usually solitary, although rare examples of multiple lesions have been reported 17592278 ; 16441413 .",
      "Cellular neurothekeoma manifests as a solitary firm papule or nodule with no distinctive clinical features.",
      "Cellular neurothekeoma occurs most commonly in children and young adults, with a female predominance 16327434 ; 7446487 ; 17325474 ; 3297114 .",
    ],
    definition: [
      "Cellular neurothekeoma is a benign cutaneous neoplasm of uncertain histogenesis. This tumor type is not related to nerve sheath myxoma (formerly “myxoid neurothekeoma”).",
    ],
    histology: [
      "Cellular neurothekeoma is a lobulated or micronodular neoplasm composed of nests of usually epithelioid but occasionally spindled cells with a vesicular nucleus, small nucleolus, and pale eosinophilic cytoplasm, often separated by dense collagenous stroma 17325474 . Some tumors contain prominent myxoid stroma, and rare cases may show an infiltrative growth pattern 29744902 . Occasional neoplastic cells may be multinucleated or may show hyperchromatic nuclei, and mitotic figures are common 1880258 ; 2154139 ; 24186141 . In rare cases, areas of calcification 3745622 , ossification 8030774 , perineural invasion 24186141 , and a plexiform pattern with hybrid features of both cellular neurothekeoma and perineurioma can be seen 23598966 .",
    ],
    ihc: [
      "The most consistent markers expressed in cellular neurothekeoma are CD63 (NKI/C3) 8188941 ; 33264109 , NSE 7693776 , PGP9.5 10555009 , and S100A6 12641790 , as well as KBA.62 and PRAME (these last two are also expressed in melanoma) 24151815 ; 34761425 . Expression of MITF, SMA, and podoplanin (D2-40) is more variable 19318798 ; 14685254 ; 24186141 ; 33264109 . Cellular neurothekeoma does not express S100, GFAP, CD57, SOX10, or EMA 1880258 ; 2154139 ; 3297114 ; 16327434 ; 24475873 .",
    ],
    molecular: [
      "The histogenesis is uncertain, but the gene expression profile is similar to that of cellular fibrous histiocytoma, suggesting myofibroblastic differentiation 21297585 .",
    ],
    differential: [
      "The differential diagnosis includes nerve sheath myxoma, Spitz nevus, cutaneous leiomyoma, and plexiform fibrohistiocytic tumor. Nerve sheath myxomas and Spitz naevi are positive for S100. Cutaneous leiomyoma has an intersecting fascicular pattern and is desmin-positive. Plexiform fibrohistiocytic tumor has a biphasic appearance and a plexiform growth pattern.",
    ],
    criteria: [
      "Essential: a multilobulated neoplasm; nests of epithelioid cells with a vesicular nucleus, small nucleolus, and pale eosinophilic cytoplasm, often separated by dense collagenous or myxoid stroma.",
    ],
    icdo: "0",
  },
  {
    name: "Epithelioid fibrous histiocytoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Benign",
    clinical: [
      "EFH most commonly affects the lower extremities, followed by the upper extremities. The trunk and the head and neck region are uncommon sites 7909998 ; 10027517 ; 2466472 ; 8181804 .",
      "EFH manifests as an exophytic nodule, often with a vascular appearance 2466472 .",
      "EFH typically arises in young to middle-aged adults (median age: 40 years), with a female predominance 7909998 ; 2466472 ; 8181804 .",
    ],
    definition: [
      "Epithelioid fibrous histiocytoma (EFH) is a distinctive, usually exophytic and well-circumscribed benign cutaneous neoplasm composed of epithelioid cells, including binucleated forms. ALK rearrangement is present in the vast majority of cases.",
    ],
    histology: [
      "EFH is usually well circumscribed; exophytic examples often have an adnexal collarette. The tumor is composed of uniform plump epithelioid cells with vesicular nuclei, small nucleoli, and abundant pale eosinophilic or amphophilic cytoplasm, often including binucleated forms. Small, thin-walled blood vessels may be prominent, sometimes with perivascular accentuation of tumor cells. Chondroblastoma-like pericellular calcification 29068085 ; 34086645  and lesions mostly composed of spindle cells 29430713 ; 33217002  have been described. ALK is overexpressed in about 90% of cases 25857825 , with higher positivity with the D5F3 or 5A4 clones than with the ALK1 clone 25857825 ; 34929229 , and EMA is positive in 65% 21752057 . CD30 expression may be seen 25857825 ; 24666231 . CD31, SMA, and desmin are usually negative 21752057 ; 25596243 .",
    ],
    ihc: [],
    molecular: [
      "Although the histogenesis is unknown, EFH is probably biologically distinct from dermatofibroma (conventional fibrous histiocytoma) and its subtypes 26763770 ; 25857825 . EFHs harbour rearrangements of ALK (in ~90% of cases) or a PRKC gene (rarely), as mutually exclusive events 25857825 ; 24666231 ; 26121314 . SQSTM1 and VCL are the most common ALK fusion partners; rare fusions partners are DCTN1, ETV6, PPFIBP1, SPECC1L, TPM3, PRKAR2A, MLPH, CLTC, and EML4 25413595 ; 29327718 ; 29329131 ; 35289445 .",
    ],
    differential: [
      "The differential diagnosis includes Spitz nevus, cutaneous syncytial myoepithelioma, epithelioid sarcoma, and cellular neurothekeoma.",
    ],
    criteria: [
      "Essential: a well-circumscribed dermal tumor composed of uniform plump epithelioid cells with vesicular nuclei, small nucleoli, and abundant pale eosinophilic or amphophilic cytoplasm.",
      "Desirable: usually positive for ALK.",
    ],
    icdo: "0",
  },
  {
    name: "Non-neural granular cell tumor",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Intermediate / uncertain",
    clinical: [
      "The back was the preferred site in one series; in another, the lesions were widely distributed on the torso, limbs, and face 16045779 ; 15958858 .",
      "The lesions are most commonly non-ulcerated papules or nodules.",
      "NNGCT occurs in children and adults 1985501 ; 16045779 ; 15958858 .",
    ],
    definition: [
      "Non-neural granular cell tumor (NNGCT) is a rare, low-grade neoplasm of mesenchymal cells of unknown lineage with prominent cytoplasmic granularity.",
    ],
    histology: [
      "NNGCTs can be polypoid. Some lesions are gently domed. The lesional cells often extend to the base of the dermis or into the subcutis. The overlying epidermis is usually thin, with epithelial collarettes defining the lateral edges. The granular cells form sheets and are large and oval, with coarse eosinophilic granules. The cellular granularity is due to the accumulation of lysosomes in the cytoplasm of the affected cells. The largest granules are surrounded by clear haloes (pustulo-ovoid bodies of Milian). The nuclei can vary from moderately sized and monomorphic to large, pleomorphic, and heterochromatic. Mitoses can range from few to many (as many as 6 mitoses/mm2), and atypical mitoses can occur. While typically circumscribed, some cases show poorly demarcated deep margins 16045779 . A few cases have shown lymphatic invasion 1985501 .",
    ],
    ihc: [
      "The cells of NNGCTs fail to stain for S100 and other neural or melanocytic markers 1985501 ; 16045779 ; 15958858 . They usually stain positively for CD68 and CD63 (NKI/C3), probably because of reactivity with lysosomes in the cytoplasm, but such positivity is not lineage-specific; it can also be seen in the cells of many other neoplasms. They are negative for desmin, SMA, and cytokeratin.",
    ],
    molecular: [
      "In a small series, 3 of 5 NNGCTs (60%) harboured ALK rearrangements 30001233 . Other pathogenic alterations have not been identified.",
    ],
    differential: [
      "The diagnosis of NNGCT is one of exclusion. While the tumors often resemble conventional granular cell tumor of Schwannian origin, a polypoid configuration, epithelial collarettes, nuclear pleomorphism (including prominent nucleoli), and easily detectable mitoses favor NNGCT. Unlike NNGCTs, conventional granular cell tumors are positive for S100 and SOX10. Granular cell fibrous papules are usually found on the nose, are smaller dome-surfaced lesions, and have nearly clear cytoplasm with paler granules. For NNGCT with cytological atypia and mitotic activity, granular cell patterns of basal cell carcinoma, dermatofibroma, leiomyosarcoma, and dermatofibrosarcoma protuberans are considerations and can usually be distinguished by the expression of lineage-specific markers or by areas in which the conventional aspects of these neoplasms are apparent.",
    ],
    criteria: [
      "Essential: dermal tumor of granular cells; no expression of lineage-specific markers; nuclear pleomorphism and mitotic activity are acceptable.",
      "Desirable: ALK-positive staining or ALK rearrangement in selected cases.",
    ],
    icdo: "1",
  },
  {
    name: "PEComa",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Intermediate / uncertain; malignant potential varies",
    clinical: [
      "PEComas most often arise in somatic soft tissue or visceral sites. In skin, by far the most common site is the extremities (especially lower); uncommon locations include the trunk, head, or neck 15953380 ; 18277881 ; 15842631 ; 28556973 ; 17593087 ; 24124856 .",
      "Patients typically present with painless cutaneous nodules, papules, or plaques.",
      "Primary cutaneous PEComas are rare. tumors most often arise in female patients and occur over a wide age range (15–81 years), with a peak in middle age 15953380 ; 18277881 ; 15842631 ; 28556973 ; 17593087 .",
    ],
    definition: [
      "Perivascular epithelioid cell tumors (PEComas) are mesenchymal neoplasms composed of perivascular epithelioid cells (PECs) – distinctive epithelioid cells that are often closely associated with blood vessel walls and that express both melanocytic and smooth muscle markers.",
    ],
    histology: [
      "tumors are dermal-based but often extend into the subcutis 18277881 ; 15842631 ; 28556973 . The edges are typically irregular and may show entrapment of dermal collagen. Most PEComas show a nested or trabecular architecture with a distinctive perivascular pattern of growth, with tumor cells radially arranged around vessels, replacing the vessel wall and approaching the endothelium, and are composed of epithelioid cells with granular, palely eosinophilic, or clear cytoplasm and round nuclei with small nucleoli. A mixed epithelioid and spindle cell morphology is less common 18277881 . Scattered multinucleated cells may be seen, and occasionally mild pleomorphism, but mitotic figures are usually scarce or absent 18277881 ; 28556973 . Almost all reported cases of cutaneous PEComa lack histological features of malignancy (mitotic activity, necrosis, and pleomorphism) 16327428 ; 24061520 ; 30001237 , with only rare case reports of malignant forms 24124856 ; 33908075 . The presence of “malignant” features should raise the possibility of a cutaneous metastasis rather than a true primary tumor. So-called angiomyolipomas of skin probably represent hamartomatous or lipomatous neoplasms with a smooth muscle component, rather than being part of the PEComa family of tumors.",
    ],
    ihc: [
      "PEComas characteristically express both melanocytic markers, such as HMB45 (the most sensitive immunomarker), melan-A, and MITF, and muscle markers, such as SMA, desmin, and caldesmon 19604538 ; 18223480 ; 24061520 ; 30001237 ; 11800647 . However, expression of smooth muscle markers is less common in primary cutaneous PEComas than in soft tissue counterparts, occurring in just over 50% of cases 18277881 ; 15842631 . Nuclear expression of S100 is uncommon and usually focal 16327428 ; 18277881 . tumor cells lack expression of keratins.",
    ],
    molecular: [
      "Not clinically relevant",
      "Deletion of 16p, the location of the TSC2 gene, is a frequent finding in PEComa; loss of heterozygosity at the TSC2 locus occurs in both sporadic and syndromic tumors 18085521 . TP53 mutations have been identified in 63% of TSC2-mutated PEComas 25651471 . A small subset of PEComas harbour TFE3 gene fusions, which correlate with strong nuclear immunoreactivity for TFE3 20871214 , but in skin, TFE3 rearrangements have not been described 23711163 .",
    ],
    differential: [
      "The differential diagnosis may include metastatic melanoma or metastatic renal cell carcinoma (there is often a strong and diffuse expression of CD10 by the tumor cells 28556973 ).",
    ],
    criteria: [
      "Essential: epithelioid cells with granular eosinophilic to clear cytoplasm; nested, trabecular, or sheet-like architecture with frequent perivascular orientation; variable coexpression of melanocytic and smooth muscle markers.",
    ],
    icdo: "1",
  },
  {
    name: "Angiomatoid fibrous histiocytoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Intermediate, rarely metastasizing",
    clinical: [
      "tumors most frequently occur as dermal or subcutaneous lesions in the extremities, followed by the trunk and the head and neck. Nearly two thirds of cases occur in sites where lymph nodes are normally found 10571514 .",
      "Patients typically present with a slow-growing, superficial, painless soft tissue mass simulating a haematoma or a hemangioma 2174650 ; 228836 .",
      "It accounts for 0.3% of all soft tissue tumors, with no sex predilection. A wide age range is reported, with a peak incidence in the first two decades of life 2174650 ; 2845834 ; 17724745 ; 27166030 .",
    ],
    definition: [
      "Angiomatoid fibrous histiocytoma is a rare neoplasm of intermediate malignant potential and uncertain differentiation, mostly occurring in the subcutis and histopathologically characterized by nodules of ovoid and spindle cells, hemorrhagic pseudocystic spaces, and a peripheral rim of lymphoplasmacytic cells.",
    ],
    histology: [
      "tumors are circumscribed and lobulated. They contain varying proportions of fascicles or sheets of oval and spindle-shaped cells containing bland vesicular nuclei, and pseudoangiomatous blood-filled spaces. They also have a thick fibrous pseudocapsule with hemosiderin deposition, and a pericapsular cuff of lymphoplasmacytic cells with germinal centres, simulating a metastatic lymph node. Nearly one third of cases have a completely solid appearance. Mitotic figures are few, although atypical mitotic figures may be noted. A variable number of pleomorphic cells may be present 25927151 ; 27166030 ; 24043718 . Cellular atypia and increased mitotic figures are not associated with an aggressive clinical outcome 2174650 . One pattern of angiomatoid fibrous histiocytoma is characterized by small blue round cells, resembling an undifferentiated round cell sarcoma 10571514 ; 11012987 . A myxoid pattern has also been described 24503754 ; 21822206 .",
    ],
    ihc: [
      "Most tumors express SOX9 31567275 . Nearly 50% of cases are immunoreactive for desmin. These tumors are consistently negative for MYOD1 and myogenin. EMA, CD99, and CD68 are variably immunopositive 10571514 . The Ki-67 proliferation index is invariably low 21822206 .",
    ],
    molecular: [
      "Demonstration of the presence of EWSR1::CREB1 or alternative gene fusions may be helpful for the diagnosis.",
      "The most frequent genetic abnormality is the t(2;22)(q33;q12) translocation, resulting in a EWSR1::CREB1 fusion, followed by t(12;22)(q12;q12) translocation, leading to a EWSR1::ATF1 fusion 17724745 ; 18094413 ; 27166030 ; 15884099 . Rare tumors harbour a FUS::ATF1 fusion 12218455 ; 11063792 .",
    ],
    differential: [],
    criteria: [
      "Essential: clinically, a small subcutaneous painless nodule; histopathologically, solid nodules of ovoid and spindled cells, pseudoangiomatoid spaces, and a peripheral rim of lymphoplasmacytic cells.",
      "Desirable: SOX9 and desmin positivity by immunohistochemistry; demonstration of EWSR1 gene rearrangement or the EWSR1::CREB-family fusions (in selected cases).",
    ],
    icdo: "1",
  },
  {
    name: "NTRK-rearranged spindle cell neoplasm",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Variable; usually intermediate / uncertain",
    clinical: [
      "These tumors occur in the deep dermis and subcutis of the extremities, trunk, and head and neck area 27259011 ; 30276917 ; 31219820 ; 31994201 ; 32506523 .",
      "NTRK-rearranged spindle cell tumors present as a palpable mass, 10–60 mm in diameter.",
      "NTRK-rearranged spindle cell tumors are predominantly encountered in the pediatric population 30585824 ; 31994201  but may arise at any age (range: 0–77 years, median: 19 years), with both sexes affected equally 27259011 ; 30276917 ; 32506523 .",
    ],
    definition: [
      "This is an emerging group of molecularly defined monomorphic spindle cell neoplasms with activating NTRK or other kinase fusions and displaying a wide spectrum of morphological patterns including lipofibromatosis-like growth.",
    ],
    histology: [
      "NTRK-rearranged spindle cell tumors have a range of morphological features. Many superficial tumors show a pattern reminiscent of lipofibromatosis, frequently referred to as lipofibromatosis-like neural tumor. In these cases, fibrous septa with increased spindled cells that have small ovoid to tapering nuclei and indistinct cytoplasm extend through adipose tissue. Mitotic activity is inconspicuous. Other tumors may be more cellular, with sheets of spindled to ovoid cells present in fascicles or loosely arranged in a myxoid background. Commonly, however, tumors have a hybrid appearance, with areas of increased cellularity devoid of entrapped adipose tissue intermingling with areas that are adipose-rich. Within this spectrum are tumors with low to high cellularity and a range of mitotic counts. Infrequent tumors may show higher-grade histological features with fascicles of malignant-appearing spindle cells with high mitotic activity. Focal marked nuclear pleomorphism or necrosis may be seen 27259011 ; 30276917 ; 30585824 ; 32506523 . Other histological features include lymphocytic infiltrate, thin-walled staghorn vessels, perivascular hyalinization, and stromal bands of hyalinized collagen 27259011 ; 30276917 ; 30585824 ; 32506523 .",
    ],
    ihc: [
      "tumors show variable coexpression of CD34, S100, and occasionally SMA; however, expression of CD34 or S100 is not required, and tumors may have a nonspecific immunoprofile 27259011 ; 32506523 . There is usually diffuse pan-TRK expression in tumors with activating NTRK fusions 29683818 ; 29863809 ; 30585824 . SOX10 is typically absent and H3 p.K27me3 is retained.",
    ],
    molecular: [
      "Molecular genetic testing for receptor tyrosine kinase fusions (e.g. NTRK1, NTRK2, NTRK3, RET, MET, EGFR, ROS1, ALK) or downstream effector molecule fusions (ABL1, BRAF, or RAF1) or activating point mutations is required for a conclusive diagnosis and determination of therapy 30276917 ; 30585824 ; 32506523 .",
      "Activation of MAPK signalling occurs through the formation of chimeric proteins, often LMNA::NTRK1, TPR::NTRK1, or TPM3::NTRK1 27259011 ; 30276917 . Other kinase gene fusions include NTRK2, NTRK3, RAF1, BRAF, RET, MET, ROS1, or ALK with various partners 27259011 ; 31994201 ; 32506523 .",
    ],
    differential: [],
    criteria: [
      "Essential: a spindle cell neoplasm with a wide morphological spectrum and histological grades defined by activating receptor tyrosine kinase fusions (e.g. NTRK fusions or others); the majority of tumors are characterized by haphazardly arranged monomorphic spindle cells, infiltrative growth within fat resembling lipofibromatosis, distinctive stromal and perivascular keloid collagen, and coexpression of CD34 and S100.",
      "Desirable: diffuse pan-TRK reactivity in tumors with NTRK fusions.",
    ],
    icdo: "0",
  },
  {
    name: "Atypical fibroxanthoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Intermediate, low metastatic risk when confined to dermis",
    clinical: [
      "tumors usually develop on sun-exposed sites, especially the head and neck. The ear is a particularly common location. Purported lesions developing on the limbs in the young are likely to represent other entities, such as atypical fibrous histiocytoma.",
      "AFX often manifests as a solitary, localized nodule up to 20 mm in diameter, on sun-damaged skin 20526171 ; 19807823 ; 16197421 ; 22709412 . Ulceration is common, often with a short history of rapid growth. Although there are no specific clinical features, the diagnosis can sometimes be suspected from the context and lack of pigmentation or features pointing to a diagnosis of basal or squamous cell carcinoma.",
      "The tumors are rare, mostly occurring in sun-damaged skin of elderly White patients, especially those living in areas of high solar radiation 20526171 ; 19807823 ; 21269345 . Men are more often affected than women. AFXs have been reported in young patients with Li–Fraumeni syndrome with germline mutation of TP53 24299451  and xeroderma pigmentosum 12485439 ; 17378688 .",
    ],
    definition: [
      "Atypical fibroxanthoma (AFX) is a dermally based neoplasm of uncertain histogenesis that generally behaves in a low-grade fashion when strict diagnostic criteria are used. Most cases arise on sun-damaged sites in elderly individuals. The diagnosis requires the evaluation of multiple immunostains.",
    ],
    histology: [
      "A circumscribed dermal tumor is present with no involvement of the subcutis. The neoplasm is typically highly cellular, with striking nuclear enlargement, pleomorphism, and atypia. Mitoses are frequent, with atypical forms. Enlarged spindle or epithelioid cells are seen, some with histiocyte-like appearances. Irregular fascicles may be present with scattered inflammatory cells and occasional hemorrhage. Ulceration is common, sometimes with an epidermal collarette or atrophy. Necrosis is absent in AFX. Plaque-like growth is occasionally seen with a band of cells parallel to the epidermis. These plaque-like lesions may be less well circumscribed 20526171 .",
      "AFX with a spindle cell pattern shows exclusively spindle-shaped cells in fascicles with eosinophilic cytoplasm, vesicular nuclei, and prominent nucleoli 26098709 . Sometimes the cytological features of this pattern are relatively bland. AFX with a clear cell pattern exhibits cells with clear to foamy cytoplasm and hyperchromatic, pleomorphic nuclei 26848640 . Glycogen is of limited extent or absent. Further patterns include granular cell, keloidal, myxoid, and sclerotic forms. Regression is sometimes seen, which can be extensive, making diagnosis on a partial biopsy challenging. Pigmented AFX show hemosiderin deposition and hemorrhage 9870148 ; 24080496 . Some AFXs contain osteoclast-like giant cells, which may be multinucleated tumor cells (demonstrating nuclear atypia) or background histiocytes (CD163-positive with bland nuclei).",
    ],
    ihc: [
      "Immunohistochemistry is vital to exclude other malignancies, especially melanoma, leiomyosarcoma, and poorly differentiated squamous cell carcinoma. A metastasis should always be considered. A broad panel of immunostains is essential. In particular, melanocyte markers (e.g. SOX10, S100) and keratinocyte markers (e.g. MNF116, AE1/AE3, 34βE12, p63, p40) should be negative 20526171 ; 19807823 ; 19476522 ; 25029117 . Included S100-positive Langerhans cells can be numerous and confirmed with CD207 (langerin) or CD1a. Many AFXs are MITF-positive, and occasionally there may be focal expression of melan-A 25238448 ; 22050092 . In some studies, most tumors stain with SMA, but allied desmin or h-caldesmon staining would suggest leiomyosarcoma 26098709 . Desmin positivity has been reported in AFX, but these tumors may represent leiomyosarcoma, particularly if staining is prominent. CD10 is almost invariably strongly and diffusely expressed in AFX and may be the only positive stain. Although this is nonspecific and can be seen in some melanomas and squamous cell carcinomas, for example, AFX should be diagnosed with great caution if CD10 is absent. CD68 and CD163 are often positive but are of limited diagnostic value and also stain included macrophages. Multinucleated tumor giant cells may non-specifically uptake immunostains including HMB45 and calponin. In vascular-appearing tumors, negative staining for CD34 and ERG may be required to exclude angiosarcoma 24080496 . Some AFXs express EMA (without evidence of other epithelial marker positivity) and CD31 24080496 .",
    ],
    molecular: [
      "Diagnostic molecular pathology is not clinically relevant in most cases.",
      "The origin of AFX remains unclear, but electron microscopy and immunohistochemistry suggest a histogenesis from undifferentiated dermal mesenchymal cells 907965 ; 196742 .",
    ],
    differential: ["See #34497Table 7.03 ."],
    criteria: [
      "Essential: usually pleomorphic (but variable) morphology; strict confinement to the dermis; immunonegativity for at least two epithelial and melanocytic markers (e.g. keratins, p63, S100, HMB45, melan-A, and SOX10).",
    ],
    icdo: "1",
  },
  {
    name: "Superficial CD34-positive fibroblastic tumor",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Intermediate, low-grade; rare recurrence",
    clinical: [
      "This tumor most frequently occurs in the lower extremities (especially the thigh), followed by the arm, buttock, shoulder, and (rarely) vulva 23887307 ; 26946226 ; 27636918 ; 30004071 ; 34121219 ; 34969957 .",
      "The tumor typically presents as a slow-growing, painless mass of the superficial soft tissues. A long prebiopsy duration (> 5 years) is often noted 23887307 . Rare cases present as deep-seated lesions 34121219 . tumor size varies from 15 to 100 mm, but it is usually < 50 mm 23887307 ; 27636918 ; 28937375 ; 34121219 ; 34969957 .",
      "Slightly more than 100 cases have been reported. Most have occurred in middle-aged adults (median age: 38 years), with a slight male predominance 23887307 ; 27636918 ; 34121219 ; 34969957 ; 33969057 ; 32055270 .",
    ],
    definition: [
      "Superficial CD34-positive fibroblastic tumor (SCD34FT) is a distinctive low-grade neoplasm of the skin and subcutis, characterized by a proliferation of spindled cells with characteristic morphological features and diffuse expression of CD34. PRDM10 rearrangements are often but not always present.",
    ],
    histology: [
      "The lesions grow in a relatively circumscribed (but at least partially infiltrative) fashion and are composed of cellular fascicles and sheets of spindled and pleomorphic cells with abundant eosinophilic cytoplasm, often having a granular or “glassy” appearance. Lipidized tumor cells are commonly present. The neoplastic cells show moderate to marked nuclear pleomorphism, often with bizarre, hyperchromatic nuclei containing prominent nucleoli and intranuclear cytoplasmic pseudoinclusions. Mitotic activity is very low, and necrosis is rarely seen 23887307 ; 27636918 ; 26946226 ; 30004071 . A mixed inflammatory cell infiltrate is often present. Rarely, myxoid stroma and metaplastic bone are reported in PRDM10-rearranged soft tissue tumors 34121219 .",
    ],
    ihc: [
      "These tumors invariably express CD34, and they are focally immunoreactive for keratins in close to 70% of cases (most often with the AE1/AE3 clones). SMARCB1 (INI1) expression is retained, and p53 expression shows a wildtype pattern. The Ki-67 (MIB1) proliferation index is very low (< 5%) 23887307 ; 27636918 ; 34121219 ; 34969957 . PRDM10 immunohistochemistry is consistently positive 30570551 . CADM3 (SynCam3) immunopositivity is reported in 95–100% of cases 34121219 ; 34969957 .",
    ],
    molecular: [
      "Demonstration of PRDM10 rearrangement is useful in selected cases.",
      "The morphological, immunohistochemical, and molecular genetic features of SCD34FT and tumors referred to as “PRDM10-rearranged soft tissue tumor” are identical, strongly supporting their unity 30570551 ; 34121219 ; 34969957 . The terminology “superficial CD34-positive fibroblastic tumor” is preferred, because not all tumors harbour demonstrable PRDM10 rearrangements. PRDM10 rearrangements have been identified and have been reported in close to 60% of cases previously classified as SCD34FT or PRDM10-rearranged soft tissue tumor 30570551 ; 34969957 . Specific identified fusions have included MED12::PRDM10, CITED2::PRDM10, PRDM10::ARHGAP32, and PRDM10::RAB30 30570551 ; 34121219 ; 34969957 .",
    ],
    differential: [
      "The differential diagnosis of SCD34FT includes pleomorphic dermal sarcoma, dermatofibrosarcoma protuberans, plaque-like CD34-positive dermal fibroma, myxoinflammatory fibroblastic sarcoma, superficial solitary fibrous tumors, inflammatory myofibroblastoma, superficial myxofibrosarcoma, fibrous histiocytoma, and epithelioid sarcomas 33969057 . It may also include atypical fibrous histiocytoma, atypical fibroxanthoma, and undifferentiated pleomorphic sarcoma.",
    ],
    criteria: [
      "Essential: superficial location; large eosinophilic cells with granular to glassy cytoplasm, marked nuclear pleomorphism, and a low mitotic rate; diffuse CD34 expression.",
      "Desirable: CADM3 expression; keratin immunoreactivity; PRDM10 rearrangement.",
    ],
    icdo: "1",
  },
  {
    name: "Pleomorphic dermal sarcoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Malignant",
    clinical: [
      "The primary location is the head and neck region, with a preference for the hairless scalp 34202213 ; 35099104 .",
      "This malignancy typically manifests as a rapidly growing nodule with a diameter of 5–50 mm (median: 25 mm). Ulceration is observed in at least 50% of the lesions 35099104 .",
      "PDS occurs on severely sun-damaged skin of White patients in their seventh or eighth decade of life 22510760 ; 26264237 , with a male predominance 22510760 .",
    ],
    definition: [
      "Pleomorphic dermal sarcoma (PDS) is a rare tumor occurring in elderly patients, in chronically ultraviolet (UV) radiation–exposed skin. It is genetically, morphologically, and clinically related to atypical fibroxanthoma, but subcutaneous invasion and lymphovascular/perineural invasion are not features of atypical fibroxanthoma and confer an increased risk of aggressive behavior.",
    ],
    histology: [
      "The tumors are centred within the dermis, with an expansile nodular or plaque-like growth pattern, poor demarcation, and irregular borders. Ulceration is frequently seen (> 50% of cases). A diffusely infiltrative growth with invasion of subcutaneous adipose tissue, skeletal muscle, or fascia is common and may be relevant for local relapse risk 32583897 .",
      "The tumor cells vary in size and shape. Most frequent are pleomorphic spindle cells with hyperchromatic or vesicular nuclei and prominent nucleoli. In addition, epithelioid, spindled, and multinucleated giant cells may be admixed. Mitotic activity is brisk and includes atypical forms. tumor necrosis, perineural infiltration, and lymphovascular invasion may also be seen.",
      "The next most common morphological pattern shows atypical spindle cells in a fascicular arrangement. Other less common features include myxoid, desmoplastic, or keloidal stromal change; pseudoangiomatous features; a storiform growth pattern; and admixed osteoclast-like multinucleated giant cells.",
    ],
    ihc: [
      "The tumor cells are consistently negative for S100, SOX10, PMEL (gp100), cytokeratins, CD34, ERG, and desmin 22510760 ; 24080496 . SMA and CD31 may be focally positive, and aberrant melan-A expression is occasionally seen 22510760 ; 22050092 ; 24080496 ; 35099104 . Immunoreactivity for CD10, CD99, and PDGFRB is typically detected.",
    ],
    molecular: [
      "PDS is an undifferentiated tumor of uncertain histogenesis that does not express epithelial, melanocytic, vascular, or muscle differentiation markers. Similarly to atypical fibroxanthoma, PDS occurs in chronically UV radiation–exposed skin, frequently with or after UV radiation–dependent cutaneous epithelial malignancies including actinic keratosis or squamous cell carcinomas, sometimes on chronic radiodermatitis. Next-generation sequencing consistently showed a high mutation load, with a UV radiation signature; mutations in TP53, NOTCH family genes, and the TERT promoter; and alterations in CDKN2A and CDKN2B responsible for cell-cycle control 34202213 ; 29099504 . This mutation profile widely overlaps with that of cutaneous squamous cell carcinoma.",
    ],
    differential: [
      "The differential diagnosis includes atypical fibroxanthoma, desmoplastic melanoma, poorly differentiated carcinoma, leiomyosarcoma, and angiosarcoma. Negative staining for ERG can be useful for excluding angiosarcoma in diagnostically difficult cases.",
    ],
    criteria: [
      "Essential: a pleomorphic dermal-based neoplasm; invasion of the subcutis, necrosis, perineurial infiltration, or lymphovascular invasion; exclusion of epithelial, vascular, smooth muscle, and melanocytic tumors by immunohistochemistry.",
    ],
    icdo: "3",
  },
  {
    name: "Epithelioid sarcoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Malignant",
    clinical: [
      "Classic ES arises in the distal extremities, predominantly on the volar surfaces of the hands and feet 4014539 ; 26645461 . Proximal-type ES arises in deep soft tissues, most often at truncal locations or in the buttock or hip 9042279 ; 11454997 .",
      "Classic ES manifests as superficial, slow-growing, painless, firm nodules. Sporotrichoid spread is characteristic. Non-healing skin ulcers mimic other processes 33247494 . Soft tissue ES is larger and more infiltrative 9042279 ; 11454997 . ES may metastasize to lymph nodes and distant sites.",
      "ES represents < 1% of adult soft tissue sarcomas 19224301  and 4–8% of childhood non-rhabdomyosarcomatous soft tissue sarcomas 16353216 . Classic ES is reported twice as often as proximal ES 19141382 ; 18607629 . The M:F ratio is 2:1 for classic ES 26645461  and 1.6:1 for proximal-type ES 9042279 ; 11454997 . Classic ES occurs mainly in adolescents and young adults. Proximal-type ES affects a somewhat older population of young to middle-aged adults 26645461 .",
    ],
    definition: [
      "Epithelioid sarcoma (ES) is a malignant soft tissue tumor with hybrid mesenchymal and epithelial morphological and immunophenotypic features. Two subtypes are described: classic ES tends to arise in acral skin, with a palisading, pseudogranulomatous growth pattern; proximal ES occurs in deep truncal locations as nests and sheets of larger epithelioid cells.",
    ],
    histology: [
      "Classic ES consists of infiltrative, pseudogranulomatous nodules of epithelioid and spindled tumor cells palisading around foci of necrobiosis 3717528 . Constituent cells are large, with deeply eosinophilic cytoplasm and atypical nuclei with vesicular chromatin and small nucleoli. Mitoses are inconspicuous. Dystrophic calcification and metaplastic bone are seen in 20% of cases 4014539 . Proximal ES is characterized by sheet-like growth of larger epithelioid cells with vesicular nuclei with nucleoli 9042279 ; 11454997 . tumor necrosis is frequently seen. Rhabdoid cells occur in both forms but are more frequent in proximal ES 9042279 .",
      "ES is high-grade by definition.",
    ],
    ihc: [
      "Both subtypes show immunoreactivity for cytokeratins and EMA 10452506 . Most express CK8/19 10452506  but are negative for CK5/6 12946229 . CD34 is expressed in > 50% of cases. Loss of nuclear SMARCB1 expression occurs in the vast majority of ESs 19033866 ; 18973917 ; 21357725 . ERG expression is observed in 40–67% of ESs 23774169 ; 24072183 ; 25479928 .",
    ],
    molecular: [
      "In challenging cases, panel sequencing may detect mutations inactivating SMARCB1 30652038 .",
      "The SMARCB1 gene (also known as BAF47, INI1, and SNF5) encodes a component of the SWI/SNF chromatin-remodelling complex present in normal cells. SWI/SNF has ATPase activity and functions to shift the position of nucleosomes modulating transcription of genes involved in cell differentiation 28945250 . Loss of nuclear SMARCB1 protein expression is characteristic of ES, but an extreme minority retain SMARCB1 (INI1) expression, instead exhibiting abnormal expression of other SWI/SNF chromatin-remodelling complex members, such as SMARCA4 (BRG1), SMARCC1 (BAF155), or SMARCC2 (BAF170) 29309303 . Genomic analysis has revealed complex copy-number aberrations and relatively high mutation burden 26365879 . RNA sequencing shows a unique profile that does not cluster with any particular tissue type or other SWI/SNF-aberrant system 26365879 ; 26343384 .",
    ],
    differential: [
      "This includes granulomatous processes, carcinomas, and epithelioid vascular tumors.",
    ],
    criteria: [
      "Essential: a tumor presenting as a soft tissue mass (termed distal or proximal presentations); epithelioid to spindled cytomorphology with infiltrative growth; diffuse loss of SMARCB1 (INI1, BAF47); staining for EMA and keratin.",
    ],
    icdo: "3",
  },
  {
    name: "CRTC1::TRIM11 cutaneous tumor",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Malignant potential not fully established",
    clinical: [
      "CTCT shows a broad anatomical distribution, although it occurs most commonly in the extremities (upper extremity 40%, lower extremity 30%), followed by the trunk (15%), head, and mucosa (oral and nasal reported) 35993578 ; 29240581 ; 31237704 .",
      "The tumors occur as a discrete, slowly growing, skin-colored nodule. Mild pain and tingling have been noted 35993578 ; 29240581 ; 31237704 .",
      "Nearly 50 cases have been reported in the literature 29240581 ; 30676334 ; 31237704 ; 31276279 ; 33586183 ; 35993578 ; 35751643 ; 36177516 , without an obvious sex bias and across a broad age range (11–87 years, median: 44 years) 35993578 .",
    ],
    definition: [
      "CRTC1::TRIM11 cutaneous tumor (CTCT) is a dermal spindled and epithelioid cell tumor with partial melanocytic differentiation and CRTC1::TRIM11 translocation.",
    ],
    histology: [
      "The morphology is highly uniform and resembles that of clear cell sarcoma. tumors are dermal-based, well-circumscribed, unencapsulated nodules with a pushing border and no pigment. They can abut, but only very rarely involve, the epidermis. Cells are arranged in nests and streaming long and short intersecting (at times herringbone to vaguely palisaded) fascicles with intervening thin fibrous bands; they are fusiform with abundant pale cytoplasm, smooth nuclear membranes, vesicular chromatin, and prominent nucleoli. Mitoses are typical, although not conspicuous 35993578 ; 29240581 ; 31237704 ; 35751643 .",
    ],
    ihc: [
      "All tumors express diffuse SOX10. Diffuse S100 staining is seen in only 50% of cases; melan-A (MART1) and HMB45 are only focally expressed. Pan-TRK expression can be observed (60% diffuse). TRIM11 immunohistochemistry is typically positive in nuclei at the periphery of the nodule 35993578 ; 29240581 ; 31237704 .",
    ],
    molecular: [
      "Demonstration of CRTC1::TRIM11 fusion is necessary for the diagnosis.",
      "Although the precise molecular function of the CRTC1::TRIM11 fusion protein has not been proved, CRTC1 (CREB-regulated transcription coactivator 1, 19p) is thought to enhance cell proliferation, differentiation, and expression of the oncogene MITF through activation of CREB1 (the cAMP response element-binding transcription factor) 14506290 ; 14536081 ; 28263292 .",
    ],
    differential: [
      "The main differential diagnosis includes clear cell sarcoma and metastatic melanoma 35993578 .",
    ],
    criteria: [
      "Essential: a circumscribed, non-pigmented dermal tumor comprising intersecting bundles of epithelioid to fusiform cells with pale cytoplasm and vesicular nuclei; expression of SOX10, with at least partial loss of other melanocytic markers; no demonstrable EWSR1 rearrangement.",
      "Desirable: demonstration of TRIM11 rearrangement.",
    ],
    icdo: "3",
  },
  {
    name: "Dermal clear cell sarcoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Malignant",
    clinical: [
      "Dermal CCS predominantly affects the extremities, especially the distal extremities 20087159 ; 31688004 , but it can also occur elsewhere, including in the head and neck region.",
      "Most superficial cutaneous (i.e. primary dermal) tumors manifest as small amelanotic nodules. They may be confused with melanocytic neoplasms, such as Spitz naevi 23228147 .",
      "CCS tends to affect young adults, most often during the third to fourth decade of life 14332545 ; 6614306 ; 20087159 . Very rarely the tumor may also occur in children 32324602  or older individuals.",
    ],
    definition: [
      "Dermal clear cell sarcoma (CCS) is a malignant neoplasm of uncertain histogenesis displaying melanocytic differentiation and associated with a gene fusion involving EWSR1 and ATF1 or CREB1.",
    ],
    histology: [
      "The tumor is characterized by fascicles and nests of usually amelanotic spindle and epithelioid cells. A few cells may display clear cytoplasm. Multinucleate wreath-type giant cells are often seen. The degree of nuclear atypia and number of mitoses are variable. The tumor often displays collagenous septa separating tumor cell aggregates. Most tumors have a grenz zone 20087159 . On rare occasion a tumor may involve both the dermis and the epidermis (compound CCS), often as junctional nests, and is therefore more likely to be confused with a primary cutaneous melanoma or a melanocytic nevus 20087159 ; 23228147 ; 23980901 ; 31688004 .",
    ],
    ihc: [
      "The tumor cells express S100, SOX10, and melanocyte differentiation antigens such as PMEL (gp100), TYRP1 (gp75), melan-A, and MITF 23228147 . In contrast to cutaneous melanomas, PRAME expression is usually absent or only focal 32681554 ; 34991102 .",
    ],
    molecular: [
      "Identification of EWSR1 gene rearrangement and/or documentation of an EWSR1::ATF1 or EWSR1::CREB1 gene fusion may be helpful, in particular to differentiate CCS from malignant melanoma.",
      "The majority (70–90%) of CCSs harbour an EWSR1::ATF1 fusion secondary to the reciprocal translocation t(12;22)(q13;q12). The oncogenic fusion constitutively activates the promoter of MITF (microphthalmia-associated transcription factor), resulting in melanocytic differentiation and tumor growth. A variant translocation, t(2;22)(q32.3;q12), which results in an EWSR1::CREB1 fusion, is rare, accounting for approximately 5% of tumors 19561568 ; 17227118 . CCS may be associated with additional chromosomal aberrations, such as extra copies of chromosomes.",
    ],
    differential: [
      "Dermal CCS may be confused with spitzoid melanocytic tumors, cellular blue nevus, primary nodular or metastatic melanoma, epithelioid sarcoma, or other sarcomas.",
    ],
    criteria: [
      "Essential: characteristic nested or fascicular architecture; plump spindle or ovoid cells with palely eosinophilic cytoplasm and prominent nucleoli; spindle and epithelioid neoplasm with melanocytic differentiation confirmed by immunohistochemistry.",
      "Desirable: documentation of an EWSR1 gene rearrangement and/or EWSR1::ATF1 or EWSR1::CREB1 fusion.",
    ],
    icdo: "3",
  },
  {
    name: "Ewing sarcoma",
    family: "Tumors of Uncertain Differentiation",
    subgroup: "Tumors of Uncertain Differentiation",
    behavior: "Malignant",
    clinical: [
      "Ewing sarcoma most commonly involves the lower limbs (38% of cases), followed by the upper extremities (26%), head (20%), and trunk (16%). Extraskeletal Ewing sarcoma occurs in approximately 12% of patients and has a wide anatomical distribution, including superficial / primary cutaneous sites 22098102 ; 33635948 ; 29977059 ; 9363452 ; 21649689 ; 19783720 ; 18820660 ; 9500772 .",
      "Ewing sarcoma manifests as dermal or subcutaneous nodules that may be painful, polypoid, and/or ulcerated. The median tumor size is 23 mm (range: 5–120 mm) 9363452 ; 9500772 ; 19783720 ; 18820660 .",
      "Cutaneous Ewing sarcoma tends to occur in children and young adults, but it has been reported in older individuals. The median age at diagnosis is 17 years (range: 2–77 years); 67% of patients are female, and 33% are male 22098102 ; 33635948 ; 29977059 ; 9363452 ; 21649689 ; 19783720 ; 18820660 ; 9500772 .",
    ],
    definition: [
      "Ewing sarcoma is a small round cell sarcoma showing gene fusions involving one member of the FET family of genes (usually EWSR1) and a member of the ETS family of transcription factors. Superficial / primary cutaneous lesions are rare but well described.",
    ],
    histology: [
      "tumors are composed of sheets of mitotically active, uniform small blue round cells with indistinct cell borders and round nuclei with fine stippled chromatin and inconspicuous nucleoli. Constituent cells have a high N:C ratio and scant, lightly eosinophilic to clear glycogenated cytoplasm that gives a positive PAS reaction 9363452 ; 9500772 ; 19841938 .",
    ],
    ihc: [
      "Membranous CD99 immunoreactivity is a highly sensitive but nonspecific finding in nearly all cases. Neural markers (e.g. NSE, S100, PGP9.5, and CD57) 2163356  and epithelial markers (AE1/AE3, CAM5.2) may occasionally be expressed, but desmin positivity is rare and typically only very focal 11176079 ; 16006796 ; 10716155 ; 19841938 . FLI1 and ERG are often expressed in cases with the corresponding translocation; some cross-reactivity has been reported 22766791 . NKX2-2 is sensitive but imperfectly specific 26847175 ; 22446943 ; 29661713 .",
    ],
    molecular: [
      "Molecular confirmation is often required for a diagnosis of Ewing sarcoma, as round cell morphology is common to other sarcomas, carcinomas, and lymphomas. All cases of Ewing sarcoma harbour FET::ETS fusions. The EWSR1::FLI1 fusion is seen in > 95% of cutaneous and superficial Ewing sarcomas 8022439 ; 9500772 ; 8834175 ; 9121764 . Rarely, an EWSR1::ERG fusion is present 7700648 ; 27526022 ; 8162068 ; 18820660 .",
      "As with their deeper counterpart, the pathogenesis of cutaneous Ewing sarcomas is driven by transcription factors encoded by chimeric FET::ETS gene fusions, most commonly EWSR1::FLI1 and EWSR1::ERG 24680181 ; 30709443 ; 9500772 ; 7493136 ; 21649689 . Chimeric fusion genes encode transcription factors that serve as master regulators that activate and repress thousands of genes. Expression of these transcription factors in the correct tumor microenvironment is ostensibly required for the development of Ewing sarcoma. Proteins bind both GGAA microsatellites and canonical ETS binding sites in the genome and recruit chromatin regulators. Binding of the fusion proteins to GGAA microsatellites results in transition from a closed to open chromatin state that establishes de novo enhancers which activate genes. Conversely, binding to canonical ETS binding sites displaces wildtype ETS factors and represses gene expression. In combination, these events establish an oncogenic gene expression programme that underlies tumor initiation 10623711 ; 29977059 .",
    ],
    differential: [
      "The differential diagnosis includes a very rare subset of superficially located Ewing-like undifferentiated small blue round cell sarcomas such as CIC-rearranged and BCOR-rearranged sarcomas, representing distinct entities.",
    ],
    criteria: [
      "Essential: small blue round cell cytomorphology; membranous CD99 immunoreactivity.",
      "Desirable: detection of a FET::ETS fusion.",
    ],
    icdo: "3",
  },
];

const familyOrder = [
  "Adipocytic tumors",
  "Fibroblastic, Myofibroblastic, and Fibrohistiocytic Tumors",
  "Vascular Tumors",
  "Pericytic and Perivascular Tumors",
  "Smooth Muscle Tumors",
  "Neural Tumors",
  "Tumors of Uncertain Differentiation",
];

const intermediateTerms = [
  "intermediate",
  "uncertain",
  "low metastatic risk",
  "rarely metastasizing",
  "locally aggressive",
  "malignant potential not fully established",
];

function isIntermediate(item: Item) {
  const behavior = item.behavior.toLowerCase();
  if (behavior.startsWith("malignant")) return false;
  return intermediateTerms.some((term) => behavior.includes(term));
}

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

function Bullets({ items: values }: { items: string[] }) {
  if (!values.length)
    return (
      <p className="text-sm italic text-slate-400">
        No specific information provided in the source.
      </p>
    );
  return (
    <ul className="space-y-2">
      {values.map((value, index) => (
        <li key={index} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}

function compact(values: string[]) {
  return values.length ? values.join(" ") : "—";
}

// Convert source paragraphs into focused, sentence-length diagnostic bullets.
function histologyPoints(values: string[]) {
  return values.flatMap((value) => {
    const cleaned = value
      .replace(/\b(e\.g|i\.e)\./gi, "$1§")
      .replace(/\s+\d{5,}(?:\s*;\s*\d{5,})*/g, "")
      .replace(/\s+/g, " ")
      .trim();
    return cleaned
      .split(/(?<=[.!?])\s+(?=[A-ZÀ-ÖØ-Þa-zβ])/)
      .map((part) => part.replace(/§/g, ".").trim())
      .filter(Boolean);
  });
}

export default function CutaneousSoftTissueTumorsPage() {
  const [query, setQuery] = useState("");
  const [family, setFamily] = useState("All");
  const [behavior, setBehavior] = useState("All");
  const filtered = useMemo(
    () =>
      items.filter((item) => {
        const matchesFamily = family === "All" || item.family === family;
        const matchesBehavior =
          behavior === "All" ||
          (behavior === "Intermediate"
            ? isIntermediate(item)
            : behavior === "Malignant"
              ? item.behavior.toLowerCase().includes("malignant")
              : !isIntermediate(item) &&
                !item.behavior.toLowerCase().includes("malignant"));
        const haystack = [
          item.name,
          item.family,
          item.subgroup,
          item.behavior,
          item.icdo,
          ...item.clinical,
          ...item.definition,
          ...item.histology,
          ...item.ihc,
          ...item.molecular,
          ...item.differential,
          ...item.criteria,
        ]
          .join(" ")
          .toLowerCase();
        return (
          matchesFamily &&
          matchesBehavior &&
          haystack.includes(query.toLowerCase())
        );
      }),
    [query, family, behavior],
  );

  const groups = familyOrder
    .map((name) => ({
      name,
      rows: filtered.filter((item) => item.family === name),
    }))
    .filter((group) => group.rows.length > 0);

  const intermediateItems = filtered.filter(isIntermediate);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Skin / Cutaneous Soft Tissue Tumors
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Cutaneous Soft Tissue Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first reference organized by tumor family, with
                side-by-side comparison tables followed by complete diagnostic
                profiles. Intermediate neoplasms receive dedicated emphasis.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-teal-50 px-3 py-1.5 text-teal-800">
                  {items.length} WHO entities
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1.5 text-amber-900">
                  {items.filter(isIntermediate).length} intermediate / uncertain
                  behavior profiles
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-700">
                  American English
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Diagnostic principle
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Integrate architecture, cytology, anatomic level, clinical
                context, and targeted ancillary studies.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Atypia, mitotic activity, or necrosis must be interpreted in the
                context of the specific entity; none is independently synonymous
                with malignancy.
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: practical approach">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Define the setting",
                "Age, sex, site, size, depth, growth pattern, prior radiation, lymphedema, and immune status.",
              ],
              [
                "Classify the lineage",
                "Adipocytic, fibroblastic, vascular, perivascular, smooth muscle, neural, or uncertain differentiation.",
              ],
              [
                "Assess behavior",
                "Separate benign, locally aggressive intermediate, rarely metastasizing intermediate, and malignant categories.",
              ],
              [
                "Select targeted tests",
                "Use IHC and molecular assays to answer a defined differential; avoid broad, non-directed panels.",
              ],
              [
                "Check sampling",
                "Large, deep, heterogeneous, or ulcerated lesions require representative sampling and clinical-radiologic correlation.",
              ],
            ].map((step, index) => (
              <div
                key={step[0]}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="font-bold text-slate-900">{step[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step[1]}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <div className="grid gap-5 lg:grid-cols-2">
          <Panel title="WHO behavior categories">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>Benign:</b> usually cured by local excision; recurrence, if
                present, is generally non-destructive.
              </p>
              <p>
                <b>Intermediate, locally aggressive:</b> may infiltrate or recur
                locally but has little or no metastatic potential.
              </p>
              <p>
                <b>Intermediate, rarely metastasizing:</b> has a low but
                definite metastatic risk; the WHO introduction cites a risk
                below 2% for this category.
              </p>
              <p>
                <b>Malignant:</b> infiltrative tumors with local recurrence and
                meaningful metastatic potential; risk varies by histotype,
                grade, size, and depth.
              </p>
            </div>
          </Panel>
          <Panel title="Important general diagnostic cautions">
            <Bullets
              items={[
                "Benign lesions can show atypia (e.g., pleomorphic fibroma and atypical fibrous histiocytoma) or frequent mitoses (e.g., nodular fasciitis).",
                "FNCLCC grading is rarely applicable to cutaneous sarcomas; some histotypes are considered high grade by definition.",
                "Complete excision is a major factor in preventing local recurrence.",
                "Large (>50 mm) superficial lesions and all deep or subfascial tumors warrant specialist multidisciplinary assessment before biopsy or surgery.",
              ]}
            />
          </Panel>
        </div>

        <Panel title="Intermediate neoplasms: focused review">
          <p className="mb-4 text-sm leading-6 text-slate-600">
            These entities are highlighted throughout the family tables and
            their complete diagnostic profiles are shown directly below each
            table. Behavior is not interchangeable across this group: local
            aggressiveness, rare metastasis, uncertain malignant potential, and
            low-grade malignancy must be distinguished.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                  <th className="p-3">Entity</th>
                  <th className="p-3">Family</th>
                  <th className="p-3">Behavior</th>
                  <th className="p-3">Key discriminator</th>
                </tr>
              </thead>
              <tbody>
                {intermediateItems.map((item) => (
                  <tr
                    key={item.name}
                    className="border-t border-amber-200 bg-amber-50/70 align-top"
                  >
                    <td className="p-3 font-semibold text-slate-900">
                      {item.name}
                    </td>
                    <td className="p-3">{item.family}</td>
                    <td className="p-3">{item.behavior}</td>
                    <td className="p-3">
                      {compact(item.criteria || item.histology).slice(0, 260)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Search and filter the entity tables">
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr]">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search entity, morphology, IHC, molecular..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
            <select
              value={family}
              onChange={(event) => setFamily(event.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm"
            >
              <option value="All">All tumor families</option>
              {familyOrder.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <select
              value={behavior}
              onChange={(event) => setBehavior(event.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm"
            >
              <option value="All">All behavior categories</option>
              <option value="Intermediate">Intermediate / uncertain</option>
              <option value="Benign">Benign</option>
              <option value="Malignant">Malignant</option>
            </select>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Showing {filtered.length} of {items.length} entities. Full
            diagnostic profiles are displayed below the comparison tables.
          </p>
        </Panel>

        {groups.map((group) => {
          const subgroups = Array.from(
            new Set(group.rows.map((item) => item.subgroup)),
          );
          return (
            <section key={group.name} className="space-y-5">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                    Tumor family
                  </div>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950">
                    {group.name}
                  </h2>
                </div>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                  {group.rows.length} entities
                </span>
              </div>
              {subgroups.map((subgroup) => {
                const rows = group.rows.filter(
                  (item) => item.subgroup === subgroup,
                );
                return (
                  <Panel key={subgroup} title={subgroup}>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[1100px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600">
                            <th className="p-3">Entity</th>
                            <th className="p-3">Behavior</th>
                            <th className="p-3">Clinical profile</th>
                            <th className="p-3">Histology / IHC</th>
                            <th className="p-3">Molecular</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((item) => (
                            <tr
                              key={item.name}
                              className={`border-t align-top ${isIntermediate(item) ? "border-amber-200 bg-amber-50/70" : "border-slate-200"}`}
                            >
                              <td className="p-3 font-semibold text-slate-900">
                                {item.name}
                              </td>
                              <td className="p-3">
                                <span
                                  className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${isIntermediate(item) ? "bg-amber-200 text-amber-950" : item.behavior.toLowerCase().includes("malignant") ? "bg-rose-100 text-rose-800" : "bg-slate-100 text-slate-700"}`}
                                >
                                  {item.behavior}
                                </span>
                              </td>
                              <td className="max-w-[260px] p-3">
                                <p className="line-clamp-4">
                                  {compact(item.clinical)}
                                </p>
                              </td>
                              <td className="max-w-[360px] p-3">
                                <p className="line-clamp-4">
                                  {compact([
                                    ...histologyPoints(item.histology),
                                    ...item.ihc,
                                  ])}
                                </p>
                              </td>
                              <td className="max-w-[260px] p-3">
                                <p className="line-clamp-4">
                                  {compact(item.molecular)}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {rows.map((item) => (
                      <div
                        key={item.name}
                        className={`mt-4 rounded-xl border p-4 ${isIntermediate(item) ? "border-amber-300 bg-amber-50/40" : "border-slate-200 bg-white"}`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-lg font-bold text-slate-950">
                            {item.name}
                          </h4>
                          <span className="text-xs text-slate-500">
                            {item.icdo
                              ? `ICD-O ${item.icdo}`
                              : "ICD-O not specified in source"}
                          </span>
                        </div>
                        {item.definition.length > 0 && (
                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            {item.definition.join(" ")}
                          </p>
                        )}
                        <div className="mt-4 grid gap-4 lg:grid-cols-2">
                          <div>
                            <h5 className="mb-2 text-sm font-bold text-slate-900">
                              Clinical Profile
                            </h5>
                            <Bullets items={item.clinical} />
                          </div>
                          {item.criteria.length > 0 && (
                            <div>
                              <h5 className="mb-2 text-sm font-bold text-slate-900">
                                Essential Diagnostic Criteria
                              </h5>
                              <Bullets items={item.criteria} />
                            </div>
                          )}
                          {item.histology.length > 0 && (
                            <div>
                              <h5 className="mb-2 text-sm font-bold text-slate-900">
                                Histopathology
                              </h5>
                              <Bullets
                                items={histologyPoints(item.histology)}
                              />
                            </div>
                          )}
                          {item.ihc.length > 0 && (
                            <div>
                              <h5 className="mb-2 text-sm font-bold text-slate-900">
                                Immunophenotype
                              </h5>
                              <Bullets items={item.ihc} />
                            </div>
                          )}
                          {item.differential.length > 0 && (
                            <div>
                              <h5 className="mb-2 text-sm font-bold text-slate-900">
                                Differential Diagnosis
                              </h5>
                              <Bullets items={item.differential} />
                            </div>
                          )}
                          {item.molecular.length > 0 && (
                            <div>
                              <h5 className="mb-2 text-sm font-bold text-slate-900">
                                Molecular Pathology
                              </h5>
                              <Bullets items={item.molecular} />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </Panel>
                );
              })}
            </section>
          );
        })}
        <Panel title="Source and scope">
          <p className="text-sm leading-6 text-slate-600">
            Content is organized from the supplied WHO classification excerpt
            for cutaneous soft tissue tumors. Entity-specific terminology and
            diagnostic details are retained from that source and converted to
            American English. Sections without source-supported information are
            not supplemented with speculative IHC or molecular findings.
          </p>
        </Panel>
      </div>
    </main>
  );
}
