"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const roles = [
  { title: "Head of Growth", salary: "$180k+" },
  { title: "SDR", salary: "$85k+" },
  { title: "Content Marketer", salary: "$90k+" },
  { title: "Marketing Ops", salary: "$95k+" },
  { title: "Customer Success", salary: "$85k+" },
];

const agents = [
  { title: "Research agent", description: "Market signals and ICP tracking" },
  { title: "Content agent", description: "Creation and distribution" },
  { title: "SDR agent", description: "Outreach and booking" },
  { title: "Pipeline agent", description: "Deal tracking and follow-ups" },
  { title: "Onboarding agent", description: "Activation and first-value" },
  { title: "Customer success agent", description: "Retention and expansion" },
];

const systems = [
  "Positioning and messaging",
  "Website and landing pages",
  "CRM and pipeline architecture",
  "Lead scoring and qualification",
  "Analytics and reporting",
  "Sales enablement",
];

export function HeroVisual() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex w-full max-w-[960px] flex-wrap items-stretch justify-center gap-6">
      {/* Left Side - Traditional */}
      <motion.div
        className="flex-[1_1_380px] max-w-[440px] rounded-xl border border-border bg-[#111111] p-8 opacity-60"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">
          The traditional way
        </div>

        <div className="flex flex-col gap-3">
          {roles.map((role, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-(--radius) border border-border bg-bg px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E1E1E]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="5" r="3" stroke="#555" strokeWidth="1.5" />
                    <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#555" strokeWidth="1.5" />
                  </svg>
                </div>
                <span className="text-sm text-text-secondary">{role.title}</span>
              </div>
              <span className="font-mono text-sm text-text-tertiary">{role.salary}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border px-4 pt-3">
          <span className="text-[13px] text-text-tertiary">Total annual cost</span>
          <span className="font-mono text-base font-semibold text-text-secondary">$535k+</span>
        </div>
        <div className="mt-1 text-right text-xs text-text-tertiary">
          + 6-12 months to ramp
        </div>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center justify-center px-2">
        <span className="text-sm font-semibold uppercase tracking-widest text-text-tertiary">
          vs
        </span>
      </div>

      {/* Right Side - Runrait */}
      <motion.div
        className="flex-[1_1_380px] max-w-[440px] rounded-xl border border-accent/20 bg-[#111111] p-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
          The Runrait way
        </div>

        {/* AI Agents */}
        <div className="mb-5">
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
            AI agents
          </div>
          <div className="flex flex-col gap-2">
            {agents.map((agent, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center justify-between rounded-(--radius) border px-3.5 py-2.5 transition-all duration-150 ${
                  hovered === i
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-bg"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,204,0.4)]" />
                  <span className="text-sm text-text-primary">{agent.title}</span>
                </div>
                <span className="hidden text-xs text-text-tertiary sm:inline">{agent.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Powered Systems */}
        <div>
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
            AI-powered systems
          </div>
          <div className="flex flex-wrap gap-1.5">
            {systems.map((system, i) => (
              <div
                key={i}
                className="rounded-md border border-accent/10 bg-accent/6 px-3 py-1.5 text-xs text-text-secondary"
              >
                {system}
              </div>
            ))}
          </div>
        </div>

        {/* Connection dots */}
        <div className="mt-4 flex items-center justify-center gap-2 border-t border-accent/10 pt-3">
          <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-40" />
          <div className="h-px w-10 bg-accent/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-60" />
          <div className="h-px w-10 bg-accent/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-80" />
          <div className="h-px w-10 bg-accent/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </div>
        <div className="mt-1 text-center text-[11px] text-text-tertiary">
          All connected. All running. All yours.
        </div>
      </motion.div>
    </div>
  );
}
