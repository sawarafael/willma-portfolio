"use client";

import Image from "next/image";
import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { buttonVariants } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/fade-in";
import { ResumeDownloadLink } from "@/components/shared/resume-download-link";
import { SectionLink } from "@/components/shared/section-link";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { dictionary } = useDictionary();
  const { site, hero, ui } = dictionary;

  return (
    <SectionWrapper
      id="inicio"
      className="flex min-h-[100dvh] items-center pt-16"
      containerClassName="w-full"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <FadeIn delay={0.1}>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">
              {site.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-xl font-medium leading-snug text-secondary sm:text-2xl">
              {hero.headline}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-text md:text-lg">
              {hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ResumeDownloadLink
                variant="default"
                size="lg"
                label={hero.cta.resume}
              />
              <SectionLink
                href="#contato"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                <Mail className="h-4 w-4" />
                {hero.cta.contact}
              </SectionLink>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  <Linkedin className="h-4 w-4" />
                  {hero.cta.linkedin}
                </a>
              )}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-slate-50 shadow-soft-lg sm:max-w-md lg:max-w-none">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.8} className="mt-16 flex justify-center lg:mt-20">
        <SectionLink
          href="#sobre"
          className="group flex flex-col items-center gap-2 text-text transition-colors hover:text-accent"
          ariaLabel={ui.scrollToAbout}
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            {ui.explore}
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce transition-colors group-hover:text-accent" />
        </SectionLink>
      </FadeIn>
    </SectionWrapper>
  );
}
