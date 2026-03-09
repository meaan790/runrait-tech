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
  title: "Runrait | AI-Powered GTM Systems for Startups",
  description:
    "Runrait builds AI-powered go-to-market systems that give your team the output of a full GTM org. Scale revenue with a lean team.",
  openGraph: {
    title: "Runrait | AI-Powered GTM Systems for Startups",
    description:
      "Runrait builds AI-powered go-to-market systems that give your team the output of a full GTM org. Scale revenue with a lean team.",
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
