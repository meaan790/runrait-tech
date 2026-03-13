import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://meaan790.github.io/runrait-tech";
const description =
  "Runrait builds AI agents and GTM systems for seed-to-Series A startups in New Zealand and Australia. Give your founding team the output of a full go-to-market org — without the headcount.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Runrait | AI-Powered GTM Systems for Startups",
  description,
  keywords: [
    "AI GTM",
    "go to market system",
    "AI agents",
    "GTM for startups",
    "revenue operations",
    "startup GTM New Zealand",
    "startup GTM Australia",
    "fractional GTM",
    "AI-powered sales",
    "seed to Series A",
    "GTM operating system",
    "Runrait",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Runrait | AI-Powered GTM Systems for Startups",
    description,
    url: siteUrl,
    siteName: "Runrait",
    type: "website",
    locale: "en_NZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
