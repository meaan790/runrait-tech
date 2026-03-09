"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-12 py-20 md:py-[80px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {PROBLEM.headlineLine1}
          </h2>
          <h2 className="mt-2 text-3xl font-bold leading-[1.2] text-text-secondary md:text-[40px]">
            {PROBLEM.headlineLine2}
          </h2>
        </div>

        <div className="flex max-w-[640px] flex-col gap-6 text-center">
          <p className="text-base leading-[1.8] text-text-secondary">
            {PROBLEM.body}
          </p>
          <p className="text-base leading-[1.8] text-text-secondary">
            {PROBLEM.body2}
          </p>
          <p className="text-base leading-[1.8] text-text-secondary">
            {PROBLEM.body3}
          </p>
        </div>

        <motion.p
          className="text-center text-xl font-semibold leading-snug text-text-primary md:text-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {PROBLEM.closing}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
