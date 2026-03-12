"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import {
  WHAT_GETS_BUILT,
  FEATURED_AGENTS,
  FEATURED_SYSTEMS,
} from "@/lib/constants";

export function WhatGetsBuilt() {
  return (
    <SectionWrapper id="what-gets-built" bg="alt">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {WHAT_GETS_BUILT.headline}
          </h2>
          <p className="max-w-[720px] text-lg leading-relaxed text-text-secondary">
            {WHAT_GETS_BUILT.intro}
          </p>
        </div>

        {/* AI Agents */}
        <div className="flex flex-col items-center gap-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {WHAT_GETS_BUILT.agentsLabel}
          </span>
          <p className="max-w-[720px] text-center text-base leading-relaxed text-text-secondary">
            {WHAT_GETS_BUILT.agentsIntro}
          </p>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURED_AGENTS.map((card, i) => (
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

        <p className="text-sm text-text-tertiary">
          {WHAT_GETS_BUILT.agentsFootnote}
        </p>

        {/* AI-powered systems */}
        <div className="flex flex-col items-center gap-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            {WHAT_GETS_BUILT.poweredLabel}
          </span>
          <p className="max-w-[720px] text-center text-base leading-relaxed text-text-secondary">
            {WHAT_GETS_BUILT.poweredIntro}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {FEATURED_SYSTEMS.map((system, i) => (
            <motion.div
              key={system}
              className="rounded-(--radius) border border-accent bg-accent-muted px-4 py-2 text-sm text-text-secondary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
            >
              {system}
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-text-tertiary">
          {WHAT_GETS_BUILT.poweredFootnote}
        </p>
      </div>
    </SectionWrapper>
  );
}
