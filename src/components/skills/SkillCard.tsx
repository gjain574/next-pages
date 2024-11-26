import type { Skill } from '@/types/skills'
import Image from 'next/image';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
    return (
      <div className="h-28 w-28 flex flex-col justify-around rounded-lg bg-gradient-to-br from-gray-50 to-white p-4 
        border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1">
        <Image 
          className="mx-auto h-8 w-auto object-contain" 
          src={skill.image} 
          alt={skill.name}
          width={32}
          height={32}
        />
        <span className="text-center text-sm text-gray-600 font-medium capitalize leading-tight">
          {skill.name}
        </span>
      </div>
    )
}