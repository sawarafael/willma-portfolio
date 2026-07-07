"use client";

import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { useDictionary } from "@/i18n/dictionary-provider";
import { ResumeDownloadLink } from "@/components/shared/resume-download-link";
import { SectionLink } from "@/components/shared/section-link";

export function Footer() {
  const { dictionary } = useDictionary();
  const { site, footer, ui } = dictionary;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-primary">{site.name}</p>
            <p className="mt-2 text-sm text-text">{footer.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-primary">{ui.navigation}</p>
            <ul className="mt-4 space-y-2">
              {footer.links.map((link) => (
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
            <p className="text-sm font-medium text-primary">{ui.contact}</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                  aria-label={ui.sendEmail}
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                  aria-label={ui.phone}
                >
                  {site.phone}
                </a>
              </li>
              {site.linkedin && (
                <li>
                  <a
                    href={site.linkedin}
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
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text transition-colors hover:text-accent"
                  aria-label={ui.whatsapp}
                >
                  <MessageCircle className="h-4 w-4" />
                  {ui.whatsapp}
                </a>
              </li>
              <li>
                <ResumeDownloadLink
                  variant="ghost"
                  size="sm"
                  label={ui.resume}
                  icon="file"
                  className="h-auto px-0 text-sm text-text hover:bg-transparent hover:text-accent"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-text">
            © {year} {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
