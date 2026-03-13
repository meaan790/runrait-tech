import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { TypicalOptions } from "@/components/sections/TypicalOptions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatGetsBuilt } from "@/components/sections/WhatGetsBuilt";
import { Comparison } from "@/components/sections/Comparison";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { FAQ_ITEMS } from "@/lib/constants";

const siteUrl = "https://meaan790.github.io/runrait-tech";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Runrait",
  url: siteUrl,
  description:
    "Runrait builds AI-powered GTM operating systems for early-stage startups. AI agents and systems that give founders the output of a full go-to-market team.",
  email: "hello@runrait.ai",
  areaServed: [
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Country", name: "Australia" },
  ],
  knowsAbout: [
    "Go-to-market strategy",
    "GTM operating systems",
    "AI agents for sales and marketing",
    "Revenue operations",
    "Startup growth systems",
    "Pipeline architecture",
    "GTM engineering",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@runrait.ai",
    contactType: "sales",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "GTM Operating System",
  serviceType: "Go-to-Market Systems",
  provider: {
    "@type": "Organization",
    name: "Runrait",
  },
  areaServed: [
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Country", name: "Australia" },
  ],
  description:
    "AI-powered go-to-market operating systems for early-stage startups. Includes AI agents for autonomous GTM execution and AI-powered systems for messaging, pipeline, analytics, and enablement.",
  audience: {
    "@type": "Audience",
    audienceType: "Seed-to-Series-A startup founders",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <TypicalOptions />
        <HowItWorks />
        <WhatGetsBuilt />
        <Comparison />
        <WhoItsFor />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
