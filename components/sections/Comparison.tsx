"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {COMPARISON.headline}
        </h2>

        <motion.div
          className="w-full max-w-[1200px] overflow-x-auto rounded-[var(--radius)] border border-border bg-surface"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="grid min-w-[600px] grid-cols-4 bg-border px-6 py-4">
            {COMPARISON.headers.map((header, i) => (
              <div
                key={i}
                className={`text-sm font-semibold ${
                  i === 0
                    ? "text-left text-text-secondary"
                    : "text-center"
                } ${i === 3 ? "font-bold text-accent" : "text-text-secondary"}`}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Rows */}
          {COMPARISON.rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid min-w-[600px] grid-cols-4 border-t border-border px-6 py-4 transition-colors hover:bg-bg/30"
            >
              {row.map((cell, cellIdx) => (
                <div
                  key={cellIdx}
                  className={`text-sm ${
                    cellIdx === 0
                      ? "font-medium text-text-primary"
                      : "text-center"
                  } ${
                    cellIdx === 3
                      ? "font-medium text-text-primary"
                      : cellIdx > 0
                        ? "text-text-secondary"
                        : ""
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
