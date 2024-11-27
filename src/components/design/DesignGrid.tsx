'use client';
import Image from "next/image";
import { DesignProject } from "@/types/design";
import { useState } from "react";

interface DesignGridProps {
  projects: DesignProject[];
}

export default function DesignGrid({ projects }: DesignGridProps) {
    const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projectIndex) => (
            <div key={projectIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Design
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
            <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
                onClick={() => setSelectedProject(null)}
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </>
    );
}