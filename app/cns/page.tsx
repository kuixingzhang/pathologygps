import DirectoryPage from "@/components/DirectoryPage";

export default function CNSDirectoryPage() {
  return (
    <DirectoryPage
      title="Central Nervous System"
      subtitle="CNS Pathology"
      intro="An organized diagnostic directory of central nervous system tumors, including glial, neuronal, embryonal, meningeal, mesenchymal, cranial, paraspinal, sellar, and genetically associated neoplasms."
      groups={[
        {
          title: "Glial, Neuronal and Embryonal Tumors",
          items: [
            {
              title: "Gliomas, Glioneuronal and Neuronal Tumors",
              href: "/cns/gliomas-glioneuronal-neuronal-tumors",
              description:
                "Diffuse gliomas, circumscribed astrocytic tumors, glioneuronal tumors, and neuronal tumors.",
            },
            {
              title: "Choroid Plexus, Embryonal and Pineal Tumors",
              href: "/cns/choroid-plexus-embryonal-pineal-tumors",
              description:
                "Choroid plexus tumors, embryonal neoplasms, and pineal region tumors.",
            },
          ],
        },
        {
          title: "Meningeal, Mesenchymal and Regional Tumors",
          items: [
            {
              title: "Meningioma and Mesenchymal Tumors",
              href: "/cns/meningioma-mesenchymal-tumors",
              description:
                "Meningioma classification and grading, chordoma, and other CNS mesenchymal tumors.",
            },
            {
              title: "Cranial, Paraspinal and Sellar Tumors",
              href: "/cns/cranial-paraspinal-sellar-tumors",
              description:
                "Tumors arising in cranial nerves, paraspinal structures, and the sellar region.",
            },
          ],
        },
        {
          title: "Hereditary and Genetic Tumor Predisposition",
          items: [
            {
              title: "CNS Genetic Tumor Syndromes",
              href: "/cns/cns-genetic-tumor-syndromes",
              description:
                "Inherited tumor predisposition syndromes and their characteristic CNS manifestations.",
            },
          ],
        },
      ]}
    />
  );
}
