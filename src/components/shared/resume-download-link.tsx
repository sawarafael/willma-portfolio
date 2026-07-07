"use client";

import { Download, FileDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { triggerDownloadCelebration } from "@/lib/download-celebration";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface ResumeDownloadLinkProps
  extends VariantProps<typeof buttonVariants> {
  label?: string;
  className?: string;
  icon?: "download" | "file";
}

export function ResumeDownloadLink({
  label = "Baixar currículo",
  className,
  variant = "default",
  size = "default",
  icon = "download",
}: ResumeDownloadLinkProps) {
  const Icon = icon === "file" ? FileDown : Download;

  const handleClick = () => {
    triggerDownloadCelebration();
  };

  return (
    <a
      href={siteConfig.resumeUrl}
      download
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size }), className)}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
