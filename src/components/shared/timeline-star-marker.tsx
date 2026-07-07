"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStarMarkerProps {
  className?: string;
  index?: number;
  isActive?: boolean;
}

export function TimelineStarMarker({
  className,
  index = 0,
  isActive = false,
}: TimelineStarMarkerProps) {
  return (
    <motion.div
      className={cn(
        "absolute z-10 flex -translate-x-1/2 items-center justify-center",
        className,
      )}
      aria-hidden="true"
      animate={{
        rotate: [0, 6, -6, 0],
        y: [0, -3, 0, 2, 0],
      }}
      transition={{
        duration: 5 + index * 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.span
        className="absolute h-10 w-10 rounded-full bg-accent/25 blur-md"
        animate={{ opacity: [0.35, 0.85, 0.35], scale: [0.9, 1.15, 0.9] }}
        transition={{
          duration: 2.4 + index * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute h-6 w-6 rounded-full bg-white/10 blur-sm"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{
          duration: 1.8 + index * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      <motion.div
        animate={{
          opacity: [0.75, 1, 0.75],
          scale: isActive ? [1, 1.12, 1] : [1, 1.06, 1],
        }}
        transition={{
          duration: isActive ? 1.6 : 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Star
          className={cn(
            "h-5 w-5 fill-accent text-accent",
            isActive &&
              "drop-shadow-[0_0_14px_rgba(0,123,255,0.95)]",
            !isActive && "drop-shadow-[0_0_8px_rgba(0,123,255,0.65)]",
          )}
          strokeWidth={1.5}
        />
      </motion.div>
    </motion.div>
  );
}
