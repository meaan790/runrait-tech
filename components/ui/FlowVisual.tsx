"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  Magnet,
  Inbox,
  Handshake,
  Heart,
  ChevronRight,
} from "lucide-react";

const steps = [
  { label: "Position", icon: Crosshair },
  { label: "Attract", icon: Magnet },
  { label: "Capture", icon: Inbox },
  { label: "Convert", icon: Handshake },
  { label: "Retain", icon: Heart },
];

export function FlowVisual() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          className="flex items-center gap-3 sm:gap-4"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
        >
          <div
            className={`flex flex-col items-center gap-2.5 rounded-[var(--radius)] border bg-surface px-4 py-5 sm:w-[140px] ${
              i === 1
                ? "border-accent"
                : "border-border"
            }`}
          >
            <step.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <span className="text-[13px] font-medium text-text-secondary">
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <ChevronRight className="hidden h-5 w-5 text-text-tertiary sm:block" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
