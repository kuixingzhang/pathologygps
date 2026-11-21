"use client";
import { useMemo, useState, type ReactNode } from "react";

type Diff = { name: string; distinction: string };
type Item = {
  name: string;
  group: string;
  behavior: string;
  profile: string[];
  criteria: string[];
  morphology: string[];
  ihc: string[];
  molecular: string[];
  differential: Diff[];
};

const items: Item[] = [
  {
    name: "Necrotizing sialometaplasia",
    group: "Non-neoplastic",
    behavior: "Reactive, self-limiting inflammatory lesion",
    profile: [
      "Usually presents in the fourth decade, with a male predilection.",
      "Most often affects the posterolateral hard palate; other minor salivary gland sites may be involved.",
      "Typically a unilateral swelling that may progress to a 10–15 mm crater-like ulcer; usually asymptomatic or mildly painful.",
    ],
    criteria: [
      "Preservation of lobular architecture with squamous metaplasia of ducts and acini.",
      "Acinar infarction/necrosis is desirable; pseudoepitheliomatous hyperplasia may be present.",
    ],
    morphology: [
      "Pre-existing salivary lobular architecture is usually preserved.",
      "Early lesions show acinar infarction or necrosis with mucus spillage.",
      "Maturing lesions show squamous metaplasia of involved ducts and acini.",
      "Cytology is generally bland, although regenerative keratinocytic atypia and mitotic activity may occur.",
      "Ductal remnants, interspersed mucocytes, granulation tissue, and subacute inflammation may coexist.",
      "Pseudoepitheliomatous hyperplasia may merge with ductal squamous metaplasia and simulate squamous carcinoma.",
    ],
    ihc: ["No diagnostic immunophenotype is specified."],
    molecular: ["No diagnostic molecular test is relevant."],
    differential: [
      {
        name: "Squamous cell carcinoma",
        distinction:
          "Lobular preservation and bland metaplastic ducts/acini support necrotizing sialometaplasia; destructive infiltrative growth supports carcinoma. A superficial biopsy may be misleading when pseudoepitheliomatous hyperplasia merges with ductal metaplasia.",
      },
      {
        name: "Subacute necrotizing sialadenitis",
        distinction:
          "Included in the WHO differential; correlate the pattern of glandular injury and clinical setting.",
      },
    ],
  },
  {
    name: "Multifocal epithelial hyperplasia (Heck disease)",
    group: "Non-neoplastic",
    behavior: "Benign HPV-associated epithelial proliferation",
    profile: [
      "Occurs mainly in children and adolescents; adults are infrequently affected.",
      "Usually involves the tongue borders and tip, buccal mucosa along the occlusal plane, and lips, especially the lower labial mucosa.",
      "Presents as multiple painless, sessile, smooth papules similar in colour to adjacent mucosa; lesions may coalesce into cobblestone plaques.",
    ],
    criteria: [
      "Sessile, occasionally papilloma-like lesions with a cobblestone surface.",
      "Acanthotic epithelium with mitosoid bodies in the upper epithelium.",
    ],
    morphology: [
      "Prominent exophytic acanthosis with broad, confluent rete ridges and normal epithelial maturation.",
      "A papillary surface is uncommon.",
      "Mitosoid bodies may occur in the upper epithelium and represent a viral cytopathic nuclear effect.",
      "Occasional koilocytes may be present in superficial epithelial layers.",
    ],
    ihc: [
      "p16 immunohistochemistry has no diagnostic value because HPV13 and HPV32 do not cause functional inactivation of RB1.",
    ],
    molecular: [
      "Predominantly associated with HPV types 13 and 32; PCR and DNA or RNA in situ hybridization can detect these types when needed.",
      "Routine HPV detection is rarely required.",
    ],
    differential: [
      {
        name: "Squamous papilloma",
        distinction:
          "Usually solitary and well demarcated, with finger-like fibrovascular papillae; multifocal epithelial hyperplasia typically presents as multiple flattened papules or cobblestone plaques.",
      },
      {
        name: "Condyloma acuminatum",
        distinction:
          "Shows broad-based acanthosis, bulbous rete, blunted papillae, and usually conspicuous koilocytes in the upper spinous layer.",
      },
      {
        name: "Verruca vulgaris",
        distinction:
          "Shows extensive keratinization, inward-facing peripheral rete ridges, coarse keratohyalin granules, and koilocytic change.",
      },
    ],
  },
  {
    name: "Oral melanoacanthoma",
    group: "Non-neoplastic",
    behavior: "Reactive, non-neoplastic process",
    profile: [
      "Occurs across a broad age range, most often in the third to fifth decades; there is a female predominance.",
      "Buccal mucosa is involved in approximately half of cases, but any oral mucosal site may be affected.",
      "Usually a rapidly growing, smooth, pigmented lesion; most are asymptomatic and unifocal.",
    ],
    criteria: [
      "Proliferation of dendritic melanocytes high in the epithelium.",
      "Spongiosis and absence of melanocytic atypia or invasive nests.",
      "Epithelial acanthosis and basal-layer melanin are desirable features.",
    ],
    morphology: [
      "Acanthotic epithelium contains increased dendritic melanocytes throughout its thickness.",
      "Spongiosis and a submucosal chronic inflammatory infiltrate may be present.",
      "Lymphocyte exocytosis may occur; basal-layer melanin deposition is frequent.",
      "Langerhans cells may be prominent.",
      "Melanocytic nuclear pleomorphism, hyperchromatism, and nesting are absent.",
    ],
    ihc: ["S100, HMB45, and melan-A highlight the dendritic melanocytes."],
    molecular: [
      "No clinically relevant diagnostic molecular finding is specified.",
    ],
    differential: [
      {
        name: "Mucosal melanoma",
        distinction:
          "The key distinction is the absence of melanocytic atypia and invasive melanocytic nests in oral melanoacanthoma; melanoma shows a neoplastic melanocytic proliferation.",
      },
    ],
  },
  {
    name: "Squamous papilloma",
    group: "Benign epithelial",
    behavior: "Benign epithelial neoplasm",
    profile: [
      "Can occur at any age, most often in adults in the fourth to fifth decades, without sex predilection.",
      "Any oral site may be involved; palate, tongue, lips, and gingiva are common.",
      "Usually a solitary, well-defined, pedunculated white lesion under 10 mm with a rough, cauliflower-like or finger-like surface.",
    ],
    criteria: [
      "Benign squamous proliferation with exophytic, pedunculated or sessile papillary architecture.",
      "Epithelial hyperplasia, keratinization, and fibrovascular cores.",
      "No evidence of dysplasia.",
    ],
    morphology: [
      "Exophytic papillary proliferation of hyperplastic stratified squamous epithelium with narrow branching fibrovascular cores.",
      "Papillary projections may be pointed or rounded; most lesions show parakeratosis.",
      "Epithelium shows orderly maturation without dysplasia.",
      "Koilocytes are infrequent compared with verruca vulgaris and condyloma acuminatum.",
      "Condyloma acuminatum shows broad-based acanthosis, bulbous rete, blunted papillae, parakeratin-filled crypts, and upper spinous koilocytes.",
      "Verruca vulgaris shows extensive keratinization, inward-facing peripheral rete ridges, coarse keratohyalin granules, and koilocytic change.",
    ],
    ihc: ["No specific immunohistochemical profile is required."],
    molecular: [
      "Associated with low-risk HPV, particularly types 6 and 11; high-risk carcinogenic HPV types are not associated.",
      "HPV detection is not routinely required.",
    ],
    differential: [
      {
        name: "Condyloma acuminatum",
        distinction:
          "Broad-based growth, bulbous and sometimes interconnected rete ridges, blunted papillae, parakeratin-filled crypts, and upper spinous koilocytes favor condyloma.",
      },
      {
        name: "Verruca vulgaris",
        distinction:
          "Extensive keratinization, inward-facing peripheral rete ridges, coarse keratohyalin granules, and koilocytic change distinguish verruca.",
      },
      {
        name: "Verruciform xanthoma",
        distinction:
          "A clinical differential diagnosis; assess the characteristic histological pattern rather than relying on the verrucous surface alone.",
      },
      {
        name: "Dysplastic papillary or verrucous epithelial proliferation",
        distinction:
          "Dysplasia, an irregular lesion larger than 10 mm, or a verrucous lesion in the setting of proliferative verrucous leukoplakia should prompt concern for an atypical potentially malignant lesion.",
      },
    ],
  },
  {
    name: "Oral potentially malignant disorders (OPMDs)",
    group: "OPMD / dysplasia",
    behavior: "Clinically defined disorders with variable progression risk",
    profile: [
      "Can involve any intraoral site; lateral/ventral tongue and floor of mouth are more closely associated with progression.",
      "Leukoplakia is the most common OPMD; erythroplakia is uncommon but much more often associated with high-grade dysplasia or carcinoma.",
      "Leukoplakia is a white plaque of questionable risk after exclusion of other definable diseases; erythroleukoplakia contains red and white components.",
    ],
    criteria: [
      "Diagnosis is clinical and partly by exclusion; biopsy is usually required.",
      "Assess for epithelial dysplasia and the clinical pattern, including red, white, speckled, homogeneous, granular, fissured, nodular, or verrucous change.",
    ],
    morphology: [
      "Histological findings vary by OPMD and may range from minimal to severe oral epithelial dysplasia.",
      "Some lesions, particularly proliferative verrucous leukoplakia and verrucous leukoplakia, may carry malignant risk despite minimal dysplasia.",
      "Erythroplakia is more likely than leukoplakia to be associated with high-grade dysplasia or carcinoma.",
    ],
    ihc: [
      "No clinically relevant diagnostic immunohistochemical marker is specified for OPMDs as a group.",
    ],
    molecular: [
      "No clinically relevant diagnostic molecular test is specified for OPMDs as a group.",
    ],
    differential: [
      {
        name: "Other definable white or red oral mucosal diseases",
        distinction:
          "Leukoplakia and erythroplakia are clinical diagnoses of exclusion; biopsy and clinicopathological correlation are required.",
      },
      {
        name: "Oral epithelial dysplasia",
        distinction:
          "Dysplasia is a histopathological diagnosis that may occur in an OPMD; the clinical OPMD label and the histological dysplasia grade describe different aspects of the lesion.",
      },
      {
        name: "Oral lichen planus / lichenoid lesions",
        distinction:
          "Early PVL may resemble lichen planus clinically and histologically. Dysplasia or intact basal cells in the appropriate setting argues against a diagnosis of lichen planus.",
      },
    ],
  },
  {
    name: "Proliferative verrucous leukoplakia (PVL)",
    group: "OPMD / dysplasia",
    behavior:
      "Persistent, progressive OPMD with high recurrence and malignant risk",
    profile: [
      "Predominantly affects elderly women; mean age approximately 66.8 years.",
      "Most often involves gingiva and alveolar ridge, followed by buccal mucosa, tongue, and hard palate.",
      "Multifocal, persistent, progressive white lesions; thick verrucoid marginal gingival plaques encircling teeth are characteristic.",
    ],
    criteria: [
      "Clinical presentation consistent with PVL.",
      "Early lesions may show premature keratinization and minimal cytological atypia.",
      "Later lesions show verrucous, nodular, or bulky architecture with variable dysplasia.",
    ],
    morphology: [
      "Early lesions may be flat keratoses with atypical architecture, premature keratinization, sharp lateral margins, and increased keratin but no cytological atypia.",
      "Corrugated hyperkeratotic lesions show verrucopapillary architecture or disproportionate flat hyperorthokeratosis/hyperparakeratosis, often with minimal or no dysplasia.",
      "Skip areas of normal-to-abnormal-to-normal epithelium and abrupt transition to unaffected mucosa are common.",
      "Bulky lesions show atypical hyperkeratotic epithelium with exophytic and/or endophytic growth; bulbous rete pegs may coalesce.",
      "Lichenoid interface inflammation may mimic lichen planus; intact basal cells and/or dysplasia preclude that diagnosis.",
    ],
    ihc: ["No diagnostic immunohistochemical marker is specified."],
    molecular: [
      "No diagnostic molecular test is specified; loss of heterozygosity and DNA ploidy abnormalities have been described in PVL tissue.",
    ],
    differential: [
      {
        name: "Homogeneous oral leukoplakia",
        distinction:
          "Early PVL may be indistinguishable; multifocality, persistence, progression, and evolution toward corrugated or bulky verrucous lesions support PVL.",
      },
      {
        name: "Oral lichen planus",
        distinction:
          "Early PVL may show a lichenoid interface infiltrate. Dysplasia and/or intact basal cells are inconsistent with a diagnosis of lichen planus in the relevant setting.",
      },
      {
        name: "Verrucous dysplasia / verrucous carcinoma",
        distinction:
          "PVL may develop bulky verrucous epithelial proliferation and carcinoma; assess epithelial architecture, dysplasia, and whether there is pushing invasion below adjacent epithelium.",
      },
    ],
  },
  {
    name: "Oral submucous fibrosis (OSF)",
    group: "OPMD / dysplasia",
    behavior: "Chronic fibrosing OPMD with risk of SCC",
    profile: [
      "Described predominantly in populations from South and Southeast Asia and among migrants from these regions.",
      "Involves oral cavity and oropharynx; may extend to the upper third of the esophagus.",
      "Progressive limitation of mouth opening with fibrous bands, burning mouth, tongue depapillation, blanching, and leathery mucosa.",
    ],
    criteria: [
      "Palpable fibrous bands in oral mucosa.",
      "Subepithelial hyalinization and fibrosis.",
      "Limitation of mouth opening, muscle fibrosis, loss of tongue papillae, and epithelial atrophy are desirable features.",
    ],
    morphology: [
      "Early epithelium may be hyperplastic and later becomes markedly atrophic with loss of rete ridges.",
      "Epithelial dysplasia may appear unpredictably; budding rete morphology is an early dysplastic feature.",
      "Early submucosa shows increased vascularity, inflammation, fibrillar collagen, and collagen bundles with interspersed fibroblasts.",
      "Later disease shows superficial juxtaepithelial hyalinization, homogeneous collagen, reduced vascularity, and dense fibrosis extending into underlying tissues.",
      "Advanced fibrosis may cause muscle degeneration and replacement of loose connective tissue by fibrous tissue.",
    ],
    ihc: ["No established diagnostic immunohistochemical marker is specified."],
    molecular: [
      "No established molecular predictive marker is available. LOH in the 13q14–q33 region, hypoxia, and reactive oxygen species have been reported as possible predictors of transformation.",
    ],
    differential: [
      {
        name: "Other causes of oral mucosal fibrosis or scarring",
        distinction:
          "The clinical setting of areca nut exposure, progressive fibrous banding, and characteristic subepithelial hyalinization/fibrosis support OSF.",
      },
      {
        name: "Oral epithelial dysplasia / SCC arising in OSF",
        distinction:
          "Dysplasia may develop unpredictably in OSF; evaluate the epithelium separately for architectural and cytological atypia and for invasive carcinoma.",
      },
    ],
  },
  {
    name: "Oral epithelial dysplasia (OED)",
    group: "OPMD / dysplasia",
    behavior:
      "Epithelial precursor lesion with variable malignant transformation risk",
    profile: [
      "Can occur at any intraoral site; lateral/ventral tongue, retromolar area, and floor of mouth are associated with higher transformation risk.",
      "Often arises in an OPMD; clinical appearance varies with the underlying disorder.",
      "Erythroplakia and erythroleukoplakia are particularly likely to be associated with dysplasia or carcinoma.",
    ],
    criteria: [
      "Architectural and/or cytological epithelial atypia.",
      "Nuclear hyperchromasia and increased nuclear-to-cytoplasmic ratio.",
      "Use the three-tiered grading system while recognizing that grade cannot be determined solely by the epithelial thirds involved.",
    ],
    morphology: [
      "Abnormal epithelial proliferation, maturation, and differentiation produce architectural and cytological disturbances.",
      "Architectural features may establish dysplasia even when cytological atypia is absent or minimal.",
      "Features include disorganization of basal cells, bulbous rete processes, budding, and increased pleomorphism.",
      "Traditionally, mild dysplasia is mainly in the basal third, moderate dysplasia extends to the middle third, and severe dysplasia extends to the upper third; individual architectural and cytological features may override this simplified scheme.",
      "A lichenoid lymphohistiocytic infiltrate with T-cell-mediated epithelial injury may accompany OED and mimic oral lichen planus.",
    ],
    ihc: [
      "No validated biomarker is established for dysplasia grading or prediction of malignant transformation.",
    ],
    molecular: [
      "OED is associated with accumulated genetic and epigenetic changes, including LOH/copy-number alterations, hypermethylation, altered RNA expression, somatic mutations, and genomic instability.",
      "DNA ploidy and LOH assays have shown promising prognostic results but are not established routine predictive biomarkers.",
    ],
    differential: [
      {
        name: "Oral lichen planus",
        distinction:
          "Dysplasia is an exclusion criterion for oral lichen planus. A lichenoid infiltrate can accompany OED, so assess basal cells and epithelial architecture rather than interpreting interface inflammation alone.",
      },
      {
        name: "HPV-associated oral epithelial dysplasia",
        distinction:
          "HPVOED shows characteristic viral cytopathic changes, including karyorrhectic and apoptotic keratinocytes, and transcriptionally active high-risk HPV.",
      },
      {
        name: "Reactive epithelial atypia",
        distinction:
          "Interpret atypia with the combination and distribution of architectural and cytological abnormalities; individual features are relatively nonspecific.",
      },
    ],
  },
  {
    name: "HPV-associated oral epithelial dysplasia (HPVOED)",
    group: "OPMD / dysplasia",
    behavior: "High-risk HPV-associated epithelial dysplasia",
    profile: [
      "Usually affects men (reported M:F ratio 6:1), with peak incidence in the sixth decade.",
      "Most often involves ventral/lateral tongue and floor of mouth, followed by buccal mucosa.",
      "Usually presents as a flat, demarcated white, red-and-white, or red patch.",
    ],
    criteria: [
      "Epithelial dysplasia with prominent karyorrhectic/apoptotic cells.",
      "Presence of high-risk HPV.",
      "Strong p16 expression involving more than half of epithelial thickness, excluding keratin, is desirable but not independently validated.",
    ],
    morphology: [
      "Brightly eosinophilic surface parakeratin is common; orthokeratosis may occur.",
      "Marked architectural and cytological dysplasia is composed of monotonous basaloid keratinocytes with high N:C ratios.",
      "Some lesions contain pleomorphic cells and superficial koilocytes.",
      "Characteristic viral cytopathic cells include karyorrhectic cells with coarse condensed chromatin and a pericellular halo, and apoptotic cells with dense eosinophilic cytoplasm.",
    ],
    ihc: [
      "p16 typically shows strong, diffuse nuclear and cytoplasmic block positivity, often sharply demarcated from adjacent non-dysplastic epithelium.",
      "p16 is not yet validated as a stand-alone diagnostic marker in this setting.",
    ],
    molecular: [
      "Support strong diffuse p16 expression and compatible morphology with high-risk HPV testing by DNA or RNA in situ hybridization or PCR.",
      "Consensus PCR alone, without strong p16 expression and supportive histology, is insufficient for diagnosis.",
    ],
    differential: [
      {
        name: "Conventional oral epithelial dysplasia",
        distinction:
          "The combination of dysplasia, characteristic viral cytopathic changes, and transcriptionally active high-risk HPV supports HPVOED.",
      },
      {
        name: "Flat warts",
        distinction:
          "HPVOED is distinguished by epithelial dysplasia together with the characteristic viral cytopathic changes and high-risk HPV.",
      },
      {
        name: "Multifocal epithelial hyperplasia",
        distinction:
          "MEH is associated predominantly with HPV13/32, shows acanthosis with preserved maturation and mitosoid bodies, and p16 has no diagnostic value.",
      },
      {
        name: "HPV-associated OPSCC",
        distinction:
          "HPVOED is an intraepithelial dysplastic lesion of oral cavity mucosa; HPV-associated OPSCC is an invasive carcinoma arising from tonsillar crypt epithelium in the oropharynx.",
      },
    ],
  },
  {
    name: "Oral squamous cell carcinoma (OSCC)",
    group: "Malignant",
    behavior: "Malignant epithelial neoplasm",
    profile: [
      "Can arise at any oral mucosal site; common sites include lateral/ventral tongue, floor of mouth, posterior buccal mucosa, and gingiva/alveolar mucosa.",
      "Most patients are male, although sex distribution varies geographically.",
      "May be asymptomatic early; advanced lesions may cause pain, altered sensation, impaired tongue movement or swallowing, induration, fixation, trismus, tooth mobility, or bone destruction.",
    ],
    criteria: [
      "Infiltrating malignant epithelial cells with squamous differentiation.",
    ],
    morphology: [
      "Most OSCCs are conventional keratinizing SCC.",
      "Well-differentiated tumors form nests, cords, and islands of cells with pink cytoplasm, intercellular bridges, squamous pearls, and dyskeratotic cells.",
      "Higher-grade tumors show pleomorphism, hyperchromasia, and mitotic figures, including atypical forms; small islands or single cells may occur at the invasive front.",
      "Desmoplastic stroma and inflammation surround invasive nests; perineural and lymphovascular invasion may occur, particularly in high-grade tumors.",
      "Subtypes include spindle cell/sarcomatoid SCC, basaloid SCC, acantholytic SCC, adenosquamous carcinoma, papillary SCC, and lymphoepithelial carcinoma.",
    ],
    ihc: [
      "In poorly differentiated tumors, AE1/AE3 can confirm epithelial differentiation; CK5/6, p63, and p40 support squamous differentiation.",
    ],
    molecular: [
      "No clinically relevant diagnostic molecular test is specified.",
      "High-risk HPV has not been established as a significant etiological factor in OSCC; p16 positivity alone should not be used to classify an oral cavity SCC as HPV-associated.",
    ],
    differential: [
      {
        name: "Verrucous carcinoma",
        distinction:
          "Verrucous carcinoma is well differentiated, has minimal cytological atypia, and shows broad pushing invasion below adjacent epithelium rather than the conventional infiltrative malignant pattern.",
      },
      {
        name: "Carcinoma cuniculatum",
        distinction:
          "Shows a burrowing labyrinthine network of keratin-filled crypts, abundant neutrophils, and minimal atypia.",
      },
      {
        name: "Necrotizing sialometaplasia",
        distinction:
          "Preserved salivary lobular architecture with ductal/acinar squamous metaplasia and acinar necrosis supports this reactive mimic rather than infiltrative SCC.",
      },
      {
        name: "Granular cell tumor with pseudoepitheliomatous hyperplasia",
        distinction:
          "The underlying granular cell tumor is subepithelial and may induce overlying pseudoepitheliomatous hyperplasia; superficial biopsy may mimic SCC.",
      },
    ],
  },
  {
    name: "Verrucous carcinoma",
    group: "Malignant",
    behavior: "Well-differentiated, locally destructive, non-metastasizing SCC",
    profile: [
      "Occurs predominantly in older adults, usually from the sixth decade onward, with a strong male predilection.",
      "Most often affects buccal mucosa, gingiva, and tongue.",
      "Slowly growing, slightly exophytic white tumor with a warty keratinized surface; may erode bone.",
    ],
    criteria: [
      "Broad-based, well-differentiated squamous proliferation with marked papillary parakeratosis, acanthosis, and keratin plugging.",
      "Proliferation extends below adjacent normal epithelium with a pushing, even border.",
      "No or minimal cytological atypia; mitoses limited to basal/parabasal layers.",
      "Full-thickness biopsy and adequate sampling are needed to assess invasion and exclude coexisting SCC.",
    ],
    morphology: [
      "Broad-based exophytic and endophytic squamous proliferation with marked surface keratinization and keratin plugging.",
      "Bulbous rete processes often coalesce.",
      "Tumor advances as a well-defined pushing interface below adjacent epithelium; the stromal–epithelial interface is sharply demarcated.",
      "Cytological atypia is absent or minimal, with no more than mild/low-grade nuclear pleomorphism.",
      "A lymphoplasmacytic inflammatory response is often present; ulceration is uncommon and raises concern for conventional SCC.",
      "Hybrid verrucous carcinoma or invasive well-differentiated SCC with verrucous features is used when severe/high-grade dysplasia and limited carcinoma coexist.",
    ],
    ihc: ["No defining immunohistochemical profile is specified."],
    molecular: [
      "No clinically relevant diagnostic molecular test is specified; verrucous carcinoma is not associated with HPV infection.",
    ],
    differential: [
      {
        name: "Conventional SCC",
        distinction:
          "A lack of substantial cytological atypia and a broad, even pushing border favor verrucous carcinoma; conventional SCC shows more overt atypia and infiltrative growth.",
      },
      {
        name: "Papillary SCC",
        distinction:
          "Papillary SCC shows malignant cytological features; verrucous carcinoma is cytologically bland with a pushing invasive interface.",
      },
      {
        name: "Condyloma acuminatum",
        distinction:
          "Condyloma is an exophytic benign papillomatous lesion; epithelial down-growth extending deeper than adjacent normal epithelium supports verrucous carcinoma.",
      },
      {
        name: "Verrucous dysplastic lesions",
        distinction:
          "Dysplastic verrucous lesions may be intermediate and difficult to classify; full-thickness sampling with adjacent normal epithelium and adequate stroma is required to assess true pushing invasion and exclude coexisting SCC.",
      },
    ],
  },
  {
    name: "Carcinoma cuniculatum",
    group: "Malignant",
    behavior:
      "Well-differentiated, locally destructive, non-metastasizing SCC type",
    profile: [
      "Most often occurs in the seventh and eighth decades, without sex predilection.",
      "Usually arises in the mandibular gingivo-alveolar complex, followed by the maxilla; tongue, buccal mucosa, and lower lip are uncommon sites.",
      "May present with pain, swelling, ulceration, tooth mobility, and induration; keratinaceous discharge or sequestra may mimic osteomyelitis or abscess.",
    ],
    criteria: [
      "Well-differentiated, heavily keratinizing squamous epithelium with mild atypia.",
      "Labyrinthine, burrowing, cohesive invasive pattern.",
      "Correlation with imaging; keratin microabscesses, stromal neutrophils, microsequestra, and bone invasion are desirable.",
    ],
    morphology: [
      "Predominantly endophytic burrowing labyrinthine network of well-differentiated squamous epithelium.",
      "Interconnecting keratin-filled crypts communicate with the surface; a minor exophytic component may be present.",
      "Nuclear atypia is minimal, usually no more than mild.",
      "Intraepithelial and stromal neutrophils are abundant, often with keratin microabscesses.",
      "Microsequestra are frequently associated with bone invasion.",
    ],
    ihc: ["No defining immunohistochemical profile is specified."],
    molecular: [
      "No diagnostic molecular test is specified; there is no association with HPV.",
    ],
    differential: [
      {
        name: "Verrucous carcinoma",
        distinction:
          "Carcinoma cuniculatum has a deeply burrowing labyrinthine network of keratin-filled crypts and abundant neutrophils; verrucous carcinoma has broad pushing fronts and prominent surface verruciform architecture.",
      },
      {
        name: "Cystic well-differentiated SCC",
        distinction:
          "Non-representative sampling may obscure the characteristic interconnected burrowing crypts; assess the overall architecture and correlate with imaging.",
      },
      {
        name: "Osteomyelitis or abscess",
        distinction:
          "Keratinaceous discharge, fistulae, and sequestra can mimic infection; identify the invasive well-differentiated squamous labyrinth and keratin-filled crypts.",
      },
      {
        name: "Odontogenic keratocyst / orthokeratinized odontogenic cyst",
        distinction:
          "These may enter the differential in limited samples; the diagnostic feature of carcinoma cuniculatum is a burrowing invasive network of squamous epithelium.",
      },
    ],
  },
  {
    name: "Congenital granular cell epulis (CGCE)",
    group: "Benign epithelial",
    behavior: "Benign congenital tumor",
    profile: [
      "Present at birth in a newborn; female predominance (reported M:F ratio 1:7.7).",
      "Usually arises on the maxillary anterior alveolar ridge; mandibular and multifocal lesions occur less often.",
      "Pedunculated soft-tissue mass, sometimes large enough to interfere with feeding or respiration.",
    ],
    criteria: [
      "Neonatal soft-tissue mass on maxillary or mandibular alveolar ridge.",
      "Sheets and nests of polygonal cells with eosinophilic granular cytoplasm.",
      "Atrophic overlying stratified squamous epithelium and negative S100 are desirable.",
    ],
    morphology: [
      "Well-circumscribed lesion composed of sheets and nests of tightly packed polygonal cells.",
      "Cells have abundant granular cytoplasm, well-defined membranes, and eccentric dark nuclei with inconspicuous nucleoli.",
      "Mitoses are absent; thin-walled vessels are distributed throughout.",
      "Overlying epithelium is atrophic and lacks rete ridges.",
    ],
    ihc: [
      "Granular cells are positive for vimentin, NSE, and laminin; PAS-positive and diastase-resistant.",
      "Granular cells are negative for muscle markers, SOX10, and S100; histiocytic markers are variably positive.",
    ],
    molecular: ["No diagnostic molecular test is specified."],
    differential: [
      {
        name: "Granular cell tumor",
        distinction:
          "Granular cell tumor usually occurs on the dorsal tongue and shows S100 and SOX10 positivity; CGCE is a neonatal alveolar ridge lesion and is typically S100/SOX10 negative.",
      },
    ],
  },
  {
    name: "Granular cell tumor",
    group: "Benign epithelial",
    behavior: "Usually benign; malignant variant is recognized",
    profile: [
      "Can occur at any age, most often in the fourth to sixth decades; female predominance.",
      "About 85% of oral cases arise in the tongue.",
      "Usually a small, slowly enlarging, non-tender, sessile mucosal or yellowish submucosal nodule.",
    ],
    criteria: [
      "Neoplastic sheets and nests of granular cells.",
      "Pseudoepitheliomatous hyperplasia and S100 positivity are desirable features.",
    ],
    morphology: [
      "Unencapsulated tumor composed of large polygonal cells with abundant eosinophilic granular cytoplasm and small round nuclei in subepithelial tissue.",
      "Cells may form a syncytial pattern or surround and replace muscle fascicles or nerves.",
      "Granular cell-poor tumors with extensive fibrosis occur.",
      "Overlying pseudoepitheliomatous hyperplasia is seen in 25–50% and may lead to an erroneous diagnosis of SCC in superficial biopsies.",
      "Malignant criteria include at least three of: nuclear pleomorphism, spindling, mitotic activity greater than 2 mitoses/2 mm², prominent nucleoli, high N:C ratio, and necrosis.",
    ],
    ihc: [
      "Tumor cells are immunoreactive for S100, CD57, SOX10, inhibin, and calretinin.",
      "CD68 highlights lysosome-rich cytoplasmic granules.",
      "A rare non-neural subtype is S100-negative and may show spindle cells, mitotic activity, rich vascularity, and no pseudoepitheliomatous hyperplasia; both subtypes express NKI/C3.",
    ],
    molecular: [
      "No diagnostic molecular test is specified for sporadic oral granular cell tumor.",
    ],
    differential: [
      {
        name: "Congenital granular cell epulis",
        distinction:
          "CGCE presents at birth on the alveolar ridge and is typically negative for S100 and SOX10; granular cell tumor usually affects the tongue and is positive for these markers.",
      },
      {
        name: "Squamous cell carcinoma",
        distinction:
          "Pseudoepitheliomatous hyperplasia overlying a subepithelial granular cell tumor can mimic SCC; examine deeper tissue for the granular cell population.",
      },
      {
        name: "Other granular cell lesions",
        distinction:
          "Immunohistochemistry helps distinguish other granular cell lesions; integrate morphology with S100, SOX10, CD68, and the relevant marker profile.",
      },
    ],
  },
  {
    name: "Ectomesenchymal chondromyxoid tumor (EMCMT)",
    group: "Benign epithelial",
    behavior:
      "Usually indolent; occasional local recurrence or local aggressiveness",
    profile: [
      "Occurs over a broad age range, most often in young adults, without sex predilection.",
      "Most often arises on the anterior dorsal tongue; palate and mandible are less common sites.",
      "Slow-growing, painless mass with duration of months to years.",
    ],
    criteria: [
      "Sheets, cords, and/or reticular arrangement of spindle, stellate, or polygonal cells.",
      "Variable myxoid, hyaline, or collagenous stroma.",
      "Consistent immunohistochemistry is desirable.",
    ],
    morphology: [
      "Often multilobulated, with cells in sheets, fascicles, and/or reticular patterns.",
      "Margins are well demarcated but usually unencapsulated; peripheral incorporation of surrounding muscle fibers may occur.",
      "Cells range from spindle to stellate to polygonal, with variable eosinophilic cytoplasm and monomorphic round-to-ovoid nuclei.",
      "Occasional atypia, binucleation, and pseudonuclear inclusions may be present; mitotic activity is usually inconspicuous.",
      "Stroma ranges from myxoid to collagenous and may be focally hyaline.",
    ],
    ihc: [
      "Most tumors show diffuse GFAP expression.",
      "S100, desmin, SMA, myogenin, CD56, CD57, keratin, and EMA are typically patchy and weak.",
    ],
    molecular: [
      "Approximately 90% harbor RREB1::MRTFB fusion; the fusion is helpful in the appropriate context but is not disease-specific.",
      "A minority may have alternative molecular drivers, including EWSR1.",
    ],
    differential: [
      {
        name: "Other myxoid neoplasms of the tongue",
        distinction:
          "Integrate the characteristic spindle-to-stellate-to-polygonal cells, myxoid-to-collagenous stroma, diffuse GFAP in most cases, and RREB1::MRTFB fusion in the appropriate context.",
      },
      {
        name: "Biphenotypic sinonasal sarcoma and other RREB1::MRTFB-positive tumors",
        distinction:
          "The fusion is not disease-specific and has been reported in other tumors; anatomic site and characteristic morphology are essential to interpretation.",
      },
    ],
  },
  {
    name: "Melanotic neuroectodermal tumor of infancy (MNTI)",
    group: "Malignant",
    behavior:
      "Rapidly growing, locally destructive tumor of uncertain malignant potential",
    profile: [
      "Usually affects infants aged 3–6 months, with a slight male predilection.",
      "More than 90% arise in craniofacial bones; the maxilla is most common, followed by skull and mandible.",
      "Typically a painless, rapidly enlarging, bluish-black upper alveolar mass that may cause facial deformity and feeding difficulty.",
    ],
    criteria: [
      "Biphasic tumor with small neuroblast-like cells and large melanotic epithelial cells.",
      "Cells form lobules separated by fibrocollagenous stroma.",
      "Age under 1 year, jaw location, bone destruction, and keratin/HMB45-positive epithelial cells are desirable features.",
    ],
    morphology: [
      "Tumor cells form alveolar nests, cords, and trabeculae infiltrating dense vascularized fibrocollagenous stroma.",
      "Melanotic epithelial cells typically surround small neuroblast-like cells and may form tubuloglandular structures.",
      "Small cells rarely produce a neurofibrillary matrix.",
      "Tumor frequently destructively infiltrates bone and may entrap odontogenic tissue.",
      "Mitoses and necrosis are generally absent.",
    ],
    ihc: [
      "Both cell populations express vimentin and synaptophysin and are typically negative for chromogranin, neurofilaments, S100, and desmin.",
      "Large cells coexpress pancytokeratin, HMB45, and melan-A, confirming epithelial and melanocytic features.",
    ],
    molecular: [
      "Reported alterations include germline CDKN2A mutations and somatic BRAF p.V600E variants; molecular testing is not clinically relevant for routine diagnosis.",
    ],
    differential: [
      {
        name: "Ewing sarcoma",
        distinction:
          "Lacks the characteristic biphasic population of melanin-producing, keratin-positive epithelial cells and synaptophysin-positive neuroblast-like cells.",
      },
      {
        name: "Rhabdomyosarcoma",
        distinction:
          "Lacks the characteristic biphasic melanotic epithelial and neuroblast-like cell populations of MNTI.",
      },
      {
        name: "Lymphoma",
        distinction:
          "Lacks the characteristic biphasic MNTI morphology and combined epithelial/melanocytic and neuroblastic immunophenotype.",
      },
    ],
  },
  {
    name: "Hamartomatous polyp of the palatine tonsil",
    group: "Benign epithelial",
    behavior: "Benign hamartomatous lesion",
    profile: [
      "Occurs across a broad age range (reported 3–63 years; median 25.5 years), without sex predilection.",
      "Arises in the palatine tonsil.",
      "Usually a unilateral polypoid mass; may cause dysphagia, sore throat, globus, or obstructive symptoms.",
    ],
    criteria: [
      "Polypoid lesion of the palatine tonsil.",
      "Submucosal proliferation of lymphovascular channels containing proteinaceous fluid and lymphocytes in lymphoid or connective tissue stroma.",
    ],
    morphology: [
      "Lymphangiectatic fibrous polyps contain numerous small-to-medium dilated vascular channels filled with proteinaceous fluid and lymphocytes.",
      "Overlying mucosa is generally intact and lined by respiratory or squamous epithelium without dysplasia.",
      "Small intraepithelial lymphocyte collections may be present.",
      "Stroma varies and may contain fibrous tissue, lymphoid tissue, adipose tissue, and muscle; adipose-rich lesions have been termed fibrolipomatous polyps.",
    ],
    ihc: ["No diagnostic immunohistochemical profile is specified."],
    molecular: ["No diagnostic molecular test is applicable."],
    differential: [
      {
        name: "Tonsillar lipoma",
        distinction:
          "The term is not recommended; lesions with prominent adipose tissue are considered within the spectrum of tonsillar hamartomatous polyps.",
      },
      {
        name: "Other tonsillar neoplasms",
        distinction:
          "The defining feature is a submucosal hamartomatous mixture of lymphovascular channels and native connective/lymphoid elements beneath intact non-dysplastic mucosa.",
      },
    ],
  },
  {
    name: "HPV-associated oropharyngeal squamous cell carcinoma (OPSCC)",
    group: "Malignant",
    behavior:
      "Malignant; HPV-associated category with distinct staging and prognosis",
    profile: [
      "Typically affects men (reported M:F ratio 4:1); median age approximately 55–58 years.",
      "Arises in tonsillar-bearing regions, particularly palatine and lingual tonsils, from specialized tonsillar crypt epithelium.",
      "Often presents with painless cervical lymphadenopathy from a small primary tumor; nodal metastases are frequently cystic.",
    ],
    criteria: [
      "Squamous cell carcinoma, usually non-keratinizing.",
      "High-risk HPV positivity demonstrated by p16 IHC alone using a 70% nuclear and cytoplasmic cut-off, or by p16 IHC plus HPV-specific testing.",
    ],
    morphology: [
      "Tumors originate in tonsillar crypts and infiltrate beneath surface epithelium as nests and lobules, often with central necrosis.",
      "A desmoplastic stromal response may be absent; tumor nests are often surrounded by lymphoid stroma.",
      "Typical non-keratinizing tumor cells have high N:C ratios, oval-to-spindled nuclei, syncytial cytoplasm, indistinct cell borders, and little cytoplasmic keratinization.",
      "Morphological variants include keratinizing, papillary, adenosquamous, ciliated adenosquamous, lymphoepithelial, spindle cell/sarcomatoid, and basaloid forms.",
      "A high-grade neuroendocrine component must be recognized separately because it has aggressive behavior.",
    ],
    ihc: [
      "Diffuse, moderate-to-strong nuclear and cytoplasmic p16 staining is a highly reliable surrogate for high-risk HPV in oropharyngeal SCC.",
      "p40/p63 are positive in squamous carcinoma; synaptophysin, chromogranin, and INSM1 help identify a neuroendocrine component when needed.",
    ],
    molecular: [
      "High-risk HPV, predominantly type 16, is transcriptionally active; direct HPV RNA/DNA in situ hybridization or PCR may be used in selected scenarios, including equivocal p16 or morphology–p16 discordance.",
    ],
    differential: [
      {
        name: "HPV-independent OPSCC",
        distinction:
          "Usually keratinizing, with infiltrative angulated nests, distinct cell borders, squamous maturation, keratinization, and desmoplasia; transcriptionally active HPV is absent.",
      },
      {
        name: "Oral cavity SCC",
        distinction:
          "Topography is critical: HPV-associated OPSCC arises from tonsillar crypt epithelium in the oropharynx. Oral cavity SCC is a separate site category and HPV is not an established significant etiological factor.",
      },
      {
        name: "HPV-associated neuroendocrine carcinoma",
        distinction:
          "Neuroendocrine carcinoma may coexist with HPV-associated OPSCC but has aggressive behavior; neuroendocrine markers are positive and squamous markers p63/p40 may be absent or diminished.",
      },
    ],
  },
  {
    name: "HPV-independent oropharyngeal squamous cell carcinoma (OPSCC)",
    group: "Malignant",
    behavior:
      "Malignant; generally less favorable outcome than HPV-associated OPSCC",
    profile: [
      "Patients are slightly older and less often male or White than those with HPV-associated OPSCC.",
      "More common in tonsillar sites than non-tonsillar sites, but represents a larger fraction of non-tonsillar OPSCC; most non-tonsillar tumors arise in soft palate.",
      "Typically presents with pain or sore throat, dysphagia, and/or a neck mass.",
    ],
    criteria: [
      "Squamous cell carcinoma, usually keratinizing.",
      "Negative HPV status; p16 negativity using the 70% nuclear and cytoplasmic cut-off is an acceptable surrogate.",
    ],
    morphology: [
      "Most tumors are keratinizing, with infiltrative angulated nests often surrounded by prominent stromal desmoplasia.",
      "Tumor cells are polygonal with distinct cell borders; squamous maturation, keratinization, and intercellular bridges are usually present.",
      "Surface squamous dysplasia is often present in the background.",
      "Poorly differentiated tumors may require IHC to confirm squamous epithelial origin.",
    ],
    ihc: [
      "p40, p63, and CK5/6 can confirm squamous epithelial origin in poorly differentiated tumors.",
      "p16 is typically not overexpressed but may be positive in a small subset.",
    ],
    molecular: [
      "Transcriptionally active HPV is absent.",
      "TP53 is commonly mutated in HPV-independent disease.",
    ],
    differential: [
      {
        name: "HPV-associated OPSCC",
        distinction:
          "HPV-associated OPSCC is usually non-keratinizing, crypt-centered, and p16 block-positive; HPV-independent OPSCC is usually keratinizing, infiltrative, and p16-negative.",
      },
      {
        name: "Oral cavity SCC",
        distinction:
          "Distinguish by precise anatomic site; the oropharynx includes palatine tonsils, soft palate, base of tongue posterior to circumvallate papillae, and lateral/posterior pharyngeal walls.",
      },
    ],
  },
];

