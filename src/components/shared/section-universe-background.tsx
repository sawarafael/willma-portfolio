"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  UNIVERSE_COLORS,
  UNIVERSE_STARS,
  getStarInteraction,
  type MousePoint,
  type SectionSize,
  type Star,
} from "@/lib/universe-stars";

const MOUSE_STAR_LIFETIME_MS = 3000;

function MiniStarSvg({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2l2.2 6.8H21l-5.5 4 2.1 6.8L12 15.6 6.4 19.6l2.1-6.8L3 8.8h6.8L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function InteractiveStar({
  star,
  mouse,
  size,
  layerDepth,
  reducedMotion,
}: {
  star: Star;
  mouse: MousePoint;
  size: SectionSize;
  layerDepth: number;
  reducedMotion: boolean;
}) {
  const { pullX, pullY, opacity, scale } = getStarInteraction(
    star,
    mouse,
    size,
    layerDepth,
  );

  const content =
    star.shape === "star" ? (
      <MiniStarSvg size={star.size * 4.5} />
    ) : (
      <span
        className="block rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.6)]"
        style={{ width: star.size + 1, height: star.size + 1 }}
      />
    );

  if (reducedMotion) {
    return (
      <span
        className="absolute text-white"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          opacity: star.opacity,
        }}
      >
        {content}
      </span>
    );
  }

  return (
    <motion.span
      className="absolute text-white"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        x: pullX,
        y: pullY,
        opacity,
        scale,
      }}
      animate={{
        opacity: [opacity * 0.6, opacity, opacity * 0.65],
        scale: [scale * 0.92, scale * 1.05, scale * 0.95],
      }}
      transition={{
        duration: star.twinkleDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: star.twinkleDelay,
      }}
    >
      {content}
    </motion.span>
  );
}

function StarLayer({
  stars,
  mouse,
  size,
  layerDepth,
  scrollY,
  scrollX,
  reducedMotion,
  className,
}: {
  stars: readonly Star[];
  mouse: MousePoint;
  size: SectionSize;
  layerDepth: number;
  scrollY: MotionValue<number>;
  scrollX: MotionValue<number>;
  reducedMotion: boolean;
  className?: string;
}) {
  const layerMouseX = mouse.active
    ? (mouse.x - size.width / 2) * (0.04 * layerDepth)
    : 0;
  const layerMouseY = mouse.active
    ? (mouse.y - size.height / 2) * (0.03 * layerDepth)
    : 0;

  return (
    <motion.div
      className={className}
      style={{
        y: reducedMotion ? 0 : scrollY,
        x: reducedMotion ? 0 : scrollX,
      }}
      aria-hidden="true"
    >
      <motion.div style={{ x: layerMouseX, y: layerMouseY }}>
        {stars.map((star) => (
          <InteractiveStar
            key={star.id}
            star={star}
            mouse={mouse}
            size={size}
            layerDepth={layerDepth}
            reducedMotion={reducedMotion}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

interface MouseStarParticle {
  id: number;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  size: number;
  bornAt: number;
}

function MouseStarParticles({
  mouse,
  active,
  reducedMotion,
}: {
  mouse: MousePoint;
  active: boolean;
  reducedMotion: boolean;
}) {
  const [particles, setParticles] = useState<MouseStarParticle[]>([]);
  const nextId = useRef(0);
  const lastSpawn = useRef(0);
  const mouseRef = useRef(mouse);

  mouseRef.current = mouse;

  useEffect(() => {
    if (reducedMotion || !active) return;

    const now = performance.now();
    if (now - lastSpawn.current < 120) return;
    lastSpawn.current = now;

    const current = mouseRef.current;
    const batch = Array.from({ length: 2 }, () => ({
      id: nextId.current++,
      x: current.x + (Math.random() - 0.5) * 48,
      y: current.y + (Math.random() - 0.5) * 32,
      driftX: (Math.random() - 0.5) * 0.6,
      driftY: 0.8 + Math.random() * 1.2,
      size: 3 + Math.random() * 4,
      bornAt: Date.now(),
    }));

    setParticles((prev) => [...prev, ...batch].slice(-40));
  }, [mouse.x, mouse.y, active, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;

    let frame = 0;

    const tick = () => {
      const now = Date.now();

      setParticles((current) =>
        current
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.driftX,
            y: particle.y + particle.driftY,
          }))
          .filter((particle) => now - particle.bornAt < MOUSE_STAR_LIFETIME_MS),
      );

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [reducedMotion]);

  useEffect(() => {
    if (!active) {
      const timeout = window.setTimeout(() => setParticles([]), MOUSE_STAR_LIFETIME_MS);
      return () => window.clearTimeout(timeout);
    }
  }, [active]);

  if (reducedMotion || particles.length === 0) return null;

  const now = Date.now();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => {
        const age = now - particle.bornAt;
        const life = 1 - age / MOUSE_STAR_LIFETIME_MS;
        const fade =
          age < MOUSE_STAR_LIFETIME_MS * 0.15
            ? age / (MOUSE_STAR_LIFETIME_MS * 0.15)
            : life;

        return (
          <span
            key={particle.id}
            className="absolute text-accent"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: Math.max(0, fade * 0.9),
              transform: `translate(-50%, -50%) scale(${0.6 + fade * 0.5})`,
            }}
          >
            <MiniStarSvg size={particle.size * 3} />
          </span>
        );
      })}
    </div>
  );
}

