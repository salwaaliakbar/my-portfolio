"use client";

import { skillsData } from "../../data/skills-data";
import { expertiseData } from "../../data/expertise-data";
import { skillsImage } from "../../utils/skills-image";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Dynamic cards to show based on screen size
  const cardsToShow = isMobile ? 1 : 3;
  const maxIndex = expertiseData.length - cardsToShow;

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handlePrev = () => {
    if (isAnimating || currentIndex <= 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleDotClick = (idx: number) => {
    if (!isAnimating && idx !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(idx);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  return (
    <div id="skills" className={`relative z-50 px-2 py-2 lg:py-4 transition-colors duration-300`}>
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <p className={`px-4 py-2 text-xs md:text-sm rounded-full font-mono tracking-wider transition-colors duration-300 ${isDark ? "bg-[#1B263B] text-[#06B6D4]" : "bg-[#E5E5E7] text-[#0071E3]"}`}>
            $ ls skills/
          </p>
          <div className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${isDark ? "bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0071E3] via-[#0077ED] to-transparent"}`}></div>
        </div>

        <h2 className={`text-2xl md:text-4xl font-bold mb-12 transition-colors duration-300 ${isDark ? "text-white" : "text-[#1D1D1F]"}`}>
          My{" "}
          <span className={`bg-linear-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] drop-shadow-[0_0_12px_rgba(0,113,227,0.4)]"}`}>
            Tech Stack
          </span>
        </h2>

        {/* Marquee - Hidden on mobile for better performance */}
        <div className="hidden md:block w-full mb-16 overflow-hidden">
          <div className="flex animate-marquee space-x-6">
            {[...skillsData, ...skillsData].map((skill, id) => (
              <div
                key={id}
                className={`w-32 shrink-0 flex flex-col items-center justify-center transition-all duration-300 p-4 rounded-xl group hover:scale-110 cursor-pointer ${isDark ? "bg-[#1B263B] border border-[#415A77] hover:border-[#06B6D4] hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]" : "bg-white border border-[#D5D5D7] hover:border-[#0071E3] hover:shadow-[0_0_20px_rgba(0,113,227,0.2)]"}`}
              >
                <div className={`h-1 w-3/4 mb-3 rounded-full transition-colors ${isDark ? "bg-linear-to-r from-transparent via-[#06B6D4] to-transparent" : "bg-linear-to-r from-transparent via-[#0071E3] to-transparent"}`} />
                <div className="h-10 mb-3">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={40}
                    height={40}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
                <p className={`text-sm font-medium transition-colors ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Carousel */}
        <div className="mt-16">
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons - Desktop Only */}
            <button
              onClick={handlePrev}
              disabled={isAnimating || currentIndex === 0}
              className={`hidden lg:flex absolute -left-4 xl:-left-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center group ${isDark ? "bg-[#1B263B] border border-[#415A77] text-[#06B6D4] hover:bg-[#0D1B2A] hover:border-[#06B6D4] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] disabled:hover:shadow-none" : "bg-white border border-[#D5D5D7] text-[#0071E3] hover:bg-[#F5F5F7] hover:border-[#0071E3] hover:shadow-[0_8px_30px_rgba(0,113,227,0.2)] disabled:hover:shadow-none"}`}
              aria-label="Previous"
            >
              <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating || currentIndex >= maxIndex}
              className={`hidden lg:flex absolute -right-4 xl:-right-16 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed items-center justify-center group ${isDark ? "bg-[#1B263B] border border-[#415A77] text-[#06B6D4] hover:bg-[#0D1B2A] hover:border-[#06B6D4] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] disabled:hover:shadow-none" : "bg-white border border-[#D5D5D7] text-[#0071E3] hover:bg-[#F5F5F7] hover:border-[#0071E3] hover:shadow-[0_8px_30px_rgba(0,113,227,0.2)] disabled:hover:shadow-none"}`}
              aria-label="Next"
            >
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-600 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                }}
              >
                {expertiseData.map((expertise, idx) => (
                  <div
                    key={idx}
                    className="w-full lg:w-1/3 shrink-0 sm:px-2"
                  >
                    <div className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? "bg-linear-to-br from-[#1B263B] to-[#0D1B2A] border border-[#415A77] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-linear-to-br from-white to-[#F5F5F7] border border-[#D5D5D7] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"}`}>
                      {/* Gradient Top Border */}
                      <div className="flex">
                        <div className={`h-1 w-1/2 ${isDark ? "bg-linear-to-r from-transparent via-[#06B6D4] to-[#0EA5E9]" : "bg-linear-to-r from-transparent via-[#0071E3] to-[#0077ED]"}`}></div>
                        <div className={`h-1 w-1/2 ${isDark ? "bg-linear-to-r from-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0077ED] to-transparent"}`}></div>
                      </div>

                      {/* Terminal Header */}
                      <div className={`px-5 py-4 border-b ${isDark ? "bg-[#1B263B] border-[#415A77]" : "bg-[#F5F5F7] border-[#D5D5D7]"}`}>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-2">
                            <div className="h-3 w-3 rounded-full bg-[#FF5F57]"></div>
                            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="h-3 w-3 rounded-full bg-[#28CA42]"></div>
                          </div>
                          <p className={`font-mono text-xs ml-2 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
                            {expertise.title}.sh
                          </p>
                        </div>
                      </div>

                      {/* Terminal Content */}
                      <div className="p-5 font-mono text-xs space-y-3 min-h-[400px] flex flex-col">
                        <p className={`${isDark ? "text-[#34C759]" : "text-[#34C759]"}`}>
                          $ cat expertise.json
                        </p>
                        
                        <div className={`flex-1 ${isDark ? "text-[#778DA9]" : "text-[#86868B]"}`}>
                          <p>{"{"}</p>
                          <p className="pl-4 mt-2">
                            <span className="text-[#EC4899]">skill</span>:{" "}
                            <span className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}>{'"'}{expertise.title}{'"'}</span>,
                          </p>
                          <p className="pl-4 mt-2">
                            <span className="text-[#EC4899]">proficiencies</span>: [
                          </p>
                          
                          <div className="pl-8 space-y-4 mt-3">
                            {expertise.topSkills.map((skill, skillIdx) => (
                              <div key={skillIdx}>
                                <div className="flex justify-between items-center mb-2">
                                  <span className={`font-semibold ${isDark ? "text-[#34C759]" : "text-[#34C759]"}`}>
                                    {skill.name}
                                  </span>
                                  <span className={`font-bold ${isDark ? "text-[#06B6D4]" : "text-[#0071E3]"}`}>
                                    {skill.proficiency}%
                                  </span>
                                </div>
                                <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-[#0D1B2A]" : "bg-[#E5E5E7]"}`}>
                                  <div
                                    className={`h-full rounded-full transition-all duration-1000 ${isDark ? "bg-linear-to-r from-[#06B6D4] to-[#0EA5E9] shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "bg-linear-to-r from-[#0071E3] to-[#0077ED] shadow-[0_0_10px_rgba(0,113,227,0.3)]"}`}
                                    style={{ width: `${skill.proficiency}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <p className="pl-4 mt-3">],</p>
                          <p className="mt-2">{"}"}</p>
                        </div>
                        
                        <div className={`flex items-center gap-2 text-[#EC4899]`}>
                          $ <span className={`w-2 h-4 animate-pulse bg-[#EC4899]`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                disabled={isAnimating || currentIndex === 0}
                className={`p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed ${isDark ? "bg-[#1B263B] border border-[#415A77] text-[#06B6D4]" : "bg-white border border-[#D5D5D7] text-[#0071E3]"}`}
                aria-label="Previous"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={isAnimating || currentIndex >= maxIndex}
                className={`p-3 rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed ${isDark ? "bg-[#1B263B] border border-[#415A77] text-[#06B6D4]" : "bg-white border border-[#D5D5D7] text-[#0071E3]"}`}
                aria-label="Next"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                  idx === currentIndex
                    ? isDark 
                      ? "w-8 bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                      : "w-8 bg-[#0071E3] shadow-[0_0_10px_rgba(0,113,227,0.3)]"
                    : isDark 
                      ? "w-2 bg-[#415A77] hover:bg-[#06B6D4] cursor-pointer" 
                      : "w-2 bg-[#D5D5D7] hover:bg-[#0071E3] cursor-pointer"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default React.memo(Skills);