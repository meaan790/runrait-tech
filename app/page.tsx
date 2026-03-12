import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { TypicalOptions } from "@/components/sections/TypicalOptions";
import { WhatRunraitDoes } from "@/components/sections/WhatRunraitDoes";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatGetsBuilt } from "@/components/sections/WhatGetsBuilt";
import { Comparison } from "@/components/sections/Comparison";
import { WhyItWorks } from "@/components/sections/WhyItWorks";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <TypicalOptions />
        <WhatRunraitDoes />
        <HowItWorks />
        <WhatGetsBuilt />
        <Comparison />
        <WhyItWorks />
        <WhoItsFor />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
