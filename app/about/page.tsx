import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12 text-slate-900 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
          About
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          About PathologyGPS
        </h1>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-lg leading-8 text-slate-700">
            PathologyGPS is a WHO classification–based learning and practice
            system for pathology.
          </p>
        </div>
      </div>
    </main>
  );
}
