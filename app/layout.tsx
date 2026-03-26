import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-MPLWHMBF";

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

const siteUrl = "https://runrait.ai";
const description =
  "Runrait builds AI agents and GTM operating systems that give founders the output of a full go-to-market team. Without the headcount. From discovery through execution.";
const ogDescription =
  "The GTM team you'd hire. Built for you as an operating system. AI agents and systems that give your team the output of a full go-to-market org.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Runrait | AI-Powered GTM Operating Systems for Startups",
  description,
  keywords: [
    "GTM operating system",
    "AI GTM system",
    "go-to-market system startups",
    "AI agents GTM",
    "GTM operating system for startups",
    "revenue engine startups",
    "GTM engineer",
    "GTM engineer alternative",
    "fractional GTM",
    "startup GTM strategy New Zealand",
    "startup GTM Australia",
    "B2B SaaS marketing NZ",
    "AI-powered go-to-market",
    "go-to-market strategy early stage",
    "seed to Series A",
    "revenue operations",
    "Runrait",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Runrait | AI-Powered GTM Operating Systems for Startups",
    description: ogDescription,
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
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
