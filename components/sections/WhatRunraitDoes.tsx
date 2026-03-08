"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FlowVisual } from "@/components/ui/FlowVisual";
import { WHAT_RUNRAIT_DOES } from "@/lib/constants";

export function WhatRunraitDoes() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-10 py-20 text-center md:py-[80px]">
        <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {WHAT_RUNRAIT_DOES.headline}
        </h2>

        <p className="max-w-[720px] text-lg leading-relaxed text-text-secondary">
          {WHAT_RUNRAIT_DOES.body}
        </p>

        <p className="max-w-[720px] text-lg leading-relaxed text-text-secondary">
          {WHAT_RUNRAIT_DOES.body2}
        </p>

        <FlowVisual />
      </div>
    </SectionWrapper>
  );
}
