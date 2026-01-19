
import * as React from 'react';
import { ProjectData } from '../../types/project-data.type';

interface ProjectCardProps {
  project: ProjectData;
}

function ProjectCard({ project }: ProjectCardProps) {

  return (
    <div className="from-[hsl(220,18%,10%)] border-[hsl(220,15%,20%)] relative rounded-lg border bg-linear-to-r to-[hsl(220,15%,15%)] w-full">
      <div className="flex flex-row">
        <div className="h-px w-full bg-linear-to-r from-transparent via-[hsl(38,92%,50%)] to-[hsl(28,90%,48%)]"></div>
        <div className="h-px w-full bg-linear-to-r from-[hsl(28,90%,48%)] to-transparent"></div>
      </div>
      <div className="px-3 lg:px-5 py-3 lg:py-4">
        <div className="flex flex-row space-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          <p className="font-mono text-xs text-[hsl(40,20%,95%)]">{project.name}.sh</p>
        </div>
      </div>
      <div className="overflow-hidden border-t-2 border-[hsl(220,15%,20%)] px-3 lg:px-5 py-3 lg:py-4">
        <code className="font-mono text-xs space-y-0.5">
          <p className="text-green-500">$ cat project.json</p>
          <div className="text-[hsl(220,10%,55%)] pl-4 space-y-0.5">
            <p>{"{"}</p>
            <p className="pl-4">
              <span className="text-[hsl(38,92%,50%)]">{"name"}</span>: <span className="text-[hsl(40,20%,95%)]">{'"'}{project.name}{'"'}</span>,
            </p>
            <p className="pl-4">
              <span className="text-[hsl(38,92%,50%)]">{"role"}</span>: <span className="text-[hsl(40,20%,95%)]">{'"'}{project.role}{'"'}</span>,
            </p>
            <p className="pl-4">
              <span className="text-[hsl(38,92%,50%)]">{"tools"}</span>: [
            </p>
            <div className="pl-8">
              {project.tools.map((tool, i) => (
                <p key={i} className="text-[hsl(40,20%,95%)]">
                  {`"`}{tool}{`"`}{project.tools.length - 1 !== i ? ',' : ''}
                </p>
              ))}
            </div>
            <p className="pl-4">],</p>
            <p className="pl-4">
              <span className="text-[hsl(38,92%,50%)]">{"description"}</span>: <span className="text-[hsl(40,20%,95%)]">{'"'}{project.description}{'"'}</span>,
            </p>
            <p className="pl-4">
              <span className="text-[hsl(38,92%,50%)]">{"status"}</span>: <span className="text-green-500">{"completed"}</span>,
            </p>
            <p>{"}"}</p>
          </div>
          <p className="text-[hsl(38,92%,50%)] flex items-center gap-2">
            $ <span className="w-2 h-4 bg-[hsl(38,92%,50%)] animate-pulse" />
          </p>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;
