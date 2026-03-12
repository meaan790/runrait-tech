"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-12 py-20 md:py-[100px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {PROBLEM.headlineLine1}
          </h2>
          <h2 className="mt-2 text-3xl font-bold leading-[1.2] text-text-secondary md:text-[40px]">
            {PROBLEM.headlineLine2}
          </h2>
        </div>

        <p className="max-w-[680px] whitespace-pre-line text-center text-lg leading-relaxed text-text-secondary">
          {PROBLEM.body}
        </p>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROBLEM.cards.map((card, i) => (
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
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

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
