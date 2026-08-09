import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating Numbers setup
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    interface FloatingNumber {
      x: number;
      y: number;
      digit: string;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }

    const floatingNums: FloatingNumber[] = [];
    const numCount = Math.min(Math.floor(width / 30), 45);

    for (let i = 0; i < numCount; i++) {
      floatingNums.push({
        x: Math.random() * width,
        y: Math.random() * height,
        digit: numbers[Math.floor(Math.random() * numbers.length)],
        size: Math.random() * 24 + 14,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        fadeSpeed: (Math.random() - 0.5) * 0.005,
        color: Math.random() > 0.3 ? '#8B5CF6' : '#22D3EE',
      });
    }

    // Floating particles
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 20), 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.5,
        color: Math.random() > 0.4 ? '#8B5CF6' : Math.random() > 0.5 ? '#A855F7' : '#22D3EE',
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render ambient soft glow gradients
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.3, 10, width * 0.2, height * 0.3, width * 0.4);
      grad1.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      grad1.addColorStop(1, 'rgba(7, 6, 13, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 10, width * 0.8, height * 0.7, width * 0.4);
      grad2.addColorStop(0, 'rgba(34, 211, 238, 0.08)');
      grad2.addColorStop(1, 'rgba(7, 6, 13, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Numbers (0-9)
      ctx.font = '700 18px "Orbitron", sans-serif';
      floatingNums.forEach((fn) => {
        fn.y += fn.speedY;
        fn.x += fn.speedX;
        fn.opacity += fn.fadeSpeed;

        if (fn.opacity <= 0.05 || fn.opacity >= 0.7) {
          fn.fadeSpeed = -fn.fadeSpeed;
        }

        if (fn.y < -30) {
          fn.y = height + 30;
          fn.x = Math.random() * width;
          fn.digit = numbers[Math.floor(Math.random() * numbers.length)];
        }

        ctx.save();
        ctx.font = `700 ${fn.size}px "Orbitron", sans-serif`;
        ctx.globalAlpha = Math.max(0.05, Math.min(0.7, fn.opacity));
        ctx.fillStyle = fn.color;
        ctx.shadowColor = fn.color;
        ctx.shadowBlur = 12;
        ctx.fillText(fn.digit, fn.x, fn.y);
        ctx.restore();
      });

      // Render Floating Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};
