import React from "react";
import Image from "next/image";
import { skillsImage } from "../../utils/skills-image";

interface SkillCard {
  name: string;
  level: string;
  proficiency: number;
}

interface ExpertiseData {
  category: string;
  title: string;
  description: string;
  avgProficiency: number;
  topSkills: SkillCard[];
  color: string;
}

function ExpertiseSection() {
  const expertiseData: ExpertiseData[] = [
    {
      category: "AI & Deep Learning",
      title: "AI & Deep Learning",
      description: "Advanced expertise in LLMs, RAG, Deep Learning & NLP",
      avgProficiency: 87,
      topSkills: [
        { name: "Python", level: "Expert", proficiency: 90 },
        { name: "TensorFlow", level: "Advanced", proficiency: 85 },
        { name: "Pytorch", level: "Advanced", proficiency: 85 },
        { name: "NLP", level: "Expert", proficiency: 90 },
      ],
      color: "from-[#F59E0B] to-[#EC4899]"
    },
    {
      category: "Full Stack Web (MERN)",
      title: "Full Stack Development",
      description: "Expert MERN stack with React, Next.js, Node.js & Express",
      avgProficiency: 93,
      topSkills: [
        { name: "React", level: "Expert", proficiency: 95 },
        { name: "Next JS", level: "Expert", proficiency: 95 },
        { name: "Node JS", level: "Expert", proficiency: 90 },
        { name: "Express JS", level: "Expert", proficiency: 90 },
      ],
      color: "from-[#3B82F6] to-[#06B6D4]"
    },
    {
      category: "Mobile App Development",
      title: "Mobile Development",
      description: "Cross-platform mobile apps with Flutter & Dart",
      avgProficiency: 75,
      topSkills: [
        { name: "Flutter", level: "Advanced", proficiency: 75 },
        { name: "dart", level: "Advanced", proficiency: 75 },
        { name: "Postman", level: "Advanced", proficiency: 80 },
        { name: "Jest", level: "Advanced", proficiency: 70 },
      ],
      color: "from-[#8B5CF6] to-[#06B6D4]"
    },
    {
      category: "Backend & Systems",
      title: "Backend & APIs",
      description: "RESTful APIs, FastAPI, Microservices & CI/CD Pipelines",
      avgProficiency: 87,
      topSkills: [
        { name: "REST API", level: "Expert", proficiency: 95 },
        { name: "Fast API", level: "Expert", proficiency: 90 },
        { name: "GitHub Actions", level: "Advanced", proficiency: 85 },
        { name: "Java", level: "Advanced", proficiency: 85 },
      ],
      color: "from-[#10B981] to-[#06B6D4]"
    },
    {
      category: "Database & Cloud",
      title: "Database & Cloud",
      description: "MongoDB, PostgreSQL, MySQL, Supabase & Cloud Services",
      avgProficiency: 90,
      topSkills: [
        { name: "MongoDB", level: "Expert", proficiency: 95 },
        { name: "PostgreSQL", level: "Expert", proficiency: 90 },
        { name: "MySQL", level: "Expert", proficiency: 90 },
        { name: "Supabase", level: "Advanced", proficiency: 85 },
      ],
      color: "from-[#EF4444] to-[#F97316]"
    },
    {
      category: "Core CS Fundamentals",
      title: "CS Fundamentals",
      description: "Data Structures, OOP, System Design & Architecture",
      avgProficiency: 92,
      topSkills: [
        { name: "Javascript", level: "Expert", proficiency: 90 },
        { name: "Typescript", level: "Expert", proficiency: 85 },
        { name: "HTML", level: "Expert", proficiency: 95 },
        { name: "CSS", level: "Expert", proficiency: 95 },
      ],
      color: "from-[#EC4899] to-[#8B5CF6]"
    },
  ];

  return (
    <div id="expertise" className="relative z-50 my-12 lg:my-24">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 my-5 lg:py-8">
          <p className="bg-[#1B263B] px-4 py-2 md:text-xs rounded-full text-[#06B6D4] font-mono text-sm tracking-wider animate-fade-in-up mb-2">$ whoami</p>
          <span className="h-2 flex-1 bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent"></span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-2">
          Core <span className="bg-linear-to-r from-[#EC4899] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-[#A0AEC0] mb-12 text-sm md:text-base">Full Stack Engineer specializing in MERN, AI/ML, Backend & Cloud Architecture</p>

        {/* Expertise Cards Grid - 2 rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertiseData.map((expertise, idx) => (
            <div
              key={idx}
              className={`from-[#0D1B2A] border-[#415A77] relative rounded-lg border bg-linear-to-r to-[#1B263B] w-full shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group overflow-hidden`}
            >
              {/* Top Gradient Border */}
              <div className="flex flex-row">
                <div className="h-px w-full bg-linear-to-r from-transparent via-[#06B6D4] to-[#0EA5E9]"></div>
                <div className="h-px w-full bg-linear-to-r from-[#0EA5E9] to-transparent"></div>
              </div>

              {/* macOS Header */}
              <div className="px-4 md:px-5 py-3 lg:py-4">
                <div className="flex flex-row space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <p className="font-mono text-xs text-[#E0E1DD]">{expertise.title}.sh</p>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="overflow-hidden border-t-2 border-[#415A77] px-4 md:px-5 lg:px-5 py-3 lg:py-4">
                <code className="font-mono text-xs space-y-1">
                  <p className="text-green-500">$ cat expertise.json</p>
                  <div className="text-[#778DA9] pl-4 space-y-2">
                    <p>{"{"}</p>
                    <p className="pl-4">
                      <span className="text-[#EC4899]">{"skill"}</span>: <span className="text-[#E0E1DD]">{'"'}{expertise.title}{'"'}</span>,
                    </p>
                    <p className="pl-4">
                      <span className="text-[#EC4899]">{"proficiencies"}</span>: [
                    </p>
                    <div className="pl-8 space-y-2 max-h-40 overflow-y-auto">
                      {expertise.topSkills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-[#E0E1DD]">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-green-500">{skill.name}</span>
                            <span className="text-[#06B6D4] text-xs font-bold">{skill.proficiency}%</span>
                          </div>
                          <div className="w-full h-1 bg-[#1B263B] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-linear-to-r from-[#06B6D4] to-[#0EA5E9]"
                              style={{ width: `${skill.proficiency}%` }}
                            ></div>
                          </div>
                          {expertise.topSkills.length - 1 !== skillIndex && <p className="text-[#778DA9] text-xs mt-1">,</p>}
                        </div>
                      ))}
                    </div>
                    <p className="pl-4">],</p>
                    <p>{"}"}</p>
                  </div>
                  <p className="text-[#EC4899] flex items-center gap-2 mt-2">
                    $ <span className="w-2 h-4 bg-[#EC4899] animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
                  </p>
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Card - Full Width */}
        <div className="mt-8 from-[#0D1B2A] border-[#415A77] relative rounded-lg border bg-linear-to-r to-[#1B263B] shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 overflow-hidden">
          <div className="flex flex-row">
            <div className="h-px w-full bg-linear-to-r from-transparent via-[#EC4899] to-[#8B5CF6]"></div>
            <div className="h-px w-full bg-linear-to-r from-[#8B5CF6] to-transparent"></div>
          </div>

          <div className="px-6 py-6">
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-[#EC4899] mt-1.5 shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">⭐ Complete MERN + AI/ML Engineer</h3>
                <p className="text-[#A0AEC0] text-sm leading-relaxed mb-4">
                  Expert full-stack developer (React 95%, Next.js 95%, Node.js 90%) with strong AI/ML expertise (LLMs 90%, Deep Learning 85%). Proficient in backend systems with REST APIs, FastAPI, and CI/CD pipelines. Mastered databases (MongoDB 95%, PostgreSQL 90%, MySQL 90%) and cloud services. Strong CS fundamentals with 92% proficiency in core concepts.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MERN Stack", "AI/ML/DL", "Backend APIs", "Databases", "CI/CD", "Cloud"].map((badge, i) => (
                    <span key={i} className="px-3 py-1 bg-[#1B263B] border border-[#415A77] rounded-full text-xs text-[#06B6D4] font-semibold hover:border-[#06B6D4] hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ExpertiseSection);
