import DirectoryPage from "@/components/DirectoryPage";

export default function ThoracicDirectoryPage() {
  return (
    <DirectoryPage
      title="Thoracic Tumors"
      subtitle="Thoracic Pathology"
      intro="An organ-based diagnostic directory covering pulmonary, mediastinal, pleural, pericardial, and cardiac neoplasms, together with hereditary tumor-predisposition syndromes relevant to thoracic pathology."
      groups={[
        {
          title: "Pulmonary Tumors",
          items: [
            {
              title: "Lung Tumors",
              href: "/thoracic/lung-tumors",
              description:
                "Epithelial, neuroendocrine, mesenchymal, and other primary pulmonary neoplasms.",
            },
          ],
        },
        {
          title: "Mediastinal and Thymic Tumors",
          items: [
            {
              title: "Mediastinal Tumors",
              href: "/thoracic/mediastinal-tumors",
              description:
                "Germ cell tumors, lymphomas, and other mediastinal neoplasms.",
            },
            {
              title: "Thymic Tumors",
              href: "/thoracic/thymic-tumors",
              description:
                "Thymomas, thymic carcinomas, and thymic neuroendocrine neoplasms.",
            },
          ],
        },
        {
          title: "Pleural and Pericardial Tumors",
          items: [
            {
              title: "Pleural and Pericardial Tumors",
              href: "/thoracic/pleural-pericardial-tumors",
              description:
                "Mesothelial, mesenchymal, and other tumors involving the pleura and pericardium.",
            },
          ],
        },
        {
          title: "Cardiac Tumors",
          items: [
            {
              title: "Heart Tumors",
              href: "/thoracic/heart-tumors",
              description:
                "Primary benign and malignant cardiac tumors and tumor-like lesions.",
            },
          ],
        },
        {
          title: "Hereditary Tumor-Predisposition Syndromes",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/thoracic/genetic-tumor-syndromes",
              description:
                "Inherited syndromes and germline variants associated with thoracic neoplasia.",
            },
          ],
        },
      ]}
    />
  );
}
