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
    <>
      <h3 className="text-body font-medium text-gray-700 mb-2 hover:bg-gray-100 inline-block py-1 transition-colors cursor-default">
        {title}
      </h3>
      <section className="mb-4 bg-white rounded-lg shadow-md p-2 max-w-2xl">
        <div className="flex flex-row space-x-2 overflow-x-auto px-3">
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
        </div>
      </section>
    </>
  )
} 