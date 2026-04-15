import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PatenteGo — Coach Patente B",
    template: "%s · PatenteGo",
  },
  description:
    "Coach intelligente per la patente B italiana 2026, basato sul metodo R.O.T.T.A. (Riconosci, Origina, Trappola, Trasferisci, Automatizza) e spaced repetition FSRS.",
  applicationName: "PatenteGo",
  keywords: [
    "patente B",
    "quiz patente",
    "esame patente",
    "R.O.T.T.A.",
    "FSRS",
    "patente 2026",
  ],
  authors: [{ name: "PatenteGo" }],
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
