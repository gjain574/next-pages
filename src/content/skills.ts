import type { Skill, CategoryNames } from '@/types/skills'

export const metadata = {
  title: 'Skills 🎨 ⛸️🏓 - Gautam Jain',
  description: 'Overview of my technical skills and expertise'
};

export const categoryNames: CategoryNames = {
  frontend: 'JavaScript',
  backend: 'Datastore',
  tools: 'Infrastructure',
  languages: 'Python',
  design: 'Design'
};

// Define base skills with all properties
export const skills: Skill[] = [
  {
    name: "Node",
    image: "https://nodejs.org/static/logos/nodejsDark.svg",
    category: 'frontend',
    icon: '🟢',
    description: 'Server-side JavaScript runtime'
  },
  {
    name: "React",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/440px-React-icon.svg.png",
    category: 'frontend',
    icon: '⚛️',
    description: 'Modern React with hooks, context, and state management'
  },
  {
    name: "Redux",
    image: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    category: 'frontend',
    icon: '🔥',
    description: 'State management for React applications'
  },
  {
    name: "Tailwind CSS",
    image: "https://tailwindcss.com/favicons/apple-touch-icon.png?v=4",
    category: 'frontend',
    icon: '🎨',
    description: 'Utility-first CSS framework'
  },
  {
    name: "Nunjucks",
    image: "https://mozilla.github.io/nunjucks/img/favicon.png",
    category: 'frontend',
    icon: '📝',
    description: 'Templating engine for JavaScript'
  },
  {
    name: "TypeScript",
    image: "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",
    category: 'frontend',
    icon: '🔷',
    description: 'Type-safe JavaScript development'
  },
  {
    name: "Elastic Search",
    image: "https://cdn.freebiesupply.com/logos/large/2x/elastic-elasticsearch-logo-png-transparent.png",
    category: 'backend',
    icon: '🔍',
    description: 'Distributed search and analytics engine'
  },
  {
    name: "Redis",
    image: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png",
    category: 'backend',
    icon: '⚡',
    description: 'In-memory data structure store'
  },
  {
    name: "Postgres",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png",
    category: 'backend',
    icon: '🐘',
    description: 'Relational database management system'
  },
  {
    name: "Neo4j",
    image: "https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/neo4j_logo_globe1.png",
    category: 'backend',
    icon: '🕸️',
    description: 'Graph database management system'
  },
  {
    name: "Python",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
    category: 'languages',
    icon: '🐍',
    description: 'General-purpose programming language'
  },
  {
    name: "Flask",
    image: "https://www.kindpng.com/picc/m/188-1882559_python-flask-hd-png-download.png",
    category: 'languages',
    icon: '🌶️',
    description: 'Lightweight Python web framework',
  },
  {
    name: "Digital Ocean",
    image: "https://www.vectorlogo.zone/logos/digitalocean/digitalocean-tile.svg",
    category: 'tools',
    icon: '🌊',
    description: 'Cloud infrastructure provider'
  },
  {
    name: "AWS",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
    category: 'tools',
    icon: '☁️',
    description: 'Cloud computing services'
  },
  {
    name: "Figma",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    category: 'design',
    icon: '🎨',
    description: 'Collaborative interface design tool'
  },
  {
    name: "Pattern Labs",
    image: "https://avatars0.githubusercontent.com/u/4733935?s=280&v=4",
    category: 'design',
    icon: '🎯',
    description: 'Design system tool',
  }
];

// Utility functions
export const getSkillsByCategory = (category: keyof CategoryNames) => {
  return skills.filter(skill => skill.category === category);
};

export const getAllCategories = () => {
  return Object.keys(categoryNames) as (keyof CategoryNames)[];
};