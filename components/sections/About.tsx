"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI & Machine Learning Student",
    description:
      "Deeply involved in neural network engineering, cognitive system modeling, and data sciences. Building automated pipelines and training custom agent architectures.",
    tag: "STUDENT",
  },
  {
    title: "Webmaster — IEEE SOU CS SBC",
    description:
      "Directing technological deployments, hosting global digital frameworks, and driving technical integration events at Silver Oak University. Elevating student branch platforms to international standards.",
    tag: "LEADER",
  },
  {
    title: "System Architect",
    description:
      "Pioneering digital layers designed for modern latency constraints, immersive canvas displays, 3D WebGL portals, and clean responsive micro-framework interfaces.",
    tag: "ARCHITECT",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex w-full flex-col items-center justify-center bg-transparent py-32 px-6 md:px-16"
    >
      <div className="z-10 w-full max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-smp-red">
            01 / Background & Vision
          </span>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-smp-white md:text-6xl">
            Who is <span className="text-smp-white/40">SMP?</span>
          </h2>
        </div>

        {/* Story Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Story Text (Sticky Left) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-body text-lg leading-relaxed text-smp-white/80"
            >
              Shivam M. Patel is an innovative developer operating at the boundary of machine learning and modern web technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm leading-relaxed text-smp-white/50"
            >
              Interested in AI startup paradigms, complex algorithmic processes, technical leadership, and modular web interfaces that feel completely alive.
            </motion.p>

            {/* Quick Cyber Details */}
            <div className="mt-6 flex flex-col gap-4 border-t border-white/5 pt-6 font-mono text-[10px] tracking-[0.2em] text-smp-white/40">
              <div className="flex justify-between">
                <span>IDENTITY:</span>
                <span className="text-smp-white">SHIVAM M. PATEL</span>
              </div>
              <div className="flex justify-between">
                <span>ROLE:</span>
                <span className="text-smp-white">IEEE SOU CS SBC WEBMASTER</span>
              </div>
              <div className="flex justify-between">
                <span>LOCATION:</span>
                <span className="text-smp-white">AHMEDABAD, INDIA</span>
              </div>
            </div>
          </div>

          {/* Interactive Interface Cards (Right Side) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-smp-charcoal/50 p-8 transition-all duration-300 hover:border-smp-red/20 hover:bg-smp-charcoal"
              >
                {/* Tech scanlines effect */}
                <div className="absolute top-0 right-0 p-4 font-mono text-[9px] uppercase tracking-[0.3em] text-smp-white/20 group-hover:text-smp-red transition-colors">
                  {feature.tag}
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-smp-white group-hover:text-smp-red transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-4 font-body text-xs leading-relaxed text-smp-white/50 group-hover:text-smp-white/75 transition-colors">
                  {feature.description}
                </p>

                {/* Subtle cybernetic corner decor */}
                <div className="absolute bottom-0 left-0 h-1 w-1 bg-smp-red/0 group-hover:bg-smp-red transition-all duration-300" />
                <div className="absolute bottom-0 left-0 h-0 w-1 bg-smp-red group-hover:h-3 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-smp-red group-hover:w-3 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
