"use client";

import { motion } from "framer-motion";

const roles = [
  "Head of Growth",
  "SDR",
  "Content Marketer",
  "Marketing Ops",
  "Customer Success",
];

const agents = [
  "Research agent",
  "Content agent",
  "SDR agent",
  "Pipeline agent",
  "Onboarding agent",
  "Customer success agent",
];

const systems = [
  "Positioning and messaging",
  "Website and landing pages",
  "CRM and pipeline",
  "Lead scoring",
  "Analytics and reporting",
  "Sales enablement",
];

export function HeroVisual() {
  return (
    <div className="flex w-full max-w-[1100px] items-stretch gap-5">
      {/* Left - Traditional */}
      <motion.div
        className="flex flex-1 flex-col gap-3 rounded-[10px] border border-border bg-[#111111] p-4 opacity-55"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.55, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-text-tertiary">
          The traditional way
        </span>

        <div className="flex flex-wrap gap-1.5">
          {roles.map((role) => (
            <div
              key={role}
              className="flex items-center gap-1.5 rounded-[5px] border border-border bg-bg px-2.5 py-1.5"
            >
              <div className="h-[5px] w-[5px] rounded-full bg-text-tertiary" />
              <span className="text-[11px] text-text-secondary">{role}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-[11px] font-semibold text-text-tertiary">
            $535k+ / year
          </span>
          <span className="text-[10px] text-text-tertiary">
            + 6–12 months to ramp
          </span>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="hidden items-center justify-center md:flex">
        <span className="text-[13px] font-semibold tracking-[0.08em] text-text-tertiary">
          vs
        </span>
      </div>

      {/* Right - Runrait */}
      <motion.div
        className="flex flex-1 flex-col gap-2 rounded-[10px] border border-accent bg-[#111111] p-4"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-accent">
          The Runrait way
        </span>

        <div className="flex flex-wrap gap-1.5">
          {agents.map((agent) => (
            <div
              key={agent}
              className="flex items-center gap-1.5 rounded-[5px] border border-accent bg-bg px-2.5 py-1.5"
            >
              <div className="h-[5px] w-[5px] rounded-full bg-accent" />
              <span className="text-[11px] font-medium text-text-primary">
                {agent}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          {systems.map((system) => (
            <div
              key={system}
              className="rounded-[5px] border border-accent bg-accent-muted px-2.5 py-1 text-[10px] text-text-secondary"
            >
              {system}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
