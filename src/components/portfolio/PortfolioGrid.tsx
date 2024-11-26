import PortfolioCard from "./PortfolioCard";
import { PortfolioProject } from "@/types/portfolio";

interface PortfolioGridProps {
  projects: PortfolioProject[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
    return (
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
    );
}