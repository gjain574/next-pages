export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  date: string;
  status: 'Online' | 'Offline';
} 
