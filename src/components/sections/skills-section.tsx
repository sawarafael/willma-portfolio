"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Database,
  GitBranch,
  Landmark,
  LayoutGrid,
  MessageSquare,
  Table2,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/shared/section-wrapper";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  GitBranch,
  TrendingUp,
  Landmark,
  ArrowUpRight,
  ArrowDownLeft,
  BarChart3,
  Table2,
  Database,
  Users,
  LayoutGrid,
  MessageSquare,
};

export function SkillsSection() {
  const { dictionary } = useDictionary();
  const { skills } = dictionary;

  return (
    <SectionWrapper id="competencias">
      <FadeIn>
        <SectionHeader title={skills.title} subtitle={skills.subtitle} />
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.items.map((skill) => {
          const Icon = iconMap[skill.icon] ?? Briefcase;
          return (
            <StaggerItem key={skill.title}>
              <Card className="h-full border-border/80">
                <CardHeader className="pb-3">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-text">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </SectionWrapper>
  );
}
