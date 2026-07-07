import type { ProjectItem } from "@/types";

export const projectsData = {
  title: "Projetos",
  subtitle: "Estudos de caso e iniciativas de impacto",
  items: [
    {
      id: "proj-1",
      title: "Gestão Integrada de Contas a Pagar e Receber",
      category: "Processos Financeiros",
      problem:
        "A operação financeira do varejo de moda exigia controle rigoroso de adimplência e fluxo de caixa, com múltiplos canais de recebimento e prazos distintos.",
      solution:
        "Implementei rotinas estruturadas de gestão de AP/AR, com conciliação bancária e de vendas (cartões e boletos), garantindo integridade de saldos e saúde do fluxo de caixa.",
      tools: ["F360", "Conta Azul", "Microvix", "Excel"],
      result:
        "Fluxo de caixa monitorado continuamente, com relatórios gerenciais que sustentam a tomada de decisão e a adimplência organizacional.",
    },
    {
      id: "proj-2",
      title: "Conciliação Bancária e Cobranças no IEL",
      category: "Rotinas Financeiras",
      problem:
        "O instituto necessitava de conciliação bancária precisa, emissão fiscal regular e cobrança sistemática de empresas devedoras.",
      solution:
        "Estruturei rotinas de conciliação bancária semanal, emissão de notas fiscais, boletos e recibos, além de cobranças periódicas de empresas inadimplentes.",
      tools: ["Excel", "Word", "PowerPoint"],
      result:
        "Processos financeiros organizados, com cobranças semanais estruturadas e documentação fiscal emitida de forma consistente.",
    },
    {
      id: "proj-3",
      title: "Otimização do Controle de Insumos — Coca-Cola",
      category: "Processos Industriais",
      problem:
        "O controle de insumos na linha de produção dependia de processos manuais, com risco de ruptura no suprimento contínuo.",
      solution:
        "Desenvolvi planilhas de controle otimizadas para monitoramento de insumos, em apoio ao Engenheiro de Produção e à Analista Administrativa.",
      tools: ["Excel"],
      result:
        "Suprimento contínuo garantido para a linha de produção, com controle de insumos mais ágil e confiável via planilhas estruturadas.",
    },
  ] satisfies ProjectItem[],
};
