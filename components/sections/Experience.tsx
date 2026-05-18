"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  tag: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Webmaster",
    organization: "IEEE SOU CS SBC (Silver Oak University Student Branch)",
    period: "2024 - PRESENT",
    tag: "TECHNOLOGY",
    responsibilities: [
      "Orchestrated development paradigms for global institutional student branches.",
      "Hosted cloud servers, maintained public repositories, and integrated database APIs.",
      "Conducted specialized technical events, guiding 200+ students in responsive structures.",
      "Spearheaded technical team coordinate loops, ensuring 100% operational uptime.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative flex w-full flex-col items-center justify-center bg-transparent py-32 px-6 md:px-16"
    >
      <div className="z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smp-red">
            04 / Sprints & Professional Log
          </span>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-smp-white md:text-6xl">
            Professional <span className="text-smp-white/40">Journey</span>
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative mt-24 flex flex-col gap-16 pl-6 md:pl-16">
          {/* Vertical central cyberline */}
          <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-smp-red via-smp-orange/20 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative flex flex-col gap-4 group"
            >
              {/* Dynamic Animated Node Pulse */}
              <div className="absolute -left-[30px] md:-left-[70px] top-1 flex h-4 w-4 items-center justify-center">
                <div className="absolute h-2 w-2 rounded-full bg-smp-red shadow-[0_0_12px_rgba(255,62,29,0.8)]" />
                <div className="absolute h-4 w-4 rounded-full border border-smp-red/30 animate-ping" />
              </div>

              {/* Node Card wrapper */}
              <div className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-smp-charcoal/20 p-8 hover:border-smp-red/20 transition-colors duration-500">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-[8px] text-smp-red tracking-widest uppercase border border-smp-red/20 bg-smp-red/5 px-2 py-0.5 rounded">
                    {exp.tag}
                  </span>
                  <span className="font-mono text-[10px] text-smp-white/40 uppercase tracking-widest">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold uppercase text-smp-white group-hover:text-smp-red transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="font-body text-xs text-smp-white/50 uppercase tracking-wide">
                  {exp.organization}
                </p>

                {/* Accomplishments Bullet loops */}
                <ul className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-6">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start gap-3 font-body text-xs text-smp-white/60">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-smp-orange" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
