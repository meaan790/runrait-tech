"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-[var(--radius)] transition-colors";
  const variants = {
    primary: "bg-accent text-bg px-9 py-4 text-base hover:bg-accent-hover",
    secondary:
      "bg-surface text-text-primary border border-border px-9 py-4 text-base hover:border-accent/40",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
