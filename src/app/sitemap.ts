import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function sitemap(): MetadataRoute.Sitemap {
  const { site } = getDictionary("pt");

  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: locale === "pt" ? 1 : 0.9,
  }));
}
