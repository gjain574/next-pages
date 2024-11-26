import { projects } from '@/content/projects';
import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata = {
  title: 'Portfolio | Your Name',
  description: 'Showcase of my recent projects and work',
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-normal mb-4">Projects</h1>
      <p className="text-gray-500 text-lg mb-8">
        Chronological list of projects I have worked on. Consists of Web Apps, Chrome Extensions, and Electron Apps.
      </p>
      <ProjectGrid projects={projects} />
    </main>
  );
} 