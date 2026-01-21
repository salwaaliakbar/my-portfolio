"use client";

import { experiences } from "../../data/experience-data";
import { useTheme } from "../../context/ThemeContext";

function Experience() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24 w-full">
       {/* Grid Background */}
        <div className={`absolute inset-0 -z-10 h-full w-full overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#0D1B2A]" : "bg-[#FFFFFF]"}`}>
         <div
          className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${isDark ? "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.04)_0%,transparent_70%),linear-gradient(to_right,#415A77_1px,transparent_1px),linear-gradient(to_bottom,#415A77_1px,transparent_1px)] shadow-[inset_0_0_240px_rgba(0,0,0,1)] opacity-30" : "bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.3)_0%,transparent_70%),linear-gradient(to_right,#06B6D4,transparent_1px),linear-gradient(to_bottom,#06B6D4,transparent_1px)] shadow-[inset_0_0_240px_rgba(255,255,255,0.6)] opacity-100"} bg-size-[auto,3rem_3rem,3rem_3rem] bg-center mask-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.45)_22%,rgba(0,0,0,0.45)_78%,transparent)]`}
        ></div>
        </div>
        
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="flex items-center gap-4 mb-10">
          <p className={`px-4 py-2 md:text-xs rounded-full font-mono text-sm tracking-wider animate-fade-in-up transition-colors duration-300 ${isDark ? "bg-[#1B263B] text-[#06B6D4]" : "bg-[#E5E5E7] text-[#0071E3]"}`}>$ ls career journey/</p>
          <span className={`h-2 flex-1 transition-colors duration-300 ${isDark ? "bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0071E3] via-[#0077ED] to-transparent"}`}></span>
        </div>
        <h2 className={`text-2xl md:text-4xl font-bold leading-tight mb-6 transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>
            Work <span className={`bg-linear-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] drop-shadow-[0_0_12px_rgba(0,113,227,0.4)]"}`}>Experience</span>
          </h2>

        <div className="max-w-5xl mx-auto pt-6 px-4">
          <div className="relative py-8">
            {/* Timeline Line - Center (Hidden on mobile) */}
            <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 pointer-events-none transition-colors duration-300 ${isDark ? "bg-linear-to-b from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-b from-[#0071E3] via-[#0077ED] to-transparent"}`} />
            
            {/* Timeline Line - Left (Mobile) */}
            <div className={`lg:hidden absolute left-3 top-0 bottom-0 w-1 pointer-events-none transition-colors duration-300 ${isDark ? "bg-linear-to-b from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-b from-[#0071E3] via-[#0077ED] to-transparent"}`} />

            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} pl-8 lg:pl-0`}>
                {/* Left/Right Content - 45% width on desktop, full width on mobile */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right text-left' : 'lg:pl-8 text-left'}`}>
                  <div>
                    <span className={`font-mono text-sm font-medium transition-colors duration-300 ${isDark ? "text-[#06B6D4]" : "text-[#0071E3]"}`}>{exp.duration}</span>
                    <h3 className={`text-lg font-bold mt-1 transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}>{exp.title}</h3>
                    <p className={`text-sm mb-2 transition-colors duration-300 ${isDark ? "text-[#06B6D4]" : "text-[#0071E3]"}`}>{exp.company}</p>
                    <p className={`text-xs leading-relaxed mb-3 text-left transition-colors duration-300 ${isDark ? "text-gray-400" : "text-[#86868B]"}`}>{exp.description}</p>
                    
                    <div className={`space-y-1 text-xs transition-colors duration-300 ${isDark ? "text-gray-400" : "text-[#86868B]"}`}>
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className={`flex items-center gap-2`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Timeline Dot - Hidden on mobile, visible on desktop */}
                <div className="hidden lg:flex w-0 justify-center">
                    <div className="relative flex items-center justify-center">
                    <div className={`w-5 h-5 rounded-full border-3 flex items-center justify-center z-10 transition-colors duration-300 ${isDark ? "border-[#415A77] bg-[#0D1B2A]" : "border-[#D5D5D7] bg-[#FFFFFF]"}`}>
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
                    </div>
                  </div>
                </div>

                {/* Spacer - 45% width on desktop, hidden on mobile */}
                <div className="hidden lg:block w-1/2" />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default Experience;