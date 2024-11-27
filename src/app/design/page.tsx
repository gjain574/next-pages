import { designProjects } from '@/content/design';
import DesignGrid from '@/components/design/DesignGrid';

export const metadata = {
  title: 'Design | Your Name',
  description: 'Collection of my design work and UI/UX projects',
};

export default function DesignPage() {
  return (
    <main className="max-w-4xl px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
        <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
            <a href="/" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block font-semibold">
            Home
            </a>
            <span className="text-gray-darker">/</span>
            <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">👋 &nbsp;Design</span>
        </nav>
        <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-8">
            Design
        </h1>
        <div className="prose prose-sm sm:prose-lg max-w-none mb-8 prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body">
            <p>
              A curated collection of my UI/UX design work, including high-fidelity wireframes, interactive prototypes, and infographics created in Figma.
            </p>
        </div>
        <DesignGrid projects={designProjects} />
    </main>
  );
} 