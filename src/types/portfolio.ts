export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  highlights: string[];
  date: string;
  status: 'Online' | 'Offline';
} 
