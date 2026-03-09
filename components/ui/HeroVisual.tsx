"use client";

import { motion } from "framer-motion";

const responsibilities = [
  "Product marketing",
  "Content",
  "Demand gen",
  "SDR",
  "Revenue ops",
  "CS ops",
];

const agents = [
  "Product Marketing Agent",
  "Content Agent",
  "SDR Agent",
  "Demand Gen Agent",
  "Revenue Ops Agent",
  "CS Ops Agent",
];

const systems = [
  "Messaging AI",
  "Brand Voice AI",
  "Website AI",
  "Design System AI",
  "Pipeline Management AI",
  "Lead Scoring AI",
  "Analytics AI",
  "Sales Enablement AI",
  "Email Nurture AI",
];

export function HeroVisual() {
  return (
    <div className="flex w-full max-w-[1100px] items-stretch gap-5">
      {/* Left - Your first marketer */}
      <motion.div
        className="flex w-[260px] shrink-0 flex-col gap-3 rounded-[10px] border border-border bg-[#111111] p-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-text-secondary">
          Your first marketer
        </span>

        <span className="text-[11px] leading-relaxed text-text-tertiary">
          Expected to handle all of this:
        </span>

        <div className="flex flex-col gap-1.5">
          {responsibilities.map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 rounded-[5px] border border-border bg-bg px-2.5 py-1.5"
            >
              <div className="h-[5px] w-[5px] rounded-full bg-text-tertiary" />
              <span className="text-[11px] text-text-secondary">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Plus */}
      <div className="hidden items-center justify-center md:flex">
        <span className="text-[18px] font-bold text-accent">+</span>
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
          Augmented by Runrait
        </span>

        <span className="text-[8px] font-semibold uppercase tracking-widest text-text-tertiary">
          AI agents
        </span>
        <div className="-mt-1 flex flex-wrap gap-1.5">
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

        <span className="text-[8px] font-semibold uppercase tracking-widest text-text-tertiary">
          AI-powered systems
        </span>
        <div className="-mt-1 flex flex-wrap gap-1">
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
