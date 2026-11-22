import DirectoryPage from "@/components/DirectoryPage";

export default function SoftTissueAndBoneDirectoryPage() {
  return (
    <DirectoryPage
      title="Soft Tissue and Bone"
      subtitle="Musculoskeletal Pathology"
      intro="Organ-based directory for bone tumors, soft tissue tumors, and associated genetic tumor syndromes."
      groups={[
        {
          title: "Bone and Cartilage Tumors",
          items: [
            {
              title: "Bone Tumors",
              href: "/soft-tissue-and-bone/bone-and-cartilage-tumors/bone-tumors",
            },
            {
              title: "Chondrogenic Tumors",
              href: "/soft-tissue-and-bone/bone-and-cartilage-tumors/chondrogenic-tumors",
            },
          ],
        },
        {
          title: "Soft Tissue Tumors",
          items: [
            {
              title: "Adipocytic Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/adipocytic-tumors",
            },
            {
              title: "Chondro-osseous Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/chondro-osseous-tumors",
            },
            {
              title: "Fibroblastic and Myofibroblastic Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/fibroblastic-and-myofibroblastic-tumors",
            },
            {
              title: "Fibrohistiocytic and Synovial Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/fibrohistiocytic-and-synovial-tumors",
            },
            {
              title: "Gastrointestinal Stromal Tumor (GIST)",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/gist",
            },
            {
              title: "Pericytic Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/pericytic-tumors",
            },
            {
              title: "Peripheral Nerve Sheath Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/peripheral-nerve-sheath-tumors",
            },
            {
              title: "Round Cell Sarcomas",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/round-cell-sarcomas",
            },
            {
              title: "Smooth and Skeletal Muscle Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/smooth-skeletal-muscle-tumors",
            },
            {
              title: "Tumors of Uncertain Differentiation",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/tumors-of-uncertain-differentiation",
            },
            {
              title: "Vascular Tumors",
              href: "/soft-tissue-and-bone/soft-tissue-tumors/vascular-tumors",
            },
          ],
        },
        {
          title: "Genetic Tumor Syndromes",
          items: [
            {
              title: "Bone and Soft Tissue Genetic Tumor Syndromes",
              href: "/soft-tissue-and-bone/genetic-tumor-syndromes",
            },
          ],
        },
      ]}
    />
  );
}
