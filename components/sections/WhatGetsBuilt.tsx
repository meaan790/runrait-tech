"use client";

import { User, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GTM_OS, CAPABILITIES, INFRASTRUCTURE } from "@/lib/constants";

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

        {/* Augmentation Visual */}
        <motion.div
          className="w-full max-w-[900px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Your Team */}
          <div className="rounded-t-[var(--radius)] border-2 border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] px-8 py-8">
            <div className="flex flex-col items-center gap-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                {GTM_OS.teamLabel}
              </span>
              <div className="flex items-center gap-8">
                {GTM_OS.teamRoles.map((role, i) => (
                  <div key={role} className="flex flex-col items-center gap-2.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent-muted">
                      {i === 0 ? (
                        <User className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      ) : (
                        <UserPlus className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      )}
                    </div>
                    <span className="text-sm font-medium text-text-primary">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="border-x border-b border-accent bg-[#0F1F1D] px-8 py-6">
            <div className="flex flex-col gap-4">
              <span className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                {GTM_OS.capabilitiesLabel}
              </span>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap}
                    className="flex items-center justify-center rounded-[5px] border border-accent/40 bg-accent-muted/50 px-4 py-2.5 text-center text-xs font-medium text-text-primary"
                  >
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="rounded-b-[var(--radius)] border-x border-b border-border bg-surface px-8 py-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-text-tertiary">
                  {GTM_OS.infrastructureLabel}
                </span>
                <span className="text-[11px] text-text-tertiary">
                  {GTM_OS.infrastructureDesc}
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {INFRASTRUCTURE.map((item) => (
                  <span
                    key={item}
                    className="rounded-[5px] bg-bg px-3 py-1.5 text-[11px] text-text-tertiary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <p className="max-w-[640px] text-center text-sm italic text-text-tertiary">
          {GTM_OS.closing}
        </p>
      </div>
    </SectionWrapper>
  );
}
