"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { NOT_AN_AGENCY } from "@/lib/constants";

export function NotAnAgency() {
  return (
    <SectionWrapper bg="dark">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {NOT_AN_AGENCY.headline}
        </h2>

        <div className="flex w-full max-w-[1000px] flex-col gap-8">
          {NOT_AN_AGENCY.blocks.map((block, i) => (
            <motion.div
              key={block.title}
              className="flex flex-col gap-3 rounded-(--radius) border border-border bg-surface p-7 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <h3
                className={`text-lg font-semibold ${
                  i === 2 ? "text-accent" : "text-text-primary"
                }`}
              >
                {block.title}
              </h3>
              <p className="text-base leading-relaxed text-text-secondary">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
