import type { EducationItem } from "@/types";

export const educationData = {
  title: "Formação",
  subtitle: "Trajetória acadêmica",
  items: [
    {
      id: "edu-1",
      institution: "Universidade Estácio de Sá",
      degree: "Bacharelado em Administração (EAD)",
      period: "Cursando",
      status: "em andamento",
      description:
        "Formação superior com foco em gestão empresarial, finanças corporativas e processos administrativos.",
    },
  ] as EducationItem[],
};
