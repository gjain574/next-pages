'use client';

import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import { useState } from 'react';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>("All");

  const filterTiles = [
    "All",
    "Chrome Extension",
    "Web App",
    "Electron App"
  ];

    const filteredProjects = selectedFilter !== "All" ? projects.filter(project => project.projectType === selectedFilter) : projects;

    return (
      <>
        <div className="prose prose-sm sm:prose-lg max-w-none mb-8 prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body">
            <p className="!my-[10px]">
                Chronological list of projects I have worked on. Consists of Web Apps, Chrome Extensions, and Electron Apps.
            </p>
            <p className="!my-[10px]">
              Use the tiles below to filter projects by type.
            </p>
        </div>
        <div className="flex flex-wrap gap-2 mb-8 items-center">
            <div className="mr-3 w-[32px] h-[32px] flex items-center justify-center">
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.75 2.25H1.25C1.05109 2.25 0.860322 2.17098 0.71967 2.03033C0.579018 1.88968 0.5 1.69891 0.5 1.5C0.5 1.30109 0.579018 1.11032 0.71967 0.96967C0.860322 0.829018 1.05109 0.75 1.25 0.75H14.75C14.9489 0.75 15.1397 0.829018 15.2803 0.96967C15.421 1.11032 15.5 1.30109 15.5 1.5C15.5 1.69891 15.421 1.88968 15.2803 2.03033C15.1397 2.17098 14.9489 2.25 14.75 2.25ZM12.25 5.75H3.75C3.55109 5.75 3.36032 5.67098 3.21967 5.53033C3.07902 5.38968 3 5.19891 3 5C3 4.80109 3.07902 4.61032 3.21967 4.46967C3.36032 4.32902 3.55109 4.25 3.75 4.25H12.25C12.4489 4.25 12.6397 4.32902 12.7803 4.46967C12.921 4.61032 13 4.80109 13 5C13 5.19891 12.921 5.38968 12.7803 5.53033C12.6397 5.67098 12.4489 5.75 12.25 5.75ZM9.25 9.25H6.75C6.55109 9.25 6.36032 9.17098 6.21967 9.03033C6.07902 8.88968 6 8.69891 6 8.5C6 8.30109 6.07902 8.11032 6.21967 7.96967C6.36032 7.82902 6.55109 7.75 6.75 7.75H9.25C9.44891 7.75 9.63968 7.82902 9.78033 7.96967C9.92098 8.11032 10 8.30109 10 8.5C10 8.69891 9.92098 8.88968 9.78033 9.03033C9.63968 9.17098 9.44891 9.25 9.25 9.25Z" fill="black"/>
              </svg>
            </div>
            {filterTiles.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setSelectedFilter(selectedFilter === filter ? 'All' : filter)}
                    className={`px-6 py-1 rounded-full border border-gray-muted text-sm transition-colors
                        ${selectedFilter === filter 
                            ? 'bg-gray text-gray-light border-gray' 
                            : 'bg-white text-gray-darker hover:bg-gray hover:text-gray-light'
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, projectIndex) => (
            <ProjectCard key={projectIndex} project={project} />
          ))}
        </div>
      </>
    );
}