import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const orbs = Array.from({ length: 4 }).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (0.3 + i * 0.1),
      vy: (Math.random() - 0.5) * (0.3 + i * 0.1),
      size: 200 + i * 50,
      color: ["59,130,246", "34,211,238", "147,51,234", "99,102,241"][i % 4],
      opacity: [0.15, 0.1, 0.08, 0.12][i % 4],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -orb.size || orb.x > canvas.width + orb.size) orb.vx *= -1;
        if (orb.y < -orb.size || orb.y > canvas.height + orb.size) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.size
        );
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.opacity})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          orb.x - orb.size,
          orb.y - orb.size,
          orb.size * 2,
          orb.size * 2
        );
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
