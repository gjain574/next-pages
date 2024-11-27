import { DesignProject } from '@/types/design'; 

export const designProjects: DesignProject[] = [
    {
      title: 'StockViews.AI',
      description: 'Stock Views from Top Influencers Summarized by AI.',
      image: '/images/design/stock_views_mockup.jpg',
      category: 'Mockup'
    },
    {
      title: 'Mobile App UI Design',
      description: 'User interface design for a fitness tracking mobile application.',
      image: '/images/design/mobile-app.jpg',
      category: 'UI/UX',
      tools: ['Figma', 'Sketch', 'Protopie']
    },
    {
      title: 'Website Redesign',
      description: 'Modern redesign of an e-commerce platform focusing on user experience.',
      image: '/images/design/website.jpg',
      category: 'UI/UX',
      tools: ['Figma', 'Webflow', 'Adobe XD']
    }
];