"use client";

import { personalData } from "../../data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { useTheme } from "../../context/ThemeContext";

function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section className="relative flex flex-col items-center justify-between">
      {/* Grid Background */}
      <div
        className={`absolute inset-0 -z-10 h-full w-full overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#0D1B2A]" : "bg-[#FFFFFF]"}`}
      >
        <div
          className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${isDark ? "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.04)_0%,transparent_70%),linear-gradient(to_right,#415A77_1px,transparent_1px),linear-gradient(to_bottom,#415A77_1px,transparent_1px)] shadow-[inset_0_0_240px_rgba(0,0,0,1)] opacity-30" : "bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.3)_0%,transparent_70%),linear-gradient(to_right,#06B6D4,transparent_1px),linear-gradient(to_bottom,#06B6D4,transparent_1px)] shadow-[inset_0_0_240px_rgba(255,255,255,0.6)] opacity-100"} bg-size-[auto,3rem_3rem,3rem_3rem] bg-center mask-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.45)_22%,rgba(0,0,0,0.45)_78%,transparent)]`}
        ></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 items-start lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 gap-y-8 pt-8 lg:pt-12 px-4 sm:px-6 lg:px-0">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center pb-10 md:pb-10 lg:pt-0">
          <div className="flex items-center">
            <p
              className={`px-4 py-2 md:text-xs rounded-full font-mono text-sm tracking-wider animate-fade-in-up mb-2 transition-colors duration-300 ${isDark ? "bg-[#1B263B] text-[#06B6D4]" : "bg-[#E5E5E7] text-[#0071E3]"}`}
            >
              $ whoami/
            </p>
            <span
              className={`h-2 flex-1 transition-colors duration-300 ${isDark ? "bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0071E3] via-[#0077ED] to-transparent"}`}
            ></span>
          </div>
          <h1
            className={`text-4xl md:text-5xl font-bold md:font-extrabold lg:text-5xl leading-tight transition-colors duration-300 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}
          >
            Hi, I {"'"}m{" "}
            <span
              className={`bg-linear-to-r bg-clip-text text-transparent transition-all duration-300 ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] drop-shadow-[0_0_12px_rgba(0,113,227,0.4)]"}`}
            >
              {personalData.name}
            </span>
            <p
              className={`text-xl md:text-2xl animate-fade-in-up animation-delay-400 mt-2 mb-4 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-[#86868B]"}`}
            >
              Full Stack AI Developer
            </p>
          </h1>

          <p
            className={`text-sm md:text-base mt-4 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200 transition-colors duration-300`}
          >
            I{"'"}m a passionate full stack developer specializing in AI-powered
            applications. I build scalable web solutions with modern
            technologies like React, Node.js, and TypeScript. I love solving
            complex problems and creating seamless user experiences.
          </p>

          <div className="my-8 flex items-center gap-4">
            <Link
              href={personalData.github}
              target="_blank"
              className={`transition-all hover:scale-125 duration-300 ${isDark ? "text-[#06B6D4] hover:text-[#0EA5E9] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "text-[#0071E3] hover:text-[#0077ED] hover:drop-shadow-[0_0_15px_rgba(0,113,227,0.8)]"}`}
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className={`transition-all hover:scale-125 duration-300 ${isDark ? "text-[#06B6D4] hover:text-[#0EA5E9] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "text-[#0071E3] hover:text-[#0077ED] hover:drop-shadow-[0_0_15px_rgba(0,113,227,0.8)]"}`}
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className={`transition-all hover:scale-125 duration-300 ${isDark ? "text-[#06B6D4] hover:text-[#0EA5E9] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "text-[#0071E3] hover:text-[#0077ED] hover:drop-shadow-[0_0_15px_rgba(0,113,227,0.8)]"}`}
            >
              <FaFacebook size={24} />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <Link
              href="#contact"
              className="bg-linear-to-r to-[#0EA5E9] from-[#06B6D4] p-px rounded-full transition-all duration-300 hover:from-[#22D3EE] hover:to-[#38BDF8] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              <button
                className={`px-4 md:px-6 py-2 md:py-3 ${isDark ? "bg-[#1B263B] text-white" : "bg-[#F5F5F7]"} rounded-full border-none text-center text-xs md:text-sm font-medium uppercase tracking-wider text-[#1B263B] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 cursor-pointer`}
              >
                <span>Contact me</span>
                <RiContactsFill size={14} />
              </button>
            </Link>

            <Link
              className={`flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r ${isDark ? "from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.3),0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6),0_15px_40px_rgba(0,0,0,0.4)]" : "from-[#0071E3] via-[#0077ED] to-[#0071E3] shadow-[0_0_20px_rgba(0,113,227,0.2),0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,113,227,0.4),0_15px_40px_rgba(0,0,0,0.2)]"} px-4 md:px-6 py-2 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3),0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6),0_15px_40px_rgba(0,0,0,0.4)] hover:scale-105`}
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column - Terminal Card */}
        <div className="order-1 lg:order-2">
          <div
            className={`h-full rounded-2xl overflow-hidden transition-all duration-300 ${isDark ? "bg-linear-to-br from-[#1B263B] to-[#0D1B2A] border border-[#415A77] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-linear-to-br from-white to-[#F5F5F7] border border-[#D5D5D7] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"}`}
          >
            {/* Gradient Top Border */}
            <div className="flex">
              <div
                className={`h-1 w-1/2 ${isDark ? "bg-linear-to-r from-transparent via-[#06B6D4] to-[#0EA5E9]" : "bg-linear-to-r from-transparent via-[#0071E3] to-[#0077ED]"}`}
              ></div>
              <div
                className={`h-1 w-1/2 ${isDark ? "bg-linear-to-r from-[#0EA5E9] to-transparent" : "bg-linear-to-r from-[#0077ED] to-transparent"}`}
              ></div>
            </div>

            {/* Terminal Header */}
            <div
              className={`px-5 py-4 border-b ${isDark ? "bg-[#1B263B] border-[#415A77]" : "bg-[#F5F5F7] border-[#D5D5D7]"}`}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28CA42]"></div>
                </div>
                <p
                  className={`font-mono text-xs ml-1 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}
                >
                  about.sh
                </p>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="px-3 md:px-5 py-4 font-mono text-xs space-y-2">
              <p className={`${isDark ? "text-[#34C759]" : "text-[#34C759]"}`}>
                $ cat developer.json
              </p>

              <div
                className={`${isDark ? "text-[#778DA9]" : "text-[#86868B]"}`}
              >
                <p>{"{"}</p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">name</span>:{" "}
                  <span
                    className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}
                  >
                    {'"'}{personalData.name}{'"'}
                  </span>
                  ,
                </p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">role</span>:{" "}
                  <span
                    className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}
                  >
                    {'"'}{personalData.designation}{'"'}
                  </span>
                  ,
                </p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">status</span>:{" "}
                  <span
                    className={isDark ? "text-[#34C759]" : "text-[#34C759]"}
                  >
                    open to work
                  </span>
                  ,
                </p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">availability</span>:{" "}
                  <span
                    className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}
                  >
                    {'"Immediate"'}
                  </span>
                  ,
                </p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">enthusiast</span>:{" "}
                  <span
                    className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}
                  >
                    {'"AI/ML & Full-Stack Dev"'}
                  </span>
                  ,
                </p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">problemSolving</span>:{" "}
                  <span className="text-[#34C759]">true</span>,
                </p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">skills</span>: [
                </p>

                <p
                  className={`pl-8 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}
                >
                  {'"React", "Next.js", "AI/ML"'},
                </p>
                <p
                  className={`pl-8 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}
                >
                  {'"Node.js", "Express", "TypeScript"'}
                </p>
                <p
                  className={`pl-8 ${isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}`}
                >
                  {'"MongoDB", "PostgreSQL", "Flutter"'}
                </p>

                <p className="pl-4">],</p>

                <p className="pl-4 mt-1">
                  <span className="text-[#EC4899]">isHirable</span>:{" "}
                  <span className="text-[#34C759]">function()</span> {"{"},
                </p>

                <p className="pl-8">
                  <span className="text-[#EC4899]">return true</span>;
                </p>

                <p className="pl-4">{"}"}</p>
                <p>{"}"}</p>
              </div>

              <div className="flex items-center gap-2 text-[#EC4899] mt-2">
                ${" "}
                <span className="w-2 h-4 animate-pulse bg-[#EC4899] shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
