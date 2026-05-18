"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SplitText from "../ui/SplitText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax scroll transforms smoothed with low-pass useSpring
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const textY = useTransform(smoothScrollY, [0, 600], [0, 150]);
  const portraitY = useTransform(smoothScrollY, [0, 600], [0, 80]);
  const bgScale = useTransform(smoothScrollY, [0, 1000], [1.0, 1.15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 30;
      const y = (clientY - window.innerHeight / 2) / 30;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-transparent px-6 py-24 md:px-16"
    >
      {/* Dynamic ambient energy glows */}
      <motion.div
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        className="pointer-events-none absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-smp-red/10 blur-[180px]"
      />
      <motion.div
        animate={{
          x: -mousePos.x * 0.3,
          y: -mousePos.y * 0.3,
        }}
        className="pointer-events-none absolute -bottom-40 left-10 h-[400px] w-[400px] rounded-full bg-smp-orange/5 blur-[150px]"
      />

      <div className="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Side: Typography */}
        <div className="flex flex-col justify-center text-left">
          {/* Parallax elements isolated to text details */}
          <motion.div style={{ y: textY }} className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-smp-red" />
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smp-red">
                Artificial Intelligence Engineer
              </span>
            </div>

            <h1 className="mt-6 flex flex-col font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-[0.85] tracking-tighter text-smp-white">
              <SplitText text="HELLO." />
              <SplitText text="I AM" className="text-smp-white/40" delay={0.2} />
              <span className="relative flex flex-col items-start mt-2 pr-6 md:pr-10 w-fit">
                <SplitText text="SHIVAM M. PATEL" className="text-smp-red text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold uppercase leading-none" delay={0.4} />
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.0, type: "spring" }}
                  className="absolute right-0 bottom-1 h-3 w-3 rounded-full bg-smp-white md:h-4 md:w-4"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
              className="mt-10 max-w-md font-body text-sm leading-relaxed text-smp-white/60 md:text-base"
            >
              Webmaster at IEEE SOU CS SBC. Evolving next-generation interactive systems, classified automation tools, and autonomous agent systems designed for 2035.
            </motion.p>
          </motion.div>

          {/* Action buttons completely anchored inside the main grid cell to prevent cutoffs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.0, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-smp-white/20 bg-smp-white/5 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smp-white transition-all duration-300 hover:border-smp-red hover:bg-smp-red/10"
            >
              <span>Explore Projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-transparent bg-transparent px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-smp-white/60 transition-all duration-300 hover:text-smp-white"
            >
              <span>Connect Systems</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: High-End Cinematic Interactive Portrait Portal */}
        <motion.div
          style={{ y: portraitY, scale: bgScale }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.div
            ref={portraitRef}
            animate={{
              rotateX: -mousePos.y * 1.0,
              rotateY: mousePos.x * 1.0,
            }}
            className="group relative h-[380px] w-[300px] overflow-hidden rounded-3xl border border-white/10 bg-smp-black shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-100 ease-out md:h-[520px] md:w-[400px]"
            style={{ perspective: 1000 }}
          >
            {/* 1. Cybernetic Grid Backdrop */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,_black,_transparent_80%)] pointer-events-none" />

            {/* 2. Deep Red Cyber Aura Glow behind Shivam */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(255,62,29,0.35)_0%,_transparent_75%)] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700 blur-2xl pointer-events-none" />

            {/* 3. Glowing Laser Scanner Bar (Interactive HUD) */}
            <div 
              className="absolute left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-smp-red to-transparent shadow-[0_0_15px_#ff3e1d,_0_0_5px_#ff3e1d] z-10 pointer-events-none"
              style={{
                animation: "laser-sweep 4.5s ease-in-out infinite",
              }}
            />

            {/* 4. Telemetry Corner Overlays */}
            <div className="absolute top-4 left-4 z-20 font-mono text-[8px] uppercase tracking-[0.25em] text-smp-white/40 group-hover:text-smp-red transition-colors duration-500 select-none">
              SYS.SCAN: ACTIVE
            </div>
            <div className="absolute top-4 right-4 z-20 font-mono text-[8px] uppercase tracking-[0.25em] text-smp-white/40 group-hover:text-smp-white/80 transition-colors duration-500 select-none">
              GRID: STABLE
            </div>
            <div className="absolute bottom-4 left-4 z-20 font-mono text-[8px] uppercase tracking-[0.25em] text-smp-white/30 select-none">
              ID: SMP_CORE_499
            </div>
            <div className="absolute bottom-4 right-4 z-20 font-mono text-[8px] uppercase tracking-[0.25em] text-smp-red/70 group-hover:text-smp-red animate-pulse select-none">
              TARGET_LOCKED
            </div>

            {/* 5. Portrait Image Container */}
            <div className="h-full w-full overflow-hidden relative z-0 flex items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portrait.png"
                alt="Shivam M. Patel portrait"
                className="h-[92%] w-auto max-w-none object-contain transition-all duration-700 scale-100 group-hover:scale-[1.03] filter drop-shadow-[0_0_20px_rgba(255,62,29,0.2)] group-hover:drop-shadow-[0_0_35px_rgba(255,62,29,0.35)]"
              />
            </div>

            {/* 6. Glowing borders and corner brackets */}
            <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-smp-red/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 h-5 w-5 border-b border-r border-smp-red opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-br-lg" />
            <div className="absolute -top-1 -left-1 h-5 w-5 border-t border-l border-smp-red opacity-50 group-hover:opacity-100 transition-all duration-500 rounded-tl-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-smp-white/30">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-6 w-[2px] rounded-full bg-smp-white/30"
        />
      </div>

      {/* Styled inline scroll animation custom properties */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes laser-sweep {
          0% { transform: translateY(-150px); opacity: 0.1; }
          50% { transform: translateY(380px); opacity: 0.9; }
          100% { transform: translateY(-150px); opacity: 0.1; }
        }
        @media (min-width: 768px) {
          @keyframes laser-sweep {
            0% { transform: translateY(-200px); opacity: 0.1; }
            50% { transform: translateY(520px); opacity: 0.9; }
            100% { transform: translateY(-200px); opacity: 0.1; }
          }
        }
      `}</style>
    </section>
  );
}
