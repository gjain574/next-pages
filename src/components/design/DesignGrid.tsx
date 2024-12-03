'use client';
import Image from "next/image";
import { DesignProject } from "@/types/design";
import { useState } from "react";

interface DesignGridProps {
  projects: DesignProject[];
}

export default function DesignGrid({ projects }: DesignGridProps) {
    const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null);
    const [isLoading, setIsLoading] = useState(false);

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
              <div className="px-6 pt-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-lighter text-sm mb-4 leading-relaxed line-clamp-2 min-h-[3rem]">{project.description}</p>
              </div>
              <div className="flex justify-end p-4">
                <button
                  onClick={() => {
                    setIsLoading(true);
                    setSelectedProject(project);
                  }}
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <div className="flex items-center text-sm">
                    <div className="px-4 py-2 bg-gray-muted border border-gray-muted text-gray-darker rounded-lg hover:bg-white hover:border hover:border-gray-dark hover:text-gray-darker transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View Design
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
            <div className="relative max-w-4xl w-full max-h-[80vh] bg-white rounded-lg p-4" onClick={e => e.stopPropagation()}>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg z-10">
                  <div className="animate-spin w-8 h-8">
                    <svg className="text-gray-400" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 0 0-10 10h2a8 8 0 0 1 8-8V2z"
                      >
                        <animateTransform
                          attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 12 12"
                          to="360 12 12"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  </div>
                </div>
              )}
              <div className="w-full h-[calc(80vh-2rem)]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain rounded-lg"
                  onLoadingComplete={() => setIsLoading(false)}
                  onLoad={() => setIsLoading(false)}
                  priority={true}
                />
              </div>
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 border border-gray-300"
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