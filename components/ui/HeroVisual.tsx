"use client";

import { motion } from "framer-motion";

const team = ["Founder", "First marketer", "Maybe an ops hire"];

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
    <div className="flex w-full max-w-[1100px] items-stretch gap-4">
      {/* Left - Your team */}
      <motion.div
        className="flex w-[200px] shrink-0 flex-col gap-3 rounded-[10px] border border-border bg-[#111111] p-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-text-secondary">
          Your team
        </span>

        <div className="flex flex-col gap-1.5">
          {team.map((role) => (
            <div
              key={role}
              className="flex items-center gap-1.5 rounded-[5px] border border-border bg-bg px-2.5 py-1.5"
            >
              <div className="h-[5px] w-[5px] rounded-full bg-text-secondary" />
              <span className="text-[11px] text-text-primary">{role}</span>
            </div>
          ))}
        </div>

        <span className="mt-auto text-[10px] text-text-tertiary">
          Lean and focused
        </span>
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
          Runrait
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

      {/* Equals */}
      <div className="hidden items-center justify-center md:flex">
        <span className="text-[18px] font-bold text-text-secondary">=</span>
      </div>

      {/* Result */}
      <motion.div
        className="hidden w-[160px] shrink-0 flex-col items-center justify-center gap-2 rounded-[10px] border border-accent/30 bg-[#111111] p-4 text-center md:flex"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-widest text-accent">
          Output
        </span>
        <span className="text-[13px] font-semibold leading-snug text-text-primary">
          Full GTM
        </span>
        <span className="text-[10px] leading-snug text-text-secondary">
          The capability of a complete go-to-market org
        </span>
      </motion.div>
    </div>
  );
}
