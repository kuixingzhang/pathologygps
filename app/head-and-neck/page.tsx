import DirectoryPage from "@/components/DirectoryPage";

export default function HeadAndNeckDirectoryPage() {
  return (
    <DirectoryPage
      title="Head and Neck"
      subtitle="Head and Neck Pathology"
      intro="An organized diagnostic directory covering tumors and tumor-like lesions of the oral cavity and oropharynx, salivary glands, ear, sinonasal tract, skull base, pharynx, larynx, trachea, and maxillofacial region, with a dedicated section for hereditary tumor syndromes."
      groups={[
        {
          title: "Oral Cavity and Oropharynx",
          items: [
            {
              title: "Oral Cavity and Oropharyngeal Tumors",
              href: "/head-and-neck/oral-cavity-oropharyngeal-tumors",
              description:
                "Mucosal epithelial lesions, odontogenic mimics, and malignant tumors",
            },
          ],
        },
        {
          title: "Salivary Glands",
          items: [
            {
              title: "Salivary Gland Tumors",
              href: "/head-and-neck/salivary-gland-tumors",
              description: "Major and minor salivary gland neoplasms",
            },
          ],
        },
        {
          title: "Ear",
          items: [
            {
              title: "Ear Tumors",
              href: "/head-and-neck/ear-tumors",
              description: "External ear, middle ear, and inner ear lesions",
            },
          ],
        },
        {
          title: "Sinonasal Tract and Skull Base",
          items: [
            {
              title: "Nasal, Paranasal Sinus, and Skull Base Tumors",
              href: "/head-and-neck/nasal-paranasal-skull-base-tumors",
              description: "Sinonasal tract and skull base neoplasms",
            },
          ],
        },
        {
          title: "Pharynx, Larynx, Trachea, and Parapharyngeal Space",
          items: [
            {
              title:
                "Pharyngeal, Laryngeal, Tracheal, and Parapharyngeal Tumors",
              href: "/head-and-neck/pharyngeal-laryngeal-tracheal-parapharyngeal-tumors",
              description:
                "Tumors across the upper aerodigestive tract and parapharyngeal space",
            },
          ],
        },
        {
          title: "Odontogenic and Maxillofacial Region",
          items: [
            {
              title: "Odontogenic and Maxillofacial Tumors",
              href: "/head-and-neck/odontogenic-maxillofacial-tumors",
              description:
                "Jaw cysts, odontogenic tumors, and maxillofacial bone lesions",
            },
          ],
        },
        {
          title: "Cross-Category",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/head-and-neck/genetic-tumor-syndromes",
              description:
                "Hereditary syndromes associated with head and neck tumors",
            },
          ],
        },
      ]}
    />
  );
}
