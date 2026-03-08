"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import {
  SYSTEM_SECTION,
  SYSTEM_AGENTS,
  SYSTEM_POWERED,
} from "@/lib/constants";

function CardGrid({
  cards,
  columns = 3,
}: {
  cards: typeof SYSTEM_AGENTS;
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid w-full max-w-[1200px] grid-cols-1 gap-5 ${
        columns === 3
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2"
      }`}
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
            className="h-full bg-bg"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function TheSystem() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {SYSTEM_SECTION.headline}
          </h2>
          <p className="max-w-[680px] text-lg leading-relaxed text-text-secondary">
            {SYSTEM_SECTION.intro}
          </p>
        </div>

        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          {SYSTEM_SECTION.agentsLabel}
        </span>
        <CardGrid cards={SYSTEM_AGENTS} columns={3} />

        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          {SYSTEM_SECTION.poweredLabel}
        </span>
        <CardGrid cards={SYSTEM_POWERED} columns={3} />

        <p className="text-lg font-medium leading-relaxed text-text-secondary">
          {SYSTEM_SECTION.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
