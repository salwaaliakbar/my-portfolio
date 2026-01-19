import { projectsData } from "../../data/projects-data";
import ProjectCard from "../ui/project-card";

function Projects() {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <p className="bg-[hsl(220,18%,10%)] px-4 py-2 md:text-xs rounded-full text-[hsl(38,92%,50%)] font-mono text-sm tracking-wider animate-fade-in-up mt-4 mb-2">
            $ ls projects/
          </p>
          <span className="h-2 flex-1 bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-transparent"></span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
          Thing{" "}
          <span className="bg-linear-to-r from-[hsl(38,92%,50%)] via-[hsl(38,80%,45%)] to-[hsl(28,90%,48%)] bg-clip-text text-transparent hover:from-[hsl(38,92%,55%)] hover:via-[hsl(38,80%,50%)] hover:to-[hsl(28,90%,53%)] transition-all duration-300">
            I{"'"}ve Built
          </span>
        </h2>

        <div className="pt-6">
          <div className="flex flex-col gap-6">
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                id={`sticky-card-${index + 1}`}
                key={index}
                className="sticky-card w-full mx-auto max-w-2xl sticky"
              >
                <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-75">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
