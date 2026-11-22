import DirectoryPage from "@/components/DirectoryPage";

export default function FemaleGenitalDirectoryPage() {
  return (
    <DirectoryPage
      title="Female Genital"
      subtitle="Gynecologic Pathology"
      intro="Organ-based directory covering the uterine corpus, cervix, ovary, fallopian tube, vagina, vulva, and related tumor syndromes."
      groups={[
        {
          title: "Uterus",
          items: [
            {
              title: "Uterine Corpus Epithelial Tumors",
              href: "/female-genital/uterine-corpus/epithelial-tumors",
            },
            {
              title: "Uterine Cervix Epithelial Tumors",
              href: "/female-genital/uterine-cervix/epithelial-tumors",
            },
            {
              title: "Uterine Ligament Tumors",
              href: "/female-genital/uterine-ligaments-tumors",
            },
            {
              title: "Mesenchymal Tumors",
              href: "/female-genital/mesenchymal-tumors",
            },
          ],
        },
        {
          title: "Ovary and Fallopian Tube",
          items: [
            {
              title: "Ovarian Epithelial Tumors",
              href: "/female-genital/ovary/epithelial-tumors",
            },
            {
              title: "Ovarian Non-epithelial Tumors",
              href: "/female-genital/ovary/non-epithelial-tumors",
            },
            {
              title: "Fallopian Tube Epithelial Tumors",
              href: "/female-genital/fallopian-tube/epithelial-tumors",
            },
          ],
        },
        {
          title: "Lower Genital Tract and Other Topics",
          items: [
            {
              title: "Vaginal Epithelial Tumors",
              href: "/female-genital/vagina/epithelial-tumors",
            },
            {
              title: "Vulvar Epithelial Tumors",
              href: "/female-genital/vulva/epithelial-tumors",
            },
            {
              title: "Vulvar Mesenchymal Tumors",
              href: "/female-genital/vulva/mesenchymal-tumors",
            },
            {
              title: "Gestational Trophoblastic Disease",
              href: "/female-genital/gestational-trophoblastic-disease",
            },
            {
              title: "Female Genital Genetic Tumor Syndromes",
              href: "/female-genital/genetic-tumor-syndromes",
            },
          ],
        },
      ]}
    />
  );
}
