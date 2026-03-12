"use client";

import { User, UserPlus, Bot, Cpu } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  GTM_OS,
  TRADITIONAL_ROLES,
  GTM_HIRE_AGENTS,
  GTM_HIRE_SYSTEMS,
} from "@/lib/constants";

function TraditionalRoles({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-tertiary">
        The team you&rsquo;d normally hire
      </span>
      <div className="flex flex-wrap justify-center gap-3">
        {TRADITIONAL_ROLES.map((role, i) => (
          <motion.div
            key={role}
            className="flex flex-col items-center gap-2 rounded-[8px] border border-border bg-surface px-5 py-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: visible ? 0.6 : 0, y: visible ? 0 : 10 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <User className="h-4 w-4 text-text-tertiary" strokeWidth={1.5} />
            <span className="text-xs text-text-tertiary">{role}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-text-tertiary">{GTM_OS.traditionalCost}</p>
    </motion.div>
  );
}

function AugmentedTeam({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="flex w-full flex-col items-center gap-0"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {/* Founder + GTM Hire */}
      <div className="flex items-start justify-center gap-10">
        <motion.div
          className="flex flex-col items-center gap-2.5 rounded-[10px] border border-border bg-surface px-6 py-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent-muted">
            <User className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-medium text-text-primary">Founder</span>
          <span className="text-[10px] text-text-tertiary">Strategy &amp; oversight</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2.5 rounded-[10px] border-2 border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] px-6 py-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent-muted">
            <UserPlus className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-medium text-text-primary">GTM Hire</span>
          <span className="text-[10px] text-accent">Augmented by AI</span>
        </motion.div>
      </div>

      {/* Connecting line from GTM Hire down */}
      <motion.div
        className="h-8 w-px bg-accent/40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: visible ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        style={{ transformOrigin: "top", marginLeft: "calc(25% + 20px)" }}
      />

      {/* AI Agents */}
      <div className="flex w-full flex-col items-center gap-4">
        <motion.span
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.55 }}
        >
          AI Agents
        </motion.span>
        <div className="flex flex-wrap justify-center gap-2.5">
          {GTM_HIRE_AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              className="relative flex min-w-[120px] flex-col items-center gap-1.5 rounded-[8px] border border-accent/50 bg-[#0F1F1D] px-4 py-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-[3px] bg-accent px-1.5 py-px text-[7px] font-bold uppercase tracking-wider text-bg">
                Agent
              </span>
              <Bot className="mt-1 h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
              <span className="text-center text-[11px] font-medium leading-tight text-text-primary">
                {agent.name}
              </span>
              <span className="text-center text-[9px] leading-tight text-text-tertiary">
                {agent.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connecting line to systems */}
      <motion.div
        className="my-3 h-6 w-px bg-border"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: visible ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        style={{ transformOrigin: "top" }}
      />

      {/* AI Systems */}
      <div className="flex w-full flex-col items-center gap-4">
        <motion.span
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-tertiary"
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 1.25 }}
        >
          AI-Powered Systems
        </motion.span>
        <div className="flex flex-wrap justify-center gap-2">
          {GTM_HIRE_SYSTEMS.map((system, i) => (
            <motion.div
              key={system.name}
              className="relative flex min-w-[100px] flex-col items-center gap-1 rounded-[8px] border border-dashed border-border bg-surface px-3 py-2.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
              transition={{ duration: 0.25, delay: 1.3 + i * 0.05 }}
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-[3px] bg-[#252530] px-1.5 py-px text-[7px] font-bold uppercase tracking-wider text-text-tertiary">
                System
              </span>
              <Cpu className="mt-1 h-3 w-3 text-text-tertiary" strokeWidth={1.5} />
              <span className="text-center text-[10px] font-medium leading-tight text-text-primary">
                {system.name}
              </span>
              <span className="text-center text-[8px] leading-tight text-text-tertiary">
                {system.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        className="mt-8 flex items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
        transition={{ duration: 0.4, delay: 2.1 }}
      >
        {[
          { val: "2", label: "People" },
          { val: String(GTM_HIRE_AGENTS.length), label: "AI Agents" },
          { val: String(GTM_HIRE_SYSTEMS.length), label: "AI Systems" },
        ].map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-6">
            {i > 0 && (
              <span className="text-lg text-text-tertiary">+</span>
            )}
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-accent">{stat.val}</span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-text-tertiary">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
        <span className="text-lg text-text-tertiary">=</span>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-accent">Full GTM Output</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function WhatGetsBuilt() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="what-gets-built" bg="alt">
      <div
        ref={sectionRef}
        className="flex flex-col items-center gap-10 py-24 md:py-[100px]"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {GTM_OS.headline}
          </h2>
          <p className="max-w-[600px] text-base leading-relaxed text-text-secondary">
            {GTM_OS.intro}
          </p>
        </div>

        {/* Traditional Roles (phase 1) */}
        <TraditionalRoles visible={isInView} />

        {/* Divider transition */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <div className="h-8 w-px bg-accent/30" />
          <span className="text-xs font-semibold text-accent">
            With <span className="font-bold">Runrait</span>
          </span>
          <div className="h-8 w-px bg-accent/30" />
        </motion.div>

        {/* Augmented Team (phase 2+3) */}
        <AugmentedTeam visible={isInView} />

        {/* Closing */}
        <motion.p
          className="max-w-[640px] text-center text-sm italic text-text-tertiary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 2.3 }}
        >
          {GTM_OS.closing}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
