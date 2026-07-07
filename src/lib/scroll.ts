export const HEADER_OFFSET = 80;

export function scrollToSection(href: string) {
  const id = href.replace(/^#/, "");
  const element = document.getElementById(id);

  if (!element) return;

  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
