import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SetHtmlLang } from "@/components/layout/set-html-lang";
import { SiteChrome } from "@/components/layout/site-chrome";
import { DictionaryProvider } from "@/i18n/dictionary-provider";
import { htmlLang, isValidLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  const { site } = dictionary;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.title,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: [
      site.role,
      "Gestão Financeira",
      "Contas a Pagar",
      "Contas a Receber",
      "Conciliação Bancária",
      "ERP",
      site.name,
      "Belém",
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    openGraph: {
      type: "website",
      locale: site.locale,
      url: `${site.url}/${locale}`,
      title: site.title,
      description: site.description,
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    },
    manifest: "/manifest.json",
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: Object.fromEntries(
        locales.map((loc) => [htmlLang[loc], `${site.url}/${loc}`]),
      ),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <DictionaryProvider locale={locale} dictionary={dictionary}>
      <SetHtmlLang locale={locale} />
      <SiteChrome />
      <Header />
      <main id="conteudo-principal" className="flex-1">
        {children}
      </main>
      <Footer />
    </DictionaryProvider>
  );
}
