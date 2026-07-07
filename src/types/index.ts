export interface SiteConfig {
  name: string;
  title: string;
  role: string;
  description: string;
  url: string;
  locale: string;
  email: string;
  phone: string;
  linkedin: string;
  whatsapp: string;
  resumeUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroData {
  headline: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  cta: {
    resume: string;
    contact: string;
    linkedin: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: StatItem[];
}

export interface SkillItem {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  tools: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools: string[];
  result: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: "completed" | "inProgress";
  description?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
}

export interface CtaData {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface FooterData {
  tagline: string;
  copyright: string;
  links: NavItem[];
}
