import Image from "next/image";
import { DesignProject } from "@/types/design";

interface DesignGridProps {
  projects: DesignProject[];
}

export default function DesignGrid({ projects }: DesignGridProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool) => (
                  <span key={tool} className="bg-gray-100 px-3 py-1.5 rounded text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }