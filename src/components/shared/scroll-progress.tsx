"use client";

import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  const scaleX = useSpring(progress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
