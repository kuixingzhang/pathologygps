import DirectoryPage from "@/components/DirectoryPage";

export default function DermatopathologyPage() {
  return (
    <DirectoryPage
      title="Dermatopathology"
      subtitle="Skin Pathology"
      intro="An organ-based directory of cutaneous tumors and related lesions, organized by lineage, anatomic site, and biologic behavior."
      groups={[
        {
          title: "Cutaneous Tumors",
          items: [
            {
              title: "Cutaneous Hematopoietic and Lymphoid Tumors",
              href: "/skin/cutaneous-hematopoietic-lymphoid-tumors",
            },
            {
              title: "Cutaneous Soft Tissue Tumors",
              href: "/skin/cutaneous-soft-tissue-tumors",
            },
            {
              title: "Epidermal Tumors",
              href: "/skin/epidermal-tumors",
            },
            {
              title: "Melanocytic Tumors",
              href: "/skin/melanocytic-tumors",
            },
            {
              title: "Nail Bed Epithelial Tumors",
              href: "/skin/nail-bed-epithelial-tumors",
            },
            {
              title: "Skin Adnexal Tumors",
              href: "/skin/adnexal-tumors",
            },
          ],
        },
        {
          title: "Special Categories",
          items: [
            {
              title: "Cutaneous Genetic Tumor Syndromes",
              href: "/skin/cutaneous-genetic-tumor-syndromes",
            },
          ],
        },
      ]}
    />
  );
}
