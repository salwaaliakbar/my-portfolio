import { personalData } from "../../data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[hsl(220,18%,8%)]">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.22)_0%,transparent_60%),linear-gradient(to_right,hsl(220,15%,20%)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220,15%,20%)_1px,transparent_1px)] bg-[background-size:auto,3.0rem_3.0rem,3.0rem_3.0rem] bg-center opacity-30 mask[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] shadow-[inset_0_0_110px_rgba(0,0,0,0.52)]"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 items-start lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 gap-y-8 pt-8 lg:pt-12">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-10 lg:pt-0">
           <p className="text-[hsl(38,92%,50%)] font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2">
                $ whoami
              </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white md:font-extrabold lg:text-5xl leading-tight">
            Hi,
            I {"'"}m{' '}
            <span className="bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-[hsl(28,90%,48%)] bg-clip-text text-transparent hover:from-[hsl(38,92%,55%)] hover:via-[hsl(38,80%,50%)] hover:to-[hsl(28,90%,53%)] transition-all duration-300">{personalData.name}</span>
            
             <p className="text-xl md:text-2xl text-gray-400 animate-fade-in-up animation-delay-400 mt-2 mb-4">
                Full Stack AI Developer
              </p>
            
          </h1>

          <p className="text-sm md:text-base text-gray-300 mt-4 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
            I{"'"}m a passionate full stack developer specializing in AI-powered applications. I build scalable web solutions with modern technologies like React, Node.js, and TypeScript. I love solving complex problems and creating seamless user experiences.
          </p>

          <div className="my-8 flex items-center gap-4">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-[hsl(38,92%,50%)] hover:scale-125 duration-300 hover:text-[hsl(28,90%,48%)]"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-[hsl(38,92%,50%)] hover:scale-125 duration-300 hover:text-[hsl(28,90%,48%)]"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-[hsl(38,92%,50%)] hover:scale-125 duration-300 hover:text-[hsl(28,90%,48%)]"
            >
              <FaFacebook size={24} />
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <Link href="#contact" className="bg-linear-to-r to-[hsl(38,80%,45%)] from-[hsl(38,92%,50%)] p-px rounded-full transition-all duration-300 hover:from-[hsl(38,92%,55%)] hover:to-[hsl(38,80%,50%)]">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-[hsl(220,18%,10%)] rounded-full border-none text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={14} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-[hsl(38,92%,50%)] to-[hsl(28,90%,48%)] px-4 md:px-6 py-2 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={14} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[hsl(220,18%,10%)] border-[hsl(220,15%,20%)] relative rounded-lg border bg-linear-to-r to-[hsl(220,15%,15%)]">
          <div className="flex flex-row">
            <div className="h-px w-full bg-linear-to-r from-transparent via-[hsl(38,92%,50%)] to-[hsl(28,90%,48%)]"></div>
            <div className="h-px w-full bg-linear-to-r from-[hsl(28,90%,48%)] to-transparent"></div>
          </div>
          <div className="px-3 lg:px-5 py-3 lg:py-4">
            <div className="flex flex-row space-x-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
              <p className="font-mono text-xs">about.sh</p>
            </div>
          </div>
          <div className="overflow-hidden border-t-2 border-[hsl(220,15%,20%)] px-3 lg:px-5 py-3 lg:py-4">
            <code className="font-mono text-xs space-y-0.5">
              <p className="text-green-500">$ cat developer.json</p>
              <div className="text-[hsl(220,10%,55%)] pl-4 space-y-0.5">
                <p>{"{"}</p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"name"}</span>: <span className="text-[hsl(40,20%,95%)]">{'"'}{personalData.name}{'"'}</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"role"}</span>: <span className="text-[hsl(40,20%,95%)]">{'"'}{personalData.designation}{'"'}</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"status"}</span>: <span className="text-green-500">{"open to work"}</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"availability"}</span>: <span className="text-[hsl(40,20%,95%)]">{"\"Immediate\""}</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"enthusiast"}</span>: <span className="text-[hsl(40,20%,95%)]">{"\"AI/ML & Full-Stack Dev\""}</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"problemSolving"}</span>: <span className="text-[hsl(142,70%,55%)]">{"true"}</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"skills"}</span>: [
                </p>
                <p className="pl-8 text-[hsl(40,20%,95%)]">{"\"React\", \"Next.js\", \"AI/ML\","}</p>
                <p className="pl-8 text-[hsl(40,20%,95%)]">{"\"Node.js\", \"Express\", \"TypeScript\","}</p>
                <p className="pl-8 text-[hsl(40,20%,95%)]">{"\"MongoDB\", \"PostgreSQL\", \"Flutter\""}</p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-[hsl(38,92%,50%)]">{"isHirable"}</span>: <span className="text-[hsl(142,70%,55%)]">{"function()"}</span> {"{"},
                </p>
                <p className="pl-8">
                  <span className="text-[hsl(142,70%,55%)]">{"return true"}</span>;
                </p>
                <p className="pl-4">{"}"}</p>
                <p>{"}"}</p>
              </div>
              <p className="text-[hsl(38,92%,50%)] flex items-center gap-2">
                $ <span className="w-2 h-4 bg-[hsl(38,92%,50%)] animate-pulse" />
              </p>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
