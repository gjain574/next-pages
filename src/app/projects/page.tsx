import { projects } from '@/content/projects';
import ProjectGrid from '@/components/projects/ProjectGrid';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Projects',
  description: 'Chronological list of projects I have worked on. Consists of Web Apps, Chrome Extensions, and Electron Apps.',
  icons: {
    icon: '/gj.svg',
    shortcut: '/gj.svg',
    apple: '/gj.svg'
  },
  openGraph: {
    title: 'Portfolio Projects', 
    images: '/gj.svg',
    description: 'Chronological list of projects I have worked on. Consists of Web Apps, Chrome Extensions, and Electron Apps.',
    type: 'website',
  },
};

export default function ProjectsPage() {

  return (
    <main className="max-w-6xl px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
        <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
            <Link href="/" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block font-semibold">
            Home
            </Link>
            <span className="text-gray-darker">/</span>
            <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">🛠️ &nbsp;Projects</span>
        </nav>

        <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-8">
            Projects
        </h1>
        <ProjectGrid projects={projects} />
    </main>
  );
} 