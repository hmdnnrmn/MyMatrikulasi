import type { Metadata } from "next";
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
  title: "MyMatrikulasi - The Ultimate Student Productivity App",
  description: "Manage your matriculation schedule, analyze study load, and sync across iOS and Android with MyMatrikulasi. Powered by advanced analytics.",
  keywords: ["matriculation", "student app", "scheduler", "study load", "productivity", "malaysia"],
  openGraph: {
    title: "MyMatrikulasi - Master Your Journey",
    description: "The ultimate productivity companion for students. Intelligent scheduling, study load analysis, and seamless cross-platform sync.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
