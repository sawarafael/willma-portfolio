import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/shared/section-wrapper";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projetos">
      <FadeIn>
        <SectionHeader
          title={projectsData.title}
          subtitle={projectsData.subtitle}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 lg:grid-cols-3">
        {projectsData.items.map((project) => (
          <StaggerItem key={project.id}>
            <Card className="flex h-full flex-col">
              <CardHeader>
                <Badge variant="default" className="mb-3 w-fit">
                  {project.category}
                </Badge>
                <CardTitle className="text-lg leading-snug">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    Problema
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-text">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    Solução
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-text">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wide text-primary uppercase">
                    Ferramentas
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-auto rounded-lg bg-accent/5 p-4">
                  <p className="text-xs font-medium tracking-wide text-accent uppercase">
                    Resultado
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                    {project.result}
                  </p>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
