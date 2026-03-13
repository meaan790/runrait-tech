"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CTA_SECTION } from "@/lib/constants";

const CALENDAR_URL = "https://calendar.app.google/PmoSPF4DyqnD6akk6";

export function CTA() {
  return (
    <SectionWrapper id="cta" bg="dark">
      <div className="flex flex-col items-center gap-8 py-20 md:py-[80px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {CTA_SECTION.headline}
        </h2>

        <p className="max-w-[600px] text-center text-lg leading-relaxed text-text-secondary">
          {CTA_SECTION.body}
        </p>

        <Button href={CALENDAR_URL}>
          {CTA_SECTION.submitLabel}
        </Button>
      </div>
    </SectionWrapper>
  );
}
