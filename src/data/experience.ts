import type { ExperienceItem } from "@/types";

export const experienceData = {
  title: "Experiência",
  subtitle: "Trajetória profissional e contribuições",
  items: [
    {
      id: "exp-1",
      company: "JMB de Souza Comércio de Vestuário (Grupo Marcco)",
      role: "Assistente Financeira III",
      period: "Abr 2025 — Presente",
      location: "Belém, PA",
      responsibilities: [
        "Gestão completa de Contas a Pagar e Receber, garantindo a saúde do fluxo de caixa e a adimplência.",
        "Conciliação bancária e de vendas (cartões e boletos) com foco na integridade de saldos.",
        "Emissão de notas fiscais, boletos e recibos, além da gestão de cobranças.",
        "Interface com a produção para controle de custos e suporte administrativo ao varejo de moda.",
        "Monitoramento de fluxo de caixa e geração de relatórios para suporte à tomada de decisão gerencial.",
      ],
      tools: ["F360", "Conta Azul", "Microvix", "iShop", "Extranet", "Excel"],
      skills: [
        "Fluxo de Caixa",
        "Conciliação Bancária",
        "Contas a Pagar",
        "Contas a Receber",
        "Relatórios",
      ],
    },
    {
      id: "exp-2",
      company: "Instituto Euvaldo Lodi — IEL",
      role: "Estagiária Financeira",
      period: "Set 2022 — Mar 2025",
      location: "Belém, PA",
      responsibilities: [
        "Auxiliar na conciliação bancária e emissão de notas fiscais, boletos, recibos e ISS.",
        "Realização de cobranças semanais de empresas devedoras.",
        "Controle de ponto dos funcionários e elaboração de planilhas de vale-transporte mensal.",
        "Preparação da folha de pagamento dos estagiários.",
      ],
      tools: ["Excel", "Word", "PowerPoint"],
      skills: [
        "Conciliação Bancária",
        "Departamento Pessoal",
        "Contas a Receber",
        "Organização",
      ],
    },
    {
      id: "exp-3",
      company: "COMPAR (Coca-Cola)",
      role: "Auxiliar de Escritório",
      period: "Fev 2016 — Jan 2018",
      location: "Belém, PA",
      responsibilities: [
        "Auxiliar o Engenheiro de Produção e a Analista Administrativa no setor de gerência industrial.",
        "Otimização do controle de insumos via planilhas, garantindo o suprimento contínuo para a linha de produção.",
        "Suporte às rotinas administrativas do setor industrial.",
      ],
      tools: ["Excel"],
      skills: ["Processos", "Organização", "Excel"],
    },
  ] satisfies ExperienceItem[],
};
