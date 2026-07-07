import { aboutData } from "@/data/about";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/shared/section-wrapper";
import { StatCard } from "@/components/shared/stat-card";

export function AboutSection() {
  return (
    <SectionWrapper id="sobre" className="bg-slate-50/50">
      <FadeIn>
        <SectionHeader title={aboutData.title} subtitle={aboutData.subtitle} />
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn direction="right">
          <div className="space-y-5">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-text md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 gap-4">
          {aboutData.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
}
