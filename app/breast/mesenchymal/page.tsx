import Link from "next/link";

const topics = [
  {
    title: "Spindle Cell Lesions",
    href: "/breast/mesenchymal/spindle-cell-lesions",
    description:
      "A practical approach to spindle cell proliferations, including benign mimics, fibromatosis, and malignant lesions.",
  },
  {
    title: "Vascular Tumors",
    href: "/breast/mesenchymal/vascular-tumors",
    description:
      "Diagnostic features and differential diagnosis of benign, intermediate, and malignant vascular lesions of the breast.",
  },
];

export default function MesenchymalTumorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/breast"
          className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200"
        >
          <span aria-hidden="true">←</span> Breast Pathology
        </Link>

        <header className="mt-5 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            PathologyGPS · Breast
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Mesenchymal Tumors
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Navigate mesenchymal and vascular lesions of the breast through
            focused diagnostic topics, with emphasis on morphology,
            immunohistochemistry, and differential diagnosis.
          </p>
        </header>

        <section className="mt-9">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:text-2xl">
            Diagnostic Topics
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-sky-700 dark:text-slate-100 dark:group-hover:text-sky-300">
                    {topic.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-600 dark:group-hover:text-sky-300"
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Educational reference only. Interpret findings in the context of
          clinical history, imaging, and the complete pathologic evaluation.
        </footer>
      </div>
    </main>
  );
}
