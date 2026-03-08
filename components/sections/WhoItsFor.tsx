"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHO_ITS_FOR } from "@/lib/constants";

export function WhoItsFor() {
  return (
    <SectionWrapper id="who-its-for" bg="dark">
      <div className="flex flex-col items-center gap-8 py-20 md:py-[80px]">
        <h2 className="max-w-[800px] text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {WHO_ITS_FOR.headline}
        </h2>

        <p className="max-w-[700px] text-center text-lg leading-relaxed text-text-secondary">
          {WHO_ITS_FOR.body}
        </p>

        <div className="flex w-full max-w-[680px] flex-col gap-4 pt-8">
          <h3 className="text-base font-semibold text-text-primary">
            {WHO_ITS_FOR.fitLabel}
          </h3>

          <div className="flex flex-col gap-3">
            {WHO_ITS_FOR.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                >
                  <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" strokeWidth={1.5} />
                  <p className="text-base leading-relaxed text-text-secondary">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
