import type { MetadataRoute } from "next";
import { getDictionary } from "@/i18n/get-dictionary";

export default function robots(): MetadataRoute.Robots {
  const { site } = getDictionary("pt");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
