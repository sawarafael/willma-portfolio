import { Award } from "lucide-react";
import { certificatesData } from "@/data/certificates";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/fade-in";
import {
  SectionHeader,
  SectionWrapper,
} from "@/components/shared/section-wrapper";

export function CertificatesSection() {
  return (
    <SectionWrapper id="certificados">
      <FadeIn>
        <SectionHeader
          title={certificatesData.title}
          subtitle={certificatesData.subtitle}
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificatesData.items.map((cert) => (
          <StaggerItem key={cert.id}>
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/5">
                  <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <CardTitle className="text-base leading-snug">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-secondary">{cert.issuer}</p>
                {cert.year && (
                  <p className="mt-1 text-xs text-text">{cert.year}</p>
                )}
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
