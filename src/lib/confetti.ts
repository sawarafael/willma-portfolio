import confetti from "canvas-confetti";

const BRAND_COLORS = ["#007bff", "#0f172a", "#6b7280", "#ffffff", "#e2e8f0"];

function fireConfetti(options: confetti.Options) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  confetti({
    colors: BRAND_COLORS,
    disableForReducedMotion: true,
    ...options,
  });
}

export function celebrateResumeDownload() {
  fireConfetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.65 },
    ticks: 200,
    gravity: 0.9,
    scalar: 0.9,
  });

  window.setTimeout(() => {
    fireConfetti({
      particleCount: 60,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.7 },
    });
    fireConfetti({
      particleCount: 60,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.7 },
    });
  }, 180);
}
