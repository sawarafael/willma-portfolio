import type { Locale } from "@/i18n/config";
import { isValidLocale } from "@/i18n/config";

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  const withoutLocale =
    segments.length > 0 && isValidLocale(segments[0])
      ? segments.slice(1)
      : segments;

  const suffix = withoutLocale.length > 0 ? `/${withoutLocale.join("/")}` : "";
  return `/${locale}${suffix}`;
}
