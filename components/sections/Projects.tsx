"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  systemCode: string;
  details: {
    problem: string;
    solution: string;
    features: string[];
  };
}

const projectsList: Project[] = [
  {
    id: "cert-gen",
    title: "Certificate Generation & Validation",
    tagline: "Classified Secure Verification Node",
    description:
      "A decentralized/tamper-proof system designed for generating and instant validation of academic and professional credentials using cryptographic structures.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cryptographic Hashing"],
    systemCode: "SYS-NODE-09",
    details: {
      problem: "Traditional physical credentials are easy to forge, slow to verify manually, and highly vulnerable to credential theft.",
      solution: "Implemented instant cryptographic verification with zero manual friction, rendering credential validation secure, public, and absolute.",
      features: [
        "Cryptographic signature creation on-generation",
        "Unique public verification QR and link system",
        "Bulk email pipeline with custom canvas rendering modules",
        "Audit trail telemetry panel",
      ],
    },
  },
  {
    id: "proj-mgmt",
    title: "Project Management Suite",
    tagline: "Organizational Hyper-Drive Controller",
    description:
      "Interactive orchestration matrix for collaborative sprints, tracking task flow velocities, real-time board mutations, and workflow bottlenecks.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Socket.io"],
    systemCode: "SYS-NODE-42",
    details: {
      problem: "Workflows get bottlenecked due to asynchronous coordination delays, stale tracking charts, and disconnected communication vectors.",
      solution: "Engineered a lightning-fast central operational interface with immediate server synchronization, integrated checklists, and state telemetry.",
      features: [
        "Real-time drag and drop sprint matrices",
        "Integrated workspace live-chat modules",
        "Task friction analytics with automatic blocker flagging",
        "Custom dashboard reporting overlays",
      ],
    },
  },
  {
    id: "ai-chatbot",
    title: "AI College Guidance Chatbot",
    tagline: "Cognitive Institutional Assistant",
    description:
      "Intelligent neural chatbot powered by customized LLM integration to assist prospective and current students with administrative and curriculum navigation.",
    tech: ["Python", "TensorFlow", "OpenAI API", "React", "FastAPI"],
    systemCode: "SYS-NODE-88",
    details: {
      problem: "Students experience immense friction finding precise administrative information inside complex academic portal structures.",
      solution: "Deployed an interactive conversational agent that ingests catalog documents and yields direct, hyper-accurate answers instantaneously.",
      features: [
        "Natural language query parsing",
        "Dynamic curriculum routing recommendation loops",
        "Interactive portal integration hooks",
        "Vector-embedded memory stores for user context retention",
      ],
    },
  },
  {
    id: "experimental",
    title: "Future Experimental Concepts",
    tagline: "Autonomous Agent & WebGL Systems",
    description:
      "A series of high-end experimental sandboxes exploring custom vector forces, WebGL shaders, agentic AI frameworks, and extreme visual design concepts.",
    tech: ["Three.js", "WebGL", "Framer Motion", "GSAP", "LangChain"],
    systemCode: "SYS-NODE-99",
    details: {
      problem: "Standard web architectures feel flat, mechanical, and uninspiring to highly technical audiences.",
      solution: "Building interactive digital layers that respond elegantly to cursor velocity, audio signals, and dynamic lighting pipelines.",
      features: [
        "Reactive 3D interactive typography",
        "Agentic AI automation scripting sandbox",
        "Custom noise and chromatic distortion post-processing layers",
        "Lenis smooth scroll integration matrices",
      ],
    },
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeProject = projectsList.find((p) => p.id === selectedId);

  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center justify-center bg-transparent py-32 px-6 md:px-16"
    >
      <div className="z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smp-red">
            03 / Core Systems & Modules
          </span>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-smp-white md:text-6xl">
            Selected <span className="text-smp-white/40">Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-smp-charcoal/30 p-8 hover:border-smp-red/20 transition-all duration-500"
            >
              {/* Futuristic Cyber Scanline effect */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-smp-red/[0.02] to-transparent pointer-events-none group-hover:translate-y-full transition-transform duration-[2000ms] ease-out" />

              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] text-smp-red tracking-widest uppercase">
                  {project.systemCode}
                </span>
                <span className="font-mono text-[9px] text-smp-white/30 uppercase tracking-[0.2em]">
                  System linked
                </span>
              </div>

              <motion.h3
                layoutId={`card-title-${project.id}`}
                className="mt-6 font-display text-2xl font-black uppercase text-smp-white group-hover:text-smp-red transition-colors duration-300"
              >
                {project.title}
              </motion.h3>

              <p className="mt-3 font-mono text-[10px] text-smp-white/40 uppercase tracking-widest">
                {project.tagline}
              </p>

              <p className="mt-6 font-body text-xs leading-relaxed text-smp-white/50 group-hover:text-smp-white/70 transition-colors">
                {project.description}
              </p>

              {/* Badges Stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 font-mono text-[8px] uppercase tracking-wider text-smp-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Glowing Corner Accents */}
              <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-white/0 group-hover:border-smp-red/30 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/0 group-hover:border-smp-red/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Cinematic Expandable Modal Details */}
        <AnimatePresence>
          {selectedId && activeProject && (
            <>
              {/* Dim Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 z-50 bg-smp-black/80 backdrop-blur-md"
              />

              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                  layoutId={`card-container-${activeProject.id}`}
                  className="pointer-events-auto w-full max-w-3xl overflow-y-auto max-h-[90vh] rounded-3xl border border-white/10 bg-smp-charcoal p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[9px] text-smp-red tracking-widest uppercase">
                      {activeProject.systemCode}
                    </span>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="font-mono text-[10px] text-smp-white/40 hover:text-smp-red uppercase tracking-widest transition-colors"
                    >
                      [ Close Node ]
                    </button>
                  </div>

                  <motion.h3
                    layoutId={`card-title-${activeProject.id}`}
                    className="mt-6 font-display text-3xl font-black uppercase text-smp-white md:text-4xl"
                  >
                    {activeProject.title}
                  </motion.h3>

                  <p className="mt-2 font-mono text-[11px] text-smp-orange uppercase tracking-widest">
                    {activeProject.tagline}
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-8">
                    {/* Mission Objective */}
                    <div className="flex flex-col gap-4">
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-smp-white/40">
                        Operational Friction
                      </h4>
                      <p className="font-body text-xs leading-relaxed text-smp-white/60">
                        {activeProject.details.problem}
                      </p>
                    </div>

                    {/* Operational Solution */}
                    <div className="flex flex-col gap-4">
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-smp-white/40">
                        Synthesized Protocol
                      </h4>
                      <p className="font-body text-xs leading-relaxed text-smp-white/60">
                        {activeProject.details.solution}
                      </p>
                    </div>
                  </div>

                  {/* System Core Features */}
                  <div className="mt-8 border-t border-white/5 pt-8">
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-smp-white/40">
                      Module Functions
                    </h4>
                    <ul className="mt-4 flex flex-col gap-3">
                      {activeProject.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 font-body text-xs text-smp-white/70">
                          <span className="h-1 w-1 rounded-full bg-smp-red" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack orbit */}
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-8">
                    {activeProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-smp-red/20 bg-smp-red/5 px-3 py-1 font-mono text-[8px] uppercase tracking-wider text-smp-red"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
