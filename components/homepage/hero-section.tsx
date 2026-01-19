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
        <div className="absolute inset-0 -z-10 h-full w-full bg-[#0D1B2A] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.04)_0%,transparent_70%),linear-gradient(to_right,#415A77_1px,transparent_1px),linear-gradient(to_bottom,#415A77_1px,transparent_1px)] bg-[auto,3rem_3rem,3rem_3rem] bg-center opacity-30 shadow-[inset_0_0_240px_rgba(0,0,0,1)] mask-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.45)_22%,rgba(0,0,0,0.45)_78%,transparent)]"></div>
        </div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 items-start lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 gap-y-8 pt-8 lg:pt-12">
          <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-10 md:pb-10 lg:pt-0">
            <p className="text-[#06B6D4] font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  $ whoami
                </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white md:font-extrabold lg:text-5xl leading-tight">
              Hi,
              I {"'"}m{' '}
              <span className="bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(14,165,233,0.5)]">{personalData.name}</span>
              
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
                className="transition-all text-[#06B6D4] hover:scale-125 duration-300 hover:text-[#0EA5E9] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              >
                <BsGithub size={24} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target='_blank'
                className="transition-all text-[#06B6D4] hover:scale-125 duration-300 hover:text-[#0EA5E9] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              >
                <BsLinkedin size={24} />
              </Link>
              <Link
                href={personalData.facebook}
                target='_blank'
                className="transition-all text-[#06B6D4] hover:scale-125 duration-300 hover:text-[#0EA5E9] hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              >
                <FaFacebook size={24} />
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              <Link href="#contact" className="bg-linear-to-r to-[#0EA5E9] from-[#06B6D4] p-px rounded-full transition-all duration-300 hover:from-[#22D3EE] hover:to-[#38BDF8] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                <button className="px-4 md:px-6 py-2 md:py-3 bg-[#1B263B] rounded-full border-none text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={14} />
                </button>
              </Link>

              <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] px-4 md:px-6 py-2 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3),0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6),0_15px_40px_rgba(0,0,0,0.4)] hover:scale-105" role="button" target="_blank" href={personalData.resume}
              >
                <span>Get Resume</span>
                <MdDownload size={14} />
              </Link>
            </div>

          </div>
          <div className="order-1 lg:order-2 from-[#1B263B] border-[#415A77] relative rounded-lg border bg-linear-to-r to-[#0D1B2A] shadow-[0_0_30px_rgba(6,182,212,0.15),0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="flex flex-row">
              <div className="h-px w-full bg-linear-to-r from-transparent via-[#06B6D4] to-[#0EA5E9]"></div>
              <div className="h-px w-full bg-linear-to-r from-[#0EA5E9] to-transparent"></div>
            </div>
            <div className="px-3 lg:px-5 py-3 lg:py-4">
              <div className="flex flex-row space-x-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                <p className="font-mono text-xs">about.sh</p>
              </div>
            </div>
            <div className="overflow-hidden border-t-2 border-[#415A77] px-3 lg:px-5 py-3 lg:py-4">
              <code className="font-mono text-xs space-y-0.5">
                <p className="text-green-500">$ cat developer.json</p>
                <div className="text-[#778DA9] pl-4 space-y-0.5">
                  {/* <p>{"{"}</p> */}
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"name"}</span>: <span className="text-[#E0E1DD]">{'"'}{personalData.name}{'"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"role"}</span>: <span className="text-[#E0E1DD]">{'"'}{personalData.designation}{'"'}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"status"}</span>: <span className="text-green-500">{"open to work"}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"availability"}</span>: <span className="text-[#E0E1DD]">{"\"Immediate\""}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"enthusiast"}</span>: <span className="text-[#E0E1DD]">{"\"AI/ML & Full-Stack Dev\""}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"problemSolving"}</span>: <span className="text-green-500">{"true"}</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"skills"}</span>: [
                  </p>
                  <p className="pl-8 text-[#E0E1DD]">{"\"React\", \"Next.js\", \"AI/ML\","}</p>
                  <p className="pl-8 text-[#E0E1DD]">{"\"Node.js\", \"Express\", \"TypeScript\","}</p>
                  <p className="pl-8 text-[#E0E1DD]">{"\"MongoDB\", \"PostgreSQL\", \"Flutter\""}</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-[#EC4899]">{"isHirable"}</span>: <span className="text-green-500">{"function()"}</span> {"{"},
                  </p>
                  <p className="pl-8">
                    <span className="text-green-500">{"return true"}</span>;
                  </p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"}"}</p>
                </div>
                <p className="text-[#EC4899] flex items-center gap-2 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
                  $ <span className="w-2 h-4 bg-[#EC4899] animate-pulse" />
                </p>
              </code>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection;
