"use client";

import { projects } from "@/app/projects/projects";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  activeFilter: string;
}

export default function ProjectsGrid({
  activeFilter,
}: ProjectsGridProps) {
  const hasProjects = projects.some(
    (project) =>
      activeFilter === "ALL" ||
      project.category?.toUpperCase() === activeFilter
  );

  return (
    <section className="bg-[#242323] py-24 text-white">
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const visible =
              activeFilter === "ALL" ||
              project.category?.toUpperCase() === activeFilter;

            return (
              <div
                key={project.slug}
                className={visible ? "block" : "hidden"}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {!hasProjects && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              No projects found
            </p>
          </div>
        )}
      </div>
    </section>
  );
}