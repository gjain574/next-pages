import Image from "next/image";
import { PortfolioProject } from "@/types/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100/80 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] 
      hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-200 hover:-translate-y-1 overflow-hidden
      w-full sm:max-w-sm md:max-w-md">
      <div className="relative h-40 sm:h-48 border-b border-gray-100">
        {project.videoUrl ? (
          <iframe
            src={project.videoUrl}
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
      <div className="p-4 sm:p-6 flex flex-col justify-between">
        <h3 className="text-lg sm:text-xl font-normal text-gray-700 mb-2 hover:text-gray-800 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-white text-gray-600 rounded-lg text-xs sm:text-sm font-medium 
                border border-gray-200/50 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
          
        <div className="flex flex-row xs:flex-row gap-2 sm:gap-4 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-50 hover:text-gray-800
                transition-colors shadow-sm hover:shadow-md text-center border border-blue-200/50 flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
              Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-200 hover:text-gray-800
                transition-colors shadow-sm hover:shadow-md border border-gray-200/50 text-center flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}