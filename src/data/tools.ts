import type { ToolItem } from "@/types";

export const toolsData = {
  title: "Ferramentas",
  subtitle: "Tecnologias e sistemas utilizados no dia a dia",
  items: [
    { id: "tool-1", name: "Microsoft Excel", category: "Planilhas" },
    { id: "tool-2", name: "Microsoft Word", category: "Documentos" },
    { id: "tool-3", name: "Microsoft PowerPoint", category: "Apresentações" },
    { id: "tool-4", name: "F360", category: "ERP" },
    { id: "tool-5", name: "Conta Azul", category: "ERP" },
    { id: "tool-6", name: "Microvix", category: "ERP" },
    { id: "tool-7", name: "iShop", category: "Gestão" },
    { id: "tool-8", name: "Extranet", category: "Gestão" },
    { id: "tool-9", name: "Google Workspace", category: "Produtividade" },
  ] satisfies ToolItem[],
};
