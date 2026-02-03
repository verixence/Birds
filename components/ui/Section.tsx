"use client";

import { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

type SectionTone = "default" | "clay" | "soft" | "subtle-border";

interface SectionProps extends MotionProps {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-softwhite",
  clay: "bg-clay/60",
  soft: "bg-softwhite",
  "subtle-border": "bg-softwhite border-y border-black/5",
};

export function Section({
  id,
  tone = "default",
  children,
  className = "",
  ...motionProps
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClasses[tone]} ${tone === "subtle-border" ? "" : "border-b border-black/5"}`}
    >
      <motion.div
        {...motionProps}
        className={`container py-16 sm:py-20 md:py-24 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

