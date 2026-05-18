"use client";

import { MouseEvent, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  metric: string;
  description: string;
  tag: string;
}

const achievements: Achievement[] = [
  {
    title: "IEEE SOU Student Branch",
    metric: "02",
    description: "Honored twice as IEEE Member of the Month for technical leadership and volunteer contribution.",
    tag: "AWARDS",
  },
  {
    title: "IEEE CS SBC Webmaster",
    metric: "100%",
    description: "Appointed to lead the student branch web portal systems, managing portal assets and deployment cycles.",
    tag: "APPOINTMENT",
  },
  {
    title: "Technical Hackathons & Events",
    metric: "10+",
    description: "Organized institutional hackathons, visual live-coding events, and technical computing workshops.",
    tag: "EVENTS",
  },
  {
    title: "System Automation Scripts",
    metric: "20+",
    description: "Engineered secure backend integrations, automation lines, and mail distribution scripts.",
    tag: "REACH",
  },
];

export default function Achievements() {
  const [coords, setCoords] = useState<{ [key: number]: { x: number; y: number } }>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords((prev) => ({ ...prev, [index]: { x, y } }));
  };

  return (
    <section
      id="achievements"
      className="relative flex w-full flex-col items-center justify-center bg-transparent py-32 px-6 md:px-16"
    >
      <div className="z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smp-red">
            05 / Milestones & Telemetry
          </span>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-smp-white md:text-6xl">
            Key <span className="text-smp-white/40">Achievements</span>
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => {
            const pos = coords[idx] || { x: 0, y: 0 };
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-smp-charcoal/20 p-8 md:p-12 hover:border-smp-red/20 transition-all duration-300"
              >
                {/* Dynamic Radial Gradient Spotlight Hover Tracker */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(255, 62, 29, 0.08), transparent 80%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  {/* Left detail */}
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[8px] text-smp-red tracking-widest uppercase">
                      {ach.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-smp-white group-hover:text-smp-red transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <p className="max-w-md font-body text-xs leading-relaxed text-smp-white/50 group-hover:text-smp-white/70 transition-colors">
                      {ach.description}
                    </p>
                  </div>

                  {/* Highlight Stat Counter */}
                  <div className="flex shrink-0">
                    <span className="font-display text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-smp-white to-smp-white/20 group-hover:from-smp-red group-hover:to-smp-orange transition-all duration-500">
                      {ach.metric}
                    </span>
                  </div>
                </div>

                {/* Animated light sweep border decorative line */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-smp-red/30 transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
