import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-7 text-slate-900 md:px-8 md:py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
          About PathologyGPS
        </h1>

        <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm md:px-9 md:py-7">
          <div className="space-y-4 text-base leading-7 text-slate-700">
            <p>
              Pathologic diagnosis plays a central role in the management of
              tumors. It is more than the recognition of cellular and tissue
              patterns; it is a process of diagnostic reasoning and
              decision-making. The goal is to determine where a specific lesion
              belongs within the broad and interconnected landscape of diseases.
            </p>

            <p>
              This process integrates multiple lines of evidence, including
              morphology, immunohistochemistry, and molecular studies, to arrive
              at an accurate and clinically meaningful diagnosis.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">
                PathologyGPS (Pathology Global Positioning System)
              </strong>{" "}
              is envisioned as a diagnostic navigation system built around the
              WHO classification of tumors. Much like a satellite navigation
              system helps identify a location and chart a route, PathologyGPS
              helps pathologists establish the diagnostic position of a lesion,
              navigate the relevant disease classifications, and organize the
              reasoning process along the way.
            </p>

            <p>
              By bringing together diagnostic entities, key morphologic
              features, immunohistochemical profiles, and molecular findings,
              PathologyGPS aims to serve as a practical reference and thinking
              framework for pathologists in their daily practice and continued
              learning.
            </p>

            <p>
              Pathology is a continually evolving field, and diagnostic
              knowledge grows through shared experience and discussion.
              Feedback, suggestions, and comments are always welcome. Please
              contact us at{" "}
              <Link
                href="mailto:info@pathologygps.com"
                className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
              >
                info@pathologygps.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
