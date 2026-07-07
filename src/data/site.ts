import type { FooterData, NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Willma Gabriela Matoso dos Santos",
  title: "Willma Matoso dos Santos — Assistente Financeira",
  role: "Assistente Financeira III",
  description:
    "Acadêmica de Administração com sólida trajetória nas áreas financeira e administrativa. Especialista em fluxo de caixa, conciliação bancária e sistemas ERP.",
  url: "https://willmamatoso.vercel.app",
  locale: "pt_BR",
  email: "willmamatosobts@gmail.com",
  phone: "(91) 98523-3514",
  linkedin: "",
  whatsapp: "https://wa.me/5591985233514",
  resumeUrl: "/cv/Willma_Matoso_Curriculo.pdf",
};

export const navigation: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Competências", href: "#competencias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export const footerData: FooterData = {
  tagline: "Organização, precisão e excelência em cada processo financeiro.",
  copyright: `© ${new Date().getFullYear()} Willma Gabriela Matoso dos Santos. Todos os direitos reservados.`,
  links: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ],
};
