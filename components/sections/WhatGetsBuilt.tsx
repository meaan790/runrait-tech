"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  WHAT_GETS_BUILT,
  FEATURED_AGENTS,
  FEATURED_SYSTEMS,
} from "@/lib/constants";

export function WhatGetsBuilt() {
  return (
    <SectionWrapper id="what-gets-built" bg="alt">
      <div className="flex flex-col items-center gap-14 py-24 md:py-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {WHAT_GETS_BUILT.headline}
          </h2>
          <p className="max-w-[720px] text-lg leading-relaxed text-text-secondary">
            {WHAT_GETS_BUILT.intro}
          </p>
        </div>

        {/* AI Agents */}
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {WHAT_GETS_BUILT.agentsLabel}
            </span>
            <p className="max-w-[680px] text-base leading-relaxed text-text-secondary">
              {WHAT_GETS_BUILT.agentsIntro}
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_AGENTS.map((agent, i) => (
              <motion.div
                key={agent.title}
                className="flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-bg p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <agent.icon
                  className="h-5 w-5 text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="text-sm font-semibold text-text-primary">
                  {agent.title}
                </h3>
                <p className="text-xs leading-relaxed text-text-secondary">
                  {agent.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm italic text-text-tertiary">
            {WHAT_GETS_BUILT.agentsFootnote}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-[400px] bg-border" />

        {/* AI-powered Systems */}
        <div className="flex w-full max-w-[1100px] flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {WHAT_GETS_BUILT.poweredLabel}
            </span>
            <p className="max-w-[680px] text-base leading-relaxed text-text-secondary">
              {WHAT_GETS_BUILT.poweredIntro}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {FEATURED_SYSTEMS.map((system, i) => (
              <motion.div
                key={system}
                className="rounded-[var(--radius)] border border-accent/30 bg-accent-muted px-5 py-2.5 text-sm font-medium text-text-primary"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                {system}
              </motion.div>
            ))}
          </div>

          <p className="max-w-[600px] text-center text-sm italic text-text-tertiary">
            {WHAT_GETS_BUILT.poweredMore}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
