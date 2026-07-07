import type { Locale } from "@/i18n/config";
import { defaultLocale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { dictionaryEn } from "@/i18n/dictionaries/en";
import { dictionaryIt } from "@/i18n/dictionaries/it";
import { dictionaryJa } from "@/i18n/dictionaries/ja";
import { dictionaryPt } from "@/i18n/dictionaries/pt";

const dictionaries: Record<Locale, Dictionary> = {
  pt: dictionaryPt,
  en: dictionaryEn,
  it: dictionaryIt,
  ja: dictionaryJa,
};

export function getDictionary(locale: string): Dictionary {
  if (locale in dictionaries) {
    return dictionaries[locale as Locale];
  }
  return dictionaries[defaultLocale];
}
