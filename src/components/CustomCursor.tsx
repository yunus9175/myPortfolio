import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);

    updateEnabled();
    media.addEventListener("change", updateEnabled);

    return () => media.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let frameX = 0;
    let frameY = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const onOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      setHoveringInteractive(
        Boolean(target?.closest("a, button, input, textarea, [role='button']"))
      );
    };

    const animate = () => {
      frameX += (targetX - frameX) * 0.34;
      frameY += (targetY - frameY) * 0.34;
      setRingPosition({ x: frameX, y: frameY });
      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
      aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-emerald-300 mix-blend-screen transition-transform duration-75 will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-emerald-300/70 transition-[width,height,opacity,transform] duration-100 will-change-transform ${
          hoveringInteractive ? "h-14 w-14 opacity-80" : "h-10 w-10 opacity-60"
        }`}
        style={{
          transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
