import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const innerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const s = containerRef.current;
      const inner = innerRef.current;
      if (!s) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      s.style.setProperty("--mouse-x", `${x}%`);
      s.style.setProperty("--mouse-y", `${y}%`);

      if (inner) {
        inner.style.left = `${e.clientX}px`;
        inner.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="spotlight fixed inset-0 pointer-events-none"
    >
      <div ref={innerRef} className="spotlight-inner" />
    </div>
  );
}
