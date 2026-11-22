import DirectoryPage from "@/components/DirectoryPage";

export default function HematopathologyDirectoryPage() {
  return (
    <DirectoryPage
      title="Hematopathology"
      subtitle="Hematopathology Diagnostic Reference"
      intro="An organized diagnostic directory covering myeloid neoplasms, lymphoid neoplasms, plasma cell disorders, histiocytic and dendritic cell neoplasms, and the genetic syndromes associated with hematolymphoid tumors. Use the search tool to navigate diagnostic entities, morphologic patterns, immunophenotypes, and molecular findings."
      groups={[
        {
          title: "Myeloid Neoplasms",
          items: [
            {
              title: "Acute Myeloid Leukemia",
              href: "/hematopathology/aml",
              description:
                "Classification, defining genetic abnormalities, morphology, immunophenotype, and diagnostic workup.",
            },
            {
              title: "Myeloid Precursors, MPN, and MDS",
              href: "/hematopathology/myeloid-precursors-mpn-mds",
              description:
                "Myeloid precursor lesions, myeloproliferative neoplasms, and myelodysplastic neoplasms.",
            },
          ],
        },
        {
          title: "B-Cell Lymphomas and Lymphoid Neoplasms",
          items: [
            {
              title: "Large B-Cell Lymphomas",
              href: "/hematopathology/lymphoma/large-b-cell-lymphoma",
              description:
                "Large B-cell lymphoma entities and their key morphologic, immunophenotypic, and molecular distinctions.",
            },
            {
              title: "Mature B-Cell Small Lymphocytic Neoplasms",
              href: "/hematopathology/lymphoma/mature-b-cell-small-lymphocytic-neoplasms",
              description:
                "Small B-cell neoplasms with an integrated approach to morphology, flow cytometry, and IHC.",
            },
            {
              title: "Precursor B- and T-Cell Neoplasms",
              href: "/hematopathology/lymphoma/precursor-b-and-t-neoplasms",
              description:
                "B- and T-lymphoblastic leukemia/lymphoma, genetic subgroups, and lineage assignment.",
            },
            {
              title: "Special Lymphomas",
              href: "/hematopathology/lymphoma/special-lymphomas",
              description:
                "Selected virus-associated, immune deficiency/dysregulation-associated, and Hodgkin lymphoid neoplasms.",
            },
            {
              title: "Tumor-Like Lymphocytic Lesions",
              href: "/hematopathology/lymphoma/tumor-like-lymphocytic-lesions",
              description:
                "Reactive and non-neoplastic lymphoid proliferations that may mimic lymphoma.",
            },
          ],
        },
        {
          title: "T-Cell and NK-Cell Neoplasms",
          items: [
            {
              title: "Mature T- and NK-Cell Neoplasms",
              href: "/hematopathology/lymphoma/mature-t-and-nk-cell-neoplasms",
              description:
                "Mature T-cell and NK-cell lymphomas, including anaplastic large cell, nodal T-follicular helper, and cutaneous T-cell entities.",
            },
          ],
        },
        {
          title: "Plasma Cell Neoplasms and Related Disorders",
          items: [
            {
              title: "Plasma Cell Neoplasms",
              href: "/hematopathology/plasma-cell-neoplasms",
              description:
                "Plasma cell myeloma, plasmacytoma, monoclonal gammopathies, paraprotein-associated diseases, and deposition disorders.",
            },
          ],
        },
        {
          title: "Histiocytic, Dendritic, and Stromal Neoplasms",
          items: [
            {
              title: "Histiocytic and Dendritic Cell Neoplasms",
              href: "/hematopathology/histiocytic-dendritic-cell-neoplasms",
              description:
                "Histiocytic and dendritic cell proliferations and neoplasms with lineage-oriented diagnostic panels.",
            },
            {
              title: "Stroma-Derived Neoplasms of Lymphoid Tissues",
              href: "/hematopathology/stroma-derived-neoplasms-lymphoid",
              description:
                "Mesenchymal dendritic cell neoplasms, myofibroblastic tumors, and splenic vascular-stromal tumors.",
            },
          ],
        },
        {
          title: "Genetic Predisposition",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/hematopathology/genetic-tumor-syndromes",
              description:
                "Inherited syndromes and germline predisposition relevant to hematolymphoid neoplasms.",
            },
          ],
        },
      ]}
    />
  );
}
