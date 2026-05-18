"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TypographyBreak() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Left & Right marquee scrolling transformations
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-[100vh] w-full flex-col justify-center overflow-hidden bg-smp-black py-20"
    >
      {/* Visual background lines */}
      <div className="absolute left-1/4 h-full w-[1px] bg-white/[0.02]" />
      <div className="absolute right-1/4 h-full w-[1px] bg-white/[0.02]" />

      <div className="flex flex-col gap-6 md:gap-12 w-full">
        {/* Line 1: Scroll Left Marquee */}
        <div className="flex overflow-hidden whitespace-nowrap w-full">
          <motion.div
            className="flex font-display text-[6vw] font-extrabold uppercase tracking-tighter leading-none text-transparent"
            style={{
              x: xLeft,
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
            }}
          >
            <span className="mr-12 hover:text-smp-red transition-colors duration-500">Artificial Intelligence</span>
            <span className="mr-12 text-smp-red">·</span>
            <span className="mr-12 hover:text-smp-red transition-colors duration-500">Autonomous Agents</span>
            <span className="mr-12 text-smp-red">·</span>
            <span className="mr-12 hover:text-smp-red transition-colors duration-500">Artificial Intelligence</span>
            <span className="mr-12 text-smp-red">·</span>
            <span className="mr-12 hover:text-smp-red transition-colors duration-500">Autonomous Agents</span>
          </motion.div>
        </div>

        {/* Line 2: Scroll Right Solid/Gradient Marquee */}
        <div className="flex overflow-hidden whitespace-nowrap w-full">
          <motion.div
            className="flex font-display text-[7vw] font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-smp-white via-smp-red/60 to-smp-white"
            style={{
              x: xRight,
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            <span className="mr-12">Automation Systems</span>
            <span className="mr-12 text-smp-red">·</span>
            <span className="mr-12">Future Experiences</span>
            <span className="mr-12 text-smp-red">·</span>
            <span className="mr-12">Automation Systems</span>
            <span className="mr-12 text-smp-red">·</span>
            <span className="mr-12">Future Experiences</span>
          </motion.div>
        </div>

        {/* Line 3: Scroll Left Webmaster / IEEE SBC */}
        <div className="flex overflow-hidden whitespace-nowrap w-full">
          <motion.div
            className="flex font-mono text-[4vw] font-bold uppercase tracking-widest leading-none text-smp-white/10"
            style={{ x: xLeft }}
          >
            <span className="mr-12 hover:text-smp-orange transition-colors duration-500">IEEE Webmaster SOU CS SBC</span>
            <span className="mr-12 text-smp-orange">·</span>
            <span className="mr-12 hover:text-smp-orange transition-colors duration-500">IEEE Webmaster SOU CS SBC</span>
          </motion.div>
        </div>
      </div>

      {/* Cybernetic details */}
      <div className="absolute top-10 left-10 font-mono text-[9px] uppercase tracking-[0.3em] text-smp-white/20">
        System Node Status: Operational
      </div>
      <div className="absolute bottom-10 right-10 font-mono text-[9px] uppercase tracking-[0.3em] text-smp-white/20">
        Sub-Systems Linked: 100%
      </div>
    </section>
  );
}
