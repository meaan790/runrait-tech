"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-bg px-6 pb-20 pt-32 md:px-12 md:pb-24 md:pt-40 lg:px-[120px]">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center">
        <motion.h1
          className="text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          className="max-w-[700px] text-lg leading-relaxed text-text-secondary md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <span className="font-bold text-accent">Runrait</span>{" "}
          {HERO.subheadline.replace("Runrait ", "")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Button href={HERO.ctaHref}>{HERO.cta}</Button>
        </motion.div>
      </div>

      {/* Stat contrast — intrigue, not the full answer */}
      <motion.div
        className="mt-16 flex w-full max-w-[800px] flex-col items-stretch gap-4 sm:flex-row sm:gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <div className="flex flex-1 flex-col items-center gap-3 rounded-[10px] border border-border bg-surface p-6 opacity-55">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
            Traditional GTM team
          </span>
          <span className="text-xl font-bold text-text-tertiary">Founding Team + 4–6 GTM Hires</span>
          <span className="text-sm text-text-tertiary">$500k+/year</span>
          <span className="text-xs text-text-tertiary">6–12 months to ramp</span>
        </div>

        <div className="hidden items-center justify-center sm:flex">
          <span className="text-sm font-semibold tracking-wide text-text-tertiary">vs</span>
        </div>

        <div className="flex flex-1 flex-col items-center gap-3 rounded-[10px] border border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] p-6">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
            With Runrait
          </span>
          <span className="text-xl font-bold text-text-primary">Founding Team + 1 GTM Hire</span>
          <span className="text-sm text-accent">Full GTM output</span>
          <span className="text-xs text-text-secondary">Results in weeks</span>
        </div>
      </motion.div>
    </section>
  );
}
