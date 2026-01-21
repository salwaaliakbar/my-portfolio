"use client";

import { personalData } from "../../data/personal-data";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";

function AboutSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div id="about" className="my-12 lg:my-16 relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-8">
        <p className={`px-4 py-2 md:text-xs rounded-full font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2 transition-colors duration-300 ${isDark ? "bg-[#1B263B] text-[#06B6D4]" : "bg-[#E5E5E7] text-[#0071E3]"}`}>$ ls about/</p>
         <span className={`h-2 flex-1 transition-colors duration-300 ${isDark ? "bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0071E3] via-[#0077ED] to-transparent"}`}></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12">
        <div className="order-2 lg:order-1 space-y-4">
          <h2 className={`text-2xl md:text-4xl font-bold leading-tight transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
            Turning Ideas into <span className={`bg-linear-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] drop-shadow-[0_0_12px_rgba(0,113,227,0.4)]"}`}>Digital Realities</span>
          </h2>
          <div className={`space-y-3 text-sm md:text-base leading-relaxed transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
            <p>
              I{"'"}m Salwa Ansari, a <span className={`font-medium transition-colors duration-300 ${isDark ? "text-[#06B6D4]" : "text-[#0071E3]"}`}>Full Stack AI Developer</span> passionate about building <span className={`font-medium transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>scalable, maintainable, and high-performance</span> applications. I specialize in integrating AI/ML features and NLP into full-stack solutions using <span className={`font-medium transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>React, Next.js, Node.js, MongoDB, PostgreSQL, and Flutter</span>.
            </p>
            <p>
              Currently working at <span className={`font-medium transition-colors duration-300 ${isDark ? "text-[#06B6D4]" : "text-[#0071E3]"}`}>10Pearls Pakistan</span> and running <span className={`font-medium transition-colors duration-300 ${isDark ? "text-[#06B6D4]" : "text-[#0071E3]"}`}>HyperLogic</span>, I focus on creating intelligent, user-centered products with clean architecture, optimized performance, and seamless AI integration. I thrive on solving complex problems and delivering robust, production-ready solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={350}
            height={280}
            alt={personalData.name}
            className="rounded-lg transition-all duration-1000 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;