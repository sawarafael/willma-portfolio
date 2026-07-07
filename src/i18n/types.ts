import type {
  AboutData,
  CertificateItem,
  CtaData,
  EducationItem,
  ExperienceItem,
  FooterData,
  HeroData,
  NavItem,
  ProjectItem,
  SiteConfig,
  SkillItem,
  ToolItem,
} from "@/types";

export interface UiLabels {
  skipLink: string;
  explore: string;
  contact: string;
  backToTop: string;
  downloadToast: string;
  resume: string;
  completed: string;
  inProgress: string;
  responsibilities: string;
  tools: string;
  skillsDeveloped: string;
  problem: string;
  solution: string;
  result: string;
  navigation: string;
  complementaryTraining: string;
  sendEmail: string;
  phone: string;
  whatsapp: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  scrollToAbout: string;
}

export interface Dictionary {
  site: SiteConfig;
  navigation: NavItem[];
  footer: FooterData;
  hero: HeroData;
  about: AboutData;
  skills: {
    title: string;
    subtitle: string;
    items: SkillItem[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: ProjectItem[];
  };
  education: {
    title: string;
    subtitle: string;
    items: EducationItem[];
  };
  certificates: {
    title: string;
    subtitle: string;
    items: CertificateItem[];
  };
  tools: {
    title: string;
    subtitle: string;
    items: ToolItem[];
  };
  cta: CtaData;
  ui: UiLabels;
}
