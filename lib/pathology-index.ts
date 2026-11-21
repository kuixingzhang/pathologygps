export type PathologyEntry = {
  title: string;
  section: "Breast" | "Bone & Soft Tissue" | "Female Genital";
  href: string;
  keywords: string;
  group: string;
};

export const pathologyIndex: PathologyEntry[] = [
  // Breast
  {
    title: "Epithelial-Myoepithelial Tumors",
    section: "Breast",
    href: "/breast/epithelial-myoepithelial-tumors",
    group: "Breast",
    keywords: "biphasic adenomyoepithelial adenomyoepithelioma",
  },
  {
    title: "Adenomas",
    section: "Breast",
    href: "/breast/epithelial/adenomas",
    group: "Epithelial Tumors",
    keywords: "tubular lactating ductal adenoma",
  },
  {
    title: "Common Invasive Carcinoma",
    section: "Breast",
    href: "/breast/epithelial/common-invasive-carcinoma",
    group: "Epithelial Tumors",
    keywords: "invasive breast carcinoma carcinoma NST ductal lobular",
  },
  {
    title: "Non-invasive Neoplasia",
    section: "Breast",
    href: "/breast/epithelial/non-invasive-neoplasia",
    group: "Epithelial Tumors",
    keywords: "DCIS ductal carcinoma in situ LCIS lobular carcinoma in situ",
  },
  {
    title: "Papillary Lesions",
    section: "Breast",
    href: "/breast/epithelial/papillary-lesions",
    group: "Epithelial Tumors",
    keywords: "papilloma papillary carcinoma",
  },
  {
    title: "Precursor Lesions",
    section: "Breast",
    href: "/breast/epithelial/precursor-lesions",
    group: "Epithelial Tumors",
    keywords: "precursor atypia hyperplasia",
  },
  {
    title: "Rare Invasive Neoplasms",
    section: "Breast",
    href: "/breast/epithelial/rare-invasive-neoplasms",
    group: "Epithelial Tumors",
    keywords: "metaplastic secretory adenoid cystic mucinous carcinoma",
  },
  {
    title: "Fibroepithelial Lesions",
    section: "Breast",
    href: "/breast/fibroepithelial-lesions",
    group: "Breast",
    keywords: "fibroadenoma phyllodes tumor",
  },
  {
    title: "Genetics",
    section: "Breast",
    href: "/breast/genetics",
    group: "Breast",
    keywords: "hereditary breast cancer BRCA1 BRCA2 PALB2 TP53",
  },
  {
    title: "Mesenchymal Tumors",
    section: "Breast",
    href: "/breast/mesenchymal",
    group: "Mesenchymal Tumors",
    keywords: "stromal mesenchymal sarcoma",
  },
  {
    title: "Spindle Cell Lesions",
    section: "Breast",
    href: "/breast/mesenchymal/spindle-cell-lesions",
    group: "Mesenchymal Tumors",
    keywords: "spindle cell lesion fibromatosis scar",
  },
  {
    title: "Vascular Tumors",
    section: "Breast",
    href: "/breast/mesenchymal/vascular-tumors",
    group: "Mesenchymal Tumors",
    keywords: "hemangioma angiosarcoma atypical vascular lesion",
  },
  {
    title: "Nipple Lesions",
    section: "Breast",
    href: "/breast/nipple-lesions",
    group: "Breast",
    keywords: "nipple adenoma Paget disease",
  },

  // Bone and soft tissue
  {
    title: "Bone Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/bone/bone-tumors",
    group: "Bone Tumors",
    keywords: "osteogenic osteoma osteosarcoma giant cell tumor chordoma bone",
  },
  {
    title: "Chondrogenic Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/bone/chondrogenic-tumors",
    group: "Bone Tumors",
    keywords: "cartilage chondroma chondrosarcoma enchondroma",
  },
  {
    title: "Genetic Tumor Syndromes",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/genetic-tumor-syndromes",
    group: "Genetic Tumor Syndromes",
    keywords: "TP53 NF1 GNAS EXT1 EXT2 IDH1 IDH2 Paget",
  },
  {
    title: "Adipocytic Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/adipocytic-tumors",
    group: "Soft Tissue Tumors",
    keywords: "lipoma liposarcoma adipose",
  },
  {
    title: "Chondro-osseous Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/chondro-osseous-tumors",
    group: "Soft Tissue Tumors",
    keywords: "cartilage bone chondroid osseous",
  },
  {
    title: "Fibroblastic and Myofibroblastic Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/fibroblastic-and-myofibroblastic-tumors",
    group: "Soft Tissue Tumors",
    keywords: "fibroblastic myofibroblastic desmoid",
  },
  {
    title: "Fibrohistiocytic and Synovial Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/fibrohistiocytic-and-synovial-tumors",
    group: "Soft Tissue Tumors",
    keywords: "fibrohistiocytic synovial sarcoma",
  },
  {
    title: "Gastrointestinal Stromal Tumor (GIST)",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/gist",
    group: "Soft Tissue Tumors",
    keywords: "GIST gastrointestinal stromal KIT DOG1",
  },
  {
    title: "Pericytic Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/pericytic-tumors",
    group: "Soft Tissue Tumors",
    keywords: "glomus myopericytoma angioleiomyoma",
  },
  {
    title: "Peripheral Nerve Sheath Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/peripheral-nerve-sheath-tumors",
    group: "Soft Tissue Tumors",
    keywords: "schwannoma neurofibroma MPNST nerve",
  },
  {
    title: "Round Cell Sarcomas",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/round-cell-sarcomas",
    group: "Soft Tissue Tumors",
    keywords: "Ewing CIC BCOR NFATC2 sarcoma",
  },
  {
    title: "Smooth and Skeletal Muscle Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/smooth-skeletal-muscle-tumors",
    group: "Soft Tissue Tumors",
    keywords: "leiomyoma leiomyosarcoma rhabdomyosarcoma",
  },
  {
    title: "Tumors of Uncertain Differentiation",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/tumors-of-uncertain-differentiation",
    group: "Soft Tissue Tumors",
    keywords: "uncertain differentiation sarcoma",
  },
  {
    title: "Vascular Tumors",
    section: "Bone & Soft Tissue",
    href: "/bone-and-soft-tissue/soft-tissue-tumors/vascular-tumors",
    group: "Soft Tissue Tumors",
    keywords: "hemangioma angiosarcoma vascular",
  },

  // Female genital
  {
    title: "Fallopian Tube Epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/fallopian-tube/epithelial-tumors",
    group: "Fallopian Tube",
    keywords: "fallopian tube serous carcinoma STIC",
  },
  {
    title: "Genetic Tumor Syndromes",
    section: "Female Genital",
    href: "/female-genital/genetic-tumor-syndromes",
    group: "Genetic Tumor Syndromes",
    keywords: "hereditary ovarian endometrial cancer BRCA Lynch",
  },
  {
    title: "Gestational Trophoblastic Disease",
    section: "Female Genital",
    href: "/female-genital/gestational-trophoblastic-disease",
    group: "Gestational Trophoblastic Disease",
    keywords: "molar pregnancy choriocarcinoma trophoblastic",
  },
  {
    title: "Mesenchymal Tumors",
    section: "Female Genital",
    href: "/female-genital/mesenchymal-tumors",
    group: "Mesenchymal Tumors",
    keywords: "uterine sarcoma stromal smooth muscle",
  },
  {
    title: "Ovarian Epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/ovary/epithelial-tumors",
    group: "Ovary",
    keywords: "serous mucinous endometrioid clear cell carcinoma",
  },
  {
    title: "Ovarian Non-epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/ovary/non-epithelial-tumors",
    group: "Ovary",
    keywords: "germ cell sex cord stromal granulosa dysgerminoma",
  },
  {
    title: "Uterine Cervix Epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/uterine-cervix/epithelial-tumors",
    group: "Uterine Cervix",
    keywords: "cervix HPV squamous adenocarcinoma",
  },
  {
    title: "Uterine Corpus Epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/uterine-corpus/epithelial-tumors",
    group: "Uterine Corpus",
    keywords: "endometrial carcinoma EIN hyperplasia",
  },
  {
    title: "Uterine Ligament Tumors",
    section: "Female Genital",
    href: "/female-genital/uterine-ligaments-tumors",
    group: "Uterine Ligaments",
    keywords: "broad ligament round ligament tumor",
  },
  {
    title: "Vaginal Epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/vagina/epithelial-tumors",
    group: "Vagina",
    keywords: "vaginal squamous carcinoma adenocarcinoma",
  },
  {
    title: "Vulvar Epithelial Tumors",
    section: "Female Genital",
    href: "/female-genital/vulva/epithelial-tumors",
    group: "Vulva",
    keywords: "vulvar squamous carcinoma HPV differentiated VIN",
  },
  {
    title: "Vulvar Mesenchymal Tumors",
    section: "Female Genital",
    href: "/female-genital/vulva/mesenchymal-tumors",
    group: "Vulva",
    keywords: "vulvar mesenchymal angiomyofibroblastoma aggressive angiomyxoma",
  },
];

export function searchPathology(query: string, limit = 12) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return pathologyIndex
    .map((entry) => {
      const haystack =
        `${entry.title} ${entry.section} ${entry.group} ${entry.keywords} ${entry.href}`.toLowerCase();
      const score = terms.reduce(
        (sum, term) => sum + (haystack.includes(term) ? 1 : 0),
        0,
      );
      return { ...entry, score };
    })
    .filter((entry) => entry.score === terms.length)
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, limit);
}
