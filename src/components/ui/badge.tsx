import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" && "bg-primary/5 text-primary",
        variant === "secondary" && "bg-slate-100 text-secondary",
        variant === "outline" && "border border-border text-text",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
