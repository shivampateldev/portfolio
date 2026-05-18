"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [dotsText, setDotsText] = useState("");

  useEffect(() => {
    // 1. Text blinking for a system loading feel
    const textInterval = setInterval(() => {
      setDotsText((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    // 2. Ambient background particles inside Canvas
    const canvas = particleCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles: Array<{ x: number; y: number; vx: number; vy: number; r: number; alpha: number }> = [];
        
        for (let i = 0; i < 60; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            r: Math.random() * 2 + 0.5,
            alpha: Math.random() * 0.5 + 0.1,
          });
        }

        let animationFrameId: number;
        const animateParticles = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "rgba(240, 240, 240, 0.4)";
          
          particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;

            // wrap edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
          });

          animationFrameId = requestAnimationFrame(animateParticles);
        };
        animateParticles();

        return () => {
          clearInterval(textInterval);
          cancelAnimationFrame(animationFrameId);
        };
      }
    }
  }, []);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    const container = containerRef.current;
    const glow = glowRef.current;

    if (!paths || !container) return;

    // Set paths starting state (hidden)
    gsap.set(paths, { strokeDasharray: 500, strokeDashoffset: 500 });
    gsap.set(glow, { scale: 0.8, opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        // Dissolve / Fade out loading screen
        gsap.to(container, {
          opacity: 0,
          duration: 1.5,
          ease: "power4.inOut",
          onComplete: () => {
            onComplete();
          },
        });
      },
    });

    // Loading Animation Timeline
    tl.to(
      paths,
      {
        strokeDashoffset: 0,
        duration: 3.5,
        ease: "power2.inOut",
        stagger: 0.4,
      },
      "+=0.5"
    )
      // Pulse background lighting
      .to(
        glow,
        {
          opacity: 0.15,
          scale: 1.2,
          duration: 2.0,
          ease: "power2.out",
        },
        "-=2.0"
      )
      // High-contrast chromatic flash & dissolve effect
      .to(svgRef.current, {
        filter: "drop-shadow(0 0 25px rgba(255,62,29,0.8)) blur(2px)",
        scale: 1.05,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      })
      .to(svgRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power3.in",
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-smp-black"
    >
      {/* Background ambient particles */}
      <canvas ref={particleCanvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />

      {/* Cybernetic energy glow behind the logo */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-smp-red opacity-0 blur-[150px]"
      />

      <div className="relative flex flex-col items-center gap-12">
        {/* Animated logo vectors */}
        <svg
          ref={svgRef}
          width="320"
          height="140"
          viewBox="0 0 320 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300"
        >
          {/* Logo element S */}
          <path
            d="M 20 110 L 80 110 C 95 110 95 75 80 75 L 40 75 C 25 75 25 30 40 30 L 100 30"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Logo element M */}
          <path
            d="M 120 110 L 120 30 L 160 85 L 200 30 L 200 110"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Logo element P */}
          <path
            d="M 230 110 L 230 30 L 285 30 C 305 30 305 70 285 70 L 230 70"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Cinematic progress text */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-[0.4em] text-smp-white/40 uppercase">
            Constructing Experience{dotsText}
          </span>

        </div>
      </div>
    </div>
  );
}
