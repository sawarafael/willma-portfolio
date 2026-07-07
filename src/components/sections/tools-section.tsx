"use client";

import { useDictionary } from "@/i18n/dictionary-provider";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/shared/section-wrapper";

export function ToolsSection() {
  const { dictionary } = useDictionary();
  const { tools } = dictionary;

  return (
    <SectionWrapper id="ferramentas" className="bg-slate-50/50">
      <FadeIn>
        <SectionHeader title={tools.title} subtitle={tools.subtitle} />
      </FadeIn>

      <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        {tools.items.map((tool) => (
          <StaggerItem key={tool.id}>
            <div className="group rounded-xl border border-border bg-white p-5 shadow-soft transition-all duration-300 hover:border-primary/20 hover:shadow-soft-md">
              <p className="text-sm font-semibold text-primary transition-colors group-hover:text-accent">
                {tool.name}
              </p>
              <p className="mt-1 text-xs text-text">{tool.category}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
