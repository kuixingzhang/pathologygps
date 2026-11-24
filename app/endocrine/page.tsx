import DirectoryPage from "@/components/DirectoryPage";

export default function EndocrineDirectoryPage() {
  return (
    <DirectoryPage
      title="Endocrine Tumors"
      subtitle="Endocrine and Neuroendocrine Pathology"
      intro="An organ-based diagnostic directory of endocrine tumors and related lesions, with dedicated sections for adrenal, pituitary, parathyroid, and thyroid pathology, as well as hereditary tumor-predisposition syndromes."
      groups={[
        {
          title: "",
          items: [
            {
              title: "Adrenal Gland Tumors",
              href: "/endocrine/adrenal-gland-tumors",
              description:
                "Adrenocortical, medullary, and other primary adrenal neoplasms and lesions.",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              title: "Pituitary Tumors",
              href: "/endocrine/pituitary-tumors",
              description:
                "Pituitary neuroendocrine tumors and other sellar and pituitary lesions.",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              title: "Parathyroid Tumors",
              href: "/endocrine/parathyroid-tumors",
              description:
                "Parathyroid hyperplasia, adenoma, atypical tumors, and carcinoma.",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              title: "Thyroid Tumors",
              href: "/endocrine/thyroid-tumors",
              description:
                "Follicular cell-derived, C-cell-derived, and other thyroid neoplasms.",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/endocrine/genetic-tumor-syndromes",
              description:
                "Inherited syndromes associated with endocrine lesions and tumors.",
            },
          ],
        },
      ]}
    />
  );
}