const categories = [
  "All",
  "Non-neoplastic",
  "OPMD / dysplasia",
  "Benign epithelial",
  "Malignant",
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

export default function OralCavityOropharyngealTumorsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [opened, setOpened] = useState<string[]>([
    "Oral squamous cell carcinoma (OSCC)",
    "HPV-associated oropharyngeal squamous cell carcinoma (OPSCC)",
  ]);
  const filtered = useMemo(
    () =>
      items.filter(
        (x) =>
          (cat === "All" || x.group === cat) &&
          [
            x.name,
            x.group,
            x.behavior,
            ...x.profile,
            ...x.criteria,
            ...x.morphology,
            ...x.ihc,
            ...x.molecular,
            ...x.differential.flatMap((d) => [d.name, d.distinction]),
          ]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
      ),
    [q, cat],
  );
  const toggle = (name: string) =>
    setOpened((a) =>
      a.includes(name) ? a.filter((x) => x !== name) : [...a, name],
    );
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
            PathologyGPS / Head and Neck / Oral Cavity and Oropharynx
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Oral Cavity and Oropharyngeal Tumors
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                A morphology-first diagnostic reference organized around
                clinical profile, essential criteria, histopathology,
                immunophenotype, molecular findings, and focused differential
                diagnosis.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5 text-white">
              <div className="text-xs font-semibold uppercase tracking-widest text-teal-300">
                Core rule
              </div>
              <p className="mt-2 text-xl font-semibold leading-7">
                Establish the anatomic site before interpreting HPV status.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Oral cavity SCC and oropharyngeal SCC are distinct site-based
                diagnostic categories. p16 interpretation must follow the
                appropriate context.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">
        <Panel title="Diagnostic GPS: site, morphology, and ancillary studies">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {[
              [
                "Confirm the site",
                "Oral cavity/mobile tongue versus oropharynx; identify tonsillar crypt-bearing tissue.",
              ],
              [
                "Define the process",
                "Reactive/non-neoplastic lesion, OPMD, benign epithelial lesion, or invasive malignancy.",
              ],
              [
                "Assess architecture",
                "Look for preserved lobular architecture, papillary growth, dysplasia, pushing invasion, or destructive infiltration.",
              ],
              [
                "Use targeted tests",
                "Apply p16/HPV testing in the appropriate oropharyngeal setting; use entity-specific IHC and molecular tests where supported.",
              ],
              [
                "Sample adequately",
                "Full-thickness biopsy and adequate stroma are critical for verrucous lesions; sample suspicious invasive and heterogeneous areas.",
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
          <Panel title="HPV interpretation: do not conflate anatomic sites">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                <b>HPVOED:</b> p16 may be strongly and diffusely positive, but
                p16 is not validated as a stand-alone diagnostic marker; confirm
                high-risk HPV in the appropriate morphologic context.
              </p>
              <p>
                <b>Oral cavity SCC:</b> HPV has not been established as a
                significant etiological factor. p16 positivity alone does not
                establish HPV-associated oral SCC.
              </p>
              <p>
                <b>HPV-associated OPSCC:</b> diffuse moderate-to-strong nuclear
                and cytoplasmic p16 staining is a highly reliable surrogate for
                high-risk HPV, using the 70% cut-off described in WHO criteria.
              </p>
              <p>
                <b>HPV-independent OPSCC:</b> transcriptionally active HPV is
                absent; p16 is typically not overexpressed but may be positive
                in a small subset.
              </p>
            </div>
          </Panel>
          <Panel title="High-yield diagnostic findings">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  {[
                    [
                      "Necrotizing sialometaplasia",
                      "Preserved salivary lobules; ductal/acinar squamous metaplasia",
                    ],
                    [
                      "HPVOED",
                      "Dysplasia + karyorrhectic/apoptotic cells + high-risk HPV",
                    ],
                    [
                      "Verrucous carcinoma",
                      "Broad pushing invasion; minimal cytological atypia",
                    ],
                    [
                      "Carcinoma cuniculatum",
                      "Burrowing keratin-filled crypts; neutrophils",
                    ],
                    ["EMCMT", "GFAP expression; RREB1::MRTFB fusion in ~90%"],
                    [
                      "MNTI",
                      "Biphasic melanotic epithelial and neuroblast-like cells",
                    ],
                    [
                      "HPV-associated OPSCC",
                      "Tonsillar crypt-centered SCC; p16 block positivity",
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
                Diagnostic profiles and differential diagnosis
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by entity, site, morphology, immunomarker, HPV type, or
                molecular alteration.
              </p>
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="e.g. p16, HPV16, keratin-filled crypts..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100 md:max-w-sm"
            />
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {categories.map((c) => (
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
                      <p className="mt-1 text-sm text-slate-500">
                        {p.profile[1]}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold text-teal-800">
                      {open ? "Collapse" : "View diagnostic profile"}　
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && (
                    <div className="grid gap-6 border-t border-slate-100 p-5 lg:grid-cols-2">
                      <div>
                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider">
                          Clinical profile
                        </h4>
                        <Bullets items={p.profile} />
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
                          Immunohistochemistry
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
                              {p.differential.map((d, i) => (
                                <tr key={i}>
                                  <td className="w-1/4 py-3 pr-3 align-top font-semibold">
                                    {d.name}
                                  </td>
                                  <td className="py-3 leading-6 text-slate-700">
                                    {d.distinction}
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
                No matching entity.
              </div>
            )}
          </div>
        </section>
        <Panel title="Critical site-based comparison: oral cavity versus oropharynx">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b text-xs uppercase text-slate-500">
                  <th className="py-2 pr-3">Feature</th>
                  <th className="py-2 pr-3">Oral cavity SCC</th>
                  <th className="py-2 pr-3">HPV-associated OPSCC</th>
                  <th className="py-2">HPV-independent OPSCC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  [
                    "Anatomic origin",
                    "Oral mucosal epithelium",
                    "Tonsillar crypt epithelium",
                    "Oropharyngeal mucosa",
                  ],
                  [
                    "Typical morphology",
                    "Usually conventional keratinizing SCC",
                    "Usually non-keratinizing; crypt-centered nests/lobules",
                    "Usually keratinizing, infiltrative nests with desmoplasia",
                  ],
                  [
                    "HPV relationship",
                    "Not a significant established etiological factor",
                    "Transcriptionally active high-risk HPV",
                    "Transcriptionally active HPV absent",
                  ],
                  [
                    "p16 interpretation",
                    "Not a surrogate for HPV association in oral cavity SCC",
                    "Diffuse moderate/strong nuclear and cytoplasmic staining; 70% cut-off",
                    "Typically not overexpressed; occasional positive cases",
                  ],
                ].map((r, i) => (
                  <tr key={i}>
                    {r.map((v, j) => (
                      <td
                        key={j}
                        className={`py-3 pr-3 ${j === 0 ? "font-semibold" : "text-slate-700"}`}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
        <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
          <b className="text-slate-700">Scope:</b> This reference follows the
          WHO material for oral cavity/mobile tongue and oropharyngeal tumors.
          Entities assigned to separate WHO chapters, including oral mucosal
          melanoma and intraoral salivary gland tumors, are not duplicated here.
          Ancillary findings are presented only in the diagnostic context
          described for each entity.
        </footer>
      </div>
    </main>
  );
}
