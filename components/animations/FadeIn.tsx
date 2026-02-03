"use client";

import React, { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

interface FadeInProps extends MotionProps {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
}

export function FadeIn({
  children,
  as: Tag = "div",
  ...motionProps
}: FadeInProps) {
  const MotionTag = motion[Tag as keyof typeof motion] as any;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.23, 0.84, 0.44, 1] }}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}

