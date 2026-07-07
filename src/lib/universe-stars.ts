export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDuration: number;
  twinkleDelay: number;
  fallSpeed: number;
  fallDelay: number;
  shape: "dot" | "star";
}

function createStarLayer(
  count: number,
  seed: number,
  sizeRange: [number, number],
  shape: "dot" | "star",
): Star[] {
  return Array.from({ length: count }, (_, index) => {
    const base = index * seed;
    return {
      id: index,
      x: ((base * 17 + 13) % 1000) / 10,
      y: ((base * 29 + 7) % 1000) / 10,
      size:
        sizeRange[0] +
        (((base * 11) % 100) / 100) * (sizeRange[1] - sizeRange[0]),
      opacity: 0.35 + ((base * 3) % 55) / 100,
      twinkleDuration: 1.8 + ((base * 5) % 30) / 10,
      twinkleDelay: ((base * 7) % 30) / 10,
      fallSpeed: 14 + ((base * 13) % 80) / 10,
      fallDelay: ((base * 9) % 120) / 10,
      shape,
    };
  });
}

export const UNIVERSE_STARS = {
  far: createStarLayer(80, 3, [1.5, 2.5], "dot"),
  mid: createStarLayer(50, 7, [2.5, 4], "star"),
  near: createStarLayer(28, 11, [3, 5.5], "star"),
} as const;

export const UNIVERSE_COLORS = {
  deep: "#020617",
  navy: "#0a1628",
  mid: "#0f2744",
  light: "#1a3a5c",
  accent: "#007bff",
  glow: "#1e4d7b",
} as const;

export interface MousePoint {
  x: number;
  y: number;
  active: boolean;
}

export interface SectionSize {
  width: number;
  height: number;
}

export function getStarInteraction(
  star: Star,
  mouse: MousePoint,
  size: SectionSize,
  layerDepth: number,
) {
  const starX = (star.x / 100) * size.width;
  const starY = (star.y / 100) * size.height;

  const layerFactor = 0.22 + layerDepth * 0.08;
  const radius = 220 - layerDepth * 25;

  let pullX = 0;
  let pullY = 0;
  let proximity = 0;

  if (mouse.active && size.width > 0) {
    const dx = mouse.x - starX;
    const dy = mouse.y - starY;
    const distance = Math.hypot(dx, dy);
    proximity = Math.max(0, 1 - distance / radius);
    pullX = dx * proximity * layerFactor;
    pullY = dy * proximity * layerFactor;
  }

  const opacity = star.opacity * (0.55 + proximity * 0.7);
  const scale = 1 + proximity * 0.45;

  return { pullX, pullY, proximity, opacity, scale };
}