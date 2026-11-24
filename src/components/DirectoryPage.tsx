import Link from "next/link";
import PathologySearch from "@/components/PathologySearch";

export type DirectoryItem = {
  title: string;
  href: string;
  description?: string;
};

export type DirectoryGroup = {
  title: string;
  items: DirectoryItem[];
};

type DirectoryPageProps = {
  title: string;
  subtitle: string;
  intro: string;
  groups: DirectoryGroup[];
};

export default function DirectoryPage({
  title,
  subtitle,
  intro,
  groups,
}: DirectoryPageProps) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
            {subtitle}
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-600">{intro}</p>
        </div>

        <div className="mt-8 max-w-3xl">
          <PathologySearch compact />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <section
              key={group.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {group.title.trim() !== "" && (
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
                  <h2 className="text-base font-extrabold tracking-tight text-slate-950">
                    {group.title}
                  </h2>
                </div>
              )}

              <div className="divide-y divide-slate-100">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block px-5 py-2.5 hover:bg-slate-50"
                  >
                    <span className="block text-sm font-medium leading-5 text-slate-700 group-hover:text-teal-800">
                      {item.title}
                    </span>

                    {item.description && (
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-12 border-t border-slate-200 pt-5 text-xs text-slate-400">
          PathologyGPS · Diagnostic Navigation System
        </footer>
      </div>
    </main>
  );
}
