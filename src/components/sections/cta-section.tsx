"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { ResumeDownloadLink } from "@/components/shared/resume-download-link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

export function CtaSection() {
  const { dictionary } = useDictionary();
  const { site, cta } = dictionary;

  return (
    <SectionWrapper id="contato">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-white px-6 py-16 text-center shadow-soft-md sm:px-12 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-white to-white"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text md:text-lg">
              {cta.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default", size: "lg" }))}
              >
                <MessageCircle className="h-4 w-4" />
                {cta.primaryButton}
              </a>
              <ResumeDownloadLink
                variant="secondary"
                size="lg"
                label={cta.secondaryButton}
              />
            </div>

            <Link
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </Link>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
