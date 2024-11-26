import { designProjects } from '@/content/design';
import DesignGrid from '@/components/design/DesignGrid';

export const metadata = {
  title: 'Design | Your Name',
  description: 'Collection of my design work and UI/UX projects',
};

export default function DesignPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Design</h1>
      <DesignGrid projects={designProjects} />
    </main>
  );
} 