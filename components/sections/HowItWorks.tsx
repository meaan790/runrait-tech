"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" bg="dark">
      <div className="flex flex-col items-center gap-10 py-20 md:py-[80px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {HOW_IT_WORKS.headline}
        </h2>

        <p className="max-w-[820px] text-center text-lg leading-relaxed text-text-secondary">
          {HOW_IT_WORKS.intro}
        </p>

        <div className="flex w-full max-w-[800px] flex-col gap-5">
          {HOW_IT_WORKS.phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              className="flex gap-6 rounded-[var(--radius)] border border-border bg-surface p-7 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius)] bg-accent-muted">
                <span className="font-mono text-base font-bold text-accent">
                  {phase.number}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3 className="text-2xl font-bold leading-snug text-text-primary">
                  {phase.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-accent">
                  {phase.tagline}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {phase.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
