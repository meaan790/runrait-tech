"use client";

import { useState } from "react";
import { User, UserPlus, Bot, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import {
  GTM_OS,
  TRADITIONAL_ROLES,
  GTM_HIRE_AGENTS,
  GTM_HIRE_SYSTEMS,
} from "@/lib/constants";

type View = "traditional" | "runrait";

function TraditionalView() {
  return (
    <motion.div
      className="flex flex-col items-center gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {TRADITIONAL_ROLES.map((role, i) => (
          <motion.div
            key={role}
            className="flex flex-col items-center gap-2.5 rounded-[8px] border border-border bg-surface px-4 py-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <User className="h-5 w-5 text-text-tertiary" strokeWidth={1.5} />
            <span className="text-center text-xs font-medium text-text-secondary">
              {role}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-lg font-bold text-text-tertiary">
          {GTM_OS.traditionalCost}
        </span>
      </div>
    </motion.div>
  );
}

function RunraitView() {
  const [agentsExpanded, setAgentsExpanded] = useState(false);

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Founder + GTM Hire */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <motion.div
          className="flex flex-col items-center gap-2.5 rounded-[10px] border border-border bg-surface px-7 py-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent-muted">
            <User className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-semibold text-text-primary">Founder</span>
          <span className="text-[10px] text-text-tertiary">Strategy &amp; oversight</span>
        </motion.div>

        <motion.button
          className="flex cursor-pointer flex-col items-center gap-2.5 rounded-[10px] border-2 border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] px-7 py-5 transition-shadow hover:shadow-[0_0_20px_rgba(0,229,204,0.15)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={() => setAgentsExpanded(!agentsExpanded)}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent-muted">
            <UserPlus className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-semibold text-text-primary">GTM Hire</span>
          <span className="text-[10px] text-accent">
            {agentsExpanded ? "Click to collapse" : "Click to expand AI team"}
          </span>
        </motion.button>
      </div>

      {/* Connecting line */}
      <AnimatePresence>
        {agentsExpanded && (
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-8 w-px bg-accent/40" />

            {/* AI Agents */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                AI Agents
              </span>
              <div className="flex flex-wrap justify-center gap-2.5">
                {GTM_HIRE_AGENTS.map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    className="relative flex w-[130px] flex-col items-center gap-1.5 rounded-[8px] border border-accent/50 bg-[#0F1F1D] px-3 py-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-[3px] bg-accent px-1.5 py-px text-[7px] font-bold uppercase tracking-wider text-bg">
                      Agent
                    </span>
                    <Bot className="mt-1.5 h-3.5 w-3.5 text-accent" strokeWidth={1.5} />
                    <span className="text-center text-[10px] font-medium leading-tight text-text-primary">
                      {agent.name}
                    </span>
                    <span className="text-center text-[8px] leading-tight text-text-tertiary">
                      {agent.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connecting line to systems */}
            <div className="my-4 h-6 w-px bg-border" />

            {/* AI Systems */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-tertiary">
                AI-Powered Systems
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {GTM_HIRE_SYSTEMS.map((system, i) => (
                  <motion.div
                    key={system.name}
                    className="relative flex w-[110px] flex-col items-center gap-1 rounded-[8px] border border-dashed border-border bg-surface px-2.5 py-2.5"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.4 + i * 0.03 }}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-[3px] bg-[#252530] px-1.5 py-px text-[7px] font-bold uppercase tracking-wider text-text-tertiary">
                      System
                    </span>
                    <Cpu className="mt-1.5 h-3 w-3 text-text-tertiary" strokeWidth={1.5} />
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats */}
      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {[
          { val: "2", label: "People" },
          { val: String(GTM_HIRE_AGENTS.length), label: "AI Agents" },
          { val: String(GTM_HIRE_SYSTEMS.length), label: "AI Systems" },
        ].map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-4 sm:gap-6">
            {i > 0 && <span className="text-lg text-text-tertiary">+</span>}
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-accent">{stat.val}</span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-text-tertiary">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
        <span className="text-lg text-text-tertiary">=</span>
        <span className="text-sm font-bold text-accent">Full GTM Output</span>
      </motion.div>
    </motion.div>
  );
}

export function WhatGetsBuilt() {
  const [view, setView] = useState<View>("traditional");

  return (
    <SectionWrapper id="what-gets-built" bg="alt">
      <div className="flex flex-col items-center gap-10 py-24 md:py-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {GTM_OS.headline}
          </h2>
          <p className="max-w-[600px] text-base leading-relaxed text-text-secondary">
            {GTM_OS.intro}
          </p>
        </div>

        {/* Toggle */}
        <div className="flex">
          <button
            onClick={() => setView("traditional")}
            className={`rounded-l-[6px] border px-5 py-2.5 text-xs font-semibold transition-all ${
              view === "traditional"
                ? "border-border bg-surface text-text-primary"
                : "border-border/50 bg-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            Traditional GTM Team
          </button>
          <button
            onClick={() => setView("runrait")}
            className={`rounded-r-[6px] border border-l-0 px-5 py-2.5 text-xs font-semibold transition-all ${
              view === "runrait"
                ? "border-accent bg-accent/10 text-accent"
                : "border-border/50 bg-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            With Runrait
          </button>
        </div>

        {/* Views */}
        <div className="w-full max-w-[960px]">
          <AnimatePresence mode="wait">
            {view === "traditional" ? (
              <TraditionalView key="traditional" />
            ) : (
              <RunraitView key="runrait" />
            )}
          </AnimatePresence>
        </div>

        {/* Closing */}
        <p className="max-w-[640px] text-center text-sm italic text-text-tertiary">
          {GTM_OS.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
