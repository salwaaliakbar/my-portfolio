
import * as React from 'react';
import { ProjectData } from '../../types/project-data.type';

interface ProjectCardProps {
  project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {

  return (
    <div className="from-[#0D1B2A] border-[#415A77] relative rounded-lg border bg-linear-to-r to-[#1B263B] w-full shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 mx-2 md:mx-0">
      <div className="flex flex-row">
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#06B6D4] to-[#0EA5E9]"></div>
        <div className="h-px w-full bg-linear-to-r from-[#0EA5E9] to-transparent"></div>
      </div>
      <div className="px-4 md:px-5 lg:px-5 py-3 lg:py-4">
        <div className="flex flex-row space-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          <p className="font-mono text-xs text-[#E0E1DD]">{project.name}.sh</p>
        </div>
      </div>
      <div className="overflow-hidden border-t-2 border-[#415A77] px-4 md:px-5 lg:px-5 py-3 lg:py-4">
        <code className="font-mono text-xs space-y-0.5">
          <p className="text-green-500">$ cat project.json</p>
          <div className="text-[#778DA9] pl-4 space-y-0.5">
            <p>{"{"}</p>
            <p className="pl-4">
              <span className="text-[#EC4899]">{"name"}</span>: <span className="text-[#E0E1DD]">{'"'}{project.name}{'"'} </span>,
            </p>
            <p className="pl-4">
              <span className="text-[#EC4899]">{"role"}</span>: <span className="text-green-500">{'"'}{project.role}{'"'} </span>,
            </p>
            <p className="pl-4">
              <span className="text-[#EC4899]">{"tools"}</span>: [
            </p>
            <div className="pl-8">
              {project.tools.map((tool, i) => (
                <p key={i} className="text-[#E0E1DD]">
                  {`"`}{tool}{`"`}{project.tools.length - 1 !== i ? ',' : ''}
                </p>
              ))}
            </div>
            <p className="pl-4">],</p>
            <p className="pl-4">
              <span className="text-[#EC4899]">{"description"}</span>: <span className="text-[#E0E1DD]">{'"'}{project.description}{'"'}</span>,
            </p>
            <p className="pl-4">
              <span className="text-[#EC4899]">{"status"}</span>: <span className="text-green-500">{"completed"}</span>,
            </p>
            <p>{"}"}</p>
          </div>
          <p className="text-[#EC4899] flex items-center gap-2">
            $ <span className="w-2 h-4 bg-[#EC4899] animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
          </p>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;
