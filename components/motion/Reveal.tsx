"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
} & Pick<HTMLAttributes<HTMLElement>, "aria-label">;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  "aria-label": ariaLabel,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = as === "section" ? motion.section : motion.div;

  if (reduce) {
    const Static = as === "section" ? "section" : "div";
    return (
      <Static className={className} aria-label={ariaLabel}>
        {children}
      </Static>
    );
  }

  return (
    <Tag
      className={className}
      aria-label={ariaLabel}
      initial="hidden"
      animate="show"
      custom={delay}
      variants={fadeUp}
    >
      {children}
    </Tag>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function Stagger({ children, className }: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
