"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getDirectoryHref(pathname: string): string | null {
  if (pathname === "/" || pathname === "/about") return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return null;

  return `/${segments[0]}`;
}

export default function RouteNavigation() {
  const pathname = usePathname();
  const directoryHref = getDirectoryHref(pathname);

  return (
    <header className="border-b border-[#263D5D] bg-[#172B4D] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2.5 md:px-8">
        <Link
          href="/"
          aria-label="Home"
          className="inline-flex items-center text-xs font-semibold text-white transition hover:text-[#D5DFEC] md:text-sm"
        >
          <span>Home</span>
        </Link>

        <div className="flex items-center gap-2">
          {directoryHref && (
            <Link
              href={directoryHref}
              className="inline-flex items-center rounded-md border border-white/35 px-3 py-1.5 text-xs font-semibold text-white transition hover:border-white hover:bg-white/10 md:text-sm"
            >
              <span aria-hidden="true" className="mr-1.5">
                ←
              </span>
              Back to Directory
            </Link>
          )}
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
            className="inline-flex items-center text-xs font-semibold text-white transition hover:text-[#D5DFEC] md:text-sm"
          >
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
