"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  bg?: "dark" | "alt";
  className?: string;
  narrow?: boolean;
}

export function SectionWrapper({
  children,
  id,
  bg = "dark",
  className = "",
  narrow = false,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`w-full ${bg === "alt" ? "bg-bg-alt" : "bg-bg"} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`mx-auto w-full px-6 md:px-12 lg:px-[120px] ${
          narrow ? "max-w-[900px]" : "max-w-[1440px]"
        }`}
      >
        {children}
      </div>
    </motion.section>
  );
}
