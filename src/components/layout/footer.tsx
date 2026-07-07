"use client";

import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { footerData, siteConfig } from "@/data/site";
import { ResumeDownloadLink } from "@/components/shared/resume-download-link";
import { SectionLink } from "@/components/shared/section-link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-primary">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-text">{footerData.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-primary">Navegação</p>
            <ul className="mt-4 space-y-2">
              {footerData.links.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className="text-sm text-text transition-colors hover:text-accent"
                  >
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-primary">Contato</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                  aria-label="Enviar e-mail"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                  aria-label="Telefone"
                >
                  {siteConfig.phone}
                </a>
              </li>
              {siteConfig.linkedin && (
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <ResumeDownloadLink
                  variant="ghost"
                  size="sm"
                  label="Currículo"
                  icon="file"
                  className="h-auto px-0 text-sm text-text hover:bg-transparent hover:text-accent"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-text">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
