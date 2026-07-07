import type { SkillItem } from "@/types";

export const skillsData = {
  title: "Competências",
  subtitle: "Áreas de expertise e domínio técnico",
  items: [
    {
      title: "Gestão Administrativa",
      description: "Coordenação de rotinas, documentação e fluxos operacionais.",
      icon: "Briefcase",
    },
    {
      title: "Processos",
      description: "Mapeamento, padronização e melhoria contínua de processos.",
      icon: "GitBranch",
    },
    {
      title: "Fluxo de Caixa",
      description: "Projeções, acompanhamento e análise de movimentações financeiras.",
      icon: "TrendingUp",
    },
    {
      title: "Conciliação Bancária",
      description: "Conferência precisa entre extratos e registros contábeis.",
      icon: "Landmark",
    },
    {
      title: "Contas a Pagar",
      description: "Gestão de pagamentos, prazos e relacionamento com fornecedores.",
      icon: "ArrowUpRight",
    },
    {
      title: "Contas a Receber",
      description: "Controle de recebíveis, cobranças e inadimplência.",
      icon: "ArrowDownLeft",
    },
    {
      title: "Relatórios",
      description: "Elaboração de dashboards e relatórios gerenciais.",
      icon: "BarChart3",
    },
    {
      title: "Excel",
      description: "Planilhas avançadas, fórmulas, tabelas dinâmicas e automações.",
      icon: "Table2",
    },
    {
      title: "ERP",
      description: "Operação e parametrização de sistemas integrados de gestão.",
      icon: "Database",
    },
    {
      title: "Departamento Pessoal",
      description: "Apoio em rotinas de RH, admissões e folha de pagamento.",
      icon: "Users",
    },
    {
      title: "Organização",
      description: "Estruturação de arquivos, prazos e prioridades com método.",
      icon: "LayoutGrid",
    },
    {
      title: "Comunicação",
      description: "Interface clara entre áreas, fornecedores e stakeholders.",
      icon: "MessageSquare",
    },
  ] satisfies SkillItem[],
};
