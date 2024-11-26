import SkillsSection from '@/components/skills/SkillsSection'
import { getAllCategories } from '@/services/skills'

export const metadata = {
  title: 'Skills 🎨 ⛸️🏓 - Gautam Jain',
  description: 'Overview of technical skills and expertise'
}

export default function SkillsPage() {
  const categories = getAllCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-normal mb-4">Skills</h1>
      <p className="text-gray-500 text-lg mb-8">
        Tools & Tech Stack I have worked with in the past.
      </p>
      {categories.map(category => (
        <SkillsSection key={category} category={category} />
      ))}
    </div>
  )
} 