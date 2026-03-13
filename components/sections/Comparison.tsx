"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  const [, ...valueHeaders] = COMPARISON.headers;

  return (
    <SectionWrapper bg="alt">
      <div className="flex flex-col items-center gap-12 py-24 md:py-[100px]">
        <h2 className="text-center text-3xl font-bold leading-[1.2] text-text-primary md:text-[40px]">
          {COMPARISON.headline}
        </h2>

        {/* Desktop table (sm+) */}
        <motion.div
          className="hidden w-full max-w-[1200px] overflow-x-auto rounded-[var(--radius)] border border-border bg-surface sm:block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-4 bg-border px-6 py-4">
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

          {COMPARISON.rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="grid grid-cols-4 border-t border-border px-6 py-4 transition-colors hover:bg-bg/30"
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

        {/* Mobile stacked cards (below sm) */}
        <motion.div
          className="flex w-full flex-col gap-4 sm:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {COMPARISON.rows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="rounded-[var(--radius)] border border-border bg-surface p-4"
            >
              <p className="mb-3 text-sm font-semibold text-text-primary">
                {row[0]}
              </p>
              <div className="flex flex-col gap-2">
                {valueHeaders.map((header, i) => (
                  <div key={i} className="flex items-start justify-between gap-3">
                    <span
                      className={`shrink-0 text-xs font-medium ${
                        i === 2 ? "text-accent" : "text-text-tertiary"
                      }`}
                    >
                      {header}
                    </span>
                    <span
                      className={`text-right text-xs ${
                        i === 2
                          ? "font-medium text-text-primary"
                          : "text-text-secondary"
                      }`}
                    >
                      {row[i + 1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
