"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { TYPICAL_OPTIONS } from "@/lib/constants";

export function TypicalOptions() {
  return (
    <SectionWrapper bg="dark">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {TYPICAL_OPTIONS.headline}
        </h2>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-3">
          {TYPICAL_OPTIONS.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-[22px] font-semibold text-accent">
          {TYPICAL_OPTIONS.transition}
        </p>
      </div>
    </SectionWrapper>
  );
}
