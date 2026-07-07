import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills-section").then(
      (mod) => mod.SkillsSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then(
      (mod) => mod.ExperienceSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then(
      (mod) => mod.ProjectsSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const EducationSection = dynamic(
  () =>
    import("@/components/sections/education-section").then(
      (mod) => mod.EducationSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const CertificatesSection = dynamic(
  () =>
    import("@/components/sections/certificates-section").then(
      (mod) => mod.CertificatesSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ToolsSection = dynamic(
  () =>
    import("@/components/sections/tools-section").then(
      (mod) => mod.ToolsSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const CtaSection = dynamic(
  () =>
    import("@/components/sections/cta-section").then((mod) => mod.CtaSection),
  { loading: () => <SectionPlaceholder /> },
);

function SectionPlaceholder() {
  return <div className="h-32" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificatesSection />
      <ToolsSection />
      <CtaSection />
    </>
  );
}