function useSectionMouse(targetRef: RefObject<HTMLElement | null>) {
  const [mouse, setMouse] = useState<MousePoint>({ x: 0, y: 0, active: false });
  const [size, setSize] = useState<SectionSize>({ width: 0, height: 0 });

  useEffect(() => {
    const section = targetRef.current;
    if (!section) return;

    const updateSize = () => {
      setSize({
        width: section.offsetWidth,
        height: section.offsetHeight,
      });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(section);

    return () => observer.disconnect();
  }, [targetRef]);

  useEffect(() => {
    const section = targetRef.current;
    if (!section) return;

    const handleMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) return;

      setMouse({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      });
    };

    const handleLeave = () => {
      setMouse((current) => ({ ...current, active: false }));
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetRef]);

  return { mouse, size };
}

interface SectionUniverseBackgroundProps {
  targetRef: RefObject<HTMLElement | null>;
}

export function SectionUniverseBackground({
  targetRef,
}: SectionUniverseBackgroundProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { mouse, size } = useSectionMouse(targetRef);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const farScrollY = useTransform(scrollYProgress, [0, 1], [-110, 110]);
  const midScrollY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const nearScrollY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const farScrollX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const midScrollX = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const nearScrollX = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 110% 90% at 50% 0%, ${UNIVERSE_COLORS.light} 0%, ${UNIVERSE_COLORS.mid} 42%, ${UNIVERSE_COLORS.navy} 72%, ${UNIVERSE_COLORS.deep} 100%)`,
        }}
      />

      {mouse.active && !reducedMotion && (
        <motion.div
          className="absolute rounded-full blur-[70px]"
          style={{
            left: mouse.x - 100,
            top: mouse.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${UNIVERSE_COLORS.accent}30 0%, transparent 72%)`,
          }}
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <StarLayer
        stars={UNIVERSE_STARS.far}
        mouse={mouse}
        size={size}
        layerDepth={1}
        scrollY={farScrollY}
        scrollX={farScrollX}
        reducedMotion={reducedMotion}
        className="absolute inset-[-12%] h-[124%] w-full"
      />

      <StarLayer
        stars={UNIVERSE_STARS.mid}
        mouse={mouse}
        size={size}
        layerDepth={2}
        scrollY={midScrollY}
        scrollX={midScrollX}
        reducedMotion={reducedMotion}
        className="absolute inset-[-10%] h-[120%] w-full"
      />

      <StarLayer
        stars={UNIVERSE_STARS.near}
        mouse={mouse}
        size={size}
        layerDepth={3}
        scrollY={nearScrollY}
        scrollX={nearScrollX}
        reducedMotion={reducedMotion}
        className="absolute inset-[-8%] h-[116%] w-full"
      />

      <MouseStarParticles
        mouse={mouse}
        active={mouse.active}
        reducedMotion={reducedMotion}
      />

      <div
        className="absolute inset-x-0 top-0 h-20"
        style={{
          background:
            "linear-gradient(to bottom, rgb(255 255 255 / 0.14) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20"
        style={{
          background:
            "linear-gradient(to top, rgb(255 255 255 / 0.12) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
