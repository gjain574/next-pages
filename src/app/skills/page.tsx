import SkillsSection from '@/components/skills/SkillsSection'
import { getAllCategories } from '@/services/skills'

export const metadata = {
  title: 'Skills 🎨 ⛸️🏓 - Gautam Jain',
  description: 'Overview of technical skills and expertise'
}

export default function SkillsPage() {
  const categories = getAllCategories()

  return (
    <main className="max-w-4xl px-4 sm:px-6 py-8 sm:py-16 antialiased min-h-screen">
        <nav className="flex items-center space-x-2 mb-6 sm:mb-8 text-xs sm:text-sm sticky top-0 backdrop-blur-sm py-4 z-10">
            <a href="/" className="bg-gray-dark px-2 py-1 rounded-lg text-gray-light truncate max-w-[120px] sm:max-w-[200px] inline-block font-semibold">
            Home
            </a>
            <span className="text-gray-darker">/</span>
            <span className="text-gray-darker truncate max-w-[120px] sm:max-w-[200px] inline-block">🖋 &nbsp;Skills</span>
        </nav>

        <h1 className="text-2xl sm:text-title font-semibold tracking-tight text-gray-darker mb-8">
            Skills
        </h1>
        <div className="prose prose-sm sm:prose-lg max-w-none mb-8 prose-p:text-gray-darker prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-body">
            <p>
                Tools & Tech Stack I have worked with in the past.
            </p>
        </div>
        <div className="prose max-w-none pb-8">
            {categories.map(category => (
                <SkillsSection key={category} category={category} />
            ))}
        </div>
    </main>
  )
} 