"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionUniverseBackground } from "@/components/shared/section-universe-background";
import { TimelineStarMarker } from "@/components/shared/timeline-star-marker";
import { SectionHeader } from "@/components/shared/section-wrapper";
import { ANIMATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(
    experienceData.items[0]?.id ?? null,
  );

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <SectionUniverseBackground targetRef={sectionRef} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title={experienceData.title}
            subtitle={experienceData.subtitle}
            className="[&_h2]:text-white [&_p]:text-slate-300"
          />
        </FadeIn>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute top-0 bottom-0 left-[19px] w-px bg-white/20 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experienceData.items.map((item, index) => {
              const isOpen = openId === item.id;
              const isLeft = index % 2 === 0;

              return (
                <FadeIn key={item.id} delay={index * 0.1}>
                  <div className="relative">
                    <TimelineStarMarker
                      index={index}
                      isActive={isOpen}
                      className="top-6 left-[19px] md:left-1/2"
                    />

                    <div
                      className={cn(
                        "relative pl-12 md:pl-0 md:w-[calc(50%-2rem)]",
                        isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10",
                      )}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="w-full rounded-xl border border-white/10 bg-white/95 p-6 text-left shadow-soft-md backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1628]"
                        aria-expanded={isOpen}
                        aria-controls={`experience-${item.id}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium tracking-wide text-accent uppercase">
                              {item.period}
                            </p>
                            <h3 className="mt-1 text-lg font-semibold text-primary">
                              {item.role}
                            </h3>
                            <p className="mt-0.5 text-sm font-medium text-secondary">
                              {item.company}
                            </p>
                            {item.location && (
                              <p className="mt-1 flex items-center gap-1 text-xs text-text">
                                <MapPin className="h-3 w-3 shrink-0" />
                                {item.location}
                              </p>
                            )}
                          </div>
                          <ChevronDown
                            className={cn(
                              "mt-1 h-5 w-5 shrink-0 text-text transition-transform duration-300",
                              isOpen && "rotate-180",
                            )}
                          />
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`experience-${item.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: ANIMATION.duration,
                                ease: ANIMATION.ease,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 space-y-5 border-t border-border pt-5">
                                <div>
                                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                                    Responsabilidades
                                  </p>
                                  <ul className="mt-2 space-y-1.5">
                                    {item.responsibilities.map((resp, i) => (
                                      <li
                                        key={i}
                                        className="flex gap-2 text-sm text-text"
                                      >
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                        {resp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                                    Ferramentas
                                  </p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {item.tools.map((tool) => (
                                      <Badge key={tool} variant="secondary">
                                        {tool}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                                    Competências desenvolvidas
                                  </p>
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                      <Badge key={skill} variant="outline">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
