import DirectoryPage from "@/components/DirectoryPage";

export default function PediatricPathologyDirectoryPage() {
  return (
    <DirectoryPage
      title="Pediatric Pathology"
      subtitle="Pediatric Tumors"
      intro="A WHO classification–based learning and practice directory for pediatric tumors and related lesions. Browse by organ system or search diagnoses, morphology, immunohistochemistry, molecular markers, and genes."
      groups={[
        {
          title: "Organ System Tumors",
          items: [
            {
              title: "Breast Tumors",
              href: "/pediatric-pathology/breast-tumors",
            },
            {
              title: "Central Nervous System Tumors",
              href: "/pediatric-pathology/cns-tumors",
            },
            {
              title: "Digestive System Tumors",
              href: "/pediatric-pathology/digestive-system-tumors",
            },
            {
              title: "Endocrine Tumors",
              href: "/pediatric-pathology/endocrine-tumors",
            },
            {
              title: "Eye Tumors",
              href: "/pediatric-pathology/eye-tumors",
            },
            {
              title: "Female Genital Tract Tumors",
              href: "/pediatric-pathology/female-genital-tract-tumors",
            },
            {
              title: "Head and Neck Tumors",
              href: "/pediatric-pathology/head-and-neck-tumors",
            },
            {
              title: "Hematolymphoid Disorders",
              href: "/pediatric-pathology/hematolymphoid-disorders",
            },
            {
              title: "Renal and Male Genital Tumors",
              href: "/pediatric-pathology/renal-and-male-genital-tumors",
            },
            {
              title: "Skin Tumors",
              href: "/pediatric-pathology/skin-tumors",
            },
            {
              title: "Soft Tissue and Bone Tumors",
              href: "/pediatric-pathology/soft-tissue-bone-tumors",
            },
            {
              title: "Thoracic Tumors",
              href: "/pediatric-pathology/thoracic-tumors",
            },
          ],
        },
        {
          title: "Special Tumor Groups",
          items: [
            {
              title: "Germ Cell Tumors",
              href: "/pediatric-pathology/germ-cell-tumors",
            },
            {
              title: "Peripheral Neuroblastic Tumors",
              href: "/pediatric-pathology/peripheral-neuroblastic-tumors",
            },
            {
              title: "Genetic Tumor Syndromes",
              href: "/pediatric-pathology/genetic-tumor-syndromes",
            },
          ],
        },
      ]}
    />
  );
}
