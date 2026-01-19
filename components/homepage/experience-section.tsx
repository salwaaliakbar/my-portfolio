import { experiences } from "../../data/experience-data";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24 w-full">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#0D1B2A]">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.22)_0%,transparent_60%),linear-gradient(to_right,#415A77_1px,transparent_1px),linear-gradient(to_bottom,#415A77_1px,transparent_1px)] bg-size[auto,3.0rem_3.0rem,3.0rem_3.0rem] bg-center opacity-30 mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] shadow-[inset_0_0_110px_rgba(0,0,0,0.52)]"></div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="flex items-center gap-4 mb-10">
          <p className="bg-[#1B263B] px-4 py-2 md:text-xs rounded-full text-[#06B6D4] font-mono text-sm tracking-wider animate-fade-in-up">$ ls career journey/</p>
          <span className="h-2 flex-1 bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-transparent"></span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            Work <span className="bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] bg-clip-text text-transparent hover:from-[#0EA5E9] hover:via-[#06B6D4] hover:to-[#0EA5E9] transition-all duration-300">Experience</span>
          </h2>

        <div className="max-w-5xl mx-auto pt-6 px-4">
          <div className="relative py-8">
            {/* Timeline Line - Center (Hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#06B6D4] via-[#0EA5E9] to-transparent -translate-x-1/2 pointer-events-none" />
            
            {/* Timeline Line - Left (Mobile) */}
            <div className="lg:hidden absolute left-3 top-0 bottom-0 w-1 bg-linear-to-b from-[#06B6D4] via-[#0EA5E9] to-transparent pointer-events-none" />

            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} pl-8 lg:pl-0`}>
                {/* Left/Right Content - 45% width on desktop, full width on mobile */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right text-left' : 'lg:pl-8 text-left'}`}>
                  <div>
                    <span className="text-[#06B6D4] font-mono text-sm font-medium">{exp.duration}</span>
                    <h3 className="text-lg font-bold text-[#E0E1DD] mt-1">{exp.title}</h3>
                    <p className="text-sm text-[#06B6D4] mb-2">{exp.company}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-3 text-left">{exp.description}</p>
                    
                    <div className={`space-y-1 text-xs text-gray-400`}>
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
                    <div className="w-5 h-5 rounded-full border-3 border-[#415A77] bg-[#0D1B2A] flex items-center justify-center z-10">
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