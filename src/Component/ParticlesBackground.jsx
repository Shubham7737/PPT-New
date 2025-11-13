import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height, dpr;
    let particles = [];
    const LINK_DISTANCE = 110;
    const SPEED = 0.28;

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function spawnParticles() {
      const isMobile = window.innerWidth < 768;
      const MAX = isMobile
        ? Math.min(50, Math.floor((width * height) / 15000))
        : Math.min(140, Math.floor((width * height) / 13000));

      particles = new Array(MAX).fill(0).map(() => {
        const angle = Math.random() * Math.PI * 2;
        const speed = SPEED * (0.6 + Math.random() * 0.8);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: rand(1.0, 2.2),
        };
      });
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawnParticles();
    }

    let lastTime = 0;
    function step(timestamp) {
      if (!lastTime) lastTime = timestamp;
      if (timestamp - lastTime > 33) { // ~30fps
        lastTime = timestamp;
        ctx.clearRect(0, 0, width, height);

        const isMobile = window.innerWidth < 768;

        // links (skip on mobile)
        if (!isMobile) {
          for (let i = 0; i < particles.length; i++) {
            const a = particles[i];
            for (let j = i + 1; j < particles.length; j++) {
              const b = particles[j];
              const dx = a.x - b.x,
                dy = a.y - b.y,
                dist = Math.hypot(dx, dy);
              if (dist < LINK_DISTANCE) {
                const alpha = 1 - dist / LINK_DISTANCE;
                ctx.strokeStyle = `rgba(0,212,255,${0.14 * alpha})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          }
        }

        // dots
        for (const p of particles) {
          ctx.fillStyle = "rgba(86,246,166,0.9)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }
      }
      requestAnimationFrame(step);
    }

    resize();
    step();

    // Throttle resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
};

export default ParticlesBackground;
