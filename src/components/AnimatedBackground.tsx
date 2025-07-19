import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const mouse = { x: 0, y: 0 };
    const colors = ['#00F5FF', '#9B5DE5', '#3A86FF', '#C5FF00'];

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow effect
        ctx.save();
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              ctx.save();
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 * (1 - distance / 120)})`;
              ctx.lineWidth = 1;
              ctx.shadowColor = '#00F5FF';
              ctx.shadowBlur = 5;
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Enhanced mouse effect with multiple layers
      const gradient1 = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
      gradient1.addColorStop(0, 'rgba(155, 93, 229, 0.15)');
      gradient1.addColorStop(0.5, 'rgba(0, 245, 255, 0.08)');
      gradient1.addColorStop(1, 'rgba(0, 245, 255, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(mouse.x - 150, mouse.y - 150, 300, 300);

      const gradient2 = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 80);
      gradient2.addColorStop(0, 'rgba(197, 255, 0, 0.2)');
      gradient2.addColorStop(1, 'rgba(197, 255, 0, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(mouse.x - 80, mouse.y - 80, 160, 160);

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A]/95 to-[#1a1a2e]/90 pointer-events-none z-1" />
      {/* Animated Grid */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none z-2"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}
      />
    </>
  );
};

export default AnimatedBackground;