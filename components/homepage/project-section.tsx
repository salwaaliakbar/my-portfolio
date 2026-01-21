"use client";

import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { projectsData } from "../../data/projects-data";
import ProjectCard from "../ui/project-card";

function Projects() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxIndex = projectsData.length - 1;

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

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-10">
          <p
            className={`px-4 py-2 md:text-xs rounded-full font-mono text-sm tracking-wider animate-fade-in-up transition-colors duration-300 ${isDark ? "bg-[#1B263B] text-[#06B6D4]" : "bg-[#E5E5E7] text-[#0071E3]"}`}
          >
            $ ls projects/
          </p>
          <span
            className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${isDark ? "bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0071E3] via-[#0077ED] to-transparent"}`}
          ></span>
        </div>

        <h2
          className={`text-2xl md:text-4xl font-bold leading-tight mb-12 transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}
        >
          Things I{"'"}ve{" "}
          <span
            className={`bg-linear-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] drop-shadow-[0_0_12px_rgba(0,113,227,0.4)]"}`}
          >
            Built
          </span>
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
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
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="w-full shrink-0"
              >
                <div className="box-border flex items-center justify-center rounded-2xl transition-all duration-75">
                  <ProjectCard project={project} />
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
            className={`p-3 rounded-full transition-all duration-300 disabled:opacity-30 ${isDark ? "bg-[#1B263B] border border-[#415A77] text-[#06B6D4]" : "bg-white border border-[#D5D5D7] text-[#0071E3]"}`}
            aria-label="Previous project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={isAnimating || currentIndex >= maxIndex}
            className={`p-3 rounded-full transition-all duration-300 disabled:opacity-30 ${isDark ? "bg-[#1B263B] border border-[#415A77] text-[#06B6D4]" : "bg-white border border-[#D5D5D7] text-[#0071E3]"}`}
            aria-label="Next project"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsData.slice(0, 4).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 800);
                }
              }}
              disabled={isAnimating}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? isDark 
                    ? "w-8 bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                    : "w-8 bg-[#0071E3] shadow-[0_0_10px_rgba(0,113,227,0.3)]"
                  : isDark 
                    ? "w-2 bg-[#415A77] hover:bg-[#06B6D4]" 
                    : "w-2 bg-[#D5D5D7] hover:bg-[#0071E3]"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;