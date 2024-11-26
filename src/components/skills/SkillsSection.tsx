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
      <h3 className="text-medium md:text-body font-medium text-gray-700 mb-1 md:mb-2 hover:bg-gray-100 inline-block py-1 transition-colors cursor-default">
        {title}
      </h3>
      <section className="mb-2 md:mb-4 rounded-lg px-0 py-1 md:p-2 max-w-2xl">
        <div className="flex flex-row flex-wrap gap-4">
        {skills.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
        </div>
      </section>
    </>
  )
} 