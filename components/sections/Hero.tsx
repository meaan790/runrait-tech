"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/ui/HeroVisual";

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
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Button href={HERO.ctaHref}>{HERO.cta}</Button>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 w-full md:mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto flex justify-center">
          <HeroVisual />
        </div>
      </motion.div>
    </section>
  );
}
