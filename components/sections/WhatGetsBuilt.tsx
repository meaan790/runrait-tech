"use client";

import { useState } from "react";
import { Users, UserPlus, User, Bot, Cpu } from "lucide-react";
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
      {/* Founding Team card */}
      <motion.div
        className="flex flex-col items-center gap-2.5 rounded-[10px] border border-border bg-surface px-8 py-5"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Users className="h-5 w-5 text-text-tertiary" strokeWidth={1.5} />
        <span className="text-sm font-semibold text-text-primary">Founding Team</span>
      </motion.div>

      <motion.div
        className="h-6 w-px bg-border"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ transformOrigin: "top" }}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
        {TRADITIONAL_ROLES.map((role, i) => (
          <motion.div
            key={role}
            className="flex flex-col items-center gap-2.5 rounded-[8px] border border-border bg-surface px-4 py-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
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
          {TRADITIONAL_ROLES.length} hires &middot; {GTM_OS.traditionalCost}
        </span>
      </div>
    </motion.div>
  );
}

function RunraitView() {
  return (
    <motion.div
      className="flex w-full flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Founding Team + GTM Hire */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
        <motion.div
          className="flex flex-col items-center gap-2.5 rounded-[10px] border border-border bg-surface px-7 py-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent-muted">
            <Users className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-semibold text-text-primary">Founding Team</span>
          <span className="text-[10px] text-text-tertiary">Strategy &amp; oversight</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2.5 rounded-[10px] border-2 border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] px-7 py-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent-muted">
            <UserPlus className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <span className="text-sm font-semibold text-text-primary">GTM Hire</span>
          <span className="text-[10px] text-accent">Augmented by AI</span>
        </motion.div>
      </div>

      {/* Connecting line */}
      <motion.div
        className="h-8 w-px bg-accent/40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        style={{ transformOrigin: "top" }}
      />

      {/* AI Agents — force 2 rows via max-width */}
      <div className="flex w-full flex-col items-center gap-4">
        <motion.span
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          AI Agents &middot; {GTM_HIRE_AGENTS.length}
        </motion.span>
        <div className="mx-auto grid max-w-[620px] grid-cols-3 gap-2.5 sm:grid-cols-4">
          {GTM_HIRE_AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              className="relative flex flex-col items-center gap-1.5 rounded-[8px] border border-accent/50 bg-[#0F1F1D] px-3 py-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.4 + i * 0.06 }}
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
      <motion.div
        className="my-4 h-6 w-px bg-border"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.3, delay: 0.9 }}
        style={{ transformOrigin: "top" }}
      />

      {/* AI Systems */}
      <div className="flex w-full flex-col items-center gap-4">
        <motion.span
          className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-tertiary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.95 }}
        >
          AI-Powered Systems &middot; {GTM_HIRE_SYSTEMS.length}
        </motion.span>
        <div className="flex flex-wrap justify-center gap-2">
          {GTM_HIRE_SYSTEMS.map((system, i) => (
            <motion.div
              key={system.name}
              className="relative flex w-[110px] flex-col items-center gap-1 rounded-[8px] border border-dashed border-border bg-surface px-2.5 py-2.5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 1.0 + i * 0.03 }}
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

      {/* Stats */}
      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
      >
        {[
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
    <SectionWrapper id="what-gets-built" bg="dark">
      <div className="flex flex-col items-center gap-10 py-24 md:py-[100px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="max-w-[800px] text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
            {GTM_OS.headline}
          </h2>
          <p className="max-w-[820px] text-base leading-relaxed text-text-secondary">
            {GTM_OS.intro}
          </p>
        </div>

        {/* Segmented toggle */}
        <div className="relative flex rounded-full bg-surface/60 p-1 backdrop-blur-sm">
          {/* Animated background pill */}
          <motion.div
            className="absolute inset-y-1 rounded-full"
            animate={{
              left: view === "traditional" ? "4px" : "50%",
              right: view === "traditional" ? "50%" : "4px",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{
              background:
                view === "runrait"
                  ? "linear-gradient(135deg, #0A2E2A, #143D37)"
                  : "rgba(255,255,255,0.06)",
            }}
          />
          <button
            onClick={() => setView("traditional")}
            className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-semibold transition-colors ${
              view === "traditional"
                ? "text-text-primary"
                : "text-text-tertiary hover:text-text-secondary"
            }`}
          >
            Traditional GTM Team
          </button>
          <button
            onClick={() => setView("runrait")}
            className={`relative z-10 rounded-full px-6 py-2.5 text-xs font-semibold transition-colors ${
              view === "runrait"
                ? "text-accent"
                : "text-text-tertiary hover:text-text-secondary"
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
        <p className="max-w-[820px] text-center text-sm italic text-text-tertiary">
          {GTM_OS.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
