import type { CertificateItem } from "@/types";

export const certificatesData = {
  title: "Cursos",
  subtitle: "Formações complementares e qualificações",
  items: [
    {
      id: "cert-1",
      title: "Administração — Telemarketing",
      issuer: "Formação Complementar",
      year: "",
    },
    {
      id: "cert-2",
      title: "Administração — Logística",
      issuer: "Formação Complementar",
      year: "",
    },
    {
      id: "cert-3",
      title: "Administração — Departamento Pessoal e Empreendedorismo",
      issuer: "Formação Complementar",
      year: "",
    },
    {
      id: "cert-4",
      title: "Introdução à Gestão de Projetos",
      issuer: "Formação Complementar",
      year: "",
    },
    {
      id: "cert-5",
      title: "Recursos Humanos",
      issuer: "Formação Complementar",
      year: "",
    },
  ] satisfies CertificateItem[],
};
