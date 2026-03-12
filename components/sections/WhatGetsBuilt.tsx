"use client";

import { Brain, Users, Bot, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GTM_OS, OS_AGENTS, OS_SYSTEMS } from "@/lib/constants";

export function WhatGetsBuilt() {
  return (
    <SectionWrapper id="what-gets-built" bg="alt">
      <div className="flex flex-col items-center gap-14 py-24 md:py-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {GTM_OS.headline}
          </h2>
          <p className="max-w-[720px] text-lg leading-relaxed text-text-secondary">
            {GTM_OS.intro}
          </p>
        </div>

        {/* OS Stack */}
        <motion.div
          className="w-full max-w-[900px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Knowledge Layer */}
          <div className="rounded-t-[var(--radius)] border-2 border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] px-8 py-6">
            <div className="flex items-center gap-4">
              <Brain className="h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                  {GTM_OS.knowledgeLabel}
                </span>
                <span className="text-sm text-text-secondary">
                  {GTM_OS.knowledgeDesc}
                </span>
              </div>
            </div>
          </div>

          {/* Your Team */}
          <div className="border-x border-b border-border bg-surface px-8 py-5">
            <div className="flex items-center gap-4">
              <Users className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                  {GTM_OS.teamLabel}
                </span>
                <span className="text-sm text-text-secondary">
                  {GTM_OS.teamDesc}
                </span>
              </div>
            </div>
          </div>

          {/* AI Agents */}
          <div className="border-x border-b border-accent bg-gradient-to-b from-[#0F1F1D] to-[#0A2E2A] px-8 py-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Bot className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                    {GTM_OS.agentsLabel}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {GTM_OS.agentsDesc}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {OS_AGENTS.map((agent) => (
                  <span
                    key={agent}
                    className="rounded-[5px] border border-accent px-3 py-1.5 text-xs font-medium text-text-primary"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI Systems */}
          <div className="rounded-b-[var(--radius)] border-x border-b border-border bg-surface px-8 py-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Cpu className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                    {GTM_OS.systemsLabel}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {GTM_OS.systemsDesc}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {OS_SYSTEMS.map((system) => (
                  <span
                    key={system}
                    className="rounded-[5px] bg-accent-muted px-3 py-1.5 text-xs text-text-secondary"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Body 2 + Closing */}
        <p className="max-w-[680px] text-center text-base font-medium leading-relaxed text-text-secondary">
          {GTM_OS.body2}
        </p>
        <p className="text-center text-sm italic text-text-tertiary">
          {GTM_OS.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
