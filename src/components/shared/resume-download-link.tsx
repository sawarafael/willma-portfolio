"use client";

import { Download, FileDown } from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";
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
  label,
  className,
  variant = "default",
  size = "default",
  icon = "download",
}: ResumeDownloadLinkProps) {
  const { dictionary } = useDictionary();
  const { site, ui } = dictionary;
  const resolvedLabel = label ?? ui.resume;
  const Icon = icon === "file" ? FileDown : Download;

  const handleClick = () => {
    triggerDownloadCelebration();
  };

  return (
    <a
      href={site.resumeUrl}
      download
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size }), className)}
      aria-label={resolvedLabel}
    >
      <Icon className="h-4 w-4" />
      {resolvedLabel}
    </a>
  );
}
