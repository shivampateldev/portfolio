"use client";

import { useState } from "react";
import LoadingScreen from "@/components/core/LoadingScreen";
import CustomCursor from "@/components/core/CustomCursor";
import Noise from "@/components/core/Noise";
import SmoothScrollProvider from "@/components/core/SmoothScrollProvider";
import ParticleField from "@/components/three/ParticleField";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import TypographyBreak from "@/components/sections/Typography";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <SmoothScrollProvider>
          {/* Futuristic Cyber Overlay System */}
          <Noise />
          <CustomCursor />
          <ParticleField />
          <Navbar />

          <main className="relative z-10 w-full overflow-hidden bg-transparent">
            {/* Main Interactive Sections Stack */}
            <Hero />
            <About />
            <TypographyBreak />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Footer />
          </main>
        </SmoothScrollProvider>
      )}
    </>
  );
}
