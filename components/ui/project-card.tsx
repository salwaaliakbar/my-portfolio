"use client";

import * as React from "react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ProjectData } from "../../types/project-data.type";
import { useTheme } from "../../context/ThemeContext";

interface ProjectCardProps {
  project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const codeEnabled = Boolean(project.code);
  const demoEnabled = Boolean(project.demo);

  return (
    <div
      className={`h-full min-h-520px rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${isDark ? "bg-linear-to-br from-[#1B263B] to-[#0D1B2A] border border-[#415A77] shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-linear-to-br from-white to-[#F5F5F7] border border-[#D5D5D7] shadow-[0_8px_32px_rgba(0,0,0,0.08)]"}`}
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
        className={`px-4 md:px-5 py-3 lg:py-4 border-b ${isDark ? "bg-[#1B263B] border-[#415A77]" : "bg-[#F5F5F7] border-[#D5D5D7]"}`}
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
            {project.name}.sh
          </p>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="px-4 md:px-5 lg:px-5 py-3 lg:py-4 font-mono text-xs space-y-2 flex-1">
        <p className={`${isDark ? "text-[#34C759]" : "text-[#34C759]"}`}>
          $ cat project.json
        </p>

        <div className={`${isDark ? "text-[#778DA9]" : "text-[#86868B]"}`}>
          <p>{"{"}</p>

          <p className="pl-4 mt-1">
            <span className="text-[#EC4899]">name</span>:{" "}
            <span className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}>
              {'"'}
              {project.name}
              {'"'}
            </span>
            ,
          </p>

          <p className="pl-4 mt-1">
            <span className="text-[#EC4899]">role</span>:{" "}
            <span className={isDark ? "text-[#34C759]" : "text-[#34C759]"}>
              {'"'}
              {project.role}
              {'"'}
            </span>
            ,
          </p>

          <p className="pl-4 mt-1">
            <span className="text-[#EC4899]">tools</span>: [
          </p>

          <div className="pl-8">
            {project.tools.map((tool, i) => (
              <p
                key={i}
                className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}
              >
                {'"'}
                {tool}
                {'"'}
                {i < project.tools.length - 1 ? "," : ""}
              </p>
            ))}
          </div>

          <p className="pl-4">],</p>

          <p className="pl-4 mt-1">
            <span className="text-[#EC4899]">description</span>:{" "}
            <span className={isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]"}>
              {'"'}
              {project.description}
              {'"'}
            </span>
            ,
          </p>

          <p className="pl-4 mt-1">
            <span className="text-[#EC4899]">status</span>:{" "}
            <span className={isDark ? "text-[#34C759]" : "text-[#34C759]"}>
              completed
            </span>
            ,
          </p>

          <p>{"}"}</p>
        </div>

        <div className="flex items-center gap-2 text-[#EC4899] mt-2">
          ${" "}
          <span className="w-2 h-4 animate-pulse bg-[#EC4899] shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {codeEnabled ? (
            <Link
              href={project.code as string}
              target="_blank"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 ${isDark ? "bg-[#1B263B] text-[#E0E1DD] border border-[#415A77] hover:text-[#06B6D4]" : "bg-[#F5F5F7] text-[#1D1D1F] border border-[#D5D5D7] hover:text-[#0071E3]"}`}
            >
              <BsGithub size={14} />
              <span>View Code</span>
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-semibold cursor-not-allowed opacity-60 border border-dashed ${isDark ? "bg-[#1B263B] text-[#778DA9] border-[#415A77]" : "bg-[#F5F5F7] text-[#86868B] border-[#D5D5D7]"}`}
            >
              <BsGithub size={14} />
              <span>View Code</span>
            </button>
          )}

          {demoEnabled ? (
            <Link
              href={project.demo as string}
              target="_blank"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-semibold transition-all duration-200 ${isDark ? "bg-[#06B6D4] text-[#0D1B2A] hover:bg-[#22D3EE]" : "bg-[#0071E3] text-white hover:bg-[#0077ED]"}`}
            >
              <HiOutlineExternalLink size={14} />
              <span>Live Demo</span>
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-[11px] font-semibold cursor-not-allowed opacity-60 border border-dashed ${isDark ? "bg-[#1B263B] text-[#778DA9] border-[#415A77]" : "bg-[#F5F5F7] text-[#86868B] border-[#D5D5D7]"}`}
            >
              <HiOutlineExternalLink size={14} />
              <span>Live Demo</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
