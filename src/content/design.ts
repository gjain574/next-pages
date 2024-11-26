import { DesignProject } from '@/types/design'; 

export const designProjects: DesignProject[] = [
    {
      id: '1',
      title: 'Brand Identity System',
      description: 'Complete visual identity design including logo, color palette, and typography guidelines.',
      image: '/images/design/brand-identity.jpg',
      category: 'Branding',
      tools: ['Figma', 'Illustrator', 'Photoshop']
    },
    {
      id: '2',
      title: 'Mobile App UI Design',
      description: 'User interface design for a fitness tracking mobile application.',
      image: '/images/design/mobile-app.jpg',
      category: 'UI/UX',
      tools: ['Figma', 'Sketch', 'Protopie']
    },
    {
      id: '3',
      title: 'Website Redesign',
      description: 'Modern redesign of an e-commerce platform focusing on user experience.',
      image: '/images/design/website.jpg',
      category: 'UI/UX',
      tools: ['Figma', 'Webflow', 'Adobe XD']
    }
];