import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en" className={fontVars}>
      <body className="font-dm-sans">{children}</body>
    </html>
  );
}
