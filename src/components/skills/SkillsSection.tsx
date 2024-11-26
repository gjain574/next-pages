import { getSkillsByCategory, getCategoryName } from '@/services/skills'
import type { SkillCategory } from '@/types/skills'
import SkillCard from '@/components/skills/SkillCard'

interface SkillsSectionProps {
  category: SkillCategory;
}

export default function SkillsSection({ category }: SkillsSectionProps) {
  const skills = getSkillsByCategory(category)
  const title = getCategoryName(category)
  
  return (
    <section className="mb-12">
      <h4 className="text-xl font-normal mb-6">{title}</h4>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  )
} 