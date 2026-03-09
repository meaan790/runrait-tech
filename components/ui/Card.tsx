"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon: Icon, title, description, className = "" }: CardProps) {
  return (
    <motion.div
      className={`flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-surface p-7 ${className}`}
      whileHover={{
        y: -2,
        borderColor: "rgba(0, 229, 204, 0.3)",
        transition: { duration: 0.2 },
      }}
    >
      <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
      <h3 className="text-base font-semibold leading-snug text-text-primary">
        {title}
      </h3>
      <p className="whitespace-pre-line text-sm leading-relaxed text-text-secondary">{description}</p>
    </motion.div>
  );
}
