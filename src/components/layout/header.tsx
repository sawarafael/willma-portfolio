"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { HEADER_OFFSET } from "@/lib/scroll";
import { SectionLink } from "@/components/shared/section-link";
import { cn } from "@/lib/utils";

const sectionIds = navigation.map((item) => item.href.replace("#", ""));

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(["inicio", ...sectionIds], HEADER_OFFSET + 20);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-white/85 shadow-soft backdrop-blur-xl"
          : "bg-white/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Navegação principal"
      >
        <SectionLink
          href="#inicio"
          onNavigate={closeMenu}
          className="relative text-sm font-semibold tracking-tight text-primary transition-opacity hover:opacity-70"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </SectionLink>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;

            return (
              <li key={item.href}>
                <SectionLink
                  href={item.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "font-medium text-primary"
                      : "text-text hover:text-primary",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-md bg-accent/8"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </SectionLink>
              </li>
            );
          })}
        </ul>

        <SectionLink
          href="#contato"
          className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-soft transition-all hover:bg-primary/90 active:scale-[0.98] md:inline-flex"
        >
          Contato
        </SectionLink>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-slate-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-primary/10 backdrop-blur-[2px] md:hidden"
              aria-label="Fechar menu"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-x-0 top-16 z-50 border-b border-border bg-white shadow-soft-md md:hidden"
            >
              <ul className="flex flex-col gap-1 p-5">
                {navigation.map((item, index) => {
                  const id = item.href.replace("#", "");
                  const isActive = activeId === id;

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <SectionLink
                        href={item.href}
                        onNavigate={closeMenu}
                        className={cn(
                          "block rounded-lg px-4 py-3 text-base transition-colors",
                          isActive
                            ? "bg-accent/8 font-medium text-primary"
                            : "text-primary hover:bg-slate-50",
                        )}
                      >
                        {item.label}
                      </SectionLink>
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.04 }}
                  className="mt-4"
                >
                  <SectionLink
                    href="#contato"
                    onNavigate={closeMenu}
                    className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-white"
                  >
                    Contato
                  </SectionLink>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
