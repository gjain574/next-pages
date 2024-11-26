export interface DesignProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tools?: string[];
  link?: string;
}

export const designProjects: DesignProject[] = [
  {
    id: 'project-1',
    title: 'Brand Identity Design',
    description: 'Complete brand identity design including logo, color palette, and guidelines.',
    image: '/images/design/project1.jpg',
    category: 'Branding',
    tools: ['Figma', 'Illustrator'],
    link: 'https://example.com/project1'
  },
  // Add more design projects here
]; 