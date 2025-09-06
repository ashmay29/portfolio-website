import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

/**
 * MouseGradient
 * A site-wide, cursor-following gradient glow that sits behind content.
 * - Uses Framer Motion springs for smoothness
 * - Pointer-events disabled so it never interferes with UI
 * - Place once near the root (e.g., in App.tsx) to enable globally
 */
const MouseGradient = () => {
  // Track the raw mouse coordinates
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  // Spring them for a silky follow effect
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });

  const lastYRef = useRef<number>(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      lastYRef.current = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  // Gentle auto-scroll when the cursor nears the bottom edge
  useEffect(() => {
    let rafId: number | null = null;

    const step = () => {
      const viewportH = window.innerHeight || 0;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - viewportH;
      const currentScroll = window.scrollY || window.pageYOffset;

      // Only auto-scroll if not already at bottom and cursor near bottom 15% of the screen
      const threshold = viewportH * 0.85;
      if (lastYRef.current > threshold && currentScroll < maxScroll - 1) {
        // Proximity factor 0..1 based on how close we are to the bottom edge
        const proximity = Math.min(
          1,
          Math.max(0, (lastYRef.current - threshold) / (viewportH * 0.15))
        );

        // Slow speed: ~0.4 to 1.0 px/frame (~24–60 px/s)
        const pixelsPerFrame = 4.5 + proximity * 1.5;
        const next = Math.min(maxScroll, currentScroll + pixelsPerFrame);
        window.scrollTo({ top: next, behavior: "auto" });
      }

      rafId = window.requestAnimationFrame(step);
    };

    rafId = window.requestAnimationFrame(step);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Build a multi-layered radial gradient following the cursor
  // Use modern HSL syntax (space-separated with / alpha) to avoid invalid color parsing
  const gradient = useMotionTemplate`
    radial-gradient(220px 220px at ${springX}px ${springY}px,
      hsl(35 100% 75% / 0.28), /* Soft Orange */
      transparent 65%
    ),
    radial-gradient(320px 320px at ${springX}px ${springY}px,
      hsl(250 80% 70% / 0.30), /* Lavender Blue */
      transparent 60%
    ),
    radial-gradient(260px 260px at ${springX}px ${springY}px,
      hsl(340 90% 75% / 0.26), /* Dusty Rose */
      transparent 62%
    )`;

  return (
    <motion.div
      aria-hidden
      className="gradient-container"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1, // Below most content which commonly uses z-10
        pointerEvents: "none",
        background: gradient,
        filter: "blur(16px)",
        opacity: 0.85,
        // Helps multiple colors show up distinctly on dark backgrounds
        mixBlendMode: "screen",
      }}
    />
  );
};

export default MouseGradient;
