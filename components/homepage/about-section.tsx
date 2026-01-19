import { personalData } from "../../data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4 mb-8">
        <p className="bg-[#1B263B] px-4 py-2 md:text-xs rounded-full text-[#06B6D4] font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2">$ ls about/</p>
         <span className="h-2 flex-1 bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12">
        <div className="order-2 lg:order-1 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Turning Ideas into <span className="bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent hover:from-[#0EA5E9] hover:via-[#06B6D4] hover:to-[#0EA5E9] transition-all duration-300">Digital Realities</span>
          </h2>
          <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              I{"'"}m Salwa Ansari, a <span className="text-[#06B6D4] font-medium">Full Stack AI Developer</span> passionate about building <span className="text-white font-medium">scalable, maintainable, and high-performance</span> applications. I specialize in integrating AI/ML features and NLP into full-stack solutions using <span className="text-white font-medium">React, Next.js, Node.js, MongoDB, PostgreSQL, and Flutter</span>.
            </p>
            <p>
              Currently working at <span className="text-[#06B6D4] font-medium">10Pearls Pakistan</span> and running <span className="text-[#06B6D4] font-medium">HyperLogic</span>, I focus on creating intelligent, user-centered products with clean architecture, optimized performance, and seamless AI integration. I thrive on solving complex problems and delivering robust, production-ready solutions.
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