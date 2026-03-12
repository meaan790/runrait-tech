"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FlowVisual } from "@/components/ui/FlowVisual";
import { WHAT_RUNRAIT_DOES } from "@/lib/constants";

export function WhatRunraitDoes() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-10 py-20 text-center md:py-[80px]">
        <h2 className="max-w-[800px] whitespace-pre-line text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {WHAT_RUNRAIT_DOES.headline}
        </h2>

        <div className="flex max-w-[720px] flex-col gap-6">
          <p className="text-lg leading-relaxed text-text-secondary">
            <span className="font-bold text-accent">Runrait</span>{" "}
            {WHAT_RUNRAIT_DOES.body.replace("Runrait ", "")}
          </p>
          <p className="whitespace-pre-line text-base font-medium leading-relaxed text-text-primary">
            {WHAT_RUNRAIT_DOES.body2}
          </p>
        </div>

        <FlowVisual />
      </div>
    </SectionWrapper>
  );
}
