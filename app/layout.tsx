import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { MobileNav, SideBar } from "./nav";

const display = DM_Serif_Display({
  variable: "--font-dm-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fontVars = [display.variable, sans.variable].join(" ");

export const metadata: Metadata = {
  title: "AI Views Survey",
  description:
    "Publicly accessible survey of AI views among experts and the public.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(fontVars, "h-full bg-matisse-50")}>
      <body className="font-dm-sans h-full bg-matisse-50 md:grid md:grid-cols-[250px_minmax(0,_1fr)]">
        <SideBar className="h-full hidden md:block w-[250px] fixed" />
        <MobileNav className="fixed w-full md:hidden" />
        <main className="p-3 pt-24 md:p-6 w-full md:col-span-1 md:col-start-2">
          <div className="max-w-xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
