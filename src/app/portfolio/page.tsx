import { portfolioProjects } from '@/content/portfolio';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';

export const metadata = {
  title: 'Portfolio | Your Name',
  description: 'Showcase of my recent projects and work',
};

export default function PortfolioPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <PortfolioGrid projects={portfolioProjects} />
    </main>
  );
} 