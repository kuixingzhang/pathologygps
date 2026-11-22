"use client";
import { useMemo, useState, type ReactNode } from "react";
type Diff = [string, string];
type Item = {
  name: string;
  group: string;
  behavior: string;
  clinical: string[];
  essential: string[];
  hist: string[];
  ihc: string[];
  molecular: string[];
  diff: Diff[];
};
const items: Item[] = [
  {
    name: "Synovial vascular anomalies",
    clinical: [
      "Site: Knee most common; also elbow, wrist, and ankle.",
      "Age/sex: Predominantly children and adolescents; no significant sex predilection.",
      "Presentation: Joint swelling, effusion, persistent pain, restricted movement, and sometimes recurrent hemarthrosis.",
    ],
    essential: [
      "benign vascular anomalies arising in synovium-lined spaces morphologically within the spectrum of venous or arteriovenous malformation.",
    ],
    hist: [
      "The lesions display variable histological features depending on the subtype.",
      "Venous malformations are composed of spongiform, variably sized, dysmorphic venous channels, often associated with thrombosis and phleboliths.",
      "Arteriovenous malformations are infiltrative lesions comprising small, medium, and large arteries with loss of the internal elastic lamina, and veins of similar caliber exhibiting thickened walls and intimal hyperplasia.",
      "A diffuse or lobular proliferation of small vessels with plump endothelial cells and pericytes may also be observed.",
      "Villous hyperplasia of the synovium is present in some cases, particularly in chronic lesions with recurrent hemarthrosis, and may show prominent iron deposition.",
    ],
    ihc: [],
    molecular: [],
    diff: [
      [
        "Venous malformation",
        "Spongiform dysmorphic venous channels; no arterial component.",
      ],
      [
        "Arteriovenous malformation",
        "Abnormal arteries and thick-walled veins with arteriovenous shunting.",
      ],
    ],
    group: "Malformation",
    behavior: "Vascular malformation",
  },
  {
    name: "Intramuscular vascular anomalies",
    clinical: [
      "Site: Lower extremities, especially thigh and calf; also head and neck, upper limbs, and trunk.",
      "Age/sex: Up to 90% of reported cases occur in older children, adolescents, and young adults; sexes are equally affected.",
      "Presentation: Slowly growing, often painful intramuscular mass; pain may worsen after exercise.",
    ],
    essential: [
      "For VM: spongiform clusters of dysmorphic venous channels For FAVA: prominent fibroadipose tissue, nodules of back-to-back venous channels, and variably thick-walled veins For IFVA: nodular aggregates of small vascular channels along with variably thick-walled veins For AVM: a combination of abnormal arteries with disruption of internal elastic lamina, large thick veins, and indeterminate vessels For PHOST: abundant fibromyxoid and adipose tissue and aggregates of abnormal vessels including arteries, veins, and indeterminate vessels",
    ],
    hist: [
      "VMs form a spongiform network of irregularly shaped venous channels of varying calibers and have sharply demarcated borders with minimal to no interposed skeletal muscle or fibrofatty tissue (see section Venous malformations).",
      "FAVA lesions demonstrate extensive fibrofatty stroma containing nodular clusters of thin-walled venous channels, often budding from larger dysmorphic veins.",
      "Peripheral nerves may be surrounded by fibrous tissue and infiltrated by abnormal veins.",
      "Lymphoid aggregates are frequent, and occasional foci of metaplastic bone, dysmorphic lymphatic channels, and indeterminate vascular clusters with coiled lumina and concentric muscular layers may be present.",
      "IFVA consists of capillary-like vascular channels arranged in lobules or cords associated with large veins and arteries with thick walls and indeterminate vessels.",
      "Veins are enlarged, many having irregularly thickened walls.",
      "Arteries may show enlargement with loss of internal elastic lamina, intimal cushions, and medial muscular hyperplasia.",
    ],
    ihc: [],
    molecular: [
      "Venous malformation: Somatic TEK (about 60%) or PIK3CA (about 20%).",
      "FAVA: Usually somatic PIK3CA.",
      "IFVA and AVM: MAP2K1 or KRAS variants.",
      "CM-AVM: RASA1 or EPHB4 variants.",
      "PHOST: Germline PTEN; PIK3CA-associated mimics are termed soft-tissue angiomatosis.",
    ],
    diff: [
      [
        "Venous malformation",
        "Spongiform venous channels with sharply demarcated borders and little intervening fibrofatty tissue.",
      ],
      [
        "Fibroadipose vascular anomaly (FAVA)",
        "Prominent fibroadipose stroma with clustered venous channels and possible nerve involvement.",
      ],
      [
        "Arteriovenous malformation",
        "Abnormal arteries, veins, and indeterminate vessels; fast-flow shunt.",
      ],
    ],
    group: "Malformation",
    behavior: "Vascular malformation",
  },
  {
    name: "Arteriovenous malformation",
    clinical: [
      "Site: Head and neck most common in extracranial disease; also extremities, trunk, and viscera. Parkes Weber syndrome usually affects a lower extremity.",
      "Age/sex: Congenital; often recognized in childhood or early adulthood; no sex predilection.",
      "Presentation: Warm, erythematous superficial lesion; pain, ulceration, or bleeding may develop. Deep lesions may present later.",
    ],
    essential: [
      "vessels of different sizes and types, including both arteries and veins with high-pressure arterial flow features; clinical and radiological evidence of an arteriovenous shunt within a poorly defined vascular lesion.",
    ],
    hist: [
      "AVMs exhibit variable morphology.",
      "The nidus is composed of disproportionately enlarged arteries and veins, along with vessels of indeterminate morphological features.",
      "Arteries exhibit tortuosity, irregular calibers, focal fragmentation or duplication of the internal elastic lamina, and focal neointimal hyperplasia.",
      "Veins demonstrate intimal hyperplasia, thickened smooth muscle coats, and adventitial fibrosis – changes driven by high-pressure arterial flow.",
      "A generalized increase in small vessels resembling small arteries, capillaries, or veins is commonly observed.",
      "Many AVMs contain lobular foci of small-caliber vessels, predominantly of capillary type, which may mimic other vascular lesions such as pyogenic granuloma, infantile or congenital hemangioma, or the pseudokaposiform proliferation seen in Stewart–Bluefarb syndrome.",
      "The intervascular stroma is variably cellular and shows edema, fibrosis, hemosiderin deposition, and occasional fat entrapment.",
    ],
    ihc: [],
    molecular: [
      "Sporadic AVM: Somatic MAP2K1; less often KRAS, HRAS, or BRAF.",
      "CM-AVM1: Germline RASA1.",
      "CM-AVM2: Germline EPHB4.",
      "PTEN hamartoma tumor syndrome: Germline PTEN.",
      "HHT-associated disease: ENG, ACVRL1, GDF2, or SMAD4 in the relevant syndromic settings.",
    ],
    diff: [
      [
        "Venous malformation",
        "Venous channels only; lacks dysplastic arteries and high-flow shunting.",
      ],
      [
        "Tufted angioma / kaposiform hemangioendothelioma",
        "Lobular capillary tufts and platelet-rich microthrombi rather than an arterial-venous nidus.",
      ],
    ],
    group: "Malformation",
    behavior: "Vascular malformation",
  },
  {
    name: "Venous malformations",
    clinical: [
      "Site: Skin, mucosa, and subcutis; may extend into muscle, bone, and viscera. Head and neck are common; BRBNS favors palms, soles, and trunk; VVM favors lower extremities.",
      "Age/sex: Often present at birth or arise early in life; both sexes are affected.",
      "Presentation: Soft, compressible blue-purple lesions; thrombosis may cause swelling and pain. VVM may become hyperkeratotic.",
    ],
    essential: [
      "For CVM and BRBNs: dysmorphic venous channels For VVM: capillary or venular-type channels with focal or diffuse endothelial immunopositivity for GLUT1 and focal immunopositivity for D2-40 or PROX1",
    ],
    hist: [
      "VMs are characterized by haphazardly arranged large, ectatic, irregular, variably sized venous channels in the dermis, subcutis, and deep soft tissues.",
      "The vessels are lined by a single layer of flat endothelial cells and display a concentric smooth muscle wall, often discontinuous or thin relative to the luminal diameter.",
      "In some areas, the vessel walls show irregular strands or nodules of smooth muscle merging with fibromyxoid stroma, probably representing the sequelae of organized thrombi.",
      "Lumina are variably empty or congested, and organizing thrombi, which may evolve into calcified phleboliths, may be seen.",
      "Papillary endothelial hyperplasia (Masson phenomenon) is commonly observed.",
      "However, lymphatic marker expression has been reported in VMs associated with BRBNs.",
      "VMs in BRBNS typically show closely apposed, small, abnormal, and often spongiform veins and organizing thrombi.",
    ],
    ihc: [
      "CD31: Diffuse endothelial positivity.",
      "CD34: Variable expression.",
      "D2-40 and PROX1: Usually negative; expression may occur in BRBNS-associated lesions.",
      "WT1: Negative.",
      "Ki-67: Extremely low.",
      "Verrucous venous malformation: GLUT1 often focal or diffuse; D2-40 and PROX1 may be focally positive.",
    ],
    molecular: [
      "Common venous malformation: Somatic TEK (about 60%) or PIK3CA (about 20%).",
      "Familial multifocal cutaneous/mucosal lesions: Germline TEK with a second somatic event.",
      "Blue rubber bleb nevus syndrome: Dual cis-acting TEK variants.",
      "Verrucous venous malformation: Somatic MAP3K3.",
    ],
    diff: [
      [
        "Lymphatic malformation",
        "Lymphatic endothelial markers (D2-40/PROX1) support lymphatic differentiation; venous lesions are usually negative.",
      ],
      [
        "Verrucous venous malformation",
        "Dermal/subcutaneous capillary-venular channels with GLUT1 and focal lymphatic-marker expression.",
      ],
    ],
    group: "Malformation",
    behavior: "Vascular malformation",
  },
  {
    name: "Spindle cell hemangioma",
    clinical: [
      "Site: Dermis or subcutis, especially distal extremities and hands; oral cavity also reported. About half are intravascular.",
      "Age/sex: Wide age range (8–78 years; median 32); no sex predilection.",
      "Presentation: Slowly developing, usually asymptomatic blue nodule, typically 1–2 cm.",
    ],
    essential: [
      "cavernous vascular spaces admixed with more solid spindle cell areas; vacuolated endothelial cells; minimal nuclear atypia; and mitotic activity.",
    ],
    hist: [
      "The tumors are often well-circumscribed, mostly involving the dermis or subcutis.",
      "Around half of the tumors are intravascular.",
      "They consist of two components: irregular, dilated, thin-walled, congested, cavernous-like vascular channels admixed with more solid areas of spindle cells.",
      "The cavernous spaces are lined by bland and flat endothelial cells and may contain thrombi, with or without dystrophic calcification (phleboliths).",
      "The solid spindle cell areas contain bland spindle-shaped cells with pericytic and fibroblastic features, and may contain slit-like vascular spaces as well as vacuolated epithelioid endothelial cells (blister cells) that may resemble adipocytes.",
      "Spindle cells are also seen in the cavernous vessel septations.",
      "Mitotic activity and nuclear atypia are minimal.",
    ],
    ihc: [
      "Endothelial cells: Positive for endothelial markers.",
      "Spindle cells: May show focal SMA and/or desmin expression.",
    ],
    molecular: [
      "IDH1 p.Arg132Cys (R132C) in most cases; less often IDH2 p.Arg172.",
    ],
    diff: [
      [
        "Kaposi sarcoma",
        "Kaposi sarcoma shows slit-like vascular spaces and HHV8 positivity; spindle cell hemangioma has cavernous spaces and vacuolated endothelial cells.",
      ],
      [
        "Kaposiform hemangioendothelioma",
        "KHE is infiltrative and associated with platelet-rich thrombi; spindle cell hemangioma is benign and circumscribed.",
      ],
    ],
    group: "Benign",
    behavior: "Benign vascular tumor",
  },
  {
    name: "Hemangioma of bone",
    clinical: [
      "Site: Vertebral bodies most common, followed by calvarium and long bones; multifocal lesions occur.",
      "Age/sex: Any age (mean 32 years); slight female predominance.",
      "Presentation: Usually incidental and asymptomatic; large vertebral lesions may cause pain, cord compression, or neurologic symptoms.",
    ],
    essential: [
      "bone tumor with compatible imaging; thin-walled blood vessels lined by a single layer of non-atypical endothelial cells.",
    ],
    hist: [
      "hemangiomas have variable histological features and comprise different morphologies such as cavernous (gaping vascular spaces), capillary (lobulated small vessels), mixed, venous, and arteriovenous patterns.",
      "In general, the vascular spaces are lined by a single layer of flat and cytologically bland endothelial cells.",
      "Secondary changes include reactive sclerosis of involved bone, new bone formation, calcification, and thrombosis.",
      "EWSR1::NFATC1/2 fusion is present in a small subset of histologically typical hemangiomas of bone , as well as in other osseous vascular tumors displaying epithelioid morphology and nuclear atypia.",
    ],
    ihc: [
      "Endothelial cells: CD31, ERG, FLI1, and CD34 positive.",
      "Pericytes: SMA highlights the preserved pericytic network.",
    ],
    molecular: [
      "A small subset harbors EWSR1::NFATC1 or EWSR1::NFATC2 fusions.",
    ],
    diff: [
      [
        "Epithelioid hemangioma of bone",
        "Epithelioid endothelial cells and lobular growth distinguish epithelioid hemangioma from bland conventional vascular channels.",
      ],
      [
        "Angiosarcoma",
        "Cytologic atypia and destructive malignant growth are absent in conventional bone hemangioma.",
      ],
    ],
    group: "Benign",
    behavior: "Benign vascular tumor",
  },
  {
    name: "Anastomosing hemangioma",
    clinical: [
      "Site: Most often kidney; also genitourinary tract, paraspinal region, and other soft tissue/visceral sites.",
      "Age/sex: Typically adults; male predominance is reported.",
      "Presentation: Often incidental or presents as a localized mass; clinical symptoms depend on site.",
    ],
    essential: [
      "anastomosing vessels lined by hobnail endothelial cells, often in association with fibrin thrombi, hyaline globules, and extramedullary hematopoiesis.",
    ],
    hist: [
      "These lesions have a loosely lobulated architecture at low magnification and can be associated with a medium-caliber vessel.",
      "There is often focal infiltration into adjoining tissue.",
      "The neoplasms consist of anastomosing sinusoidal capillary-sized vessels with scattered hobnail endothelial cells.",
      "There may be a lymphocytic infiltrate.",
      "Mitoses are absent or rare.",
      "Mild cytological atypia can be present, but no multilayering of endothelial cells is seen.",
      "Vascular thrombi are typical, and zones of central sclerosis with focal necrosis are common.",
    ],
    ihc: ["Endothelial cells: CD34, CD31, and ERG positive."],
    molecular: [],
    diff: [
      [
        "Angiosarcoma",
        "Anastomosing hemangioma has bland hobnail endothelial cells without multilayering or significant atypia.",
      ],
      [
        "Kaposi sarcoma",
        "Kaposi sarcoma has spindle-cell proliferation and HHV8 association.",
      ],
    ],
    group: "Benign",
    behavior: "Benign vascular tumor",
  },
  {
    name: "Epithelioid hemangioma",
    clinical: [
      "Site: Bone most common; also skin and soft tissue, especially head and neck, distal extremities, and trunk. Multifocal lesions may be regionally clustered.",
      "Age/sex: Wide age range; peak in the fourth decade. No overall sex predilection; bone lesions show slight male predominance.",
      "Presentation: Erythematous-violaceous papules or angiomatoid nodules; deep lesions cause localized pain.",
    ],
    essential: [
      "well-formed vessels with a lobular architecture, lined by epithelioid endothelial cells; variable eosinophilic infiltrate.",
    ],
    hist: [
      "Conventional EH is typically well demarcated and has a distinctive lobular architecture at low power.",
      "The centers of the lobules are the most cellular with solid growth, while an increased maturation of the vascular lumina may be seen at the periphery, surrounded by an intact pericytic layer.",
      "The tumor vessels are lined by a single layer of large and polyhedral epithelioid endothelial cells, with occasional nuclear hobnailing and protrusion into the lumen, resembling a tombstone.",
      "The lesional cells have oval or kidney-shaped nuclei with vesicular or fine chromatin, which tend to be hyperlobated or cleaved, and abundant, deeply eosinophilic cytoplasm, with variable intracytoplasmic vacuoles (blister cells).",
      "Cytological atypia is often mild, and mitotic activity is generally low.",
      "Marked lymphoplasmacytic infiltrates, prominent lymphoid follicles, and abundant eosinophils are not uncommon, particularly in head and neck lesions.",
      "A subset of EH may display intravascular growth, with centrifugal extension into adjacent soft tissues.",
    ],
    ihc: [
      "Endothelial cells: CD31, FLI1, and ERG consistently positive.",
      "CD34: Variable and often diminished.",
      "Cytokeratins and EMA: Positive in a subset.",
      "SMA: Highlights the pericytic layer.",
      "FOS and FOSB: Useful ancillary nuclear markers; interpret cautiously because expression is not entirely specific.",
      "Decalcification may reduce FOS expression.",
    ],
    molecular: [
      "FOS rearrangements: Partners include LMNA, MBNL1, and VIM.",
      "FOSB rearrangements: Most often ZFP36; rarely WWTR1 or ACTB.",
      "GATA6::FOXO1: Subset with head-and-neck cutaneous predilection.",
      "TPM3::ALK or TPM4::ALK: Reported in cutaneous hemangioma with epithelioid features.",
    ],
    diff: [
      [
        "Epithelioid hemangioendothelioma",
        "Epithelioid hemangioma shows lobular vascular proliferation with well-formed vessels; EHE shows cords/nests of epithelioid cells in myxohyaline stroma.",
      ],
      [
        "Angiosarcoma",
        "Epithelioid hemangioma lacks destructive infiltrative growth and marked endothelial atypia.",
      ],
    ],
    group: "Benign",
    behavior: "Benign vascular tumor",
  },
  {
    name: "Lymphatic malformation",
    clinical: [
      "Site: Head and neck are common; also axilla, trunk, extremities, and viscera. Generalized lymphatic anomaly and kaposiform lymphangiomatosis may be multisystemic.",
      "Age/sex: Usually congenital or recognized in childhood; no consistent sex predilection stated.",
      "Presentation: Soft, often transilluminant or cystic swelling; may enlarge, bleed, or become infected.",
    ],
    essential: [
      "malformed and usually excessive lymphatic channels; kaposiform clusters of lymphatic endothelial cells in KLA; compatible clinical and imaging features.",
    ],
    hist: [
      "Macrocystic LM consists of one or more dilated, relatively well-circumscribed cystic spaces, whereas microcystic LM consists of small, anastomosing lymphatic vessels with an infiltrative growth pattern.",
      "Many cases show mixed macrocystic and microcystic morphology.",
      "The cystic spaces typically contain proteinaceous fluid, sometimes with lymphocytes and histiocytes.",
      "In cases with intralesional hemorrhage, vessels are filled with blood, and abundant interstitial hemosiderin is often present.",
      "Reactive lymphoid tissue is frequently observed between vessels and may form follicles.",
      "Intravascular papillary projections resembling valves may be seen.",
      "The endothelium is flat or mildly swollen, but lacks atypia.",
    ],
    ihc: [
      "D2-40, PROX1, and VEGFR3: Useful lymphatic markers, particularly in macrocystic lesions.",
      "Large lymphatic channels: D2-40 and LYVE1 may be negative or only focally positive; PROX1 and VEGFR3 are usually positive.",
      "ERG and CD31: Positive.",
      "CD34: Negative or only focally positive.",
    ],
    molecular: [
      "Somatic PIK3CA variants are common; NRAS variants occur in selected cases.",
    ],
    diff: [
      [
        "Venous malformation",
        "Venous channels have smooth-muscle walls; lymphatic spaces are irregular and lymphatic-marker positive.",
      ],
      [
        "Kaposiform lymphangiomatosis",
        "KLA shows kaposiform clusters of lymphatic endothelial cells and may be associated with coagulopathy.",
      ],
    ],
    group: "Malformation",
    behavior: "Vascular malformation",
  },
  {
    name: "Tufted angioma and kaposiform hemangioendothelioma",
    clinical: [
      "Site: Usually skin and subcutis of the trunk or extremities; deeper soft tissue and retroperitoneal sites can occur.",
      "Age/sex: Predominantly infants and young children; most present in infancy.",
      "Presentation: Infiltrative violaceous plaque or mass; KHE may be associated with Kasabach–Merritt phenomenon.",
    ],
    essential: [
      "cannonball-like distribution of multiple small and variably well-defined intradermal lobules of tightly packed small capillaries; dual positivity of spindled endothelial cells for panendothelial and lymphatic markers; presence of platelet-rich microthrombi.",
    ],
    hist: [
      "Classic TA histology shows multiple small, well-circumscribed vascular tufts dispersed in a cannonball-like fashion within the dermis, sometimes extending into the subcutis.",
      "The tufts are composed of closely packed capillaries with compressed lumina, occasionally accompanied by subtle fascicles of delicate spindled endothelial cells.",
      "Dilated thin-walled lymphatic vessels focally form crescentic clefts at the tuft periphery.",
      "Classic KHE histology includes the presence of vascular tufts equivalent to those of TA, but accompanied by larger, less defined, coalescing nodules composed of fascicles of spindled endothelial cells forming elongate slit-like lumina containing erythrocytes and curving around epithelioid, pericyte-rich nodules with central microthrombi.",
      "Other areas display more typical capillary formation.",
      "Dilated lymphatic vessels reminiscent of lymphatic malformation are frequently seen within adjacent desmoplastic stroma.",
      "Mitoses are rare.",
    ],
    ihc: [
      "CD31, CD34, and ERG: Strongly positive.",
      "Podoplanin (D2-40), LYVE1, and PROX1: Positive in spindled endothelial cells; less extensive in superficial tufted angioma.",
      "GLUT1: Negative.",
      "WT1: Positive.",
    ],
    molecular: [],
    diff: [
      [
        "Lobular capillary hemangioma",
        "TA/KHE show lymphatic-marker expression and platelet-rich microthrombi; lobular capillary hemangioma lacks this combination.",
      ],
      [
        "Venous malformation",
        "VM has ectatic venous channels rather than capillary tufts and spindle endothelial proliferation.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / rarely metastasizing",
  },
  {
    name: "Retiform hemangioendothelioma",
    clinical: [
      "Site: Predominantly dermis and subcutis of distal extremities; trunk and other sites less common.",
      "Age/sex: Broad age range, often young to middle-aged adults; no consistent sex predilection.",
      "Presentation: Slowly growing, usually painless red-purple plaque or nodule.",
    ],
    essential: [
      "arborizing branching vascular channels; hyperchromatic endothelial cells with hobnail morphology and no or very low mitotic activity.",
    ],
    hist: [
      "Scanning magnification reveals characteristic elongated and narrow arborizing vascular channels with a striking resemblance to normal rete testis.",
      "Although this pattern is usually readily apparent, if the vascular channels are small or collapsed, the retiform architecture may be less discernible.",
      "Monomorphic endothelial cells with prominent protuberant nuclei having a characteristic tombstone or hobnail appearance line the blood vessels.",
      "These cells have scant cytoplasm, which seems to blend with the underlying stroma.",
      "Pleomorphism is absent and mitotic figures are rare.",
      "A prominent sclerotic stroma is noted.",
      "Intravascular lymphocytic infiltrates are present in about half of the cases.",
    ],
    ihc: [
      "CD31, CD34, and ERG: Positive; CD34 is often stronger.",
      "PROX1: Positive.",
      "D2-40 and VEGFR3: Usually negative, but exceptions occur.",
      "KSHV/HHV8: Negative.",
      "YAP1-rearranged tumors may show loss of the YAP1 C-terminal region.",
    ],
    molecular: [
      "YAP1 rearrangement may support diagnosis in challenging cases.",
    ],
    diff: [
      [
        "Papillary intralymphatic angioendothelioma",
        "PILA shows intraluminal papillary tufts with matchstick-like hobnail endothelial cells.",
      ],
      [
        "Angiosarcoma",
        "Retiform HE is usually low-grade with retiform architecture and limited atypia; angiosarcoma shows destructive growth and greater atypia.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / rarely metastasizing",
  },
  {
    name: "Papillary intralymphatic angioendothelioma",
    clinical: [
      "Site: Dermis and subcutis, often of extremities.",
      "Age/sex: Broad age range; commonly reported in children and young adults.",
      "Presentation: Slow-growing, usually painless cutaneous or subcutaneous nodule.",
    ],
    essential: [
      "poorly defined lymphatic vessels with stromal and intraluminal lymphocytes and proteinaceous fluid; intralymphatic, intraluminal hobnail proliferation of polarized matchstick-like columnar endothelial cells; expression of panendothelial and lymphatic markers.",
    ],
    hist: [
      "PILA is a poorly delineated dermal and/or subcutaneous proliferation of lymphatic channels showing variable intraluminal papillary tuft proliferation, with hyaline cores and intermixed lymphocytes with proteinaceous fluid.",
      "A lymphatic vascular malformation is often present nearby.",
      "The cavernous or slit-like lymphatic vascular channels are lined by columnar, matchstick-like, or hobnail endothelial cells.",
      "The lesional cells have eosinophilic cytoplasm and round uniform nuclei with indistinct nucleoli; they lack cytological atypia and mitoses.",
    ],
    ihc: [
      "CD31 and ERG: Positive; CD34 is less consistently positive.",
      "Podoplanin, VEGFR3, and PROX1: Lymphatic endothelial markers are positive.",
    ],
    molecular: [],
    diff: [
      [
        "Retiform hemangioendothelioma",
        "PILA has intraluminal papillary projections with hyaline cores and lymphocytes; retiform HE has elongated rete-testis-like channels.",
      ],
      [
        "Angiosarcoma",
        "PILA lacks high-grade atypia and destructive malignant growth.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / rarely metastasizing",
  },
  {
    name: "Composite hemangioendothelioma",
    clinical: [
      "Site: Usually distal extremities, particularly hands and feet; dermis and subcutis.",
      "Age/sex: Usually adults; no consistent sex predilection.",
      "Presentation: Slowly growing, painless or mildly symptomatic cutaneous/subcutaneous mass.",
    ],
    essential: [
      "at least two morphologically distinct vascular tumor elements, most often closely resembling RHE and EHE; demonstration of neuroendocrine marker expression in neuroendocrine CHE.",
    ],
    hist: [
      "CHE is a poorly circumscribed, infiltrative lesion that is typically centered in the dermis and subcutis, although occasional cases are deep-seated or involve viscera.",
      "It comprises a complex admixture of histologically benign and malignant vascular components that vary greatly in their relative proportions.",
      "Most often the tumors show mixed morphological features of RHE and epithelioid hemangioendothelioma (EHE), although the characteristic myxochondroid matrix of EHE is not seen.",
      "Less often, foci resembling spindle cell hemangioma, angiosarcoma, and benign vascular lesions (lymphangioma, angiomatosis, vascular malformation, and cavernous hemangioma) are present.",
      "Most cases contain 2–3 components.",
      "Vacuolated, pseudolipoblastic endothelial cells are frequently present.",
      "The angiosarcoma-like areas are usually characterized by a low-grade appearance, with complex dissecting vascular channels showing subtle endothelial atypia and relatively few mitotic figures.",
    ],
    ihc: [
      "CD31, ERG, and FLI1: Consistently positive.",
      "CD34 and D2-40: Positive in approximately half of cases.",
      "CAMTA1: Negative.",
      "Neuroendocrine-differentiated cases: Synaptophysin and other neuroendocrine markers may be positive.",
    ],
    molecular: [
      "YAP1::MAML2 occurs in composite hemangioendothelioma and retiform hemangioendothelioma.",
      "PTBP1::MAML2 has been reported in composite hemangioendothelioma with neuroendocrine differentiation.",
    ],
    diff: [
      [
        "Retiform hemangioendothelioma",
        "Composite HE contains multiple vascular patterns in one lesion, not a purely retiform pattern.",
      ],
      [
        "Angiosarcoma",
        "Composite HE is generally low-grade/intermediate; angiosarcoma shows overt malignant endothelial atypia and destructive growth.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / rarely metastasizing",
  },
  {
    name: "Kaposi sarcoma",
    clinical: [
      "Site: Skin most common; also oral mucosa, lymph nodes, and viscera. Distribution varies with clinical subtype and immune status.",
      "Age/sex: Strong male predominance in classic and endemic forms; age distribution varies by subtype.",
      "Presentation: Multifocal red-purple macules, plaques, or nodules; visceral disease may cause organ-specific symptoms.",
    ],
    essential: [
      "proliferation of small slit-like vessels lined by minimally to mildly atypical cells and surrounded by bland spindle cells; extravasated erythrocytes and patchy lymphoplasmacytic infiltrates in the early stage.",
    ],
    hist: [
      "All five clinical and epidemiological KS subtypes show identical histological features.",
      "Early skin lesions show subtle vascular proliferation.",
      "In the patch stage, vascular spaces are increased in number, dissecting collagen fibers in the upper reticular dermis.",
      "Lining endothelial cells are flattened or oval, with no or minimal atypia.",
      "Pre-existing vessels may protrude into lumina of new vessels.",
      "Ovoid/spindle endothelial cell proliferations surround pre-existing vessels, and admixed lymphoplasmacytic infiltrates, extravasated erythrocytes, and hemosiderin deposits are common.",
      "Rarely, lesions resemble lymphangioma or hemangioma, causing diagnostic confusion.",
    ],
    ihc: [
      "CD31, CD34, and ERG: Positive in lining endothelial cells and spindle tumor cells.",
      "Podoplanin (D2-40): Positive.",
      "KSHV/HHV8: Almost invariably shows nuclear positivity; staining may be very focal.",
    ],
    molecular: [
      "KSHV/HHV8 detection by PCR or in situ hybridization may be useful when immunohistochemistry is negative in rare cases.",
    ],
    diff: [
      [
        "Spindle cell hemangioma",
        "Kaposi sarcoma is HHV8-positive; spindle cell hemangioma is HHV8-negative and has cavernous vascular spaces.",
      ],
      [
        "Kaposiform hemangioendothelioma",
        "KHE is typically HHV8-negative and shows platelet-rich microthrombi.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / rarely metastasizing",
  },
  {
    name: "Pseudomyogenic hemangioendothelioma",
    clinical: [
      "Site: Usually distal lower extremities; often involves multiple tissue planes and may be multifocal within one region. Bone may also be involved.",
      "Age/sex: Predominantly young adults; male predominance (approximately 3.5:1); mean age about 30 years.",
      "Presentation: Slowly growing, often painful or tender soft-tissue mass; multifocal lesions are common.",
    ],
    essential: [
      "plump spindle or (less commonly) epithelioid cells with abundant eosinophilic cytoplasm and vesicular chromatin; fascicular or sheet-like growth pattern; expression of ERG and keratins (AE1/AE3).",
    ],
    hist: [
      "The tumor is composed of sheets and loose fascicles of plump spindle cells with abundant, brightly eosinophilic cytoplasm, sometimes mimicking rhabdomyoblasts.",
      "A minor component of cells with epithelioid cytomorphology is often present, but sometimes epithelioid cells predominate.",
      "Intraosseous lesions are often dominated by epithelioid cells with densely eosinophilic cytoplasm, associated with reactive woven bone, hemorrhage, and osteoclast-like giant cells.",
      "The tumor cells contain vesicular nuclei with generally small nucleoli.",
      "The degree of nuclear atypia is usually mild, and mitotic activity is scarce.",
      "About 10% of tumors show notable pleomorphism or large nucleoli.",
      "Occasional tumors may contain myxoid stroma.",
    ],
    ihc: [
      "Cytokeratins (AE1/AE3): Diffuse; MNF116 is negative.",
      "ERG and FLI1: Positive.",
      "CD31: Positive in approximately half of cases.",
      "SMA: Focal positivity in about one third.",
      "CD34: Negative.",
      "INI1 (SMARCB1): Retained.",
      "FOSB: Consistent nuclear expression.",
    ],
    molecular: ["FOSB rearrangement supports the diagnosis."],
    diff: [
      [
        "Epithelioid sarcoma",
        "Pseudomyogenic HE expresses endothelial markers and may express keratin; epithelioid sarcoma typically shows loss of INI1.",
      ],
      [
        "Epithelioid hemangioendothelioma",
        "Pseudomyogenic HE has eosinophilic rhabdomyoblast-like cells and FOSB expression; EHE has characteristic fusion-defined epithelioid morphology.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / rarely metastasizing",
  },
  {
    name: "YAP1::TFE3 hemangioendothelioma",
    clinical: [
      "Site: Superficial/deep soft tissue, bone, lung, and liver; virtually any site may be involved.",
      "Age/sex: Adults, 20–78 years (median 44); slight female predominance.",
      "Presentation: Solitary or multifocal mass; symptoms depend on the involved site.",
    ],
    essential: [
      "solid growth and/or well-formed vascular channels lined by epithelioid endothelial cells with abundant eosinophilic cytoplasm.",
      "Desirable (in selected cases): TFE3 rearrangement; YAP1::TFE3 fusion; strong and diffuse immunohistochemical positivity for TFE3.",
    ],
    hist: [
      "It may also demonstrate cells in coalescing nests, clusters, and discohesive strands, as well as a pseudoalveolar growth pattern.",
      "These growth patterns may be present in variable proportions.",
      "There is often a myxoid to myxohyaline stroma.",
      "An epithelioid cytomorphology usually predominates, with the cells showing well-demarcated cell borders and abundant, glassy eosinophilic to vacuolated cytoplasm.",
      "The nuclei are typically vesicular with prominent nucleoli.",
    ],
    ihc: [
      "ERG and CD31: Consistently positive.",
      "CD34: Positive in approximately 80%.",
      "Low-molecular-weight keratins: Positive in approximately 20%.",
      "TFE3: Diffuse nuclear expression; rare conventional EHE may show TFE3 staining.",
      "YAP1 C-terminus: Frequently lost.",
      "CAMTA1: Usually negative; rare fusion-confirmed positive cases reported.",
    ],
    molecular: [
      "YAP1::TFE3 fusion supports and helps distinguish this entity from other vascular tumors.",
    ],
    diff: [
      [
        "Epithelioid hemangioendothelioma, WWTR1::CAMTA1 type",
        "YAP1::TFE3 type has TFE3 expression and YAP1::TFE3 fusion; conventional EHE has WWTR1::CAMTA1 fusion.",
      ],
      [
        "Angiosarcoma",
        "YAP1::TFE3 HE lacks the marked cytologic atypia and destructive growth typical of angiosarcoma.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / locally aggressive, metastatic potential",
  },
  {
    name: "Epithelioid hemangioendothelioma",
    clinical: [
      "Site: Soft tissue, lung, liver, and bone; soft-tissue lesions are usually solitary, whereas visceral and bone disease is often multifocal.",
      "Age/sex: Usually adults (mean about 51 years); rare in children; sexes equally affected.",
      "Presentation: Painful soft-tissue or bone mass; large-vessel involvement may cause occlusion, edema, or thrombophlebitis.",
    ],
    essential: [
      "cords or nests of epithelioid cells with cytoplasmic vacuolization within a myxochondroid or hyaline stroma; absence of vasoformation, showing immunoreactivity for endothelial markers.",
    ],
    hist: [
      "Epithelioid hemangioendothelioma presents as a solid mass that lacks a lobular architecture.",
      "Angiocentric tumors expand the vessel wall, obliterate the lumen, and spread centrifugally into surrounding tissue, where they elicit a sclerotic response.",
      "Infiltrative growth into adjacent skeletal muscle or fat may be seen.",
      "The tumor is characterized by cords and nests of epithelioid cells in a myxohyaline stroma.",
      "tumor cells have moderate amounts of eosinophilic cytoplasm and round nuclei with inconspicuous nucleoli.",
      "Intracytoplasmic vacuoles are sometimes present and may contain erythrocytes (blister cells or signet-ring cells).",
      "Well-formed blood vessels are not present.",
    ],
    ihc: [
      "ERG and CD31: Typically positive.",
      "CD34 and D2-40: Less frequently positive.",
      "Cytokeratins: Positive in approximately 40%; EMA is unusual.",
      "SMA: Positive in approximately 50%.",
      "CAMTA1: Diffuse strong nuclear expression in most WWTR1::CAMTA1-fused tumors.",
      "TFE3: Variable in WWTR1::CAMTA1-fused tumors, usually not strong/diffuse; TFE3-fused tumors are CAMTA1-negative.",
    ],
    molecular: [
      "WWTR1::CAMTA1 fusion supports conventional epithelioid hemangioendothelioma.",
    ],
    diff: [
      [
        "Epithelioid hemangioma",
        "Epithelioid hemangioma is lobular and well-formed; EHE shows cords/nests of epithelioid cells in myxohyaline stroma.",
      ],
      [
        "Angiosarcoma",
        "EHE typically has characteristic fusion and relatively uniform epithelioid cells; angiosarcoma shows overtly malignant infiltrative vascular growth.",
      ],
    ],
    group: "Intermediate",
    behavior: "Intermediate / locally aggressive, metastatic potential",
  },
  {
    name: "Angiosarcoma",
    clinical: [
      "Site: Skin of head and neck most common; also breast, soft tissue, bone, liver, heart, and spleen. Radiation-associated cases often involve breast skin.",
      "Age/sex: Cutaneous cases peak around the seventh decade and show male predominance; primary breast angiosarcoma favors younger women.",
      "Presentation: Purplish-red papules, nodules, or plaques; deep lesions are often rapidly growing, poorly defined, and painful.",
    ],
    essential: [
      "vasoformative malignant tumor, or poorly differentiated tumor with expression of endothelial markers (CD31, ERG).",
    ],
    hist: [
      "Angiosarcomas have an infiltrative growth pattern and show variable degrees of cytological atypia and architectural differentiation.",
      "Well-differentiated vasoformative areas are composed of atypical endothelial cells lining anastomosing vascular spaces, whereas more solid components show endothelial multilayering and sheets of cellular growth.",
      "The cells can range from spindled to large epithelioid with pale eosinophilic cytoplasm and vesicular nuclei.",
      "Cytoplasmic vacuoles containing fragmented erythrocytes can be present.",
      "Epithelioid angiosarcoma shows predominance of epithelioid cells forming nests or sheets.",
      "Most tumors show a high-grade morphology, with nuclear atypia, increased mitotic activity (most prominent in solid areas), and coagulative necrosis.",
      "There may be associated blood lakes, extensive hemorrhage, and organizing hematoma that obscure the neoplasm.",
    ],
    ihc: [
      "CD31: Typically membranous positive.",
      "ERG: Typically nuclear positive.",
      "CD34: Variable.",
      "D2-40: May be positive.",
      "Epithelioid tumors: Cytokeratin and/or EMA may be positive.",
      "Perivascular SMA-positive pericytes: Commonly absent.",
      "Radiation- and lymphedema-associated tumors: MYC often strongly positive.",
      "CAMTA1, TFE3, and FOSB: Negative; INI1 retained in nearly all cases.",
    ],
    molecular: [
      "MYC amplification, assessed by FISH or MYC immunohistochemistry, can help distinguish radiation-associated angiosarcoma from atypical vascular lesions.",
    ],
    diff: [
      [
        "Epithelioid hemangioendothelioma",
        "EHE shows characteristic fusion and more uniform epithelioid cells; angiosarcoma has marked atypia and destructive infiltrative growth.",
      ],
      [
        "Anastomosing hemangioma",
        "Anastomosing hemangioma is cytologically bland and lacks endothelial multilayering.",
      ],
    ],
    group: "Malignant",
    behavior: "Malignant vascular tumor",
  },
];
const cats = ["All", "Malformation", "Benign", "Intermediate", "Malignant"];
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((v, i) => (
        <li key={i} className="flex gap-2 text-sm leading-6 text-slate-700">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{v}</span>
        </li>
      ))}
    </ul>
  );
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
export default function VascularTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Angiosarcoma",
    "Epithelioid hemangioendothelioma",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            ...x.clinical,
            ...x.essential,
            ...x.hist,
            ...x.ihc,
            ...x.molecular,
            ...x.diff.flat(),
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
        <div className="mx-auto max-w-7xl px-5 py-9">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-teal-700">
            PathologyGPS / Soft Tissue Tumors / Vascular Tumors
          </div>
          <div className="grid gap-7 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Vascular Tumors and Malformations
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                An outline-based, morphology-first reference. Short diagnostic
                points support rapid review and sign-out.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Diagnostic approach
              </div>
              <p className="mt-2 text-lg font-semibold leading-7">
                Classify the vascular pattern before interpreting ancillary
                studies.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Integrate architecture, endothelial phenotype, clinical setting,
                imaging, and diagnostically useful molecular findings.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-7 px-5 py-8">
        <Panel title="Diagnostic GPS: first-pass classification">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              [
                "1. Malformation or neoplasm?",
                "Assess developmental history, flow characteristics, distribution, and architecture.",
              ],
              [
                "2. Define the pattern",
                "Venous, arteriovenous, lymphatic, capillary-lobular, retiform, epithelioid, or spindle-cell.",
              ],
              [
                "3. Assess biologic behavior",
                "Look for infiltration, endothelial multilayering, cytologic atypia, mitoses, and necrosis.",
              ],
              [
                "4. Order targeted tests",
                "Use lineage markers and entity-associated alterations only when they resolve a specific differential.",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h4 className="font-bold text-slate-900">{x[0]}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">{x[1]}</p>
              </div>
            ))}
          </div>
        </Panel>
        <section>
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Entity outline
              </div>
              <h2 className="mt-1 text-2xl font-bold text-slate-950">
                Clinical profile and diagnostic criteria
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, clinical feature, morphology, marker, or
                molecular alteration.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. CD31, CAMTA1, MYC, hobnail..."
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
          <div className="space-y-3">
            {filtered.map((p) => {
              const open = opened.includes(p.name);
              return (
                <article
                  key={p.name}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(p.name)}
                    className="flex w-full flex-col gap-2 p-5 text-left md:flex-row md:items-center md:justify-between"
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
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View outline"} {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="space-y-5 border-t border-slate-100 p-5">
                      <div className="grid gap-5 lg:grid-cols-2">
                        <section className="rounded-xl bg-slate-50 p-4">
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Clinical Profile
                          </h4>
                          <Bullets items={p.clinical} />
                        </section>
                        <section className="rounded-xl bg-teal-50/50 p-4">
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900">
                            Essential Diagnostic Criteria
                          </h4>
                          <Bullets items={p.essential} />
                        </section>
                      </div>
                      <div className="grid gap-5 lg:grid-cols-2">
                        <section>
                          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                            Histopathology
                          </h4>
                          <Bullets items={p.hist} />
                        </section>
                        {p.ihc.length > 0 && (
                          <section>
                            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                              Immunophenotype
                            </h4>
                            <Bullets items={p.ihc} />
                          </section>
                        )}
                      </div>
                      <div className="grid gap-5 lg:grid-cols-2">
                        {p.diff.length > 0 && (
                          <section>
                            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                              Differential Diagnosis
                            </h4>
                            <ul className="space-y-3">
                              {p.diff.map((d, i) => (
                                <li
                                  key={i}
                                  className="border-l-2 border-teal-500 pl-3"
                                >
                                  <div className="text-sm font-semibold text-slate-900">
                                    {d[0]}
                                  </div>
                                  <p className="mt-1 text-sm leading-6 text-slate-600">
                                    {d[1]}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </section>
                        )}
                        {p.molecular.length > 0 && (
                          <section>
                            <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                              Molecular Pathology
                            </h4>
                            <Bullets items={p.molecular} />
                          </section>
                        )}
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
        <Panel title="High-yield molecular associations">
          <div className="grid gap-2 md:grid-cols-2">
            {[
              [
                "Venous malformations",
                "TEK, PIK3CA; MAP3K3 in verrucous venous malformation",
              ],
              [
                "Fast-flow AVM / IFVA",
                "MAP2K1, KRAS; selected syndromic cases involve RASA1 or EPHB4",
              ],
              ["Lymphatic malformation", "PIK3CA; NRAS in selected cases"],
              ["Spindle cell hemangioma", "IDH1, less often IDH2"],
              [
                "Epithelioid hemangioendothelioma",
                "WWTR1::CAMTA1 or YAP1::TFE3",
              ],
              [
                "Pseudomyogenic hemangioendothelioma",
                "FOSB-related rearrangements",
              ],
              [
                "Angiosarcoma",
                "MYC amplification in selected secondary/radiation-associated cases",
              ],
            ].map((x, i) => (
              <div
                key={i}
                className="flex flex-col gap-1 rounded-lg border border-slate-200 p-3 sm:flex-row sm:justify-between"
              >
                <b className="text-sm">{x[0]}</b>
                <span className="text-sm text-slate-600">{x[1]}</span>
              </div>
            ))}
          </div>
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Source and scope:</b> Based on the
          supplied WHO excerpt. The outline is intentionally concise; only
          source-supported diagnostic information is included; empty sections
          are omitted.
        </footer>
      </div>
    </main>
  );
}
