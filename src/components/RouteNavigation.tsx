"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getParentDirectory(
  pathname: string,
): { href: string; label: string } | null {
  if (pathname === "/") return null;

  if (pathname.startsWith("/breast/")) {
    return { href: "/breast", label: "Back to Breast" };
  }

  if (pathname.startsWith("/bone-and-soft-tissue/")) {
    return {
      href: "/bone-and-soft-tissue",
      label: "Back to Bone & Soft Tissue",
    };
  }

  if (pathname.startsWith("/female-genital/")) {
    return { href: "/female-genital", label: "Back to Female Genital" };
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 1) {
    return { href: `/${segments[0]}`, label: "Back to Directory" };
  }

  return null;
}

export default function RouteNavigation() {
  const pathname = usePathname();
  const parent = getParentDirectory(pathname);

  // Do not display navigation on homepage or specialty directory pages.
  if (
    pathname === "/" ||
    pathname === "/breast" ||
    pathname === "/bone-and-soft-tissue" ||
    pathname === "/female-genital" ||
    pathname === "/gi-liver-pancreas" ||
    pathname === "/skin" ||
    pathname === "/genitourinary"
  ) {
    return null;
  }

  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-2 px-5 py-3 md:px-8">
        {parent && (
          <Link
            href={parent.href}
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
            {parent.label}
          </Link>
        )}
      </div>
    </div>
  );
}
