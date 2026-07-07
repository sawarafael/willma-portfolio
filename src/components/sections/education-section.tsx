"use client";

import { useRef } from "react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionUniverseBackground } from "@/components/shared/section-universe-background";
import { TimelineStarMarker } from "@/components/shared/timeline-star-marker";
import { SectionHeader } from "@/components/shared/section-wrapper";

export function EducationSection() {
  const { dictionary } = useDictionary();
  const { education, ui } = dictionary;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="formacao"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <SectionUniverseBackground targetRef={sectionRef} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title={education.title}
            subtitle={education.subtitle}
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
        </FadeIn>

        <div className="relative max-w-3xl">
          <div
            className="absolute top-0 bottom-0 left-[19px] w-px bg-white/20"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {education.items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="relative pl-12">
                  <TimelineStarMarker
                    index={index}
                    className="top-1 left-[19px]"
                  />

                  <div className="rounded-xl border border-white/10 bg-white/95 p-6 shadow-soft-md backdrop-blur-sm">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-xs font-medium tracking-wide text-accent uppercase">
                        {item.period}
                      </p>
                      <Badge
                        variant={
                          item.status === "completed" ? "secondary" : "default"
                        }
                      >
                        {item.status === "completed"
                          ? ui.completed
                          : ui.inProgress}
                      </Badge>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-primary">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-secondary">
                      {item.institution}
                    </p>
                    {item.description && (
                      <p className="mt-3 text-sm leading-relaxed text-text">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
