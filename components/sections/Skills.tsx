"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number; // percentage
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Technical Core (Primary)",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Java", level: 90, icon: "☕" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS", level: 92, icon: "🎨" },
      { name: "JavaScript (Basics)", level: 80, icon: "⚡" },
      { name: "Git & GitHub", level: 92, icon: "🐙" },
      { name: "Web Development", level: 95, icon: "🕸️" },
    ],
  },
  {
    title: "AI, Data & Design (Primary)",
    skills: [
      { name: "Artificial Intelligence", level: 95, icon: "🤖" },
      { name: "Machine Learning", level: 92, icon: "🧠" },
      { name: "Data Analysis", level: 90, icon: "📊" },
      { name: "Prompt Engineering", level: 95, icon: "💬" },
      { name: "Excel & Google Sheets Automation", level: 93, icon: "📈" },
      { name: "UI/UX Basics", level: 85, icon: "✨" },
    ],
  },
  {
    title: "Professional & Soft Skills (Primary)",
    skills: [
      { name: "Leadership", level: 95, icon: "👑" },
      { name: "Event Management", level: 92, icon: "📅" },
      { name: "Public Speaking", level: 90, icon: "🗣️" },
      { name: "Team Collaboration", level: 94, icon: "🤝" },
      { name: "Strategic Planning", level: 93, icon: "🎯" },
      { name: "Communication", level: 92, icon: "📞" },
      { name: "Problem Solving", level: 95, icon: "🧩" },
      { name: "Analytical Thinking", level: 94, icon: "🔍" },
    ],
  },
  {
    title: "Secondary Stack (Familiarity: 20-50% only)",
    skills: [
      { name: "C++", level: 45, icon: "💻" },
      { name: "React", level: 40, icon: "⚛️" },
      { name: "Next.js", level: 35, icon: "▲" },
      { name: "Tailwind CSS", level: 45, icon: "🎨" },
      { name: "Node.js", level: 30, icon: "🟢" },
      { name: "Express", level: 25, icon: "🚂" },
      { name: "MongoDB", level: 30, icon: "🍃" },
      { name: "PostgreSQL", level: 35, icon: "🐘" },
      { name: "TensorFlow", level: 40, icon: "🤖" },
      { name: "OpenCV", level: 30, icon: "👁️" },
      { name: "Three.js", level: 35, icon: "🌐" },
      { name: "Docker", level: 25, icon: "🐳" },
      { name: "GSAP", level: 30, icon: "📈" },
      { name: "Framer Motion", level: 45, icon: "✨" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex w-full flex-col items-center justify-center bg-transparent py-32 px-6 md:px-16"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,62,29,0.02),_transparent_70%)] pointer-events-none" />

      <div className="z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smp-red">
            02 / Core Capabilities
          </span>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-smp-white md:text-6xl">
            Tech <span className="text-smp-white/40">Stack & Matrix</span>
          </h2>
        </div>

        {/* Categories Stack */}
        <div className="mt-16 flex flex-col gap-12">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-6">
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-smp-white/40">
                  {category.title}
                </h3>
                <span className="h-[1px] flex-1 bg-white/5" />
              </div>

              {/* Holographic Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: skillIdx * 0.05 }}
                    whileHover={{
                      y: -5,
                      rotateX: 4,
                      rotateY: -4,
                      boxShadow: "0 10px 30px rgba(255, 62, 29, 0.08)",
                    }}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-white/5 bg-smp-charcoal/30 p-6 transition-all duration-300 hover:border-smp-red/20"
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                  >
                    {/* Glowing Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-smp-white/10 to-transparent group-hover:via-smp-red/50 transition-all duration-500" />

                    {/* Skill Info */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl" role="img" aria-label={skill.name}>
                        {skill.icon}
                      </span>
                      <span className="font-mono text-[9px] text-smp-red/80 tracking-widest uppercase">
                        {skill.level}%
                      </span>
                    </div>

                    <h4 className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-smp-white">
                      {skill.name}
                    </h4>

                    {/* Holographic Custom Progress Bar */}
                    <div className="mt-4 h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-smp-red to-smp-orange shadow-[0_0_8px_rgba(255,62,29,0.8)]"
                      />
                    </div>

                    {/* Matrix Code / Cyber details */}
                    <div className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 font-mono text-[6px] text-smp-white/20 uppercase tracking-widest pointer-events-none">
                      Node: Link Ok
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
