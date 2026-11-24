import DirectoryPage from "@/components/DirectoryPage";

export default function BreastDirectoryPage() {
  return (
    <DirectoryPage
      title="Breast"
      subtitle="Breast Pathology"
      intro="Organ-based directory of breast epithelial, fibroepithelial, mesenchymal, nipple, and hereditary topics."
      groups={[
        {
          title: "Epithelial Tumors",
          items: [
            {
              title: "Non-invasive Neoplasia",
              href: "/breast/epithelial/non-invasive-neoplasia",
            },
            {
              title: "Papillary Lesions",
              href: "/breast/epithelial/papillary-lesions",
            },
            { title: "Adenomas", href: "/breast/epithelial/adenomas" },
            {
              title: "Precursor Lesions",
              href: "/breast/epithelial/precursor-lesions",
            },
            {
              title: "Common Invasive Carcinoma",
              href: "/breast/epithelial/common-invasive-carcinoma",
            },
            {
              title: "Rare Invasive Neoplasms",
              href: "/breast/epithelial/rare-invasive-neoplasms",
            },
            {
              title: "Epithelial-Myoepithelial Tumors",
              href: "/breast/epithelial-myoepithelial-tumors",
            },
          ],
        },
        {
          title: "Fibroepithelial and Mesenchymal Tumors",
          items: [
            {
              title: "Fibroepithelial Lesions",
              href: "/breast/fibroepithelial-lesions",
            },
            { title: "Mesenchymal Tumors", href: "/breast/mesenchymal" },
          ],
        },
        {
          title: "Other Breast Topics",
          items: [
            { title: "Nipple Lesions", href: "/breast/nipple-lesions" },
            { title: "Genetics", href: "/breast/genetics" },
          ],
        },
      ]}
    />
  );
}
