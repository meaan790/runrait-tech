"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_IT_WORKS } from "@/lib/constants";

export function WhyItWorks() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {WHY_IT_WORKS.headline}
        </h2>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2">
          {WHY_IT_WORKS.blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                className="flex flex-col gap-4 rounded-[var(--radius)] border border-border bg-surface p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{
                  y: -2,
                  borderColor: "rgba(0, 229, 204, 0.3)",
                  transition: { duration: 0.2 },
                }}
              >
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold leading-snug text-text-primary">
                  {block.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  {block.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
