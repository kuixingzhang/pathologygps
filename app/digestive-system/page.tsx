import DirectoryPage from "@/components/DirectoryPage";

export default function DigestiveSystemDirectoryPage() {
  return (
    <DirectoryPage
      title="Digestive System"
      subtitle="Gastrointestinal, Hepatobiliary & Pancreatic Pathology"
      intro="Organ-based directory of gastrointestinal, hepatobiliary, and pancreatic tumors, with dedicated sections for mesenchymal tumors, neuroendocrine neoplasms, and hereditary tumor syndromes."
      groups={[
        {
          title: "Gastrointestinal Tract",
          items: [
            {
              title: "Esophageal Tumors",
              href: "/digestive-system/gi/esophageal-tumors",
            },
            {
              title: "Gastric Tumors",
              href: "/digestive-system/gi/gastric-tumors",
            },
            {
              title: "Small Intestine Tumors",
              href: "/digestive-system/gi/small-intestine-tumors",
            },
            {
              title: "Colorectal Tumors",
              href: "/digestive-system/gi/colorectal-tumors",
            },
            {
              title: "Appendiceal Tumors",
              href: "/digestive-system/gi/appendiceal-tumors",
            },
            {
              title: "Anal Canal Tumors",
              href: "/digestive-system/gi/anal-canal-tumors",
            },
          ],
        },
        {
          title: "Hepatobiliary System",
          items: [
            { title: "Liver Tumors", href: "/digestive-system/liver-tumors" },
            {
              title: "Gallbladder and Extrahepatic Bile Duct Tumors",
              href: "/digestive-system/gallbladder-extrahepatic-bile-duct-tumors",
            },
          ],
        },
        {
          title: "Pancreas",
          items: [
            {
              title: "Pancreatic Lesions",
              href: "/digestive-system/pancreatic-lesions",
            },
          ],
        },
        {
          title: "Cross-Organ Tumor Categories",
          items: [
            {
              title: "Mesenchymal Tumors",
              href: "/digestive-system/mesenchymal-tumors",
            },
            {
              title: "Neuroendocrine Neoplasms",
              href: "/digestive-system/neuroendocrine-neoplasms",
            },
            {
              title: "Genetic Tumor Syndromes",
              href: "/digestive-system/genetic-tumor-syndromes",
            },
          ],
        },
      ]}
    />
  );
}
