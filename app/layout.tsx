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

export const metadata: Metadata = {
  title: "Runrait — The revenue engine your startup is missing",
  description:
    "Runrait builds complete go-to-market systems for early-stage startups. Strategy, infrastructure, and AI agents, all connected as one system.",
  openGraph: {
    title: "Runrait — The revenue engine your startup is missing",
    description:
      "Runrait builds complete go-to-market systems for early-stage startups. Strategy, infrastructure, and AI agents, all connected as one system.",
    url: "https://runrait.ai",
    siteName: "Runrait",
    type: "website",
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
