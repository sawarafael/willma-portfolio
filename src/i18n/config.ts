export const locales = ["pt", "en", "it", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  it: "IT",
  ja: "JA",
};

export const htmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  it: "it",
  ja: "ja",
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
