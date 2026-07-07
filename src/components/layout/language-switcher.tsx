"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { useDictionary } from "@/i18n/dictionary-provider";
import { getLocalizedPath } from "@/lib/locale-path";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, dictionary } = useDictionary();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg border border-border bg-slate-50/80 p-0.5",
        className,
      )}
      role="group"
      aria-label={dictionary.ui.language}
    >
      {locales.map((loc) => {
        const isActive = locale === loc;

        return (
          <Link
            key={loc}
            href={getLocalizedPath(pathname, loc)}
            className={cn(
              "min-w-[2.25rem] rounded-md px-2 py-1.5 text-center text-xs font-semibold tracking-wide transition-all",
              isActive
                ? "bg-white text-primary shadow-soft"
                : "text-text hover:text-primary",
            )}
            aria-current={isActive ? "true" : undefined}
            aria-label={localeLabels[loc]}
          >
            {localeLabels[loc]}
          </Link>
        );
      })}
    </div>
  );
}
