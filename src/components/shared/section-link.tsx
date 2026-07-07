"use client";

import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

interface SectionLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
  ariaLabel?: string;
}

export function SectionLink({
  href,
  className,
  children,
  onNavigate,
  ariaLabel,
}: SectionLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(href);
    onNavigate?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(className)}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
