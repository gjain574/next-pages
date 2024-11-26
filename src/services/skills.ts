import { skills, categoryNames } from '@/content/skills'
import type { Skill, SkillCategory } from '@/types/skills'

/**
 * Retrieves all skills for a specific category
 */
export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter(skill => skill.category === category)
}

/**
 * Retrieves all unique skill categories
 */
export function getAllCategories(): SkillCategory[] {
  return Array.from(new Set(skills.map(skill => skill.category)))
}

/**
 * Gets the display name for a category
 */
export function getCategoryName(category: SkillCategory): string {
  return categoryNames[category]
}

/**
 * Retrieves all skills
 */
export function getAllSkills(): Skill[] {
  return skills
}

/**
 * Gets the top skills based on proficiency level
 */
export function getTopSkills(limit: number = 5): Skill[] {
  return [...skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, limit)
}

/**
 * Searches skills by name or description
 */
export function searchSkills(query: string): Skill[] {
  const lowercaseQuery = query.toLowerCase()
  return skills.filter(skill => 
    skill.name.toLowerCase().includes(lowercaseQuery) ||
    skill.description.toLowerCase().includes(lowercaseQuery)
  )
} 