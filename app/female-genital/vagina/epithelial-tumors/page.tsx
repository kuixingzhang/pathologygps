"use client";

import { useMemo, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "sil", label: "Squamous intraepithelial lesions" },
  { id: "hpv-scc", label: "HPV-associated SCC" },
  { id: "ind-scc", label: "HPV-independent SCC" },
  { id: "undetermined", label: "SCC, HPV status undetermined" },
  { id: "villous", label: "Villous / tubulovillous adenoma" },
  { id: "intestinal", label: "Intestinal-type adenocarcinoma" },
  { id: "skene", label: "Skene gland adenocarcinoma" },
  { id: "mullerian", label: "Müllerian papilloma" },
  { id: "mixed", label: "Mixed tumor" },
  { id: "fibroepithelial", label: "Fibroepithelial stromal polyp" },
  { id: "workflow", label: "Diagnostic approach" },
];

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h3 className="mb-3 text-base font-semibold text-slate-900">{title}</h3>
    <div className="text-sm leading-6 text-slate-700">{children}</div>
  </section>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="mr-1 inline-flex rounded-md bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800">
    {children}
  </span>
);

const DataTable = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => (
  <div className="my-4 overflow-x-auto rounded-lg border border-slate-200">
    <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
      <thead className="bg-slate-50">
        <tr>
          {headers.map((h) => (
            <th key={h} className="px-3 py-2.5 font-semibold text-slate-700">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 bg-white">
        {rows.map((r, i) => (
          <tr key={i} className="align-top">
            {r.map((c, j) => (
              <td key={j} className="px-3 py-2.5 leading-5 text-slate-700">
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function VaginalEpithelialTumorsPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("overview");
  const [expanded, setExpanded] = useState<string[]>([
    "overview",
    "sil",
    "hpv-scc",
  ]);
  const filtered = useMemo(
    () =>
      sections.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  const toggle = (id: string) =>
    setExpanded((old) =>
      old.includes(id) ? old.filter((x) => x !== id) : [...old, id],
    );
  const jump = (id: string) => {
    setActive(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
            <span>PathologyGPS</span>
            <span className="text-slate-300">/</span>
            <span>Female Genital Tract</span>
            <span className="text-slate-300">/</span>
            <span>Vagina</span>
          </div>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-teal-700">
                Diagnostic reference · Epithelial tumors
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Vaginal Epithelial Tumors
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                A morphology-first guide to vaginal squamous lesions,
                carcinomas, glandular neoplasms, and selected miscellaneous
                epithelial or stromal lesions, with practical
                immunohistochemical workups and differential diagnoses.
              </p>
            </div>
            <div className="rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-600">
              <div className="font-semibold text-slate-800">
                Diagnostic principle
              </div>
              <div>
                Establish the site of origin before assigning a primary vaginal
                diagnosis.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-8">
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 lg:sticky lg:top-5">
          <label
            htmlFor="topic-search"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Find a topic
          </label>
          <input
            id="topic-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search this page..."
            className="mb-4 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
          />
          <nav className="space-y-1">
            {filtered.map((s) => (
              <button
                key={s.id}
                onClick={() => jump(s.id)}
                className={`block w-full rounded-md px-3 py-2 text-left text-sm ${active === s.id ? "bg-teal-50 font-semibold text-teal-800" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
              >
                {s.label}
              </button>
            ))}
          </nav>
          <p className="mt-4 border-t border-slate-100 pt-3 text-xs leading-5 text-slate-500">
            Use the navigation to move between entities. This page is an
            educational diagnostic aid and does not replace clinicopathological
            correlation.
          </p>
        </aside>

        <div className="min-w-0 space-y-6">
          <section id="overview" className="scroll-mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-950">
                Classification and key principles
              </h2>
              <Tag>Start here</Tag>
            </div>
            <Card title="Primary vaginal tumor: a diagnosis of exclusion">
              <p>
                Primary vaginal malignancies are rare. Squamous cell carcinoma
                (SCC) is the most common primary vaginal cancer. Most vaginal
                SCCs are HPV-associated, but HPV-independent SCCs also occur.
                Primary vaginal adenocarcinomas are uncommon; most
                adenocarcinomas involving the vagina represent direct extension
                or metastasis from another site.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  Before diagnosing primary vaginal SCC, exclude a concurrent
                  cervical or vulvar SCC and review the history of either
                  malignancy. A cervical or vulvar SCC within the preceding 5
                  years is generally considered to exclude a new primary vaginal
                  SCC.
                </li>
                <li>
                  For glandular tumors, exclude a cervical, endometrial,
                  colorectal, urinary tract, or other primary as appropriate to
                  the morphology and location.
                </li>
                <li>
                  HPV-associated squamous lesions may be multifocal across the
                  cervix, vagina, vulva, perineum, and anal/perianal region.
                </li>
                <li>
                  The WHO source recognizes vaginal HPV-independent CIN as a
                  category, but does not yet establish a corresponding
                  HPV-independent precursor lesion for HPV-independent vaginal
                  SCC.
                </li>
              </ul>
            </Card>
            <Card title="Entities covered in this page">
              <DataTable
                headers={["Group", "Entities"]}
                rows={[
                  [
                    "Squamous cell tumors and precursors",
                    "Squamous intraepithelial lesion (LSIL / HSIL); HPV-associated SCC; HPV-independent SCC; SCC, HPV status undetermined",
                  ],
                  [
                    "Glandular tumors",
                    "Villous / tubulovillous adenoma; intestinal-type adenocarcinoma; adenocarcinoma of Skene gland origin",
                  ],
                  [
                    "Miscellaneous tumors",
                    "Müllerian papilloma; mixed tumor of the vagina; fibroepithelial stromal polyp",
                  ],
                ]}
              />
              <p className="text-xs text-slate-500">
                Other entities, including clear cell carcinoma, gastric-type
                adenocarcinoma, endometrioid carcinoma, mesonephric
                adenocarcinoma, carcinosarcoma, adenosquamous carcinoma,
                adenosarcoma, sarcomas, and germ cell tumors, are addressed in
                other relevant chapters in the source classification and are not
                expanded here.
              </p>
            </Card>
          </section>

          <section id="sil" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Squamous intraepithelial lesions (VaIN)
            </h2>
            <Card title="Definition, distribution, and clinical context">
              <p>
                Vaginal squamous intraepithelial lesions (SILs) are HPV-related
                proliferations with abnormal nuclear features and disordered
                maturation that remain above the basement membrane. They most
                often involve the upper third of the vagina and the fornices and
                may be multifocal.
              </p>
              <p className="mt-2">
                Most patients are asymptomatic; lesions are frequently detected
                during colposcopy performed for cervical HPV-associated disease.
                More than 80% of cases have a concurrent or prior history of
                cervical SIL or SCC. Smoking, immunosuppression, HIV infection,
                and a history of cervical SIL are recognized risk factors.
              </p>
            </Card>
            <Card title="Two-tier histologic classification">
              <DataTable
                headers={[
                  "LAST / WHO category",
                  "Legacy terminology",
                  "Interpretation",
                ]}
                rows={[
                  [
                    "LSIL",
                    "VaIN 1; condyloma (when applicable)",
                    "Usually productive, transient HPV infection; commonly regresses.",
                  ],
                  [
                    "HSIL",
                    "VaIN 2 and VaIN 3",
                    "Transforming infection, almost always associated with high-risk HPV.",
                  ],
                ]}
              />
              <p>
                Histologic interpretation and p16 use follow the same principles
                as cervical SIL. The supplied vaginal source refers the reader
                to the cervical SIL section for the detailed morphologic and p16
                criteria; it does not reproduce those criteria in full.
                Accordingly, this page does not invent a separate
                vaginal-specific threshold.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  LSIL reflects productive HPV infection and may show
                  koilocytotic change with maturation retained in much of the
                  epithelium.
                </li>
                <li>
                  HSIL shows greater cytologic atypia and impaired maturation,
                  with atypical cells extending into a substantial portion or
                  the full thickness of the epithelium, depending on grade.
                </li>
                <li>
                  Use block-type p16 staining to support HSIL in morphologically
                  equivocal cases, in accordance with LAST principles; interpret
                  p16 in the context of H&amp;E morphology.
                </li>
                <li>
                  Do not diagnose invasion unless atypical squamous cells breach
                  the basement membrane and infiltrate stroma.
                </li>
              </ul>
            </Card>
            <Card title="Ancillary studies and clinical behavior">
              <p>
                HPV16 is the most prevalent genotype in both LSIL and HSIL; its
                relative contribution increases with lesion grade. Other
                commonly reported types include HPV33, HPV52, and HPV18.
                Molecular HPV testing is not considered clinically relevant for
                routine diagnosis in the source classification.
              </p>
              <p className="mt-2">
                Estimated progression of HSIL (VaIN 2/3) to invasion is
                approximately 2–6%, lower than in the cervix; risk is greatest
                for VaIN 3. LSIL has a substantially lower progression risk.
                Recurrence is more frequent in immunocompromised patients.
              </p>
            </Card>
          </section>

          <section id="hpv-scc" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Squamous cell carcinoma, HPV-associated
            </h2>
            <Card title="Morphology and diagnostic setting">
              <p>
                HPV-associated vaginal SCC is an invasive or exophytic malignant
                epithelial tumor showing pure squamous differentiation and
                attributable to persistent high-risk HPV infection. It most
                often arises in the upper third of the vagina, frequently along
                the posterior wall.
              </p>
              <p className="mt-2">
                Gross appearances include ulcerated plaques, polypoid masses,
                and stricturing lesions. Patients may present with vaginal
                bleeding or discharge, postcoital bleeding, urinary symptoms,
                pelvic pain, or a sensation of a vaginal mass.
              </p>
              <p className="mt-2">
                Histology is essentially the same as HPV-associated cervical
                SCC. Morphology alone cannot reliably distinguish HPV-associated
                from HPV-independent vaginal SCC. The source classification does
                not recommend grading primary vaginal SCC.
              </p>
            </Card>
            <Card title="IHC and HPV testing">
              <DataTable
                headers={["Test", "Typical result", "Diagnostic use / caveat"]}
                rows={[
                  [
                    "p16",
                    "Block-type (diffuse, strong nuclear and cytoplasmic staining)",
                    "Surrogate marker supporting transforming high-risk HPV infection.",
                  ],
                  [
                    "p53",
                    "Usually wild-type pattern",
                    "Supports the typical HPV-associated profile but is not independently diagnostic.",
                  ],
                  [
                    "High-risk HPV ISH / PCR",
                    "Positive",
                    "Desirable confirmation, particularly if p16 is equivocal or discordant with morphology.",
                  ],
                ]}
              />
              <p>
                Essential criteria include invasive carcinoma with squamous
                differentiation, no qualifying prior or concurrent
                cervical/vulvar SCC, and block-type p16 staining as a surrogate
                for HPV association (with occasional exceptions). Positive HPV
                testing is desirable when p16 is negative, non-block, or
                equivocal.
              </p>
            </Card>
            <Card title="Differential diagnosis">
              <DataTable
                headers={["Differential", "How to distinguish"]}
                rows={[
                  [
                    "HPV-independent vaginal SCC",
                    "Cannot be separated reliably by H&amp;E alone. HPV-independent tumors are more often keratinizing and commonly show non-block/negative p16 and mutation-type p53; confirm with HPV testing when needed.",
                  ],
                  [
                    "Cervical or vulvar SCC involving vagina",
                    "Use clinical history, imaging, examination, tumor epicenter, and prior pathology. A cervical/vulvar SCC within 5 years generally argues against a new primary vaginal SCC.",
                  ],
                  [
                    "HSIL / VaIN",
                    "HSIL is intraepithelial and lacks destructive stromal invasion. Carefully assess the epithelial-stromal interface, especially in tangential or fragmented biopsies.",
                  ],
                  [
                    "Adenosquamous carcinoma",
                    "Look for a bona fide malignant glandular component rather than entrapped benign glands or squamous maturation. This entity is not detailed in the supplied vaginal chapter.",
                  ],
                ]}
              />
            </Card>
            <Card title="Prognosis">
              <p>
                Outcome is driven by stage, tumor size, and patient factors.
                High-risk HPV positivity is reported as a favorable prognostic
                indicator; HPV16-positive tumors have been associated with
                improved survival. The source reports an approximate 5-year
                overall survival of 50% across stages.
              </p>
            </Card>
          </section>

          <section id="ind-scc" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Squamous cell carcinoma, HPV-independent
            </h2>
            <Card title="Morphology and biology">
              <p>
                HPV-independent vaginal SCC is an invasive or exophytic
                malignant epithelial tumor with pure squamous differentiation
                arising through mechanisms not associated with HPV. It occurs
                predominantly in postmenopausal patients (reported median age
                approximately 73 years), often in the upper third and posterior
                vaginal wall.
              </p>
              <p className="mt-2">
                Compared with HPV-associated SCC, the keratinizing pattern is
                more frequent. However, there is substantial morphologic
                overlap, and histology alone cannot establish HPV independence.
                No established HPV-independent precursor lesion is currently
                recognized in the vaginal classification.
              </p>
            </Card>
            <Card title="IHC and molecular workup">
              <DataTable
                headers={["Marker / test", "Common pattern", "Interpretation"]}
                rows={[
                  [
                    "p16",
                    "Negative or non-block staining",
                    "Does not support transforming high-risk HPV infection.",
                  ],
                  [
                    "p53",
                    "Mutation-type pattern is common",
                    "May support an HPV-independent pathway; not all cases are p53-abnormal.",
                  ],
                  [
                    "HPV testing",
                    "Negative",
                    "PCR or ISH may establish absence of HPV; ensure assay coverage and adequate tumor.",
                  ],
                  [
                    "TP53",
                    "Mutations reported in a subset",
                    "Molecular support in selected cases; not required for routine diagnosis.",
                  ],
                ]}
              />
              <p>
                Essential criteria are invasive squamous carcinoma, exclusion of
                a qualifying cervical/vulvar primary, and negative/non-block p16
                and/or negative HPV molecular testing. The source notes worse
                overall and progression-free survival compared with
                HPV-associated vaginal SCC in available studies, while evidence
                remains limited because of rarity.
              </p>
            </Card>
            <Card title="Practical distinction from HPV-associated SCC">
              <p>
                Do not use keratinization, age, or p53 alone to assign HPV
                status. Integrate p16 and HPV testing. If p16 is non-block and
                HPV testing is unavailable or inconclusive, use the
                HPV-status-undetermined category rather than overcalling HPV
                independence.
              </p>
            </Card>
          </section>

          <section id="undetermined" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Squamous cell carcinoma, HPV status undetermined
            </h2>
            <Card title="When to use this designation">
              <p>
                Use this category for invasive vaginal SCC when HPV status
                cannot be determined because ancillary testing is unavailable,
                infeasible, or inconclusive. The source emphasizes that most
                such tumors are still likely to be HPV-associated, although at a
                lower rate than cervical SCC.
              </p>
              <p className="mt-2">
                Report the morphologic diagnosis and explicitly state that HPV
                status is undetermined. Do not infer HPV independence from a
                non-keratinizing or keratinizing appearance alone.
              </p>
            </Card>
          </section>

          <section id="villous" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Villous adenoma and tubulovillous adenoma
            </h2>
            <Card title="Morphology">
              <p>
                These are exceptionally rare benign primary vaginal glandular
                tumors resembling colorectal adenomas. Most reported lesions
                occur along the lower posterior vaginal wall. They are usually
                polypoid and may present with a mass or abnormal bleeding.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  Villiform and/or tubular architecture lined by intestinal-type
                  columnar epithelium.
                </li>
                <li>Scattered goblet cells may be present.</li>
                <li>
                  Nuclei are elongated, hyperchromatic, and pseudostratified;
                  atypia ranges from mild to severe.
                </li>
                <li>
                  There is no stromal invasion. Severe cytologic atypia and/or
                  complex architecture should be classified as adenoma with
                  high-grade dysplasia using criteria analogous to colorectal
                  adenomas.
                </li>
              </ul>
            </Card>
            <Card title="IHC and differential diagnosis">
              <DataTable
                headers={["Marker", "Typical result", "Use"]}
                rows={[
                  [
                    "CK20",
                    "Usually positive",
                    "Supports intestinal differentiation.",
                  ],
                  [
                    "CDX2",
                    "Usually positive",
                    "Supports intestinal phenotype.",
                  ],
                  ["CK7", "Variable", "Not sufficiently discriminatory alone."],
                  [
                    "ER",
                    "Usually negative",
                    "Consistent with intestinal rather than Müllerian differentiation.",
                  ],
                ]}
              />
              <p>
                <strong>Key differential:</strong> intestinal-type
                adenocarcinoma. The decisive distinction is absence versus
                presence of destructive stromal invasion. Also consider
                secondary involvement by colorectal adenoma/carcinoma and benign
                intestinal metaplasia; correlate with lesion epicenter and
                clinical history.
              </p>
              <p className="mt-2">
                Recurrence has been reported, and a case of intestinal-type
                adenocarcinoma developing after an adenoma with high-grade
                dysplasia has been described. Complete sampling is important
                when high-grade dysplasia or an associated invasive focus is
                suspected.
              </p>
            </Card>
          </section>

          <section id="intestinal" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Adenocarcinoma, intestinal type
            </h2>
            <Card title="Definition and location">
              <p>
                Intestinal-type adenocarcinoma is a rare primary adenocarcinoma
                of the distal female genital tract with intestinal
                differentiation. Vaginal primaries usually arise in the lower
                third, particularly the posterior wall near the vulvar junction.
                The vulvar counterpart typically occurs in the vestibule close
                to the vagina.
              </p>
              <p className="mt-2">
                Before diagnosing a primary vaginal tumor, exclude direct
                extension or metastasis from a colorectal or other
                gastrointestinal primary. Some tumors are associated with an
                intestinal-type villous/tubulovillous adenoma or
                benign-appearing intestinal epithelium, supporting an
                adenoma–carcinoma sequence.
              </p>
            </Card>
            <Card title="Histologic features">
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Variable tubular/glandular, tubulovillous, and solid
                  architecture.
                </li>
                <li>
                  Columnar cells with intracytoplasmic mucin, often including
                  goblet cells.
                </li>
                <li>
                  Signet-ring cells, extracellular mucin, and dirty necrosis may
                  occur.
                </li>
                <li>
                  Occasional tumors contain prominent neuroendocrine cells.
                </li>
                <li>
                  An associated intestinal-type adenoma or benign
                  intestinal-type epithelium may be identified.
                </li>
              </ul>
            </Card>
            <Card title="IHC profile and differential diagnosis">
              <DataTable
                headers={["Marker", "Typical profile", "Interpretation"]}
                rows={[
                  ["CDX2", "Positive", "Intestinal differentiation."],
                  ["CK20", "Positive", "Intestinal phenotype."],
                  [
                    "SATB2",
                    "Positive",
                    "Supports lower gastrointestinal/intestinal differentiation; not proof of colorectal origin.",
                  ],
                  [
                    "CEA",
                    "Positive",
                    "Often expressed in intestinal-type adenocarcinoma.",
                  ],
                  [
                    "CK7",
                    "Variable",
                    "Variable expression; do not use alone to determine origin.",
                  ],
                  [
                    "ER / PR",
                    "Negative",
                    "Against conventional Müllerian hormone receptor-positive adenocarcinoma.",
                  ],
                  [
                    "PAX8 / SOX17",
                    "Negative",
                    "Usually absent in this tumor type.",
                  ],
                  [
                    "p53",
                    "Wild-type or mutation-type",
                    "Variable; neither pattern excludes the diagnosis.",
                  ],
                ]}
              />
              <p>
                <strong>
                  Most important differential: colorectal adenocarcinoma
                  involving vagina.
                </strong>{" "}
                The morphologic and immunophenotypic overlap can be substantial.
                No single intestinal marker proves a vaginal primary. Establish
                the anatomic epicenter and exclude a gastrointestinal primary
                clinically and radiologically. An adjacent vaginal
                intestinal-type adenoma or metaplastic epithelium supports, but
                does not by itself prove, local origin.
              </p>
              <p className="mt-2">
                Other considerations include metastatic appendiceal or other GI
                adenocarcinoma, and HPV-associated cervical adenocarcinoma with
                intestinal differentiation. The latter should be evaluated with
                HPV/p16 testing and cervical site correlation.
              </p>
            </Card>
            <Card title="Molecular findings and behavior">
              <p>
                Reported recurrent alterations include TP53 and KRAS variants.
                The source describes molecular clustering with vulvar
                intestinal-type adenocarcinoma and colorectal adenocarcinoma,
                distinct from HPV-associated intestinal-type and HPV-independent
                gastric-type cervical adenocarcinomas. Long-term outcome data
                are sparse; late recurrences and disease-related deaths have
                been reported.
              </p>
            </Card>
          </section>

          <section id="skene" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Adenocarcinoma of Skene gland origin
            </h2>
            <Card title="Anatomic clue and morphology">
              <p>
                This extremely rare adenocarcinoma arises from Skene
                (periurethral) glands, the female homologues of the prostate.
                Typical sites include the periurethral/paraurethral region,
                distal urethra, anterior vaginal wall, and bladder neck.
                Patients may present with a mass; hematuria or incontinence is
                less common. Serum PSA may be elevated.
              </p>
              <p className="mt-2">
                Morphology resembles prostatic acinar adenocarcinoma:
                well-formed to poorly formed glands lined by cuboidal or
                columnar cells with pale or eosinophilic cytoplasm, round
                nuclei, and prominent nucleoli. Cribriform growth is common;
                individual glands, solid areas, or single-file growth may occur.
                Residual benign Skene glands or a focus resembling high-grade
                prostatic intraepithelial neoplasia may be present.
              </p>
            </Card>
            <Card title="IHC profile">
              <DataTable
                headers={["Marker", "Reported pattern", "Practical point"]}
                rows={[
                  [
                    "PSA",
                    "Generally positive",
                    "Supports prostatic/Skene gland differentiation.",
                  ],
                  [
                    "PAP / PSAP",
                    "Generally positive",
                    "Useful in combination with other prostatic markers.",
                  ],
                  [
                    "NKX3.1",
                    "Generally positive",
                    "Nuclear prostatic lineage marker.",
                  ],
                  [
                    "P501S / prostein",
                    "Generally positive",
                    "Additional support for prostatic differentiation.",
                  ],
                  [
                    "AMACR",
                    "Positive in some cases",
                    "Variable; not required.",
                  ],
                  [
                    "CK7",
                    "Generally negative",
                    "A supportive pattern, not a stand-alone criterion.",
                  ],
                  ["CK20", "Positive in some cases", "Variable."],
                  ["AR", "May be positive", "Can provide additional support."],
                ]}
              />
              <p>
                <strong>Differential diagnosis:</strong> primary urethral
                adenocarcinoma, metastatic prostatic adenocarcinoma (in the
                unusual context of a patient with relevant history), and other
                periurethral gland tumors. The diagnosis requires an appropriate
                anatomic epicenter and a prostatic immunophenotype; no single
                marker is sufficient in isolation.
              </p>
            </Card>
            <Card title="Behavior">
              <p>
                Experience is limited. Inguinal or pelvic lymph node metastases
                have been documented, although the small number of reported
                patients with follow-up did not show recurrence or
                disease-related mortality after treatment.
              </p>
            </Card>
          </section>

          <section id="mullerian" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Müllerian papilloma
            </h2>
            <Card title="Clinical setting and morphology">
              <p>
                Müllerian papilloma is a benign papillary Müllerian epithelial
                tumor of the vagina or cervix. Vaginal lesions most often occur
                in the upper vagina and predominantly affect prepubertal girls,
                although adolescents and young adults have been reported.
                Vaginal bleeding or discharge is a common presentation.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Exophytic mucosal or, less commonly, intramural lesion.</li>
                <li>
                  Slender fibrovascular cores lined by bland cuboidal or
                  columnar epithelium.
                </li>
                <li>Hobnail morphology may be present.</li>
                <li>
                  Nuclei are uniform with fine chromatin; atypia is absent or
                  minimal.
                </li>
                <li>
                  Mitoses are absent or sparse; squamous metaplasia may occur.
                </li>
              </ul>
              <p className="mt-2">
                The supplied source does not define a specific diagnostic IHC
                panel or molecular signature. Diagnosis is primarily
                morphologic.
              </p>
            </Card>
            <Card title="Differential diagnosis and behavior">
              <p>
                Consider clear cell carcinoma, particularly when hobnail cells
                are conspicuous. Significant nuclear atypia, mitotic activity,
                complex destructive growth, and infiltrative invasion argue
                against benign Müllerian papilloma. Clear cell carcinoma should
                be evaluated with an appropriate panel (for example, Napsin A
                and HNF1β in the relevant differential), but the source does not
                provide a vaginal-specific marker profile.
              </p>
              <p className="mt-2">
                Outcome is generally favorable. Recurrence, including multiple
                recurrences, has been reported; one case of clear cell carcinoma
                after multiple recurrences has been described. Clinical
                follow-up and complete assessment of recurrent lesions are
                appropriate.
              </p>
            </Card>
          </section>

          <section id="mixed" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Mixed tumor of the vagina
            </h2>
            <Card title="Morphology">
              <p>
                Mixed tumor is a benign neoplasm composed of spindled and
                epithelial (glandular and/or squamous) elements. It is usually a
                well-circumscribed solid mass in the posterior distal vaginal
                wall near the hymen.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  Cellular spindle-cell component often predominates and may
                  grow in fascicles, cords, nests, or reticular arrays.
                </li>
                <li>
                  Epithelial elements are sharply demarcated and may be mucinous
                  glands, mature squamous epithelium, or both.
                </li>
                <li>
                  Eosinophilic hyaline material or globules may be present in
                  myxomatous or collagenous stroma.
                </li>
                <li>
                  Nuclear atypia is minimal; mitotic activity is usually low.
                </li>
              </ul>
            </Card>
            <Card title="IHC profile and differential">
              <p>
                Reported coexpression includes AE1/AE3, CK7, EMA, CD10, SMA,
                desmin, h-caldesmon, WT1, calretinin, BCL2, and CD34. The
                spindle cells may strongly express epithelial markers. S100 and
                SOX10 are typically negative.
              </p>
              <p className="mt-2">
                <strong>Diagnostic pitfall:</strong> epithelial marker
                expression by the spindle component does not by itself indicate
                carcinoma or carcinosarcoma. The diagnosis rests on a
                well-circumscribed lesion with morphologically benign epithelial
                and spindle-cell components, minimal atypia, and generally low
                mitotic activity.
              </p>
              <p className="mt-2">
                Differential diagnoses include aggressive angiomyxoma,
                angiomyofibroblastoma, cellular angiofibroma, leiomyoma, and
                malignant mixed Müllerian tumor/carcinosarcoma. The source does
                not provide a definitive comparative IHC algorithm for these
                entities; use morphology, circumscription, vascular pattern,
                cytologic atypia, mitoses, and site.
              </p>
            </Card>
            <Card title="Behavior">
              <p>
                These are benign lesions. Local recurrence may occur when
                incompletely excised.
              </p>
            </Card>
          </section>

          <section id="fibroepithelial" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Fibroepithelial stromal polyp
            </h2>
            <Card title="Clinical and histologic features">
              <p>
                Fibroepithelial stromal polyp is a benign polypoid mesenchymal
                proliferation of the lower female genital tract, most often
                vaginal and less often vulvar or cervical. It commonly occurs in
                reproductive-aged women but may arise at any age, including
                during pregnancy and after menopause. Pregnancy and occasional
                tamoxifen exposure suggest hormonal influence.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>
                  Polypoid or pedunculated lesion lined by squamous epithelium.
                </li>
                <li>
                  Hypocellular, poorly circumscribed subepithelial stroma
                  directly abuts the surface epithelium, which may be thickened
                  or ulcerated.
                </li>
                <li>
                  Spindled to stellate stromal cells with delicate cytoplasmic
                  processes in collagenous to edematous stroma.
                </li>
                <li>
                  Multinucleated stromal cells are characteristic, often
                  subepithelial or perivascular, with rosette-like nuclear
                  arrangement and abundant eosinophilic to amphophilic
                  cytoplasm.
                </li>
                <li>
                  Dilated capillaries and medium-sized arterioles may be
                  present; larger central vessels occur in some cases.
                </li>
                <li>Mitoses are usually rare or absent.</li>
              </ul>
            </Card>
            <Card title="IHC and the pseudosarcomatous pitfall">
              <DataTable
                headers={["Marker", "Typical finding", "Interpretation"]}
                rows={[
                  [
                    "Desmin",
                    "Consistently positive",
                    "Supports lower genital tract stromal differentiation.",
                  ],
                  [
                    "ER / PR",
                    "Consistently positive",
                    "Supports hormone-responsive stromal phenotype.",
                  ],
                  ["CD34", "Sometimes positive", "Variable; not required."],
                  ["SMA", "Rarely positive", "Usually not a dominant marker."],
                  [
                    "Myogenin / MYOD1",
                    "Occasional nuclear positivity",
                    "Coexpression of both has not been reported in the source.",
                  ],
                  [
                    "HMGA2",
                    "Nuclear positivity in a subset, especially large lesions",
                    "Can be supportive but is not universal.",
                  ],
                  [
                    "RB1",
                    "Loss reported in some cases",
                    "Potential molecular association; not a universal finding.",
                  ],
                ]}
              />
              <p>
                Pregnancy-associated lesions may be hypercellular and show
                marked nuclear pleomorphism and increased mitotic activity,
                including atypical mitoses. These changes can mimic sarcoma.
                Interpret atypia and mitotic activity in the context of the
                characteristic architecture, multinucleated stromal cells,
                clinical setting, and IHC profile; do not equate atypia alone
                with malignancy.
              </p>
              <p className="mt-2">
                <strong>Differential diagnosis:</strong> embryonal
                rhabdomyosarcoma (especially botryoid pattern),
                leiomyoma/leiomyosarcoma, angiomyofibroblastoma, aggressive
                angiomyxoma, and other lower genital tract stromal tumors. The
                source does not provide a full differential-marker matrix.
                Myogenin/MYOD1 should be interpreted carefully because
                occasional positive nuclei have been reported in fibroepithelial
                stromal polyps.
              </p>
            </Card>
            <Card title="Behavior and management context">
              <p>
                Fibroepithelial stromal polyps are benign but may recur locally.
                Complete local excision is the treatment of choice for primary
                and recurrent lesions. Spontaneous postpartum regression can
                occur. The relationship between incomplete excision and
                recurrence is not fully established in the source.
              </p>
            </Card>
          </section>

          <section id="workflow" className="scroll-mt-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Diagnostic approach
            </h2>
            <Card title="Stepwise workflow for a vaginal mass or biopsy">
              <ol className="list-decimal space-y-3 pl-5">
                <li>
                  <strong>Confirm the anatomic epicenter.</strong> Determine
                  whether the lesion is truly vaginal, cervical,
                  vulvar/vestibular, urethral/periurethral, or represents direct
                  extension from an adjacent organ. Review prior cervical/vulvar
                  neoplasia, especially within 5 years.
                </li>
                <li>
                  <strong>Classify the dominant morphology.</strong> Separate
                  squamous intraepithelial lesion, invasive squamous carcinoma,
                  gland-forming intestinal-type lesion, prostatic-type
                  periurethral adenocarcinoma, papillary Müllerian lesion, mixed
                  epithelial-spindle lesion, and stromal polyp.
                </li>
                <li>
                  <strong>For squamous lesions, establish invasion.</strong>{" "}
                  Assess the basement membrane and stromal interface. If
                  invasive SCC is present, use p16 and/or high-risk HPV testing
                  to classify HPV association. Use HPV-status-undetermined when
                  testing is unavailable or inconclusive.
                </li>
                <li>
                  <strong>
                    For intestinal-type glands, exclude a GI primary.
                  </strong>{" "}
                  CDX2, CK20, SATB2, and CEA support intestinal differentiation
                  but cannot distinguish a local primary from colorectal
                  metastasis. Correlate with imaging, endoscopy, history, tumor
                  epicenter, and any adjacent intestinal-type adenoma.
                </li>
                <li>
                  <strong>
                    For anterior vaginal/periurethral tumors, consider Skene
                    gland origin.
                  </strong>{" "}
                  A prostatic-type morphology plus PSA, PAP, NKX3.1, and P501S
                  expression supports this rare diagnosis.
                </li>
                <li>
                  <strong>
                    For papillary lesions, assess cytologic grade and invasion.
                  </strong>{" "}
                  Bland Müllerian papilloma has slender fibrovascular cores and
                  minimal atypia; significant atypia, mitoses, or destructive
                  invasion requires exclusion of carcinoma, including clear cell
                  carcinoma.
                </li>
                <li>
                  <strong>
                    For spindle-cell or polypoid lesions, evaluate architecture
                    and cytology.
                  </strong>{" "}
                  Recognize the characteristic multinucleated stromal cells of
                  fibroepithelial stromal polyp and the biphasic
                  epithelial/spindle composition of mixed tumor. Be cautious
                  about pregnancy-related atypia and mitotic activity.
                </li>
                <li>
                  <strong>Sample adequately.</strong> Extensively sample
                  heterogeneous, ulcerated, recurrent, or high-grade lesions to
                  exclude focal invasion or a malignant component. Document
                  margins and the relationship to adjacent structures where
                  relevant.
                </li>
              </ol>
            </Card>
            <Card title="Quick IHC selection guide">
              <DataTable
                headers={[
                  "Morphologic question",
                  "Useful initial studies",
                  "Interpretation",
                ]}
                rows={[
                  [
                    "HPV-associated vs HPV-independent SCC",
                    "p16, p53; high-risk HPV ISH/PCR if needed",
                    "Block p16 supports HPV association; non-block/negative p16 with negative HPV testing supports HPV independence. p53 mutation-type is common but not universal in HPV-independent SCC.",
                  ],
                  [
                    "Intestinal differentiation",
                    "CDX2, CK20, SATB2, CEA; CK7, PAX8, ER/PR as context",
                    "Confirms phenotype, not site of origin. Exclude GI primary.",
                  ],
                  [
                    "Skene gland / prostatic-type adenocarcinoma",
                    "PSA, PAP, NKX3.1, P501S; consider AR and AMACR",
                    "A concordant prostatic marker panel plus periurethral epicenter is supportive.",
                  ],
                  [
                    "Müllerian papilloma vs clear cell carcinoma",
                    "Morphology first; consider Napsin A and HNF1β in the differential",
                    "Source does not define a specific vaginal papilloma IHC panel. Assess atypia, mitoses, and invasion.",
                  ],
                  [
                    "Fibroepithelial stromal polyp",
                    "Desmin, ER, PR; optional CD34, SMA, HMGA2, RB1 as indicated",
                    "Characteristic stromal phenotype; no single marker substitutes for morphology.",
                  ],
                  [
                    "Mixed tumor",
                    "Broad epithelial and mesenchymal panel guided by morphology",
                    "Coexpression may occur in spindle cells; benign biphasic morphology is central.",
                  ],
                ]}
              />
            </Card>
            <Card title="Reporting checklist">
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Specify the exact entity and, for vaginal SCC, HPV association
                  when established.
                </li>
                <li>
                  State the basis for primary vaginal origin and document
                  exclusion of a cervical/vulvar or distant primary when
                  clinically relevant.
                </li>
                <li>
                  For SIL, use the two-tier LSIL/HSIL terminology and identify
                  invasion if present.
                </li>
                <li>
                  For adenocarcinoma, describe the differentiation pattern and
                  summarize the IHC profile without implying that intestinal
                  markers establish a vaginal primary.
                </li>
                <li>
                  For unusual benign lesions, document atypia, mitotic activity,
                  necrosis, invasion, and completeness of sampling as
                  appropriate.
                </li>
                <li>
                  Correlate with clinical, radiologic, and endoscopic findings
                  for tumors with a plausible secondary source.
                </li>
              </ul>
            </Card>
          </section>

          <footer className="border-t border-slate-200 py-5 text-xs leading-5 text-slate-500">
            <p>
              <strong>Source note:</strong> This page is structured from the
              user-provided WHO Classification text on vaginal tumors. Where the
              source refers to the cervical chapter for detailed criteria or
              does not provide a specific IHC/differential algorithm, the
              limitation is stated rather than silently supplemented. Clinical
              correlation and current institutional protocols remain essential.
            </p>
            <p className="mt-2">
              PathologyGPS · Diagnostic Excellence. Clinical Insight.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
