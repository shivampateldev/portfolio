"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const words = text.split(" ");

  const containerVar = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const childVar = {
    hidden: {
      y: "120%",
      filter: "blur(10px)",
      scale: 0.8,
    },
    visible: {
      y: "0%",
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const, // Cast custom cubic bezier as const for TS safety
      },
    },
  };

  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, wIdx) => (
        <span key={wIdx} className="mr-[0.3em] overflow-hidden inline-flex pr-6 pb-2 -mr-4">
          {word.split("").map((char, cIdx) => (
            <motion.span
              key={cIdx}
              variants={childVar}
              className="inline-block origin-bottom transform-gpu"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}
