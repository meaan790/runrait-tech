"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { CTA_SECTION } from "@/lib/constants";

export function CTA() {
  return (
    <SectionWrapper id="cta" bg="alt">
      <div className="flex flex-col items-center gap-8 py-20 md:py-[80px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {CTA_SECTION.headline}
        </h2>

        <p className="max-w-[600px] text-center text-lg leading-relaxed text-text-secondary">
          {CTA_SECTION.body}
        </p>

        <form
          className="flex w-full max-w-[480px] flex-col gap-4 rounded-[var(--radius)] border border-border bg-surface p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Name"
              className="rounded-[var(--radius)] border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-[var(--radius)] border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="rounded-[var(--radius)] border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none"
          />
          <input
            type="text"
            placeholder="What are you working on?"
            className="rounded-[var(--radius)] border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent/50 focus:outline-none"
          />
          <Button type="submit" className="w-full">
            {CTA_SECTION.submitLabel}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
