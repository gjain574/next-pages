export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'languages' | 'design';

export interface Skill {
  name: string;
  icon: string;
  image: string;
  category: SkillCategory;
  description: string;
}

export interface CategoryNames {
  frontend: string;
  backend: string;
  tools: string;
  languages: string;
  design: string;
} 