"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-8 py-20 text-center md:py-[80px]">
        <h2 className="max-w-[900px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {PROBLEM.headline}
        </h2>
        <p className="max-w-[700px] text-lg leading-relaxed text-text-secondary">
          {PROBLEM.body}
        </p>
        <p className="text-2xl font-semibold leading-snug text-text-primary">
          {PROBLEM.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
