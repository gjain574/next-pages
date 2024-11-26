import Image from "next/image";
import { PortfolioProject } from "@/types/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-40">
        {project.youtubeUrl ? (
          <iframe
            src={project.youtubeUrl}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
            >
              Live Demo →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-400"
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}