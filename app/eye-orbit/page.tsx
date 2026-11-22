import DirectoryPage from "@/components/DirectoryPage";

export default function EyeAndOrbitDirectoryPage() {
  return (
    <DirectoryPage
      title="Eye and Orbit"
      subtitle="Eye and Orbit"
      intro="An anatomic diagnostic directory covering tumors and tumor-like lesions of the ocular surface, eyelid, globe, lacrimal gland and drainage system, and orbit, together with hereditary tumor predisposition syndromes relevant to ophthalmic pathology."
      groups={[
        {
          title: "Ocular Surface",
          items: [
            {
              title: "Conjunctival and Caruncular Tumors",
              href: "/eye-orbit/conjunctiva-caruncle-tumors",
              description:
                "Epithelial, melanocytic, lymphoid, and other lesions of the conjunctiva and caruncle.",
            },
          ],
        },
        {
          title: "Eyelid",
          items: [
            {
              title: "Eyelid Tumors",
              href: "/eye-orbit/eyelid-tumors",
              description:
                "Cystic, epithelial, adnexal, sebaceous, and melanocytic lesions of the eyelid.",
            },
          ],
        },
        {
          title: "Globe",
          items: [
            {
              title: "Eyeball Tumors",
              href: "/eye-orbit/eyeball-tumors",
              description:
                "Tumors of the uveal tract, retina and neuroepithelium, and optic disc and optic nerve.",
            },
          ],
        },
        {
          title: "Lacrimal Gland and Drainage System",
          items: [
            {
              title: "Lacrimal Gland and Drainage System Tumors",
              href: "/eye-orbit/lacrimal-gland-and-drainage-tumors",
              description:
                "Epithelial and other neoplasms arising in the lacrimal gland and lacrimal drainage apparatus.",
            },
          ],
        },
        {
          title: "Orbit",
          items: [
            {
              title: "Orbital Tumors and Tumor-Like Lesions",
              href: "/eye-orbit/orbital-tumors",
              description:
                "Developmental lesions, vascular malformations, hamartomas, germ cell tumors, and melanocytic tumors of the orbit.",
            },
          ],
        },
        {
          title: "Hereditary and Genetic Conditions",
          items: [
            {
              title: "Genetic Tumor Syndromes",
              href: "/eye-orbit/genetic-tumor-syndromes",
              description:
                "Inherited and mosaic syndromes associated with ocular and orbital tumors or characteristic ophthalmic lesions.",
            },
          ],
        },
      ]}
    />
  );
}
