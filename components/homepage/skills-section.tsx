import { skillsData } from "../../data/skills-data";
import { skillsImage } from "../../utils/skills-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-12 lg:my-24">

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 my-5 lg:py-8">
          <p className="bg-[hsl(220,18%,10%)] px-4 py-2 md:text-xs rounded-full text-[hsl(38,92%,50%)] font-mono text-sm tracking-wider animate-fade-in-up mb-2">$ ls skills/</p>
           <span className="h-2 flex-1 bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-transparent"></span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            My <span className="bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-[hsl(28,90%,48%)] bg-clip-text text-transparent hover:from-[hsl(38,92%,55%)] hover:via-[hsl(38,80%,50%)] hover:to-[hsl(28,90%,53%)] transition-all duration-300">Tech Stack</span>
          </h2>


        <div className="w-full my-12">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}>
                <div className="h-full w-full rounded-lg border border-[hsl(220,15%,20%)] bg-[hsl(220,18%,10%)] shadow-none shadow-gray-50 group-hover:border-[hsl(38,92%,50%)] transition-all duration-500">
                  <div className="flex -translate-y-1 justify-center">
                    <div className="w-3/4">
                      <div className="h-1 w-full bg-linear-to-r from-transparent via-[hsl(38,92%,50%)] to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-[hsl(40,20%,95%)] text-sm sm:text-lg">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;