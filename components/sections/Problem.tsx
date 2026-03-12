"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-14 py-20 md:py-[100px]">
        {/* Headline */}
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {PROBLEM.headlineLine1}
          </h2>
          <h2 className="mt-2 text-3xl font-bold leading-[1.2] text-text-secondary md:text-[40px]">
            {PROBLEM.headlineLine2}
          </h2>
        </div>

        {/* Haves / Have-nots */}
        <div className="flex w-full max-w-[700px] flex-col gap-6 sm:flex-row sm:gap-12 sm:justify-center">
          <div className="flex flex-col gap-3">
            {PROBLEM.haves.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                <span className="text-sm text-text-primary">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {PROBLEM.haveNots.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <X className="h-4 w-4 shrink-0 text-text-tertiary" strokeWidth={2.5} />
                <span className="text-sm text-text-tertiary">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Options grid */}
        <div className="grid w-full max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEM.options.map((option, i) => (
            <motion.div
              key={option.title}
              className="flex flex-col gap-4 rounded-[var(--radius)] border border-border bg-surface p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-text-primary">
                {option.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {option.items.map((item) => (
                  <div key={item.text} className="flex items-center gap-2">
                    {item.pass ? (
                      <Check className="h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={2.5} />
                    ) : (
                      <X className="h-3.5 w-3.5 shrink-0 text-red-400" strokeWidth={2.5} />
                    )}
                    <span className="text-xs text-text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition */}
        <motion.p
          className="text-center text-xl font-semibold leading-snug text-accent md:text-[22px]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {PROBLEM.transition}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
