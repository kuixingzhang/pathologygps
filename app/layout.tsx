import type { Metadata } from "next";
import "./globals.css";
import RouteNavigation from "@/components/RouteNavigation";

export const metadata: Metadata = {
  title: {
    default: "PathologyGPS",
    template: "%s | PathologyGPS",
  },
  description: "A morphology-first diagnostic navigation system for pathology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RouteNavigation />
        {children}
      </body>
    </html>
  );
}
