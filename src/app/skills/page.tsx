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
      <h1 className="text-4xl font-bold mb-12">Skills 🎨 ⛸️🏓</h1>
      
      {categories.map(category => (
        <SkillsSection key={category} category={category} />
      ))}
    </div>
  )
} 