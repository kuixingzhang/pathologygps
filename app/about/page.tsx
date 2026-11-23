import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] px-5 py-12 text-[#243B5A] md:px-8 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#172B4D] md:text-4xl">
          About PathologyGPS
        </h1>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          <div className="space-y-6 text-base leading-8 text-[#425873] md:text-lg">
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
              <strong className="font-semibold text-[#172B4D]">
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
              Feedback, suggestions, and comments are always welcome.
            </p>

            <div className="border-t border-slate-200 pt-5">
              <p className="font-medium text-[#172B4D]">Contact</p>
              <p className="mt-1">
                Please feel free to contact us at{" "}
                <Link
                  href="mailto:info@pathologygps.com"
                  className="font-semibold text-[#315F91] underline decoration-[#9BAFC8] underline-offset-4 transition hover:text-[#172B4D]"
                >
                  info@pathologygps.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          PathologyGPS · Diagnostic Excellence
        </p>
      </div>
    </main>
  );
}
