import DirectoryPage from "@/components/DirectoryPage";

export default function GenitourinaryDirectoryPage() {
  return (
    <DirectoryPage
      title="Genitourinary Pathology"
      subtitle="Renal, Urinary Tract, Prostate & Male Genital Pathology"
      intro="An organ-based diagnostic directory covering renal tumors, urinary tract neoplasms, prostate, testis and adnexa, seminal vesicle, penis and scrotum, and hereditary genitourinary tumor syndromes."
      groups={[
        {
          title: "Kidney",
          items: [
            {
              title: "Renal Tumors",
              href: "/genitourinary/renal-tumors",
              description:
                "Renal epithelial and other primary renal neoplasms.",
            },
          ],
        },
        {
          title: "Urinary Tract",
          items: [
            {
              title: "Urothelial Tumors",
              href: "/genitourinary/urinary-tract/urothelial-tumors",
              description:
                "Urothelial lesions of the renal pelvis, ureter, bladder, and urethra.",
            },
            {
              title: "Non-Urothelial Neoplasms",
              href: "/genitourinary/urinary-tract/non-urothelial-neoplasms",
              description:
                "Primary and secondary non-urothelial tumors of the urinary tract.",
            },
          ],
        },
        {
          title: "Prostate and Seminal Vesicle",
          items: [
            {
              title: "Prostatic Tumors",
              href: "/genitourinary/prostatic-tumors",
            },
            {
              title: "Seminal Vesicle Tumors",
              href: "/genitourinary/seminal-vesicle-tumors",
            },
          ],
        },
        {
          title: "Testis and Testicular Adnexa",
          items: [
            {
              title: "Testis Tumors",
              href: "/genitourinary/testis-tumors",
            },
            {
              title: "Testicular Adnexa Tumors",
              href: "/genitourinary/testicular-adnexa-tumors",
            },
          ],
        },
        {
          title: "Penis and Scrotum",
          items: [
            {
              title: "Penis and Scrotum Tumors",
              href: "/genitourinary/penis-scrotum-tumors",
            },
          ],
        },
        {
          title: "Cross-Organ Categories",
          items: [
            {
              title: "Genitourinary Genetic Tumor Syndromes",
              href: "/genitourinary/gu-genetic-tumor-syndromes",
              description:
                "Hereditary renal, urinary tract, adrenal, and male genital tumor predisposition syndromes.",
            },
          ],
        },
      ]}
    />
  );
}
