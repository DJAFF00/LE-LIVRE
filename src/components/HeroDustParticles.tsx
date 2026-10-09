import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  alphaSpeed: number;
  vx: number;
  vy: number;
  color: string;
  glowSize: number;
}

export const HeroDustParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Resize canvas to match display size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Palette of warm dust motes matching sunset palette
    const colors = [
      'rgba(255, 170, 80, ', // Warm Amber
      'rgba(255, 100, 20, ', // Vibrant Sunset Orange
      'rgba(255, 220, 160, ', // Soft Golden Dust
      'rgba(255, 255, 255, ', // Crisp Speck
    ];

    const particleCount = 45;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const radius = 0.8 + Math.random() * 2.0; // 0.8px to 2.8px
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        alpha: 0.15 + Math.random() * 0.5,
        targetAlpha: 0.15 + Math.random() * 0.6,
        alphaSpeed: 0.003 + Math.random() * 0.008,
        vx: (Math.random() - 0.5) * 0.12, // Very subtle atmospheric drift
        vy: -0.05 - Math.random() * 0.15, // Gentle upward convection like dust in warm light
        color: colorBase,
        glowSize: radius > 1.5 ? 4 + Math.random() * 4 : 0,
      });
    }

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Subtle alpha breathing
        if (Math.abs(p.alpha - p.targetAlpha) < 0.02) {
          p.targetAlpha = 0.1 + Math.random() * 0.65;
        } else if (p.alpha < p.targetAlpha) {
          p.alpha += p.alphaSpeed;
        } else {
          p.alpha -= p.alphaSpeed;
        }

        // Slow movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (p.glowSize > 0) {
          ctx.shadowBlur = p.glowSize;
          ctx.shadowColor = 'rgba(255, 110, 20, 0.7)';
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Pause animation when tab is inactive to save battery
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[3] mix-blend-screen opacity-90"
      style={{ width: '100%', height: '100%' }}
    />
  );
};
