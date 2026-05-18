"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("smpinfo20@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-smp-black py-24 px-6 md:px-16 border-t border-white/5"
    >
      {/* Background ambient red glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-smp-red/10 blur-[150px]" />

      <div className="z-10 flex w-full max-w-7xl flex-col items-center gap-16">
        {/* Call to Action Grid */}
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-smp-red">
            06 / Connect Systems
          </span>
          <h2 className="font-display text-4xl font-black uppercase tracking-tight text-smp-white md:text-5xl">
            Initiate a <span className="text-smp-white/40">Joint Protocol</span>
          </h2>
          <p className="font-body text-xs leading-relaxed text-smp-white/50">
            Open for research partnerships, technical advisory roles, institutional web portal deployments, or core AI pipeline engineering sprints. Let's build experiences.
          </p>
        </div>

        {/* Futuristic Terminal / Link Panel */}
        <div className="w-full max-w-xl rounded-2xl border border-white/5 bg-smp-charcoal/30 p-6 md:p-8 flex flex-col gap-6 backdrop-blur-md">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-smp-red" />
              <span className="h-2 w-2 rounded-full bg-smp-orange" />
              <span className="h-2 w-2 rounded-full bg-smp-white/20" />
            </div>
            <span className="font-mono text-[8px] text-smp-white/30 uppercase tracking-[0.2em]">
              Host node: SMTP-SOU
            </span>
          </div>

          {/* Terminal commands / Interactive copy */}
          <div className="flex flex-col gap-4 font-mono text-[11px] text-smp-white/80">
            <div className="flex gap-2">
              <span className="text-smp-red">$</span>
              <span className="text-smp-white/40">query email --shivam</span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pl-4 border-l border-smp-red/20 bg-smp-red/[0.01] p-3 rounded">
              <span className="text-smp-white font-semibold">smpinfo20@gmail.com</span>
              <button
                onClick={handleCopyEmail}
                className="rounded border border-white/10 hover:border-smp-red hover:bg-smp-red/10 px-3 py-1 text-[9px] uppercase tracking-wider text-smp-white transition-all cursor-pointer"
              >
                {copied ? "Copied" : "Copy Node"}
              </button>
            </div>

            <div className="flex gap-2">
              <span className="text-smp-red">$</span>
              <span className="text-smp-white/40">query credentials --loc --phone</span>
            </div>
            <div className="flex flex-col gap-2 pl-4 border-l border-smp-orange/20 bg-smp-orange/[0.01] p-3 rounded text-[10px] w-full">
              <div className="flex justify-between">
                <span className="text-smp-white/40">LOCATION:</span>
                <span className="text-smp-white font-semibold">Ahmedabad, Gujarat</span>
              </div>
              <div className="flex justify-between">
                <span className="text-smp-white/40">PHONE:</span>
                <span className="text-smp-white font-semibold">+91 8511994509</span>
              </div>
            </div>
          </div>

          {/* External Social pipelines links */}
          <div className="flex justify-around items-center border-t border-white/5 pt-6 mt-2">
            <a
              href="https://github.com/shivampateldev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-smp-white/50 hover:text-smp-red transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shivam-patel-41224135b/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-smp-white/50 hover:text-smp-red transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Breathtaking Giant low-opacity Brand Logo */}
        <div className="relative mt-8 select-none pointer-events-none">
          <h3 className="font-display text-[15vw] font-black leading-none tracking-tighter text-white/[0.015] uppercase select-none">
            SMP
          </h3>
        </div>

        {/* Copyright notice */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl border-t border-white/5 pt-8 font-mono text-[8px] text-smp-white/20 uppercase tracking-[0.3em] gap-4">
          <span>Shivam M. Patel &copy; 2026</span>
        </div>
      </div>
    </footer>
  );
}
