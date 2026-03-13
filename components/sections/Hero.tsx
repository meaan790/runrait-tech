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

      {/* Vertical stat contrast */}
      <motion.div
        className="mt-16 flex w-full max-w-[520px] flex-col items-stretch gap-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        {/* Traditional */}
        <div className="flex flex-col items-center gap-1.5 rounded-t-[10px] border border-border bg-surface px-6 py-5 opacity-55">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
            Traditional GTM team
          </span>
          <span className="text-lg font-bold text-text-tertiary sm:text-xl">
            Founding Team + 4-6 GTM Hires
          </span>
          <span className="text-xs text-text-tertiary">
            $500k+/year &middot; 6-12 months to ramp
          </span>
        </div>

        {/* Divider with "vs" */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-border" />
          <span className="relative z-10 rounded-full border border-border bg-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
            vs
          </span>
        </div>

        {/* With Runrait */}
        <div className="flex flex-col items-center gap-1.5 rounded-b-[10px] border border-accent bg-gradient-to-b from-[#0A2E2A] to-[#111111] px-6 py-5">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
            With Runrait
          </span>
          <span className="text-lg font-bold text-text-primary sm:text-xl">
            Founding Team + 1 GTM Hire
          </span>
          <span className="text-xs text-accent">
            Full GTM output &middot; Results in weeks
          </span>
        </div>
      </motion.div>
    </section>
  );
}
